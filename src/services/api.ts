const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function getAccessToken(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem("token");
}

function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem("refresh_token");
}

function setTokens(accessToken: string, refreshToken?: string): void {
  if (!isBrowser()) return;
  localStorage.setItem("token", accessToken);
  document.cookie = `token=${accessToken}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
  if (refreshToken) {
    localStorage.setItem("refresh_token", refreshToken);
    document.cookie = `refresh_token=${refreshToken}; path=/; max-age=${30 * 24 * 60 * 60}; SameSite=Lax`;
  }
}

function clearTokens(): void {
  if (!isBrowser()) return;
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  document.cookie = "token=; path=/; max-age=0";
  document.cookie = "refresh_token=; path=/; max-age=0";
}

let refreshPromise: Promise<boolean> | null = null;

async function attemptRefresh(): Promise<boolean> {
  if (refreshPromise) return refreshPromise;

  refreshPromise = (async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;

    try {
      const res = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (!res.ok) {
        clearTokens();
        return false;
      }

      const data = await res.json();
      setTokens(
        data.access_token || "",
        data.refresh_token || refreshToken
      );
      return true;
    } catch {
      clearTokens();
      return false;
    } finally {
      refreshPromise = null;
    }
  })();

  return refreshPromise;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAccessToken();
  const url = `${BASE_URL}${endpoint}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    ...options,
    headers: { ...headers, ...(options.headers as Record<string, string>) },
  });

  if (res.status === 401 && token) {
    const refreshed = await attemptRefresh();
    if (refreshed) {
      const newToken = getAccessToken();
      const retryHeaders: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (newToken) {
        retryHeaders["Authorization"] = `Bearer ${newToken}`;
      }

      const retryRes = await fetch(url, {
        ...options,
        headers: { ...retryHeaders, ...(options.headers as Record<string, string>) },
      });

      if (retryRes.ok) {
        return retryRes.status === 204 ? (undefined as T) : retryRes.json();
      }

      const retryBody = await retryRes.json().catch(() => null);
      throw new ApiError(
        retryBody?.detail || retryBody?.message || `Request failed with status ${retryRes.status}`,
        retryRes.status
      );
    }

    if (isBrowser()) {
      window.location.href = "/login";
    }
    throw new ApiError("Unauthorized", 401);
  }

  if (res.status === 204) return undefined as T;

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(
      body?.detail || body?.message || `Request failed with status ${res.status}`,
      res.status
    );
  }

  return res.json();
}

async function uploadFile<T>(
  endpoint: string,
  formData: FormData
): Promise<T> {
  const token = getAccessToken();
  const url = `${BASE_URL}${endpoint}`;

  const headers: Record<string, string> = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: Object.keys(headers).length ? headers : undefined,
    body: formData,
  });

  if (res.status === 401 && token) {
    const refreshed = await attemptRefresh();
    if (refreshed) {
      const newToken = getAccessToken();
      const retryRes = await fetch(url, {
        method: "POST",
        headers: newToken ? { Authorization: `Bearer ${newToken}` } : undefined,
        body: formData,
      });

      if (retryRes.ok) {
        return retryRes.json();
      }

      const retryBody = await retryRes.json().catch(() => null);
      throw new ApiError(
        retryBody?.detail || retryBody?.message || `Request failed with status ${retryRes.status}`,
        retryRes.status
      );
    }

    if (isBrowser()) {
      window.location.href = "/login";
    }
    throw new ApiError("Unauthorized", 401);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(
      body?.detail || body?.message || `Request failed with status ${res.status}`,
      res.status
    );
  }

  return res.json();
}

export { request, ApiError, uploadFile, getAccessToken, clearTokens };
