import toast from "react-hot-toast";

import { editBlogApi } from "@/services/blogs.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditBlog = () => {
    const queryClient = useQueryClient();
    const { isPending: isEditing, mutate: editBlogQuery } = useMutation({
        mutationKey: ["updated blog"],
        mutationFn: editBlogApi,
        onSuccess: (data) => {
            toast.success(data?.message);
            queryClient.invalidateQueries({ queryKey: "blogs" });
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message);
        },
    });

    return { isEditing, editBlogQuery };
};

export default useEditBlog;
