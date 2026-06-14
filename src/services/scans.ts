import { request, uploadFile } from "./api";

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

export type ScanListItem = Pick<
  ScanResponse,
  "scan_id" | "image_url" | "primary_detection"
>;

export async function getScan(scan_id: string): Promise<ScanResponse> {
  return request<ScanResponse>(`/scans/${scan_id}`);
}

export async function getScans(): Promise<ScanListItem[]> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const data = await request<unknown>("/scans", {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  if (Array.isArray(data)) return data as ScanListItem[];

  if (data && typeof data === "object") {
    for (const key of ["scans", "data", "items", "results"]) {
      const value = (data as Record<string, unknown>)[key];
      if (Array.isArray(value)) return value as ScanListItem[];
    }
  }

  return [];
}
