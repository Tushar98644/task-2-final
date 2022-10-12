const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.port || 8080;
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB=require('./server/connection.js');
const { Server } = require('http');

dotenv.config({ path: 'config.env' });

app.use(morgan('tiny'));

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine ", "ejs");

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img ', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


app.get('/', (req, res) => {
    res.render('home.ejs');
}
)

app.get('/add', (req, res) => {
    res.render('adduser.ejs');
}
)

app.get('/view', (req, res) => {
    res.render('view.ejs');
}
)

app.get('/history', (req, res) => {
    res.render('history.ejs');
}
)

// app.use('/', require('./server/router'))

app.listen(port, () => { console.log(`server is running on http://localhost:${port}`) });