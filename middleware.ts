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

} 