'use client'

import React, { useState } from "react";
import UploadDropzone from "./UploadDropzone";
import ImagePreviewSection from "./ImagePreviewSection";

export default function SkinAnalysisUpload() {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = (newImages: string[]) => {
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleClearAll = () => {
    setImages([]);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        <UploadDropzone onUpload={handleUpload} fullWidth={images.length === 0} />
        {images.length > 0 && (
          <ImagePreviewSection images={images} onClearAll={handleClearAll} />
        )}
      </div>
    </main>
  );
}

