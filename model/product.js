const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    title: {type:String, required:(true)},
    description: {type:String, required:(true)},
    price: {type:Number, min:0,required:(true)},
    discountPercentage: {type:Number, min:0, max:5},
    rating: {type:Number, min:0, max:5},
    stock: Number,
    brand: {type:String, required:(true)},
    category: {type:String, required:(true)},
    thumbnail: {type:String, required:(true)},
    images:[String]
  });
  
  exports.Product = mongoose.model('Product', productSchema)