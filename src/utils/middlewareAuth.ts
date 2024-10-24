import { UserType } from "@/types";
import { NextRequest } from "next/server";

const middlewareAuth = async (request: NextRequest) => {
    const accessToken = request.cookies.get("accessToken");
    const refreshToken = request.cookies.get("refreshToken");
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
        },
    });
    const { data } = await response.json();
    const { user }: { user: UserType } = data || {};
    return user;
};

export default middlewareAuth;
