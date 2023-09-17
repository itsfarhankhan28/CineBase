import { NextResponse } from "next/server";
import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
// import jwt from 'jsonwebtoken'
import { getTokenData } from "@/helpers/getTokenData";

connect()

export async function GET(request){
    try{
        //we are retrieving the token
        // const token = request.cookies.get('token').value || ''
        // console.log(token)
        // //decoding the token
        // const decodeddata = jwt.decode(token)
        // console.log(decodeddata)
        //storing email

        const userId = await getTokenData(request)
        console.log(userId)
        //checking user in database in the bases of email
        const user = await User.findOne({_id: userId}).select("-password")
        //returning the user details
        return NextResponse.json({
            message:"User found",
            data:user
        })
    }catch(error){
        return NextResponse.json({error:error.message},{status:400})
    }
}