"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Container from "@/components/ui/layout/Container";
import MobileMenu from "@/components/ui/MobileMenu";
import { profile } from "@/content/site/profile";

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

    // Get initials from name
    const initials = profile.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("");

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <Container as="nav" className="relative flex h-16 items-center justify-between gap-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-bold tracking-tight transition-colors hover:text-accent"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                        {initials}
                    </span>
                    <span className="hidden sm:inline">Portfolio</span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors ${active
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                                aria-current={active ? "page" : undefined}
                            >
                                {link.label}
                                {active && (
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <MobileMenu links={navLinks} />
                </div>
            </Container>
        </header>
    );
}
