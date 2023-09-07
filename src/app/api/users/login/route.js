import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import { NextRequest,NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connect()

export default async function POST(request){
    try{
        const reqBody = request.json()
        const {email,password} = reqBody

        //check user
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error:"User not found"})
        }

        const checkedpassword = await bcrypt.compare(password,user.password)

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

    }catch(err){
        NextResponse.json({error:"Error in Logging in User"},{status:400})
    }
}