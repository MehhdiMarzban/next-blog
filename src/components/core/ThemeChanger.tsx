"use client";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "./ButtonIcon";

const ThemeChanger = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    const handleChangeTheme = () => {
        document.documentElement.classList.toggle("dark-mode");
        const isDarkMode = document.documentElement.classList.contains("dark-mode");
        setIsDark(isDarkMode);
    };

    return (
        <ButtonIcon
            className="fixed bottom-8 left-8 bg-secondary-700 text-secondary-0 rounded-lg size-8 z-50"
            onClick={handleChangeTheme}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </ButtonIcon>
    );
};

export default ThemeChanger;
