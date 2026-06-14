'use client'

import React, { useCallback, useEffect, useState } from "react";
import DetectionResult from "@/src/components/scan/DetectionResult";
import ProductsSection from "@/src/components/scan/ProductsSection";
import SkinAnalysisUpload from "@/src/components/scan/SkinAnalysisUpload";
import SkinAnalysisHeader from "@/src/components/scan/SkinAnalysisHeader";
import { type ScanResponse } from "@/src/services/scans";
import { useScanLayout } from "@/src/context/ScanLayoutContext";

function getToken(): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/(?:^|;\s*)token=([^;]*)/);
    return match ? match[1] : localStorage.getItem("token");
}

export default function DermAIHistoryPage() {
    const { addExtraScan, newScanSignal } = useScanLayout();
    const [isNewScan, setIsNewScan] = useState(true);
    const [isAuthenticated, setIsAuthanticated] = useState(false);
    const [haveResult, setHaveResult] = useState(false);
    const [scanData, setScanData] = useState<ScanResponse | null>(null);

    useEffect(() => {
        setIsAuthanticated(!!getToken());
    }, []);

    useEffect(() => {
        setIsNewScan(true);
        setHaveResult(false);
        setScanData(null);
    }, [newScanSignal]);

    const handleAnalysisComplete = useCallback((data: ScanResponse) => {
        setScanData(data);
        setHaveResult(true);
        addExtraScan(data);
    }, [addExtraScan]);

    return (
        <>
            {isNewScan && !haveResult ? (
                <div className="space-y-8 lg:mt-2 max-w-7xl mx-auto">
                    {
                        !isAuthenticated && <SkinAnalysisHeader />
                    }
                    <SkinAnalysisUpload onAnalysisComplete={handleAnalysisComplete} />
                </div>
            ) : (
                <div className="space-y-12  max-w-7xl mx-auto">
                    {scanData && <DetectionResult data={scanData} />}
                    <ProductsSection />
                </div>
            )}
        </>
    );
}
