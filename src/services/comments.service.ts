import { CommentType, ResponseType } from "@/types";
import http from "./http.service";
import { AxiosRequestConfig } from "axios";

export const createCommentApi = async (
    data,
    options: AxiosRequestConfig
): Promise<ResponseType> => {
    return http.post("/comment/add", data, options).then((data) => data.data);
};

export const getAllCommentsApi = async (
    options: AxiosRequestConfig
): Promise<{ data: { comments: CommentType[]; commentsCount: number } }> => {
    return http.get("/comment/list", options).then((data) => data.data);
};
