import io from "socket.io-client";
import {SERVER_URL} from "@env"
const socket = io(SERVER_URL);

export default function JoinRoom(gender, country) {
    console.log(`${country} and ${gender}`)
    if (gender == "Male" || gender == "Female" && country == "USA" || country == "Canada"){
        console.log(country)
        socket.emit("join-room", country);
        socket.on("user-joined", (userId) => {
            console.log("User joined:", userId);
        });
        socket.on("current-users", (usersId) => {
            const users = usersId;
            console.log(`the socket belongs ${socket.id}`);
            console.log(`users list ${users}`); // all the users in the socket

            const userIndex = users.indexOf(socket.id);
            if (userIndex > -1) {
                users.splice(userIndex, 1); // Remove current user from list of users
            }

            console.log(`users list after removal ${users}`);
            let randomUser = users[Math.floor(Math.random() * users.length)];
            console.log("Random user from list ", randomUser); //random user to send offer to in the list
            let User = randomUser;
            // createOffer(randomUser);
        });

       
    }
}



