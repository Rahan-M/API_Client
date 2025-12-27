import { useState } from "react";
import { useSnackbar } from "notistack";
import type {ApiRequest, HttpMethod} from '../../types/api'

interface Props {
  onSend: (req: ApiRequest) => void;
  loading: boolean;
}

const RequestPanel = ({onSend, loading}:Props) => {
    const [body, setBody]=useState<string>("");
    const [url, setUrl]=useState<string>("");
    const [method, setMethod]=useState<HttpMethod>("GET");
    const {enqueueSnackbar}=useSnackbar()

    const isValidJson=(text: string): boolean=>{
        try{
            JSON.parse(text);
            return true;
        }catch{
            return false;
        }
    }

    const handleSend=()=>{
        if (body.trim() !== "" && !isValidJson(body)) {
            enqueueSnackbar("Invalid JSON Body", {variant:"error"});
            return;
        }
        onSend({
            method, url, body
        })
    }

  return (
    <div className='request flex flex-col items-center gap-2 mt-4'>
        <div className='input flex gap-5 items-center'>
            <div className="flex flex-col">
                <textarea
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    placeholder='{"name": "Rahan"}'
                    className='border border-black rounded-md p-5 min-h-50 min-w-[30vw]'
                    />
                <input className="min-w-[30vw] border border-black rounded-md p-1 mt-2" type="text" placeholder="url"
                    onChange={(e)=>setUrl(e.target.value)}
                />
            </div>
            <select
                value={method}
                onChange={(e) => setMethod(e.target.value as HttpMethod)}
                className="border border-black h-10 rounded-md px-3"
                >
                <option className="bg-green-500">GET</option>
                <option className="bg-blue-500">POST</option>
                <option className="bg-amber-500">PUT</option>
                <option className="bg-fuchsia-600">PATCH</option>
                <option className="bg-red-500">DELETE</option>
            </select>
        </div>
          <button className="rounded-lg bg-blue-950 text-white px-5 py-2" onClick={handleSend}>
            {loading?'...':'Send Request'}
          </button>
      </div>
  )
}

export default RequestPanel