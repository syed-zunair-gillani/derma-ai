'use client'

import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DetectionResult from "@/src/components/scan/DetectionResult";
import ProductsSection from "@/src/components/scan/ProductsSection";
import { getScan, type ScanResponse } from "@/src/services/scans";

export default function ScanDetailPage({
    params,
}: {
    params: Promise<{ scan_id: string }>;
}) {
    const { scan_id } = use(params);
    const router = useRouter();
    const [scanData, setScanData] = useState<ScanResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        getScan(scan_id)
            .then((data) => {
                if (!cancelled) {
                    setScanData(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err?.message || "Failed to load scan");
                    setLoading(false);
                }
            });

        return () => { cancelled = true; };
    }, [scan_id]);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <span className="material-symbols-outlined animate-spin text-slate-400 text-4xl">sync</span>
                </div>
            ) : error ? (
                <div className="text-center py-20">
                    <p className="text-red-600 text-lg font-medium">{error}</p>
                    <button
                        onClick={() => router.push("/scan")}
                        className="mt-4 text-indigo-600 hover:underline text-sm"
                    >
                        Back to Scan
                    </button>
                </div>
            ) : scanData ? (
                <>
                    <DetectionResult data={scanData} />
                    <ProductsSection />
                </>
            ) : null}
        </>
    );
}
