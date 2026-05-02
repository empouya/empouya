"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const initialTheme = savedTheme ?? "light";

        document.documentElement.dataset.theme = initialTheme;
        setTheme(initialTheme);
        setMounted(true);
    }, []);

    function toggleTheme() {
        const nextTheme: Theme = theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    }

    if (!mounted) {
        return (
            <button
                type="button"
                className="rounded-full border px-3 py-1.5 text-xs font-medium"
                aria-label="Toggle theme"
            >
                Theme
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border px-3 py-1.5 text-xs font-medium"
            aria-label="Toggle theme"
        >
            {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
    );
}
