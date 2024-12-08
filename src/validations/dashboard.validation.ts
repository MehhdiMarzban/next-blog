import * as yup from "yup";
import AppTexts from "@/constants/appTexts";

yup.setLocale({
    string: {
        min: AppTexts.VALIDATIONS.MIN,
    },
    mixed: {
        required: AppTexts.VALIDATIONS.REQUIRED,
    },
});

export const createBlogSchema = yup.object({
    title: yup.string().min(5).required(),
    briefText: yup.string().min(10).required(),
    text: yup.string().min(10).required(),
    slug: yup.string().required(),
    readingTime: yup.number().positive().integer().required().typeError(AppTexts.NUMBER_ERROR),
    category: yup.string().required(),
});

export type CreateBlogFormType = yup.InferType<typeof createBlogSchema>;
