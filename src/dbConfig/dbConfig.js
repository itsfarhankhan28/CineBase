import mongoose from 'mongoose'

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("connection successful")
        })

        connection.on('error',()=>{
            console.log("connection unsuccessful")
        })

    }catch(err){
        console.log(err)
    }
}