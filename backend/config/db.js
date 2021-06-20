const mongoose = require('mongoose');
const { MONGODB } = require('./config');

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(MONGODB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.error(`Error: ${err.message}`.red.underline.bold);
        // exit with failure
        process.exit(1);
    }
}

//  mongoose
//   .connect(MONGODB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
//   })
//   .then(() => {
//     return server.listen({ port: 5000 });
//   })
//   .then((res) => {
//     console.log(`Server runnin at ${res.url}`);
//   });

module.exports= connectDB;