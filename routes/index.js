var express = require('express');
var router = express.Router();
var fs = require('fs');
var nItems;
var tItems;

/*
    --READ FILE--
fs.readFile('musics/arq.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    res.render('index.ejs', {title:'ServerMusic', cbody:data});
});

*/


fs.readdir('musics/', function(err, items) {
    nItems = new Array();
    tItems = items;
    // Remover a extensão do arquivo
    for(var i= 0; i<items.length; i++){
        nItems.push(items[i].slice(0, items[i].length-4));


    }



});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.ejs', {title:':)', items:tItems, nItems:nItems});
});

router.get('/arq', function(req, res, next){
    // -music.ejs- é o arquivo responsável por render os conteúdos de -data-
    fs.readFile('musics/arq.txt', function(err, data) {
        if (err) throw err;
        res.render('music.ejs', {title:'', cbody:data});
    });
});




module.exports = router;
