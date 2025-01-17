import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/auth";

const protectedRoutes = ["/user-info"];

export default async function middleware(request: NextRequest) {

  const session = await auth();

  const { pathname } = request.nextUrl;

//   find will return the value, some will return a boolean 
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  console.log("isProtected", isProtected);
  

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}