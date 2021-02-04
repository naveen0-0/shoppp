const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
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