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
import useEditBlog from "@/hooks/useEditBlog";
import { BlogType } from "@/types";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { CreateBlogFormType, createBlogSchema } from "@/validations/dashboard.validation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const CreateBlogForm: React.FC<{ blogToEdit: BlogType }> = ({ blogToEdit }) => {
    const router = useRouter();

    //* editing properties
    const {
        _id: editId,
        category,
        briefText,
        coverImage,
        coverImageUrl: prevCoverImageUrl,
        readingTime,
        title,
        text,
        slug,
    } = blogToEdit || {};

    const isEditingSession: boolean = Boolean(editId);

    let editValues = {};
    if (isEditingSession) {
        editValues = {
            category: category._id,
            readingTime,
            title,
            text,
            slug,
            briefText,
            coverImage,
        };
    }

    const { editBlogQuery, isEditing } = useEditBlog();
    const { createBlogQuery, isCreating } = useCreateBlog();
    const { categories, isLoading: isLoadingCategories } = useCategory();

    const [coverImageUrl, setCoverImageUrl] = useState<string | null>(
        () => prevCoverImageUrl ?? null
    );

    //* downloading the image and setting it for editing
    useEffect(() => {
        if (isEditingSession) {
            const loadPrevImage = async () => {
                const file = await imageUrlToFile(prevCoverImageUrl);
                setValue("coverImage", file);
            };
            loadPrevImage();
        }
    }, [editId]);

    const {
        control,
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<CreateBlogFormType>({
        mode: "onChange",
        resolver: yupResolver(createBlogSchema),
        defaultValues: editValues,
    });

    const onSubmit = (data: CreateBlogFormType) => {
        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        const successSubmitLink = "/profile/blogs";
        if (isEditingSession) {
            editBlogQuery(
                { blogId: editId, formData },
                {
                    onSuccess: () => {
                        reset();
                        router.push(successSubmitLink);
                    },
                }
            );
        } else {
            createBlogQuery(formData, {
                onSuccess: () => {
                    reset();
                    router.push(successSubmitLink);
                },
            });
        }
    };

    const getSubmitButtonText = () => {
        if (isCreating || isEditing) {
            return AppTexts.LOADING;
        } else if (isEditingSession) {
            return AppTexts.EDIT_BLOG;
        } else {
            return AppTexts.CREATE_NEW_BLOG;
        }
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
                <Button
                    variant="primary"
                    className="w-full"
                    type="submit"
                    disabled={isCreating || isEditing}>
                    {getSubmitButtonText()}
                </Button>
            </form>
        </section>
    );
};

export default CreateBlogForm;
