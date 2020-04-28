//app dependencies
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
const mongodbStore = require('connect-mongodb-session')(session);

//register routes
const rootPage = require('./routes/root-page'); //referencing the root path
const admin = require('./routes/admin');
const product = require('./routes/product');
const getProduct = require('./routes/getProducts');

//set static files like css
app.use(express.static(path.join(__dirname, 'client/demo-aws-react', 'build')));

//body parser to parse the request body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//create session to store the user session
// const store = new mongodbStore({
//     uri:'mongodb+srv://abilash:india143@cluster0-qcy7w.mongodb.net/products',
//     collection:'sessions'
// })
app.use(session({secret:'my secret', resave:false, saveUninitialized:true}))

//create middleware's to register routes
app.use(rootPage);
app.use(admin);
app.use(product);
app.use(getProduct);

app.use((req, res) => {
    res.send('<h1>Page Not Found</h1>')
});

//connect mongo db.
mongoose.connect(`mongodb+srv://abilash:india143@cluster0-qcy7w.mongodb.net/products?retryWrites=true&w=majority`).then(()=>{
    console.log('successfully connected');
    app.listen(5000)
    
}).catch(err=>console.log('error',err))

