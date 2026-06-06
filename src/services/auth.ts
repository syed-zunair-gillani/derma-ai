import { request } from "./api";

interface SignupPayload {
  email: string;
  password: string;
  full_name: string;
  medical_history?: Record<string, unknown>;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  access_token?: string;
  token_type?: string;
  id?: string;
  email?: string;
  full_name?: string;
  [key: string]: unknown;
}

export async function signup(payload: SignupPayload): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
