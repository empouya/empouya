"use client";

import { useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-1 rounded text-sm"
        >
            {dark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}