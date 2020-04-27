const getDB = require('../util/database').exportDB;

class Products{
    constructor(title){
        this.title = title || 'test'
        this.productID=1;
    }
    save(data){
        console.log('in the save method of products')
        const db = getDB();
        db.collection('products')
        .insertOne(new Products(data)).then(res=>console.log(res)).catch(err => console.log(err))
    }
}

module.exports = Products;