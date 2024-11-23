import { SignupType, ResponseType, SigninType, UserType } from "@/types";
import http from "./http.service";

export const signupApi = (signupForm: SignupType): Promise<ResponseType> => {
    return http.post("/user/signup", signupForm).then((data) => data.data);
};

export const signinApi = (signinForm: SigninType): Promise<ResponseType> => {
    return http.post("/user/signin", signinForm).then((data) => data.data);
};

export const getUserApi = (): Promise<ResponseType> => {
    return http.get("/user/profile").then((data) => data.data);
};

export const logoutApi = (): Promise<ResponseType> => {
    return http.post("/user/logout");
};

export const getAllUsersApi = (options): Promise<{ data: { users: UserType[] } }> => {
    return http.get("/user/list", options).then((data) => data.data);
};
