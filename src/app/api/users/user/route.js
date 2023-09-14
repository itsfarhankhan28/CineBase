import { NextResponse } from "next/server";
import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import jwt from "jsonwebtoken";

connect()

export async function GET(request){
    try{
        //we are retrieving the token
        const token = request.cookies.get('token')?.value || ''
        //decoding the token
        const decodeddata = jwt.verify(token,process.env.SECRET_KEY)
        //storing email
        const email = decodeddata.email
        console.log(email)
        //checking user in database in the bases of email
        const user = await User.findOne({email:email}).select("-password")
        //returning the user details
        return NextResponse.json({
            message:"User found",
            data:user
        })
    }catch(error){
        return NextResponse.json({error:error.message})
    }
}