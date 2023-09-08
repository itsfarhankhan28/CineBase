import mongoose from 'mongoose'

const DB = process.env.MONGO_URI

export default function connect(){
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("connection successful")})
    .catch(()=>{console.log("connection unsuccessful")})
}