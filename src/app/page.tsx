import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/core";
import appTexts from "@/constants/appTexts";

export const metadata: Metadata = {
    title: appTexts.HOME,
    description: appTexts.APP_SUBTITLE_1,
};

export default function Home() {
    return (
        <div>
            <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
                {appTexts.APP_TITLE}{" "}
            </h1>

            <div>
                <p className="text-center text-secondary-500 text-lg leading-loose">
                    {appTexts.APP_SUBTITLE_1}
                </p>
                <p className="text-center text-secondary-500 text-lg leading-loose">
                    {appTexts.APP_SUBTITLE_2}
                </p>
                <div className="flex justify-center gap-x-8 w-full mt-10">
                    <Button variant="outline">
                        <Link href="/blogs">{appTexts.READING_BLOGS}</Link>
                    </Button>
                    <Button variant="primary">
                        <Link href="/profile">{appTexts.MANAGING_BLOGS}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
