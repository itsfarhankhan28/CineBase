import { NextResponse } from "next/server";


export function middleware(request){
    //get path
    const path = request.nextUrl.pathname

    //check public path
    const ispublicpath = path === '/login' || path === '/signup' || path === '/' || path === '/secondpage'

    //get token
    const token = request.cookies.get('token')?.value || ''

    //check if path is public and token is there
    if(ispublicpath && token){
        return NextResponse.redirect(new URL('/secondpage',request.nextUrl))
    }

    if(!ispublicpath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
}

export const config = {
    matcher: [
      '/',
      '/profile',
      '/signup',
      '/login',
      '/secondpage'
    ],
  }