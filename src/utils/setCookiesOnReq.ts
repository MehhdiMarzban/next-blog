export default function setCookiesOnReq(cookies) {
    const options = {
        headers: {
            Cookie:
                `${cookies.get("accessToken")?.name}=${cookies.get("accessToken")?.value};${
                    cookies.get("refreshToken")?.name
                }=${cookies.get("refreshToken")?.value}`,
        },
    };
    return options;
}