var express = require('express');
var router = express.Router();
var Player = require('player');
var player = new Player('./musics/wavefile_short.mp3');
var fs = require('fs');
var tItems;
var nItems = new Array();
var ready = false;
fs.readdir('musics/', function(err, items) {

    tItems = items;
    ready = true;
    // Remover a extensão do arquivo
    for(var i= 0; i<items.length; i++){
        nItems.push(items[i].slice(0, items[i].length-4));
    }
});

module.exports = function(app){
    app.get('/wavefile_short', function(req, res){
        console.log('playend!');
        player.play(function(err, player){
        });
    });



    app.get('/musics/:music', function(req, res){
        console.log('playend!');
        player.stop();
        player = new Player('./musics/'+req.params.music+'.mp3');
        player.play(function(err, player){
        });
    });
}
