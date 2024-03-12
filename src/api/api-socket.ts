import { io } from "socket.io-client";
import { apiUrl } from "./apiUtils";

export const socket = io(apiUrl)

export const initSocketIo = () =>{
    socket.on('connect', () => {
        console.log('Connected to the server');
    });
  
    socket.on('disconnect', () => {
        console.log('Disconnected from the server');
    });
}