'use client'

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/src/components/scan/Sidebar";
import DetectionResult from "@/src/components/scan/DetectionResult";
import BentoGrid from "@/src/components/scan/BentoGrid";
import ProductsSection from "@/src/components/scan/ProductsSection";
import SkinAnalysisUpload from "@/src/components/scan/SkinAnalysisUpload";
import SkinAnalysisHeader from "@/src/components/scan/SkinAnalysisHeader";
import { type ScanListItem, type ScanResponse } from "@/src/services/scans";

function getToken(): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/(?:^|;\s*)token=([^;]*)/);
    return match ? match[1] : localStorage.getItem("token");
}

function toScanListItem(data: ScanResponse): ScanListItem {
    return {
        scan_id: data.scan_id,
        image_url: data.image_url,
        primary_detection: data.primary_detection,
    };
}

export default function DermAIHistoryPage() {
    const router = useRouter();
    const [isNewScan, setIsNewScan] = useState(true);
    const [isAuthenticated, setIsAuthanticated] = useState(false);
    const [haveResult, setHaveResult] = useState(false);
    const [scanData, setScanData] = useState<ScanResponse | null>(null);
    const [extraScans, setExtraScans] = useState<ScanListItem[]>([]);

    useEffect(() => {
        setIsAuthanticated(!!getToken());
    }, []);

    const handleNewScan = useCallback(() => {
        setIsNewScan(true);
        setHaveResult(false);
        setScanData(null);
    }, []);

    const handleAnalysisComplete = useCallback((data: ScanResponse) => {
        setScanData(data);
        setHaveResult(true);
        setExtraScans((prev) => [toScanListItem(data), ...prev]);
    }, []);

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            <div className="flex mx-auto min-h-screen">
                {
                    isAuthenticated && <Sidebar
                        extraScans={extraScans}
                        activeScanId={scanData?.scan_id ?? null}
                        onNewScanClick={handleNewScan}
                        onHistoryClick={(id) => router.push(`/scan/${id}`)}
                    />
                }

                {/* Main Content */}
                <main className="flex-1 px-2 lg:px-6 pt-24 pb-12 w-full">
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
                </main>
            </div>
        </div>
    );
}