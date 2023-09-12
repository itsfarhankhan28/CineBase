import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export function getTokenData(request){
    try{
        const token = request.cookies.get("token")?.value || ""
        const decodeddata = jwt.verify(token, process.env.SECRET_KEY)
        return decodeddata.email
    }catch(error){
        return NextResponse.json({error:error.message})
    }
}