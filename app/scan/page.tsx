'use client'

import React, { useState } from "react";
import Sidebar from "@/src/components/scan/Sidebar";
import DetectionResult from "@/src/components/scan/DetectionResult";
import BentoGrid from "@/src/components/scan/BentoGrid";
import ProductsSection from "@/src/components/scan/ProductsSection";
import SkinAnalysisUpload from "@/src/components/scan/SkinAnalysisUpload";
import SkinAnalysisHeader from "@/src/components/scan/SkinAnalysisHeader";

export default function DermAIHistoryPage() {
    const [isNewScan, setIsNewScan] = useState(false);

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            <div className="flex mx-auto min-h-screen">
                <Sidebar 
                    onNewScanClick={() => setIsNewScan(true)}
                    onHistoryClick={() => setIsNewScan(false)}
                />

                {/* Main Content */}
                <main className="flex-1 px-6 pt-24 pb-12 w-full">
                    {isNewScan ? (
                        <div className="space-y-8 lg:mt-2">
                            <SkinAnalysisUpload />
                        </div>
                    ) : (
                        <div className="space-y-12">
                            <DetectionResult />
                            <BentoGrid />
                            <ProductsSection />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}