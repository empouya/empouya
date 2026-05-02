"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Container from "@/components/ui/layout/Container";
import MobileMenu from "@/components/ui/MobileMenu";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    function isActive(href: string) {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    }

    return (
        <header className="sticky top-0 z-40 border-b bg-[var(--background)]/95">
            <Container as="nav" className="relative flex min-h-16 items-center justify-between gap-6">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    MyPortfolio
                </Link>

                <div className="hidden items-center gap-4 md:flex">
                    <div className="flex items-center gap-6 text-[15px]">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={[
                                        "border-b-2 pb-1 transition",
                                        active
                                            ? "border-amber-600 text-amber-700"
                                            : "border-transparent hover:opacity-70",
                                    ].join(" ")}
                                    aria-current={active ? "page" : undefined}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <MobileMenu links={navLinks} />
                </div>
            </Container>
        </header>
    );
}
