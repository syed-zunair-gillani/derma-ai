import React from "react";

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

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col w-80 border-r border-slate-200 bg-white sticky top-0 h-screen overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/30">
                <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest flex items-center gap-2">
                    Previous History
                </h3>
            </div>

            <div className="overflow-y-auto flex-1 p-4 space-y-1">
                {historyItems.map((item, index) => (
                    <div
                        key={index}
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
                <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <span>+ New Scan</span>
                </button>
            </div>
        </aside>
    );
}
