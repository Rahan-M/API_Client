export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiRequest {
  method: HttpMethod;
  url: string;
  body?: string;
}

export interface ApiResponse {
  status: number;
  statusText: string;
  timeMs: number;
  size: number;
  data: unknown;
  isJson: boolean;
  headers: Record<string, string>;
  error?: string;
}