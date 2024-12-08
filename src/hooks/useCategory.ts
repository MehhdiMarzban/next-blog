"use client";

import { getCategoriesApi } from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
    const { isLoading, data } = useQuery({ queryKey: ["categories"], queryFn: getCategoriesApi });

    const { categories: rawCategories = [] } = data || {};

    const categories = rawCategories.map((item) => ({
        label: item.title,
        value: item._id,
    }));

    const categoriesTransformed = rawCategories.map((item) => ({
        label: item.englishTitle,
        value: item._id,
    }));

    return { isLoading, rawCategories, categories, categoriesTransformed };
};

export default useCategory;
