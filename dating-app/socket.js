import io from "socket.io-client";
import {SERVER_URL} from "@env"

console.log(SERVER_URL)
const socket = io(SERVER_URL);

// try {
//     if(){

//     }
// } catch (error) {}
export default socket;
