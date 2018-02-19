var express = require('express');
var router = express.Router();
var Player = require('player');
var player = new Player('./musics/wavefile_short.mp3');


module.exports = function(app){
    app.get('/wavefile_short', function(req, res){
        player.play(function(err, player){
            console.log('playend!');
        });
    });


}
