const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 4000;



// app.get("/api/", (req, res) => {
//     res.json({
//         name: "test",
//         email: "test@gmail.com",
//         content: "test content"
//     })
// })

const socketio = require('socket.io')
const io = socketio.listen(server)

io.on('connection', (socket) => {
    // console.log('Access to User:', socket.client.id)
    socket.on('message', ({name, message}) => {
        // console.log('message', msg)
        io.emit('message', {name, message})
    })
    console.log('connection')
})

app.get("/api2/", (req, res) => {
    res.json({
        name: "test",
        email: "test@gmail.com",
        content: "test content"
    })
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`));