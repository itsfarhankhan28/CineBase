import { NextResponse } from "next/server";
import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
// import jwt from 'jsonwebtoken'
import { getTokenData } from "@/helpers/getTokenData";

connect()

export async function GET(request){
    try{
        const userId = await getTokenData(request)
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