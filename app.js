const express = require('express');
const app = express();
const mongoConnect = require('./util/database').mongoConnect; //creating mongo connection
const rootPage = require('./routes/root-page'); //referencing the root path
const admin = require('./routes/admin');
const product = require('./routes/product');
const bodyParser = require("body-parser");
const path = require('path');
app.use(express.static(path.join(__dirname, 'client/demo-aws-react', 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(rootPage);
app.use(admin);
app.use(product);

app.use((req, res) => {
    res.send('<h1>Page Not Found</h1>')
})
mongoConnect(()=> {
    console.log('in the call back function');
    app.listen(5000)
});
