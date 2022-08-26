
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const pageRouter = require('./router/pageRouter');


//environment variable
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;
//init express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//making public folder accessible
app.use('/public',express.static('public'));

//init router
app.use(pageRouter);


//listening server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});