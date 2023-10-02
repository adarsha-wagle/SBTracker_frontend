import io from "socket.io-client";

const URL = "http://localhost:5000/busLocation/?busID=BA-1-KHA-3456";

export const socket = io(URL);
