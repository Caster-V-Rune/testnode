/**
 * Created by Rune on 2015/4/6.
 */
var db = require('./database');
var _ = require('underscore');

var User = function() {};

User.prototype.find_id = function(id, callback) {
    var sql = "SELECT * FROM user WHERE id=?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};


User.prototype.find_name = function(name, callback) {
    var sql = "SELECT * FROM user WHERE name LIKE ?";
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

module.exports = User;