var express = require('express');
const books = require('../resources/books');
var router = express.Router();

let Books = require('../models/books');


router.get('/add', function (req, res, next) {
    res.render('addBooks', {
        title: 'Add book'
    });
});

router.post('/save', function (req, res, next) {
 /*   console.log('in dave functon ',req.body)
    books.push({...req.body, _id:`00${books.length+1}`})
    res.redirect('/');
*/
    const book = new Books(req.body);  //create new instance to save the books
    let promise = book.save();
    promise.then(() => {
        console.log('Book added');
        res.redirect('/');
    })
    
    });

// to remove books
router.get('/remove/:id',function(req,res)
{
    Books.remove({ _id: req.params.id},function(){
        res.redirect('/');
    });
    console.log(req.params._id)

    /*
    books.splice(req.params.index, 1)
    console.log(req.params.id);
    res.redirect('/');  */ 
});

//edit book
router.get('/edit/:_id',function(req,res)
{
    /*const book = books.find((book) => book._id == req.params._id);
    console.log("book to edit ",book);
    res.render('editBook',{
        title: 'edit books',
        book
    })
    */
   Books.findOne({_id: req.params._id}, function(err, book){
    res.render('editBook',{title:'Edit Books', book: book});
})
});

router.post('/edited/:id',function(req,res){
    Books.findOneAndUpdate({_id: req.params.id},{ $set: req.body },function(err,book){
        //res.render('editBook',{title:'edit book',book : book});
        console.log(book);
        res.redirect('/');

})
});


module.exports = router;
