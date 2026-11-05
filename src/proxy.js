import { NextResponse } from 'next/server'
import { authClient } from './lib/auth-client'
import { auth } from './lib/auth'
import { headers } from 'next/headers'


export  async  function proxy(request) {
    const session=await auth.api.getSession({
         headers: await headers()
    })
    const userData=session?.user
   if(userData){
    return NextResponse.next()
   }
  return NextResponse.redirect(new URL('/signIn', request.url))
}


export const config = {
  matcher:[ '/career','/news/:newsId*']
}