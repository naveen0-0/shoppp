const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const AuthenRoutes = require('./routes/AuthenRoutes');


const app = express();

//* MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(cookieParser());
app.use(AuthenRoutes);



//* MongoDB Connection
mongoose.connect("mongodb://localhost/Shoppp", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log("Database Connection Successful"))
    .catch(() => console.log("Database Error"))



//* Listening port
app.listen(5000, () => { console.log("http://localhost:5000"); })