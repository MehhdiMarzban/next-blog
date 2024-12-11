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
    coverImage: yup
        .mixed<any>()
        .required()
        .test("fileType", AppTexts.FILE_TYPE_ERROR, (value) => {
            if (!value) return false;
            //* this files allowed to upload in server
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            //* check file type
            return allowedTypes.includes(value.type);
        })
        .test("fileSize", AppTexts.FILE_SIZE_ERROR, (value) => {
            if (!value) return false;

            //* check file size less than 2 Mb
            return value.size <= 2097152;
        }),
});

export type CreateBlogFormType = yup.InferType<typeof createBlogSchema>;
