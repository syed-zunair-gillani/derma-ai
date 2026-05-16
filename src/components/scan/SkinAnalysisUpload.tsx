'use client'

import React, { useState } from "react";
import UploadDropzone from "./UploadDropzone";
import ImagePreviewSection from "./ImagePreviewSection";

interface SkinAnalysisUploadProps {
  onAnalysisComplete?: () => void;
}

export default function SkinAnalysisUpload({ onAnalysisComplete }: SkinAnalysisUploadProps = {}) {
  const [images, setImages] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUpload = (newImages: string[]) => {
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleClearAll = () => {
    setImages([]);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (onAnalysisComplete) onAnalysisComplete();
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

