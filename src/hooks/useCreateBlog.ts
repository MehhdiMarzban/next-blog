import { createBlogApi } from "@/services/blogs.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateBlog = () => {

    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate: createBlogQuery } = useMutation({
        mutationKey: ["blog"],
        mutationFn: createBlogApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey: "blogs"});
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message);
        }
    });

    return {isCreating, createBlogQuery};
};

export default useCreateBlog;