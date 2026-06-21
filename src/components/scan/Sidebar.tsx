'use client'

import React, { useState, useEffect, useRef } from "react";
import { useSidebar } from "@/src/context/SidebarContext";
import type { ScanListItem } from "@/src/services/scans";

interface SidebarProps {
    extraScans?: ScanListItem[];
    scans: ScanListItem[];
    loading: boolean;
    onNewScanClick?: () => void;
    onHistoryClick?: (scanId: string) => void;
    onRenameScan?: (scanId: string, title: string) => void;
    onDeleteScan?: (scanId: string) => void;
    customNames?: Record<string, string>;
    activeScanId?: string | null
}

export default function Sidebar({ extraScans = [], scans, loading, onNewScanClick, onHistoryClick, onRenameScan, onDeleteScan, customNames = {}, activeScanId = null }: SidebarProps) {
    const { isOpen, setIsOpen } = useSidebar();
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const [editingScanId, setEditingScanId] = useState<string | null>(null);
    const [editingValue, setEditingValue] = useState("");
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!openDropdownId) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdownId(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDropdownId]);

    useEffect(() => {
        if (editingScanId && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editingScanId]);

    const handleStartRename = (scan: ScanListItem) => {
        const currentName = customNames[scan.scan_id] || scan.primary_detection.disease.replace(/_/g, " ");
        setEditingValue(currentName);
        setEditingScanId(scan.scan_id);
        setOpenDropdownId(null);
    };

    const handleSaveRename = (scanId: string) => {
        if (editingValue.trim() && editingValue.trim() !== (customNames[scanId] || '')) {
            onRenameScan?.(scanId, editingValue.trim());
        }
        setEditingScanId(null);
        setEditingValue("");
    };

    const handleCancelRename = () => {
        setEditingScanId(null);
        setEditingValue("");
    };

    const handleKeyDown = (e: React.KeyboardEvent, scanId: string) => {
        if (e.key === "Enter") {
            handleSaveRename(scanId);
        } else if (e.key === "Escape") {
            handleCancelRename();
        }
    };

    return (
        <>
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
                            [...extraScans, ...scans].map((scan) => {
                                const displayName = customNames[scan.scan_id] || scan.primary_detection.disease.replace(/_/g, " ");
                                const isEditing = editingScanId === scan.scan_id;
                                return (
                                    <div
                                        key={scan.scan_id}
                                        className={`group relative p-3 py-2 rounded-xl border cursor-pointer transition-all hover:bg-slate-50 hover:border-slate-200 ${
                                            activeScanId === scan.scan_id
                                                ? "border-indigo-100 bg-indigo-50/60"
                                                : "border-transparent"
                                        }`}
                                    >
                                        <div
                                            onClick={() => !isEditing && onHistoryClick?.(scan.scan_id)}
                                        >
                                            <div className="flex gap-3">
                                                <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={scan?.image_url}
                                                        alt={scan.primary_detection.disease}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="flex flex-col justify-center min-w-0 flex-1">
                                                    {isEditing ? (
                                                        <input
                                                            ref={inputRef}
                                                            type="text"
                                                            value={editingValue}
                                                            onChange={(e) => setEditingValue(e.target.value)}
                                                            onBlur={() => handleSaveRename(scan.scan_id)}
                                                            onKeyDown={(e) => handleKeyDown(e, scan.scan_id)}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-full text-sm font-medium text-slate-700 bg-white border border-indigo-300 rounded-md px-1.5 py-0.5 outline-none focus:ring-2 focus:ring-indigo-400"
                                                        />
                                                    ) : (
                                                        <span className="text-sm truncate text-slate-700 font-medium">
                                                            {displayName}
                                                        </span>
                                                    )}

                                                    <span className="text-slate-400 text-[11px]">
                                                        {scan.primary_detection.severity} &middot; {scan.primary_detection.confidence.toFixed(1)}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {!isEditing && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenDropdownId(openDropdownId === scan.scan_id ? null : scan.scan_id);
                                                }}
                                                className="absolute top-1.5 right-1.5 p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 opacity-0 group-hover:opacity-100 transition-all"
                                                title="More options"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">more_vert</span>
                                            </button>
                                        )}

                                        {openDropdownId === scan.scan_id && !isEditing && (
                                            <div
                                                ref={dropdownRef}
                                                className="absolute right-2 top-9 z-50 bg-white rounded-lg shadow-lg border border-slate-200 py-1 min-w-[140px]"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <button
                                                    onClick={() => handleStartRename(scan)}
                                                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                    Rename
                                                </button>
                                                <button
                                                    onClick={() => { setDeleteConfirmId(scan.scan_id); setOpenDropdownId(null); }}
                                                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
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

            {deleteConfirmId && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    onClick={() => setDeleteConfirmId(null)}
                >
                    <div 
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in fade-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-red-600 text-2xl">delete</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Delete Scan</h3>
                            <p className="text-sm text-slate-500 mb-6">
                                Are you sure you want to delete this scan? This action cannot be undone.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setDeleteConfirmId(null)}
                                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => { onDeleteScan?.(deleteConfirmId); setDeleteConfirmId(null); }}
                                    className="flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
