//create web server
const express = require('express');
const app = express();
const port = 3000;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import routes
const userRoute = require('./routes/user');
const commentRoute = require('./routes/comment');
const postRoute = require('./routes/post');

//use routes
app.use('/user', userRoute);
app.use('/comment', commentRoute);
app.use('/post', postRoute);

//connect to db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Comments', { useNewUrlParser: true }, () => {
    console.log('Connected to DB');
});

//listen on port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
