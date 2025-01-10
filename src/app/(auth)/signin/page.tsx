"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, RHFTextField } from "@/components/core";
import AppTexts from "@/constants/appTexts";
import { SigninFormType, signinSchema } from "@/validations/auth.validation";
import { useAuth } from "@/contexts/auth.context";
import { SigninType } from "@/types";

const SigninPage: React.FC = () => {
    const { signin } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm<SigninFormType>({ resolver: yupResolver(signinSchema), mode: "onTouched" });

    const onSubmit = async (data: SigninType) => {
        await signin(data);
    };

    return (
        <section>
            <h1 className="text-lg font-bold text-center bg-secondary-200 py-2 rounded-md mb-4">
                {AppTexts.SIGNIN}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <RHFTextField
                    label="ایمیل"
                    name="email"
                    errors={errors}
                    register={register}
                    dir="ltr"
                    required
                />
                <RHFTextField
                    label="رمز عبور"
                    name="password"
                    errors={errors}
                    register={register}
                    dir="ltr"
                    type="password"
                    required
                />

                {!isLoading && (
                    <Button variant="primary" className="w-full mt-4" type="submit">
                        {AppTexts.SIGNIN}
                    </Button>
                )}
            </form>
        </section>
    );
};

export default SigninPage;
