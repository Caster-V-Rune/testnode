/**
 * Created by Rune on 2015/4/6.
 */
var express = require('express');
var app = express();
var User = require('./models/User');

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.get(
    '/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    }
);

app.get('/users/:userid',function(req,res){
    var userid = req.params.userid;
    var user = new User();
    user.find_id(userid,function(err,result){
        if(err){
            res.send('not found');
        }
        res.send(result.length === 1 ? result[0]:result);
    });

});

app.get('/usernames/:username',function(req,res){
    var username = req.params.username;
    var user = new User();
    user.find_name(username,function(err,result){
        if(err){
            res.send('not found');
        }
        res.send(result.length === 1 ? result[0]:result);
    });

});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

