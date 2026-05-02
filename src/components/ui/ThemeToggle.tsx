"use client";

import { useState } from "react";

export default function ThemeToggle() {
    const [label, setLabel] = useState("Light");

    return (
        <button
            type="button"
            onClick={() => setLabel((current) => (current === "Light" ? "Warm" : "Light"))}
            className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800 hover:bg-amber-100"
            aria-label="Theme preview toggle"
        >
            {label}
        </button>
    );
}
