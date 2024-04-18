<<<<<<< HEAD
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const tokens=request.cookies.has("next-auth.session-token")
    if (tokens) { 
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/createmenu',
=======
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const tokens=request.cookies.has("next-auth.session-token")
    if (tokens) { 
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/createmenu',
>>>>>>> a8c45a5d7ac4667f726e8184c4e7feefb728aea0
} 