const mongoose = require('mongoose');
const { MONGODB } = require('./config/config.js');
const colors = require('colors');
const users = require('./data/users.js');
const products = require('./data/products.js');
const User = require('./models/userModel.js');
const Product = require('./models/productModel.js');
const Order = require('./models/orderModel.js');
const connectDb = require('./config/db.js');

connectDb();

const importData = async () =>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product=>{
            return {...product, user: adminUser}
        });
        await Product.insertMany(sampleProducts);
        console.log('Data imported'.green.inverse)
        process.exit()
    }catch(err){
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () =>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed'.red.inverse)
        process.exit()
    }catch(err){
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()  // execute with node backend/seeder -d
}else{
    importData()
}