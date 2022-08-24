
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');


//environment variable
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;
//init express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//making public folder accessible
app.use('/public',express.static('public'));

//route
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/menu', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'/public/menu.html'));
});

app.get('/book', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'/public/book.html'));
});
app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'/public/about.html'));
});

app.post('/book-order', (req, res) => {
    res.status(200).json(req.body);
});
//listening server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});