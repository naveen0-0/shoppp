const { Schema, model } = require('mongoose');


const productSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    noOfProducts: {
        type: Number,
        required: true
    }
})


const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    products: [productSchema]
})


const User = model('user', UserSchema);
module.exports = User;