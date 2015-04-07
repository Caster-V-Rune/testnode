/**
 * Created by Rune on 2015/4/6.
 */
var mysql = require('mysql');
var config = require('../config/dbconfig');

var pool = mysql.createPool(config.mysql_dev);

exports.pool = pool;

