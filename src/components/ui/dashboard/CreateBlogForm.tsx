"use client";
import { RHFSelect, RHFTextField, SuspenseFeedback } from "@/components/core";
import AppTexts from "@/constants/appTexts";
import useCategory from "@/hooks/useCategory";
import { CreateBlogFormType, createBlogSchema } from "@/validations/dashboard.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateBlogForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateBlogFormType>({ mode: "onTouched", resolver: yupResolver(createBlogSchema) });

    const { categories, isLoading: isLoadingCategories } = useCategory();

    const onSubmit = (data: CreateBlogFormType) => {
        console.log(data);
    };

    return (
        <section className="flex items-center justify-center">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    label={AppTexts.TITLE}
                    name="title"
                    register={register}
                    required
                    errors={errors}
                />
                <RHFTextField
                    label={AppTexts.BRIEF_TEXT}
                    name="briefText"
                    register={register}
                    required
                    errors={errors}
                />
                <RHFTextField
                    label={AppTexts.DESCRIPTION}
                    name="text"
                    register={register}
                    required
                    errors={errors}
                />
                <RHFTextField
                    label={AppTexts.SLUG}
                    name="slug"
                    register={register}
                    required
                    errors={errors}
                />
                <RHFTextField
                    label={AppTexts.READING_TIME}
                    name="readingTime"
                    register={register}
                    required
                    errors={errors}
                />
                {isLoadingCategories ? (
                    <SuspenseFeedback />
                ) : (
                    <RHFSelect
                        label={AppTexts.CATEGORY}
                        name="category"
                        register={register}
                        required
                        options={categories}
                    />
                )}
            </form>
        </section>
    );
};

export default CreateBlogForm;
