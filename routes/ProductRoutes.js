const router = require('express').Router();
const User = require('../models/User');


//* Adding Product to the Cart

router.post('/addproduct', (req, res) => {
    const { productId, username, title, description, category, price, image } = req.body;

    User.findOne({ username }).then(user => {
        if (user) {
            User.findOne({ "products.productId": productId }).then(recordproducts => {
                if (recordproducts) {
                    console.log("Increase by 1");
                    User.findOne({ "products.productId": productId }).then(userWithThisProduct => {
                        userWithThisProduct.products.map(product => {
                            if (product.productId === productId) {
                                product.noOfProducts++;
                                userWithThisProduct.save().then(newNewRecord => {
                                    res.send("Cart Updated");
                                })
                            }
                        })
                    })
                } else {
                    User.findOne({ username }).then(userFound => {
                        userFound.products.push({ productId, username, title, description, category, price, image, noOfProducts: 1 })
                        userFound.save().then(newRecord => {
                            res.send("Cart Updated");
                        })
                    })
                }
            })
        } else {
            console.log("You need to login for this");
            res.send("You need to login for this");
        }
    })
})





//* Returning  all the products and no of products

router.get('/cartproducts/:username', async (req, res) => {
    const { username } = req.params;
    let user = await User.findOne({ username });
    let products = user.products.map(product => {
        return {
            productId: product.productId,
            noOfProducts: product.noOfProducts,
            title: product.title,
            description: product.description,
            category: product.category,
            price: product.price,
            image: product.image
        }
    })
    res.send(products)
})



//* Removing an item from the cart
router.post('/removeproduct', (req, res) => {
    const { username, productId } = req.body;

    User.findOne({ username }).then(user => {
        if (user) {
            user.products.map((product, index) => {
                if (product.productId === productId) {
                    if (product.noOfProducts === 1) {
                        user.products.splice(index, index + 1)
                        user.save().then(() => {
                            res.send("Product deleted");
                        }).catch(err => console.log(1, err))
                    } else {
                        product.noOfProducts--;
                        user.save().then(() => {
                            res.send("No of products decresed by 1")
                        }).catch(err => console.log(2, err))
                    }
                }
            })
        } else {
            return res.send("You need to login");
        }
    }).catch(err => console.log(3, err))
})

module.exports = router;