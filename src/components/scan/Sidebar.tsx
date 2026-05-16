'use client'

import React from "react";
import { useSidebar } from "@/src/context/SidebarContext";

const historyItems = [
    {
        title: "Seborrheic Keratosis",
        date: "Today, 10:24 AM",
        active: true,
    },
    {
        title: "Actinic Keratosis",
        date: "Nov 12, 2023",
    },
    {
        title: "Common Nevus",
        date: "Oct 28, 2023",
    },
    {
        title: "Basal Cell Carcinoma",
        date: "Oct 15, 2023",
    },
];

const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1DYnBxcNlQJsJFg76E7bXFfvuqNBi4ea8JSXqh8sA754d5xHNoakhpP49C8Bdkue22xgSQ5Mi1W1nN2O8tZ3Ci13zh9CcOsxth4zu5WxScNQ3Mls9cJnPvdmKCuxMImfiH7WNholjqEt_uLuadBsmVkJnqlOpRLXaDdCQnqesB5KKOIvHtZxJwdhdiyrW0nST4LjtGwv-xK1MaMhDpkZL47SRaGrKsH_qDa8bfmXH2jiwA1eEq4SLkMm0txvcuuVjK9lJ0R2M7pc";

interface SidebarProps {
    onNewScanClick?: () => void;
    onHistoryClick?: (index: number) => void;
}

export default function Sidebar({ onNewScanClick, onHistoryClick }: SidebarProps) {
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <>
            <aside 
                className={`hidden lg:flex flex-col bg-white sticky top-[69px] h-screen overflow-hidden transition-[width,opacity] duration-300 ease-in-out border-slate-200 ${
                    isOpen ? 'w-80 border-r opacity-100' : 'w-0 border-r-0 opacity-0'
                }`}
                style={{ height: "calc(100vh - 69px)" }}
            >
                <div className="w-80 flex flex-col h-full">
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
                        {historyItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => onHistoryClick && onHistoryClick(index)}
                                className={`p-3 py-2 rounded-xl border cursor-pointer transition-all ${item.active
                                    ? "bg-indigo-50 border-indigo-200"
                                    : "hover:bg-slate-50 border-transparent hover:border-slate-200"
                                    }`}
                            >
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                                        <img
                                            src={imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center min-w-0">
                                        <span
                                            className={`text-sm truncate ${item.active
                                                ? "text-indigo-700 font-bold"
                                                : "text-slate-700 font-medium"
                                                }`}
                                        >
                                            {item.title}
                                        </span>

                                        <span className="text-slate-400 text-[11px]">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
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
