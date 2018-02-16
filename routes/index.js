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
    res.render('index.ejs', {title:'ServerMusic', items:tItems, nItems:nItems});
});



module.exports = router;
