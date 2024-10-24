"use client";
import { getUserApi, signinApi, signupApi } from "@/services/auth.service";
import { AuthContextReducerType, AuthContextType, SigninType, SignupType } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext<Partial<AuthContextType>>({});

const initialState: AuthContextReducerType = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
};

const authReducer = (
    state,
    action: {
        type: "loading" | "rejected" | "signin" | "signup" | "logout" | "user/loaded";
        payload?: any;
    }
) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            };
        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "signin":
        case "signup":
        case "user/loaded":
            return {
                user: action.payload,
                isAuthenticated: true,
            };
        case "logout":
            return {
                user: null,
                isAuthenticated: false,
            };
        default:
            throw new Error("unknown action!");
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(authReducer, initialState);

    const signin = async (value: SigninType) => {
        dispatch({ type: "loading" });
        try {
            const {
                data: { message, user },
            } = await signinApi(value);
            dispatch({ type: "signin", payload: user });
            toast.success(message);
            router.push("/profile");
        } catch (error: any) {
            const err = error?.response?.data?.message;
            toast.error(err);
            dispatch({ type: "rejected", payload: error });
        }
    };

    const signup = async (value: SignupType) => {
        dispatch({ type: "loading" });
        try {
            const {
                data: { message, user }
            } = await signupApi(value);
            dispatch({ type: "signup", payload: { user } });
            toast.success(message);
        } catch (error: any) {
            const err = error?.response?.data?.message;
            toast.error(err);
            dispatch({ type: "rejected", payload: err });
        }
    };

    const getUser = async () => {
        dispatch({ type: "loading" });
        try {
            const {
                data: { user },
            } = await getUserApi();
            dispatch({ type: "user/loaded", payload: user });
        } catch (error: any) {
            const err = error?.response?.data?.message;
            dispatch({ type: "rejected", payload: err });
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            await getUser();
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider
            value={useMemo(
                () => ({ signin, signup, getUser, user, isAuthenticated, isLoading }),
                [signin, signup, getUser, user, isAuthenticated, isLoading]
            )}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context: AuthContextType = useContext(AuthContext) as AuthContextType;
    if (!context) throw new Error("not found context!");
    return context;
};
