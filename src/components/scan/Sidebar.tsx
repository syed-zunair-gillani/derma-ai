'use client'

import React, { useEffect, useState } from "react";
import { useSidebar } from "@/src/context/SidebarContext";
import { getScans, type ScanListItem } from "@/src/services/scans";
import Image from "next/image";

interface SidebarProps {
    extraScans?: ScanListItem[];
    onNewScanClick?: () => void;
    onHistoryClick?: (scanId: string) => void;
    activeScanId?: string | null
}

export default function Sidebar({ extraScans = [], onNewScanClick, onHistoryClick, activeScanId = null }: SidebarProps) {
    const { isOpen, setIsOpen } = useSidebar();
    const [scans, setScans] = useState<ScanListItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const fetchScans = async () => {
            setLoading(true);
            try {
                const data = await getScans();
                setScans(Array.isArray(data) ? data : []);
            } catch {
                setScans([]);
            } finally {
                setLoading(false);
            }
        };

        fetchScans();
    }, [isOpen]);

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60]"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside 
                className={`fixed lg:sticky top-0 lg:top-[69px] left-0 z-[70] lg:z-40 h-screen lg:h-[calc(100vh-69px)] bg-white border-slate-200 transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${
                    isOpen 
                    ? 'w-full sm:w-80 border-r translate-x-0 opacity-100' 
                    : 'w-0 -translate-x-full border-r-0 opacity-0'
                }`}
            >
                <div className="w-full sm:w-80 flex flex-col h-full">
                    <div className="p-6 py-3 border-b border-slate-100 bg-slate-50/30 flex justify-between items-center">
                        <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest flex items-center gap-2">
                            Previous History
                        </h3>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="text-slate-400 hover:text-indigo-600 transition-colors p-1 rounded-md hover:bg-slate-200/50 flex items-center justify-center"
                            title="Close Sidebar"
                        >
                            <span className="material-symbols-outlined text-xl">keyboard_double_arrow_left</span>
                        </button>
                    </div>

                    <div className="overflow-y-auto flex-1 p-4 space-y-1">
                        {loading ? (
                            <div className="flex items-center justify-center py-8">
                                <span className="material-symbols-outlined animate-spin text-slate-400">sync</span>
                            </div>
                        ) : extraScans.length === 0 && scans.length === 0 ? (
                            <p className="text-sm text-slate-400 text-center py-8">No scans yet</p>
                        ) : (
                            [...extraScans, ...scans].map((scan) => (
                                <div
                                    key={scan.scan_id}
                                    onClick={() => onHistoryClick && onHistoryClick(scan.scan_id)}
                                    className={`p-3 py-2 rounded-xl border cursor-pointer transition-all hover:bg-slate-50 hover:border-slate-200 ${
                                        activeScanId === scan.scan_id
                                            ? "border-indigo-100 bg-indigo-50/60"
                                            : "border-transparent"
                                    }`}
                                >
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                                            <img
                                                src={scan?.image_url}
                                                alt={scan.primary_detection.disease}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center min-w-0">
                                            <span className="text-sm truncate text-slate-700 font-medium">
                                                {scan.primary_detection.disease.replace(/_/g, " ")}
                                            </span>

                                            <span className="text-slate-400 text-[11px]">
                                                {scan.primary_detection.severity} &middot; {scan.primary_detection.confidence.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-4 border-t border-slate-100 bg-white mt-auto">
                        <button 
                            onClick={onNewScanClick}
                            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                            <span>+ New Scan</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* The sidebar is now toggled via the button in the Header */}
        </>
    );
}
