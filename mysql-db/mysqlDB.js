// mysql 구성 추가
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    port: 3306,
    user: 'b08f3651de74b4',
    password: 'fa765e53',
    database: 'heroku_b5a2bf6f45ca25f'
});

module.exports = connection;
