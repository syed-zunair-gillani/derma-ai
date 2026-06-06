'use client'

import React, { useState } from "react";
import Sidebar from "@/src/components/scan/Sidebar";
import DetectionResult from "@/src/components/scan/DetectionResult";
import BentoGrid from "@/src/components/scan/BentoGrid";
import ProductsSection from "@/src/components/scan/ProductsSection";
import SkinAnalysisUpload from "@/src/components/scan/SkinAnalysisUpload";
import SkinAnalysisHeader from "@/src/components/scan/SkinAnalysisHeader";
import { type ScanResponse } from "@/src/services/scans";

export default function DermAIHistoryPage() {
    const [isNewScan, setIsNewScan] = useState(true);
    const [isAuthenticated, setIsAuthanticated] = useState(true);
    const [haveResult, setHaveResult] = useState(false);
    const [scanData, setScanData] = useState<ScanResponse | null>(null);

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            <div className="flex mx-auto min-h-screen">
                {
                    isAuthenticated && <Sidebar
                        onNewScanClick={() => {
                            setIsNewScan(true);
                            setHaveResult(false);
                            setScanData(null);
                        }}
                        onHistoryClick={() => setIsNewScan(false)}
                    />
                }

                {/* Main Content */}
                <main className="flex-1 px-2 lg:px-6 pt-24 pb-12 w-full">
                    {isNewScan && !haveResult ? (
                        <div className="space-y-8 lg:mt-2 max-w-7xl mx-auto">
                            {
                                !isAuthenticated && <SkinAnalysisHeader />
                            }
                            <SkinAnalysisUpload onAnalysisComplete={(data) => {
                                setScanData(data);
                                setHaveResult(true);
                            }} />
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