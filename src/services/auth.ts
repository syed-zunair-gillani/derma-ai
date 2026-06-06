import { request } from "./api";

interface SignupPayload {
  email: string;
  password: string;
  full_name: string;
  medical_history?: Record<string, unknown>;
}

interface SignupResponse {
  id?: string;
  email?: string;
  full_name?: string;
  [key: string]: unknown;
}

export async function signup(payload: SignupPayload): Promise<SignupResponse> {
  return request<SignupResponse>("/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
