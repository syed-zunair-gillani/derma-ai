'use client'

import React, { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Toaster, toast } from "sonner";
import Sidebar from "@/src/components/scan/Sidebar";
import { ScanLayoutProvider, useScanLayout } from "@/src/context/ScanLayoutContext";
import { getScans, deleteScan, renameScan, type ScanListItem } from "@/src/services/scans";

function getToken(): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/(?:^|;\s*)token=([^;]*)/);
    return match ? match[1] : localStorage.getItem("token");
}

function ScanSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const { extraScans, setNewScanSignal, removeExtraScan, customNames, setCustomName } = useScanLayout();
    const [scans, setScans] = useState<ScanListItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getScans()
            .then((data) => setScans(Array.isArray(data) ? data : []))
            .catch(() => setScans([]))
            .finally(() => setLoading(false));
    }, []);

    const activeScanId = pathname.startsWith("/scan/") ? pathname.split("/scan/")[1] : null;

    const handleNewScan = useCallback(() => {
        if (pathname === "/scan") {
            setNewScanSignal((s) => s + 1);
        } else {
            router.push("/scan");
        }
    }, [pathname, router, setNewScanSignal]);

    const handleRenameScan = useCallback(async (scanId: string, title: string) => {
        try {
            await renameScan(scanId, title);
            setCustomName(scanId, title);
            toast.success("Scan renamed successfully.");
        } catch {
            toast.error("Failed to rename scan. Please try again.");
        }
    }, [setCustomName]);

    const handleDeleteScan = useCallback(async (scanId: string) => {
        try {
            await deleteScan(scanId);
            setScans((prev) => prev.filter((s) => s.scan_id !== scanId));
            removeExtraScan(scanId);
            toast.success("Scan deleted successfully.");
        } catch {
            toast.error("Failed to delete scan. Please try again.");
        }
    }, [removeExtraScan]);

    return (
        <Sidebar
            scans={scans}
            extraScans={extraScans}
            loading={loading}
            activeScanId={activeScanId}
            onNewScanClick={handleNewScan}
            onHistoryClick={(id) => router.push(`/scan/${id}`)}
            onRenameScan={handleRenameScan}
            onDeleteScan={handleDeleteScan}
            customNames={customNames}
        />
    );
}

export default function ScanLayout({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(!!getToken());
    }, []);

    return (
        <ScanLayoutProvider>
            <Toaster richColors position="top-center" />
            <div className="bg-slate-50 text-slate-900 min-h-screen">
                <div className="flex mx-auto min-h-screen">
                    {isAuthenticated && <ScanSidebar />}
                    <main className="flex-1 px-2 lg:px-6 pt-24 pb-12 w-full">
                        {children}
                    </main>
                </div>
            </div>
        </ScanLayoutProvider>
    );
}
