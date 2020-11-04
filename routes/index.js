var express = require('express');
var router = express.Router();
var books = require('../resources/books')
let Books = require('../models/books');

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Book DB',booksList: books });

 Books.find({}, function(err, books){
   if(!err){
     res.render('index',{ title:"Book App", bookList: books});
   }else{
     console.log('error',err);
   }
 });
});

/*
router.get('/', async function(req, res, next) {
 // res.render('index', { title: 'Book DB',booksList: books });
 let book = await Books.find();
 res.render('index',{ title:"Book App", bookList: books});
 });



*/
module.exports = router;
