import { NextRequest, NextResponse } from "next/server";
import middlewareAuth from "@/utils/middlewareAuth";
import { UserType } from "@/types";

export const middleware = async (request: NextRequest) => {
    const { url } = request;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/profile")) {
        const user: UserType = await middlewareAuth(request);
        if (!user) return NextResponse.redirect(new URL("/signin", url));
    }
    if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
        const user: UserType = await middlewareAuth(request);
        if (user) return NextResponse.redirect(new URL("/", url));
    }
};

export const config = {
    matcher: ["/profile/:path*", "/signin/:path*", "/signup/:path*"],
};
