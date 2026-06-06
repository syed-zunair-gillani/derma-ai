import React, { useRef } from "react";

interface UploadDropzoneProps {
  onUpload: (images: string[], files: File[]) => void;
  fullWidth?: boolean;
}

export default function UploadDropzone({ onUpload, fullWidth }: UploadDropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const blobUrls = files.map((file) => URL.createObjectURL(file));
      onUpload(blobUrls, files);
    }
  };

  return (
    <div className={`${fullWidth ? 'lg:col-span-12 max-w-4xl mx-auto w-full' : 'lg:col-span-7'} flex flex-col gap-5 transition-all duration-500`}>
      {/* Upload Box */}
      <div 
        className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-slate-300 p-12 flex flex-col items-center justify-center min-h-[300px] text-center hover:border-indigo-600 transition-colors cursor-pointer group"
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          multiple 
          accept="image/jpeg, image/png" 
          onChange={handleFileChange}
        />
        <div className="bg-slate-100 p-4 pb-2.5 rounded-full mb-5 group-hover:scale-110 transition-transform">
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
