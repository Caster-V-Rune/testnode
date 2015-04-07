/**
 * Created by Rune on 2015/4/7.
 */
var db = require('./database');
var _ = require('underscore');

var Book = function(){};

Book.prototype.find_id = function(id, callback){
    var sql = "SELECT * FROM book WHERE name id=?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }

        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });

    });
};


Book.prototype.find_name = function(name, callback) {
    var sql = "SELECT * FROM book WHERE name LIKE ?";
    var key = [];
    key.push('_'+name+'_');
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }

        connection.query(sql, key, function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });

    });
};

