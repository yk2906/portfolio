const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app)
var request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 4000;

const socketio = require('socket.io');
const { response } = require('express');
const io = socketio.listen(server)

io.on('connection', (socket) => {
    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message})
    })
    console.log('connection')
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`));
// ローカルJSONデータ取得

// app.get("/api2/", (req, res) => {
//     res.json({
//         name: "test",
//         email: "test@gmail.com",
//         content: "test content"
//     })
// })


// 外部API取得

// const url = "https://api.github.com/users/yk2906";

// app.get("/get", (req, res) => {
//     request(
//         url,(error, response, body) => {
//             if(!error && response.statusCode === 200) {
//                 // var parsedBody = JSON.parse(body);
//                 // var id = parsedBody["id"]
//                 res.send(body);
//             }
//         }
//     )
// })

// app.get('/users', (req, res) => {
//     request(
//         "https://api.github.com/users/yk2906",(error, response, body) => {
//             res.json({id})
//         }
//     )
// })