import Link from "next/link";
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
    return (
        <header className="sticky top-0 z-40 border-b bg-[var(--background)]/95">
            <Container as="nav" className="relative flex min-h-16 items-center justify-between gap-6">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    MyPortfolio
                </Link>

                <div className="hidden items-center gap-4 md:flex">
                    <div className="flex items-center gap-6 text-[15px]">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:opacity-70">
                                {link.label}
                            </Link>
                        ))}
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
