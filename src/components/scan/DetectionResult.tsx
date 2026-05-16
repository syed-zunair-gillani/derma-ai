import React from "react";

const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1DYnBxcNlQJsJFg76E7bXFfvuqNBi4ea8JSXqh8sA754d5xHNoakhpP49C8Bdkue22xgSQ5Mi1W1nN2O8tZ3Ci13zh9CcOsxth4zu5WxScNQ3Mls9cJnPvdmKCuxMImfiH7WNholjqEt_uLuadBsmVkJnqlOpRLXaDdCQnqesB5KKOIvHtZxJwdhdiyrW0nST4LjtGwv-xK1MaMhDpkZL47SRaGrKsH_qDa8bfmXH2jiwA1eEq4SLkMm0txvcuuVjK9lJ0R2M7pc";

export default function DetectionResult() {
    return (
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-100">
                        <img
                            src={imageUrl}
                            alt="Skin Disease"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-4 left-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                                AI ANALYZED
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-indigo-700 text-sm font-semibold uppercase tracking-widest">
                            Detection Result
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold text-indigo-900 mb-2">
                        Seborrheic Keratosis
                    </h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-indigo-700">
                                94%
                            </span>

                            <span className="text-slate-500 text-xs">
                                Confidence Score
                            </span>
                        </div>

                        <div className="h-10 w-px bg-slate-200"></div>

                        <p className="text-slate-600 max-w-sm">
                            Common noncancerous skin growth. People tend to get more
                            of them as they get older. Usually brown, black or light
                            tan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
