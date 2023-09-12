import { NextResponse } from "next/server";
import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import { getTokenData } from "@/helpers/getTokenData";

connect()

export async function GET(request){
    try{
        const email = await getTokenData(request)
        const user = await User.findOne({email:email}).select("-password")
        return NextResponse.json({
            message:"User found",
            data:user
        })
    }catch(error){
        return NextResponse.json({error:error.message})
    }
}