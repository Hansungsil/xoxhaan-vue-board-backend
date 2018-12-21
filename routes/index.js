var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   var db = req.conn;
//   var data = '';
//   db.query('SELECT * FROM test', function(err, result, field){
//     console.log(req);
//     data = result;
//     if (err) {
//       console.log(err);
//     }
//     res.send(data);
//   })
// });

module.exports = router;
