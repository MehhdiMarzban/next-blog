import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName: any): any {
    return ({ opacityValue }: { opacityValue: any }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", '[class="dark-mode"]'],
    // darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    900: withOpacity("--color-primary-900"),
                    800: withOpacity("--color-primary-800"),
                    700: withOpacity("--color-primary-700"),
                    600: withOpacity("--color-primary-600"),
                    500: withOpacity("--color-primary-500"),
                    400: withOpacity("--color-primary-400"),
                    300: withOpacity("--color-primary-300"),
                    200: withOpacity("--color-primary-200"),
                    100: withOpacity("--color-primary-100"),
                },
                secondary: {
                    900: withOpacity("--color-secondary-900"),
                    800: withOpacity("--color-secondary-800"),
                    700: withOpacity("--color-secondary-700"),
                    600: withOpacity("--color-secondary-600"),
                    500: withOpacity("--color-secondary-500"),
                    400: withOpacity("--color-secondary-400"),
                    300: withOpacity("--color-secondary-300"),
                    200: withOpacity("--color-secondary-200"),
                    100: withOpacity("--color-secondary-100"),
                    50: withOpacity("--color-secondary-50"),
                    0: withOpacity("--color-secondary-0"),
                },
                success: withOpacity("--color-success"),
                warning: withOpacity("--color-warning"),
                error: withOpacity("--color-error"),
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xs": "100%",
                    xs: "425px",
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px",
                },
            },
            fontFamily: {
                sans: ["var(--font-vazir)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
export default config;
