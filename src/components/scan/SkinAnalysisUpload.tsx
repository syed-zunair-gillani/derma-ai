import React from "react";
import SkinAnalysisHeader from "./SkinAnalysisHeader";
import UploadDropzone from "./UploadDropzone";
import ImagePreviewSection from "./ImagePreviewSection";

export default function SkinAnalysisUpload() {
  return (
    <div className="">
      <main className="flex flex-col items-center">
        <SkinAnalysisHeader />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          <UploadDropzone />
          <ImagePreviewSection />
        </div>
      </main>
    </div>
  );
}

