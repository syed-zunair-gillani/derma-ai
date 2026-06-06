'use client'

import React, { useState } from "react";
import UploadDropzone from "./UploadDropzone";
import ImagePreviewSection from "./ImagePreviewSection";
import { createScan, type ScanResponse } from "@/src/services/scans";

interface SkinAnalysisUploadProps {
  onAnalysisComplete?: (data: ScanResponse) => void;
}

export default function SkinAnalysisUpload({ onAnalysisComplete }: SkinAnalysisUploadProps = {}) {
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUpload = (blobUrls: string[], newFiles: File[]) => {
    setImages((prev) => [...prev, ...blobUrls]);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleClearAll = () => {
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    setFiles([]);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const data = await createScan(files);
      if (onAnalysisComplete) onAnalysisComplete(data);
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        <UploadDropzone onUpload={handleUpload} fullWidth={images.length === 0} />
        {images.length > 0 && (
          <ImagePreviewSection 
            images={images} 
            onClearAll={handleClearAll} 
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
          />
        )}
      </div>
    </main>
  );
}

