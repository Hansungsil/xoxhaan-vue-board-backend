var express = require('express');
var router = express.Router();

var mysqlDB = require('../mysql-db/mysqlDB');

var sql = '';

// 글쓰기
router.post('/write', function (req, res, next) {
  console.log("write req.body : ",req.body);

  var name = req.body.name;
  var title = req.body.title;
  var content = req.body.content;
  var date = req.body.date;
  var author_id = req.body.author_id;

  sql = 'INSERT INTO heroku_b5a2bf6f45ca25f.boards (name, title, content, date, author_id) VALUE (?, ?, ?, ?, ?)';
  mysqlDB.query(sql, [name, title, content, date, author_id], function (err, rows, fields) {
    if (!err) {
      res.json({ text: '글이 작성 되었습니다.'});
    } else {
      res.json({ text: err});
      console.log(err);
    }
  })
});

// 리스트 전체, 검색 리스트 보기
router.get('/lists', function (req, res, next) {
  // console.log("lists req.query : ", req.query);

  // 전체 리스트
  var pageNum = req.query.pageNum
  var listCount = req.query.listCount
  var pageNumCalculation = (pageNum - 1) * listCount

  // 검색 리스트
  var searchText = req.query.searchText;
  var searchOption = req.query.searchOption;
  var getSearchListSql = ''
  if (searchText !== ''  && searchOption !== '') {
    getSearchListSql = ' WHERE ' + searchOption + ' LIKE \'%' + searchText + '%\' '
  } else {
    getSearchListSql = ' '
  }

  sql = 'SELECT * FROM heroku_b5a2bf6f45ca25f.boards' + getSearchListSql + 'ORDER BY date DESC LIMIT ' + pageNumCalculation + ', ' + listCount;
  mysqlDB.query(sql, function (err, rows, fields) {
    if (!err) {
      if (rows.length === 0) {
         res.json({result: 0});
      } else {
         res.json({result: rows});
         console.log(rows);
      }
    } else {
      console.log(err);
    }
  })
})

// 리스트 한개 보기
router.get('/list', function(req, res, next) {
  console.log("oneList req.query : ", req.query);

  var listId = req.query.id;

  sql = 'SELECT * FROM heroku_b5a2bf6f45ca25f.boards WHERE id = \'' + listId + '\'';
  mysqlDB.query(sql, function (err, rows, fields) {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  })
})

// 삭제하기
router.delete('/delete', function (req, res, next) {
  console.log("delete req.query : ", req.query);

  var listId = req.query.id;

  sql = 'DELETE FROM heroku_b5a2bf6f45ca25f.boards WHERE id = \'' + listId + '\'';
  mysqlDB.query(sql, function (err, rows, fields) {
    if (!err) {
      res.send('삭제 되었습니다.');
    } else {
      console.log(err);
    }
  })
})

// 수정하기
router.put('/update', function (req, res, next) {
  console.log("update req.body : ", req.body);

  var listId = req.body.id;
  var title = req.body.title;
  var content = req.body.content;

  sql = 'UPDATE heroku_b5a2bf6f45ca25f.boards SET title = \'' + title + '\', content = \'' + content +
        '\' WHERE id = \'' + listId + '\' LIMIT 2'
  mysqlDB.query(sql, function (err, rows, fields) {
    if (!err) {
      res.send('수정 되었습니다.');
    } else {
      console.log(err);
    }
  });
});

// 조회수 증가
router.put('/countUp', function (req, res, next) {
  console.log("count req.body : ", req.body);

  var listId = req.body.id;

  sql = 'UPDATE heroku_b5a2bf6f45ca25f.boards SET count = count + 1 WHERE id = \'' + listId + '\' LIMIT 1';
  mysqlDB.query(sql, function (err, rows, fields) {
    if (!err) {
      res.send('조회수 증가!!');
    } else {
      console.log(err);
    }
  });
});

// 게시판 리스트 전체 수
router.get('/listTotalCount', function (req, res, next) {
  console.log("listTotalCount req.query : ", req.query);

  var searchOption = req.query.searchOption;
  var searchText = req.query.searchText;
  var getSearchCountSql = ''

  if (searchOption !== '' && searchText !== '') {
    getSearchCountSql = ' WHERE ' + searchOption + ' LIKE \'%' + searchText + '%\' '
  } else {
    getSearchCountSql = ''
  }

  sql = 'SELECT count(*) as totalCount FROM heroku_b5a2bf6f45ca25f.boards' + getSearchCountSql
  mysqlDB.query(sql, function (err, rows, fields) {
    if (!err) {
      res.send(rows[0])
    } else {
      console.log(err)
    }
  });
});

module.exports = router;
