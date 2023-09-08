import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request){
    try{
        const reqBody = await request.json()
        console.log(reqBody)
        const {email,password} = reqBody

        //check user
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error:"User not found"})
        }

        const checkedpassword = await bcryptjs.compare(password,user.password)

        if(!checkedpassword){
            return NextResponse.json({error:"Password is incorrect"})
        }

        //create token
        const tokendata = {
            id:user._id,
            email:user.email,
            password:user.password
        }

        const token = await jwt.sign(tokendata , process.env.SECRET_KEY , {expiresIn:"1d"})

        const response = NextResponse.json({
            success:true
        })

        response.cookies.set('token',token,{httpOnly:true})

        return response

    }catch(err){
        return NextResponse.json({error:"Error in Logging in User"},{status:400})
    }
}