const mongoose = require("mongoose");


const connectedDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected `);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectedDb;