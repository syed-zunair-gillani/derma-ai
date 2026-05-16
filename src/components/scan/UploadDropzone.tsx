import React from "react";

export default function UploadDropzone() {
  return (
    <div className="lg:col-span-7 flex flex-col gap-6">
      {/* Upload Box */}
      <div className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-slate-300 p-12 flex flex-col items-center justify-center min-h-[400px] text-center hover:border-indigo-600 transition-colors cursor-pointer group">
        <div className="bg-slate-100 p-4 rounded-full mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-indigo-700 text-5xl">
            cloud_upload
          </span>
        </div>

        <h3 className="text-2xl font-bold text-indigo-900 mb-2">
          Drag and drop images
        </h3>

        <p className="text-slate-500 mb-8">
          Support for multiple high-resolution JPG, PNG
          <br />
          (Max 10MB each)
        </p>

        <button className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-indigo-200 transition-all">
          <span className="material-symbols-outlined">image</span>
          Browse Files
        </button>
      </div>

      {/* Privacy */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
        <span className="material-symbols-outlined text-indigo-700">
          verified_user
        </span>

        <div>
          <p className="font-semibold text-slate-900 mb-1">
            Your data stays private & secure
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Images are encrypted end-to-end and not stored without your
            explicit consent. Our AI follows strict HIPAA compliance
            protocols for clinical data handling.
          </p>
        </div>
      </div>
    </div>
  );
}
