import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SocketProvider, useSocket } from './socket'
import { Main, Settings } from './pages'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const socket = useSocket()

  const onMessage = useCallback((message) => {
    const data = JSON.parse(message?.data)
    if (data) {
      setData((actualData) => {
        return [
          ...actualData,
          data.data
        ]
      })
    }
  }, [])

  useEffect(() => {
    socket.addEventListener('message', onMessage)
    return () => {
      socket.removeEventListener('message', onMessage)
    }
  }, [socket, onMessage])

  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
