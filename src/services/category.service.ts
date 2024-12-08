import { CategoryType } from "@/types";
import http from "./http.service";

export const getCategoriesApi = async (): Promise<{ categories: CategoryType[] }> => {
    return http.get("/category/list").then(({ data }) => data.data);
};
