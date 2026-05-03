"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@/components/ui/icons";

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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-accent"
                aria-expanded={open}
                aria-label="Toggle navigation menu"
            >
                {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>

            {open && (
                <div className="fixed inset-0 top-[65px] z-50 bg-background/98 backdrop-blur-sm">
                    <nav className="flex flex-col p-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-border py-4 text-lg font-medium transition-colors hover:text-accent"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
