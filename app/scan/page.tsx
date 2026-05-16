import React from "react";
import Sidebar from "@/src/components/scan/Sidebar";
import DetectionResult from "@/src/components/scan/DetectionResult";
import BentoGrid from "@/src/components/scan/BentoGrid";
import ProductsSection from "@/src/components/scan/ProductsSection";

export default function DermAIHistoryPage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            <div className="flex mx-auto min-h-screen">
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 px-6 pt-24 pb-12 w-full">
                    <div className="space-y-12">
                        <DetectionResult />
                        <BentoGrid />
                        <ProductsSection />
                    </div>
                </main>
            </div>
        </div>
    );
}