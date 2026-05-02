import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Container from "@/components/ui/layout/Container";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b bg-[var(--background)]/95">
            <Container as="nav" className="flex min-h-16 items-center justify-between gap-6">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    MyPortfolio
                </Link>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 text-sm sm:gap-6 sm:text-[15px]">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:opacity-70">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}
