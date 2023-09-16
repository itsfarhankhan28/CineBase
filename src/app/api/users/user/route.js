import { NextResponse } from "next/server";
import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import jwt from 'jsonwebtoken'

connect()

export async function GET(request){
    try{
        //we are retrieving the token
        const token = request.cookies.get('token').value || ''
        console.log(token)
        //decoding the token
        const decodeddata = JSON.parse(
            Buffer.from(token.split(".")[1], "base64").toString()
          );
        console.log(decodeddata)
        //storing email
        const userId = decodeddata.id
        console.log(userId)
        //checking user in database in the bases of email
        const user = await User.findOne({_id:userId}).select("-password")
        //returning the user details
        return NextResponse.json({
            message:"User found",
            data:user
        })
    }catch(error){
        return NextResponse.json({error:error.message})
    }
}