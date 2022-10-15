import mongoose from "mongoose";

const connectMongo = async () => {
    try{
        await mongoose.connect(process.env.mongo_uri || "")
        console.log("connected to mongodb")
    }catch(err){
        console.log("could not connect to mongodb")
    }
}

console.log(process.env.mongo_uri)

export default connectMongo