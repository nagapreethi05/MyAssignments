import express from 'express';
import mongoose from 'mongoose';
import Books from './book';
const router = express.Router()

router.get('/', async(req:any,res:any) => {
    if(req.query.title){
    try{
           const books = await Books.find({title:req.query.title});
           res.json(books)
    }catch(err){
        res.send('Error ' + err)
    }
    }
else if(req.query.author){

    try{
           const books = await Books.find({author:req.query.author});
           res.json(books)
    }catch(err){
        res.send('Error ' + err)
    }
}
else{
    try{
        const books=await Books.find();
        res.json(books);
    }
    catch(err){
        res.send("Error "+err);
    } 
}
});


router.post('/', async(req:any,res:any) => {
    const books = new Books({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        rating:req.body.rating,
        pages:req.body.pages
    })
    try{
        const a1 =  await books.save() 
        res.json(a1)
    }catch(err){
        res.send('Error...')
    }
})

router.put('/:id',async(req:any,res:any)=> {
    try{
        const books = await Books.findById(req.params.id) 
        books.title = req.body.title,
        books.author = req.body.author,
        books.price = req.body.price,
        books.rating = req.body.rating,
        books.pages=req.body.pages
        const a1 = await books.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req:any,res:any)=> {
    try{
        const books = await Books.findById(req.params.id)      
        const a1 = await books.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

module.exports = router