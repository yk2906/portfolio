const express = require('express');
// var request = require("request");
const bodyParser = require('body-parser');
const app = express();

// app.get("/api/data" , (req, res) => {
//     request("https://jsonplaceholder.typicode.com/users", function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//         var parsedBody = JSON.parse(body);
//         var name = parsedBody['name'];
//         res.send({ name });
//         }
//     }
//     )
// })
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// var json_example = {
//     name: "testuser",
//     email: "test@gmail.com",
//     content: "test content"
//     }
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;


app.get('/api', (req, res) => {
    res.json({
        name: "test",
        email: "test@gmail.com",
        content: "test content"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));