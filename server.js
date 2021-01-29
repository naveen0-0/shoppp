const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv')
const AuthenRoutes = require('./routes/AuthenRoutes');
const ProductRoutes = require('./routes/ProductRoutes');


const app = express();


//* MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(cookieParser());
app.use(AuthenRoutes);
app.use(ProductRoutes)
dotenv.config();


//* MongoDB Connection
mongoose.connect(process.env.MONGO || "mongodb://localhost/Shoppp", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log("Database Connection Successful"))
    .catch(() => console.log("Database Error"))


//* Production Build
//* Production build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



//* Listening port
app.listen(process.env.PORT, () => { console.log("http://localhost:5000"); })
