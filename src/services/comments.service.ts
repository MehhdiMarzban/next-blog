import { ResponseType } from "@/types";
import http from "./http.service";
import { AxiosRequestConfig } from "axios";

export const createCommentApi = async (
    data,
    options: AxiosRequestConfig
): Promise<ResponseType> => {
    return http.post("/comment/add", data, options).then((data) => data.data);
};
