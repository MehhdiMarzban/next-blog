import { AxiosRequestConfig } from "axios";
import { getBlogsApi } from "./blogs.service";
import { getAllCommentsApi } from "./comments.service";
import { getAllUsersApi } from "./auth.service";

export const dashboardStaticNumberApi = async (
    options: AxiosRequestConfig
): Promise<{ commentsCounts: string; blogsCounts: string; usersCounts: string }> => {
    const data = await Promise.all([
        getBlogsApi("", options),
        getAllCommentsApi(options),
        getAllUsersApi(options),
    ]);
    return {
        commentsCounts: data[1].data.commentsCount.toString(),
        blogsCounts: data[0].length.toString(),
        usersCounts: data[2].data.users.length.toString(),
    };
};
