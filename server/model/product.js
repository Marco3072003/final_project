const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
        
        productURL: {
            type: String,
            required: true
        },
        imgURL:{
            type: String,
            required: true
        }
        ,
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
});






module.exports = mongoose.model('Product', productSchema);

