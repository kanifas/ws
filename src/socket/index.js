import { createContext, useContext } from "react"

const ws = new WebSocket('ws://127.0.0.1:30001')

export const SocketContext = createContext(ws)

export const SocketProvider = ({ children }) => (
  <SocketContext.Provider value={ws}>
    {children}
  </SocketContext.Provider>
);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
