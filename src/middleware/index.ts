import { NextRequest, NextResponse } from 'next/server'

const PRIVATE_PATHS = ['/dashboard', '/skills', '/progress']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isPrivate = PRIVATE_PATHS.some((path) => pathname.startsWith(path))

  const token = request.cookies.get('access_token')?.value

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
