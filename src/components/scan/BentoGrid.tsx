import React from "react";

export default function BentoGrid() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4">
                <h2 className="text-2xl font-bold text-indigo-900">
                    Steps to overcome
                </h2>

                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <span className="text-indigo-700 font-bold">01.</span>

                        <p className="text-slate-600">
                            Monitor for any sudden changes in size, shape, or color of
                            the lesion.
                        </p>
                    </li>

                    <li className="flex gap-3">
                        <span className="text-indigo-700 font-bold">02.</span>

                        <p className="text-slate-600">
                            Avoid picking or scratching the area to prevent irritation
                            or secondary infection.
                        </p>
                    </li>

                    <li className="flex gap-3">
                        <span className="text-indigo-700 font-bold">03.</span>

                        <p className="text-slate-600">
                            Consult a board-certified dermatologist for a definitive
                            physical examination.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Routine */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4">
                <h2 className="text-2xl font-bold text-emerald-800">
                    Skincare routine
                </h2>

                <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Morning
                        </span>

                        <p className="text-slate-900 font-medium">
                            Gentle pH-balanced cleanser & SPF 50+
                        </p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Evening
                        </span>

                        <p className="text-slate-900 font-medium">
                            Mild exfoliating wash with Urea (5-10%)
                        </p>
                    </div>
                </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Do&apos;s and Don&apos;ts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="text-green-700 font-bold">
                            Recommended
                        </h4>

                        <ul className="space-y-2 text-slate-600 list-disc list-inside">
                            <li>Keep the area moisturized</li>
                            <li>Apply broad-spectrum sunscreen</li>
                            <li>Wear loose-fitting clothing over it</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-red-600 font-bold">Avoid</h4>

                        <ul className="space-y-2 text-slate-600 list-disc list-inside">
                            <li>Trying to remove it at home</li>
                            <li>Using harsh chemical peels</li>
                            <li>Excessive tanning or sun exposure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
