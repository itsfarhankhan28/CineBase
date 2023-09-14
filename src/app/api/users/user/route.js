import { NextResponse } from "next/server";
import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import { getTokenData } from "@/helpers/getTokenData";

connect()

export async function GET(request){
    try{
        const email = getTokenData(request)
        console.log('extracted email',email)
        const user = await User.findOne({email:email}).select("-password")
        console.log(user)
        return NextResponse.json({
            message:true,
            data:user
        })
    }catch(error){
        return NextResponse.json({error:error.message})
    }
}