const mongoosee = require('mongoose')

const bookSchema = new mongoosee.Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        
    },
    rating:{
        type:String
    },
    pages:{
        type:String
    }

})

export= mongoosee.model('book',bookSchema)