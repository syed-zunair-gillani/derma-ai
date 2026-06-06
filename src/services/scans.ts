import { uploadFile } from "./api";

interface ScanResult {
  disease: string;
  scientific_name: string;
  confidence: number;
  severity: string;
  description: string;
  common_symptoms: string[];
  urgency_level: string;
}

interface PrimaryDetection {
  disease: string;
  confidence: number;
  severity: string;
  urgency_level: string;
}

export interface ScanResponse {
  scan_id: string;
  image_url: string;
  results: ScanResult[];
  primary_detection: PrimaryDetection;
  processing_time_ms: number;
  disclaimer: string;
  quota_remaining: number;
}

export async function createScan(files: File[]): Promise<ScanResponse> {
  const formData = new FormData();
  files.forEach((file) => formData.append("image", file));

  return uploadFile<ScanResponse>("/scans", formData);
}
