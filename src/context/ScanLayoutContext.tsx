'use client'

import React, { createContext, useContext, useCallback, useState } from "react";
import type { ScanListItem, ScanResponse } from "@/src/services/scans";

function toScanListItem(data: ScanResponse): ScanListItem {
    return {
        scan_id: data.scan_id,
        image_url: data.image_url,
        primary_detection: data.primary_detection,
    };
}

interface ScanLayoutContextType {
    extraScans: ScanListItem[];
    addExtraScan: (data: ScanResponse) => void;
    removeExtraScan: (scanId: string) => void;
    newScanSignal: number;
    setNewScanSignal: React.Dispatch<React.SetStateAction<number>>;
    customNames: Record<string, string>;
    setCustomName: (scanId: string, name: string) => void;
}

const ScanLayoutContext = createContext<ScanLayoutContextType | undefined>(undefined);

export function useScanLayout() {
    const context = useContext(ScanLayoutContext);
    if (context === undefined) {
        throw new Error("useScanLayout must be used within a ScanLayoutProvider");
    }
    return context;
}

export function ScanLayoutProvider({ children }: { children: React.ReactNode }) {
    const [extraScans, setExtraScans] = useState<ScanListItem[]>([]);
    const [newScanSignal, setNewScanSignal] = useState(0);
    const [customNames, setCustomNames] = useState<Record<string, string>>({});

    const addExtraScan = useCallback((data: ScanResponse) => {
        setExtraScans((prev) => [toScanListItem(data), ...prev]);
    }, []);

    const removeExtraScan = useCallback((scanId: string) => {
        setExtraScans((prev) => prev.filter((s) => s.scan_id !== scanId));
    }, []);

    const setCustomName = useCallback((scanId: string, name: string) => {
        setCustomNames((prev) => ({ ...prev, [scanId]: name }));
    }, []);

    return (
        <ScanLayoutContext.Provider value={{ extraScans, addExtraScan, removeExtraScan, newScanSignal, setNewScanSignal, customNames, setCustomName }}>
            {children}
        </ScanLayoutContext.Provider>
    );
}
