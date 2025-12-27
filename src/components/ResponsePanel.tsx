import type { ApiResponse } from "../../types/api";
import {useState} from 'react'

interface Props {
  response: ApiResponse | null;
  error: string | null;
  loading: boolean;
}

type Tab = "body" | "headers" | "raw";

const ResponsePanel = ({ response, error, loading }: Props) => {
    const [activeTab, setActiveTab] = useState<Tab>("body");
  return (
    <div className="response flex flex-col items-center gap-2 mt-6">

      {/* Status Bar */}
      <div className="status flex gap-6 items-center border border-black rounded-md px-6 py-2 w-[40vw] justify-center">
        {loading && (
            <span className="font-mono text-blue-600">
            Sending request...
          </span>
        )}

        {!loading && error && (
          <span className="font-mono text-red-600">
            {error}
          </span>
        )}

        {!loading && response && (
          <>
            <span
              className={`font-mono ${
                response.status >= 200 && response.status < 300
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              ● {response.status} {response.statusText}
            </span>
            <span className="font-mono">{response.timeMs} ms</span>
            <span className="font-mono">
              {(response.size / 1024).toFixed(2)} KB
            </span>
          </>
        )}

        {!loading && !response && (
          <>
            <span
              className={`font-mono text-sm`}
            >
                Send a request to see status here
            </span>
          </>
        )}
      </div>

        <div className="tabs flex gap-4 mt-2">
            <button
                onClick={() => setActiveTab("body")}
                className={`cursor-pointer px-2 pb-1 ${
                activeTab === "body"
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                }`}
            >
                Body
            </button>

            <button
                onClick={() => setActiveTab("headers")}
                className={`cursor-pointer px-2 pb-1 ${
                activeTab === "headers"
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                }`}
            >
                Headers
            </button>

            <button
                onClick={() => setActiveTab("raw")}
                className={`cursor-pointer px-2 pb-1 ${
                activeTab === "raw"
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                }`}
            >
                Raw
            </button>
        </div>


      {/* Response Content */}
        <div className="border border-black rounded-md p-5 min-h-60 min-w-[40vw] bg-gray-50 overflow-auto">
            <pre className="font-mono text-sm whitespace-pre-wrap">
                {loading && "Waiting for response..."}

                {!loading && error && error} 
                {/* we show error if error exists and we aren't loading */}

                {!loading && !error && !response &&
                "Send a request to see the response here."
                }

                {!loading && response && activeTab === "body" &&
                (response.isJson
                    ? JSON.stringify(response.data, null, 2)
                    : String(response.data))
                }

                {!loading && response && activeTab === "raw" &&
                    String(response.data)
                }

                {!loading && response && activeTab === "headers" &&
                "Headers will be shown here"
                }
            </pre>
        </div>

    </div>
  );
};

export default ResponsePanel;
