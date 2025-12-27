import './App.css'
import RequestPanel from './components/RequestPanel'
import ResponsePanel from './components/ResponsePanel'
import {useApiRequest} from '../hooks/useApiRequest'

function App() {
    const { sendRequest, response, loading, error } = useApiRequest();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>API CLIENT</h1>
      <RequestPanel onSend={sendRequest} loading={loading}/>
      <ResponsePanel response={response} loading={loading} error={error}/>
    </div>
  )
}

export default App
