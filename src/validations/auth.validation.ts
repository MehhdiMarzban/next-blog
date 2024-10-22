import AppTexts from "@/constants/appTexts";
import * as yup from "yup";

yup.setLocale({
    string: {
        email: AppTexts.VALIDATIONS.EMAIL,
        min: AppTexts.VALIDATIONS.MIN,
    },
    mixed: {
        required: AppTexts.VALIDATIONS.REQUIRED,
    },
});

export const signupSchema = yup.object({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

export const signinSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

export type SignupFormType = yup.InferType<typeof signupSchema>;
export type SigninFormType = yup.InferType<typeof signinSchema>;
