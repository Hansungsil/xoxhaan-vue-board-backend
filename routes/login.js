var express = require('express');
var router = express.Router();

var mysqlDB = require('../mysql-db/mysqlDB');

/* POST 가입하기 */
router.post('/signUp', function(req, res, next) {
  console.log("req", req);
  console.log("req.body : ", req.body);

  var userid = req.body.userid;
  var userpw1 = req.body.userpw1;
  var userpw2 = req.body.userpw2;
  var username = req.body.username;

  var sql = 'INSERT INTO heroku_b5a2bf6f45ca25f.users (uid, upw, upwch, name) VALUES (?, ?, ?, ?)';
  mysqlDB.query(sql, [ userid, userpw1, userpw2, username ], function(err, rows, fields){
    if (!err) {
      res.send('가입이 성공적으로 되었습니다.');
    } else {
      res.send(err);
    }
  });

});

/* GET id, name 중복 확인 */
router.get('/:userCheck', function(req, res, next) {
  console.log("req.query : ", req.query);

  var userColumn = req.query.userColumn;
  var userText = req.query.userText;
  console.log(userColumn, userText);

  var sql = 'SELECT * FROM heroku_b5a2bf6f45ca25f.users WHERE ' + userColumn + ' = \'' + userText + '\'';
  mysqlDB.query(sql, function(err, rows, fields){
    if(!err) {
      console.log(rows);
      console.log(rows.length);
      if(rows.length >=1) {
        res.json({text:'사용할 수 없습니다.', column: userColumn});
      } else {
        res.json({text:'사용할 수 있습니다.', column: userColumn});
      }
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

/* POST 로그인 */
router.post('/loginCheck', function(req, res, next){
  console.log(req.body);

  var userid = req.body.userid;
  var userpw = req.body.userpw;

  sql = 'SELECT * FROM heroku_b5a2bf6f45ca25f.users WHERE uid = \'' + userid + '\'';
  mysqlDB.query(sql, function (err, rows, fields){
    console.log(rows);
    if(rows.length === 1) {
      sql = 'SELECT * FROM heroku_b5a2bf6f45ca25f.users WHERE uid = \'' + userid + '\' AND upw = \'' + userpw+ '\'';
      mysqlDB.query(sql, function (err, rows, fields){
        if(rows.length === 1) {
          res.json({ text:'로그인 성공', rows: rows[0]});
        } else {
          res.json({text:'비밀번호가 틀립니다.'});
        }
      })
    } else {
      res.json({text:'아이디가 존재 하지 않습니다.'});
    }
  });
});

module.exports = router;
