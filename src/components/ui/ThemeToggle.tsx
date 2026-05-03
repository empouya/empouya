"use client";

import { useTheme } from "@/components/ui/ThemeProvider";
import { SunIcon, MoonIcon } from "@/components/ui/icons";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-accent hover:bg-accent/10"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    );
}
