'use client'

import React from "react";

const previewImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-BAmqGhIWoHXSGXsds1i0c9PJNH79BYPe5tPDsWHGtfnt6jg52RjFRpMwGYzfiSGvplJm7wCDGrgj78g7PMLnyFVrVkxcPmngR43L0cGv0UsSKfgTewZjufiMtNiCl3WnjunzjQpqcTQQpWxNxQD_8Yf7hSj2vbwDYeIiMTLhUrJH-DLZZCQaW7va6RTSBRhndl2kUkFthwR1UvTQL8oaqCDeirsdVRvspdhgNuc_PPLSHqXSvfaidU1bwWKLKuRtnfOohWZv7sg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-BAmqGhIWoHXSGXsds1i0c9PJNH79BYPe5tPDsWHGtfnt6jg52RjFRpMwGYzfiSGvplJm7wCDGrgj78g7PMLnyFVrVkxcPmngR43L0cGv0UsSKfgTewZjufiMtNiCl3WnjunzjQpqcTQQpWxNxQD_8Yf7hSj2vbwDYeIiMTLhUrJH-DLZZCQaW7va6RTSBRhndl2kUkFthwR1UvTQL8oaqCDeirsdVRvspdhgNuc_PPLSHqXSvfaidU1bwWKLKuRtnfOohWZv7sg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-BAmqGhIWoHXSGXsds1i0c9PJNH79BYPe5tPDsWHGtfnt6jg52RjFRpMwGYzfiSGvplJm7wCDGrgj78g7PMLnyFVrVkxcPmngR43L0cGv0UsSKfgTewZjufiMtNiCl3WnjunzjQpqcTQQpWxNxQD_8Yf7hSj2vbwDYeIiMTLhUrJH-DLZZCQaW7va6RTSBRhndl2kUkFthwR1UvTQL8oaqCDeirsdVRvspdhgNuc_PPLSHqXSvfaidU1bwWKLKuRtnfOohWZv7sg",
];

export default function ImagePreviewSection() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      {/* Preview Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 bg-slate-50/60">
          <div className="grid grid-cols-2 gap-4">
            {previewImages.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <img
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Scan Animation */}
                {index === 0 && (
                  <div className="absolute inset-0 bg-indigo-500/5">
                    <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent shadow-[0_0_15px_2px_rgba(67,56,202,0.5)] animate-[scan_3s_ease-in-out_infinite]" />
                  </div>
                )}
              </div>
            ))}

            {/* Add More */}
            <div className="aspect-square rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-white hover:border-indigo-600 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-slate-500 text-3xl">
                add
              </span>

              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Add More
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                Selection Preview
              </p>

              <p className="font-semibold text-slate-900">
                4 files selected
              </p>
            </div>

            <button className="text-slate-500 hover:text-red-500 transition-colors flex items-center gap-1">
              <span className="text-xs font-bold">Clear All</span>

              <span className="material-symbols-outlined text-lg">
                delete_sweep
              </span>
            </button>
          </div>

          <button className="w-full bg-indigo-900 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
            Analyze Now

            <span className="material-symbols-outlined">
              analytics
            </span>
          </button>
        </div>
      </div>

      {/* Tip Card */}
      <div className="bg-emerald-50 text-emerald-900 rounded-2xl p-5 flex items-start gap-3 border border-emerald-100">
        <span className="material-symbols-outlined">
          tips_and_updates
        </span>

        <p className="text-sm font-medium leading-relaxed">
          Tip: For best results, ensure the skin area is well-lit and the
          camera is held 10cm away from the subject.
        </p>
      </div>

      {/* Scan Animation Keyframes */}
      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
