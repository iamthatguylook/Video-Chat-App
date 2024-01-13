require("dotenv").config({ path: "./config.env" });
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = socketIO(server);

const PORT = process.env.SERVER_PORT;
const IP = process.env.SERVER_IP;

// Serve HTML file for testing
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// Room data structure to store connected users in each room

io.on("connection", (socket) => {
	console.log("User connected");

	// Handle joining a room
	socket.on("join-room", (room) => {
		socket.join(room);

		// Notify others in the room about the new user
		socket.to(room).emit("user-joined", socket.id);
		let clients = io.sockets.adapter.rooms.get(room);
		clients = JSON.parse(JSON.stringify(Array.from(clients)));
		// Send the list of users in the room to the new user
		console.log(clients);
		io.to(room).emit("current-users", clients);

		socket.on("leave-room", (room) => {
			socket.leave(room);
			console.log(`User left room: ${room} ${socket.id}`);
		});

		socket.on("offer", (offer) => {
			console.log("server offer", offer);
		});

		socket.on("send-icecandidate", (icecandidate, MemberId) => {
			io.to(MemberId).emit("recieve-icecandidate", icecandidate);
		});
		socket.on("webrtc-offer", (offer, recieverId) => {
			io.to(recieverId).emit("recieve-webrtcoffer", offer);
		});
		socket.on("webrtc-answer", (answer, recieverId) => {
			io.to(recieverId).emit("recieve-webrtcanswer", answer);
		});
	});

	// Handle SDP offer from client
});

// Start the server
server.listen(PORT, IP, () => {
	console.log(`Server is running on port ${PORT}`);
});
