import User from "./User";

export interface Signup {
    email : string;
    name: string;
    password;
}

export interface Signin{
    email: string;
    password: string;
}

export interface AuthContextReducer {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: true;
    error: object | null;
}

export interface AuthContext extends Omit<AuthContextReducer, "error">{
    signin:  (data : Signin) => Promise<void>;
    signup: (data: Signup) => Promise<void>;
    logout: () => Promise<void>;
    getUser: () => Promise<void>;
}