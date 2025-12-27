import { useState } from "react";
import type { ApiRequest, ApiResponse } from "../types/api";

export function useApiRequest() {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async (req: ApiRequest) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const start = performance.now();

    try {
      const res = await fetch(req.url, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: req.body && req.body.trim() !== "" ? req.body : undefined,
      });

      const rawText = await res.text();
      const timeMs = Math.round(performance.now() - start);
      const size = new Blob([rawText]).size;

      let data: unknown = rawText;
      let isJson = false;

      try {
        data = JSON.parse(rawText);
        isJson = true;
      } catch {
        // not JSON → keep as text
      }

      setResponse({
        status: res.status,
        statusText: res.statusText,
        timeMs,
        size,
        data,
        isJson,
      });
    } catch (err) {
      setError("Network error, CORS issue, or invalid URL");
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, response, loading, error };
}
