import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

export default UserSchema = mongoose.model("MoviesUserSchema",Schema)