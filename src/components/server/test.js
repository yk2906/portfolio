// const express = require('express');
// const router = express.Router();

// const axiosBase = require('axios');
// const axios = axiosBase.create({
//   baseURL: 'http://localhost:4000', 
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest'
//   },
//   responseType: 'json'  
// });

// router.get('/', function(req, res, next) {

//   axios.get('/title')
//   .then(function(response) {

//     res.render('index', response.data);
//   })
//   .catch(function(error) {
//     console.log('ERROR!! occurred in Backend.')
//   });
// });

// module.exports = router;

// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '.../index.js'));
// app.get('/index', (req, res) => {
//     res.sendFile(__dirname + '.../src/index.js');
// })

// app.listen(4000);
// console.log('server listen ...');

