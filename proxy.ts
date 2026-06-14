import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/scan"];
const authRoutes = ["/login", "/register", "/forgot-password"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  const isProtected = protectedRoutes.some((route) =>
    pathname === route || pathname.startsWith(route + "/")
  );
  const isAuthRoute = authRoutes.some((route) =>
    pathname === route || pathname.startsWith(route + "/")
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/scan", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
