const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');



//* SignUp Route

router.post('/signup', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    let userFoundWithThisUsername = await User.findOne({ username });
    if (userFoundWithThisUsername) return res.send({ msg: "Username Already Taken" })
    let userFoundWithThisEmail = await User.findOne({ email });
    if (userFoundWithThisEmail) return res.send({ msg: "Email Already Exists" });
    if (password !== confirmPassword) return res.send({ msg: "Password didn't match" })

    User.create({ username, email, password })
        .then(() => { return res.send({ msg: "Account Created, Please go login" }) })
        .catch(() => { return res.send({ msg: "Some Error, Refresh the page and try again" }) })

})



//* Login Route

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    let userFoundWithThisUsername = await User.findOne({ username });
    if (!userFoundWithThisUsername) return res.send({ msg: "Username Doesn't Exists", username: "", email: "", loggedIn: false })
    if (userFoundWithThisUsername.password !== password) return res.send({ msg: "Password Incorrect", username: "", email: "", loggedIn: false });

    jwt.sign({ username: userFoundWithThisUsername.username })


    return res.send({ msg: "", username, email: userFoundWithThisUsername.email, loggedIn: true })

})












module.exports = router;