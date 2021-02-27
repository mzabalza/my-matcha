const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server, { pingTimeout: 6000000 });

app.use(cors());


io.on('connection', (socket) => {
    console.log(`New user connected: ${socket.id}`);

    socket.on('join', ({ name, room }, callback) => {
        // const { error, user } = addUser({ id: socket.id, name, room });
        // if (error) return callback(error);
        // socket.join(user.room);
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));