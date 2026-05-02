"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MobileMenuProps = {
    links: { href: string; label: string }[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="rounded-full border px-3 py-1.5 text-sm font-medium"
                aria-expanded={open}
                aria-label="Toggle navigation menu"
            >
                {open ? "Close" : "Menu"}
            </button>

            {open ? (
                <div className="absolute left-0 top-full z-50 w-full border-b bg-[var(--background)]">
                    <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4 sm:px-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="border-b py-3 text-sm last:border-b-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            ) : null}
        </div>
    );
}
