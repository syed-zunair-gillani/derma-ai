'use client'

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1DYnBxcNlQJsJFg76E7bXFfvuqNBi4ea8JSXqh8sA754d5xHNoakhpP49C8Bdkue22xgSQ5Mi1W1nN2O8tZ3Ci13zh9CcOsxth4zu5WxScNQ3Mls9cJnPvdmKCuxMImfiH7WNholjqEt_uLuadBsmVkJnqlOpRLXaDdCQnqesB5KKOIvHtZxJwdhdiyrW0nST4LjtGwv-xK1MaMhDpkZL47SRaGrKsH_qDa8bfmXH2jiwA1eEq4SLkMm0txvcuuVjK9lJ0R2M7pc";

function SkinConditionCard() {
    return (
        <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 h-full print:shadow-none">
            <div className="flex flex-col md:flex-row print:flex-row gap-6 items-stretch h-full">
                {/* Image Section */}
                <div className="w-full md:w-[35%] print:w-[35%] flex-shrink-0">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-square print:aspect-square h-full w-full">
                        <img
                            src={imageUrl}
                            alt="Skin Area"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[65%] print:w-[65%] flex flex-col justify-between py-1">
                    <div>
                        {/* Header Row */}
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h2 className="text-[26px] font-medium text-slate-800">
                                        Hormonal Acne
                                    </h2>
                                    <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase">
                                        Mild
                                    </span>
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Detected in T-Zone and lower jawline
                                </p>
                            </div>

                            <div className="text-right">
                                <div className="text-3xl font-bold text-[#0f766e]">
                                    94%
                                </div>
                                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                                    Confidence
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 rounded-full h-2 mb-5 overflow-hidden flex print:bg-slate-200">
                            <div className="bg-[#0f766e] h-2 rounded-full" style={{ width: "94%" }}></div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-500 text-[15px] leading-relaxed mb-6 pr-4">
                            A common condition characterized by blackheads, whiteheads,
                            and inflamed spots. Typically caused by fluctuations in oil
                            production and bacterial activity.
                        </p>
                    </div>

                    {/* Bottom Cards */}
                    <div className="flex gap-4 w-full print:flex-row">
                        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                Primary Causes
                            </h4>
                            <p className="text-sm font-semibold text-slate-700">
                                Excess Sebum, Hormones
                            </p>
                        </div>
                        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                Next Action
                            </h4>
                            <p className="text-sm font-semibold text-slate-700">
                                Topical Treatment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LifestyleBalanceCard() {
    return (
        <div className="bg-[#0047cc] rounded-xl p-6 text-white h-full flex flex-col justify-between shadow-sm">
            <div>
                <h3 className="text-[17px] font-medium mb-6">Lifestyle Balance</h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-2xl opacity-90 mt-0.5">water_drop</span>
                        <div>
                            <h4 className="font-semibold text-[15px] mb-0.5">Hydration Target</h4>
                            <p className="text-blue-200 text-sm">Drink 2.5L daily to support barrier</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-2xl opacity-90 mt-0.5">dark_mode</span>
                        <div>
                            <h4 className="font-semibold text-[15px] mb-0.5">Sleep Quality</h4>
                            <p className="text-blue-200 text-sm">Aim for 8h of cell regeneration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-5 border-t border-blue-500/50">
                <p className="text-xs text-blue-200/90 italic leading-relaxed">
                    "Consistent habits are the foundation of dermatological success."
                </p>
            </div>
        </div>
    );
}

function RoutineCard({ type }: { type: 'morning' | 'night' }) {
    const isMorning = type === 'morning';
    const title = isMorning ? "MORNING ROUTINE" : "NIGHT ROUTINE";
    const icon = isMorning ? "light_mode" : "dark_mode";
    const steps = isMorning 
        ? ["Gentle Foaming Cleanser", "Vitamin C Antioxidant Serum", "SPF 50 Oil-Free Sunscreen"]
        : ["Double Cleanse (Oil + Water)", "2% Salicylic Acid Treatment", "Ceramide Rich Moisturizer"];

    return (
        <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 h-full print:shadow-none">
            <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-blue-600 text-[20px]">{icon}</span>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">{title}</h3>
            </div>

            <div className="space-y-4">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                        <span className="text-blue-600 font-bold text-sm">0{idx + 1}.</span>
                        <p className="text-slate-600 text-sm font-medium">{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CareChecklistCard() {
    return (
        <div className="bg-[#0f172a] rounded-xl p-6 h-full shadow-sm text-white">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                CARE CHECKLIST
            </h3>

            <div className="space-y-4">
                <div className="flex gap-3 items-center">
                    <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                    <p className="text-slate-200 text-sm font-medium">Change pillowcase weekly</p>
                </div>
                
                <div className="flex gap-3 items-center">
                    <span className="material-symbols-outlined text-[#059669] text-[18px]">check_circle</span>
                    <p className="text-slate-200 text-sm font-medium">Sanitize phone screen daily</p>
                </div>

                <div className="flex gap-3 items-center">
                    <span className="material-symbols-outlined text-red-500 text-[18px]">cancel</span>
                    <p className="text-slate-200 text-sm font-medium">Don't pick active lesions</p>
                </div>
            </div>
        </div>
    );
}

export default function DetectionResult() {
    const printRef = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = useReactToPrint({
        contentRef: printRef,
        documentTitle: "derma-ai-analysis-result",
        bodyClass: "bg-slate-50 p-8", // Adds background and padding to the printed document
    });

    return (
        <div className="flex flex-col gap-6 w-full">
            <style>
                {`
                    @media print {
                        body {
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                        }
                    }
                `}
            </style>

            {/* Action Bar */}
            <div className="flex flex-wrap justify-end items-center gap-3 w-full">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-indigo-600 font-bold text-sm rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                    Share with Doctor
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 font-bold text-sm rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">rate_review</span>
                    Write your review
                </button>
                <button 
                    onClick={() => handleDownloadPdf()}
                    className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Download PDF
                </button>
            </div>

            {/* Printable Content */}
            <div ref={printRef} className="flex flex-col gap-6 w-full p-2 sm:p-0">
                {/* Top Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 print:col-span-2">
                        <SkinConditionCard />
                    </div>
                    <div className="lg:col-span-1 print:col-span-1">
                        <LifestyleBalanceCard />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-6">
                    <RoutineCard type="morning" />
                    <RoutineCard type="night" />
                    <CareChecklistCard />
                </div>
            </div>
        </div>
    );
}
