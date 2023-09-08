import mongoose from 'mongoose'

const DB = "mongodb+srv://fk28:farhankhan123@cluster0.fq2ibrs.mongodb.net/"

export default function connect(){
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("connection successful")})
    .catch(()=>{console.log("connection unsuccessful")})
}