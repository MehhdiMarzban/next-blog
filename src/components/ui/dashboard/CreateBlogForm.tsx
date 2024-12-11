"use client";
import {
    Button,
    ButtonIcon,
    FileInput,
    RHFSelect,
    RHFTextField,
    SuspenseFeedback,
} from "@/components/core";
import AppTexts from "@/constants/appTexts";
import useCategory from "@/hooks/useCategory";
import useCreateBlog from "@/hooks/useCreateBlog";
import { CreateBlogFormType, createBlogSchema } from "@/validations/dashboard.validation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const CreateBlogForm: React.FC = () => {
    const router = useRouter();
    const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
    const { createBlogQuery, isCreating } = useCreateBlog();
    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<CreateBlogFormType>({ mode: "onChange", resolver: yupResolver(createBlogSchema) });

    const { categories, isLoading: isLoadingCategories } = useCategory();

    const onSubmit = (data: CreateBlogFormType) => {
        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        createBlogQuery(formData, {
            onSuccess: () => {
                router.push("/profile/blogs");
            },
        });
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
                <Controller
                    control={control}
                    name="coverImage"
                    // rules={{
                    //     required: AppTexts.BLOG_COVER_REQUIRED,
                    // }}
                    render={({ field: { value, onChange, name, ...rest } }) => {
                        return (
                            <FileInput
                                value={value?.fileName}
                                onChange={(e) => {
                                    const file = e.target.files ? e.target.files[0] : null;
                                    onChange(file);
                                    e.target.value = "";
                                    file && setCoverImageUrl(URL.createObjectURL(file));
                                }}
                                required
                                label={AppTexts.BLOG_COVER}
                                name={name}
                                errors={errors}
                                accept={["image/jpeg", "image/png", "image/gif"]}
                                rest={rest}
                            />
                        );
                    }}
                />
                {coverImageUrl && !errors["coverImage"]?.message && (
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                            fill
                            sizes="auto"
                            alt="cover-image"
                            src={coverImageUrl}
                            className="object-center object-cover"
                        />
                        <ButtonIcon
                            variant="danger"
                            className="w-6 h-6 absolute top-4 left-4"
                            onClick={() => {
                                setValue("coverImage", null);
                                setCoverImageUrl(null);
                            }}>
                            <XMarkIcon />
                        </ButtonIcon>
                    </div>
                )}
                <Button variant="primary" className="w-full" type="submit" disabled={isCreating}>
                    {isCreating ? AppTexts.LOADING : AppTexts.CREATE_NEW_BLOG}
                </Button>
            </form>
        </section>
    );
};

export default CreateBlogForm;
