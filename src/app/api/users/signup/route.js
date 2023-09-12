import connect from '@/dbConfig/dbConfig'
import User from '@/models/userschema'
import { NextResponse,NextRequest } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request){
    try{
        const reqBody = await request.json()

        const {username,email,password} = reqBody

        //check for user
        const user = await User.findOne({email})

        if(user){
            NextResponse.json({error:"User already exists"},{status:400})
        }

        //create hash password
        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password,salt)

        //create user
        const newUser = new User({
            username:username,
            email:email,
            password:hashpassword
        })

        const saveduser = await newUser.save()
        return NextResponse.json({message:"User signup successful"})
        console.log(saveduser)

    }catch(err){
        console.log(err)
    }
}