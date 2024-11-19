"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, RHFTextField } from "@/components/core";
import appTexts from "@/constants/appTexts";
import { signupSchema, SignupFormType } from "@/validations/auth.validation";
import {useAuth} from "@/contexts/auth.context";
import { useRouter } from "next/navigation";

const SignupPage: React.FC = () => {
    const {signup} = useAuth();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm<SignupFormType>({ resolver: yupResolver(signupSchema), mode: "onTouched" });

    const onSubmit = async (data) => {
        await signup(data);
        router.replace("/");
    };

    return (
        <section>
            <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">
                {appTexts.SIGNUP}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <RHFTextField
                    label="نام و نام خانوادگی"
                    name="name"
                    errors={errors}
                    register={register}
                    isRequired
                />
                <RHFTextField
                    label="ایمیل"
                    name="email"
                    errors={errors}
                    register={register}
                    dir="ltr"
                    isRequired
                />
                <RHFTextField
                    label="رمز عبور"
                    name="password"
                    errors={errors}
                    register={register}
                    dir="ltr"
                    type="password"
                    isRequired
                />

                {!isLoading && (
                    <Button variant="primary" className="w-full mt-4" type="submit">
                        {appTexts.SIGNUP}
                    </Button>
                )}
            </form>
        </section>
    );
};

export default SignupPage;
