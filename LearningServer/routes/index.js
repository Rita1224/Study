var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world!");
});

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// });

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// });

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// });

module.exports = router;
