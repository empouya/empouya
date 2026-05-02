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
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
            <Container as="nav" className="flex min-h-18 items-center justify-between gap-6">
                <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
                    MyPortfolio
                </Link>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 text-sm text-slate-600 sm:gap-6 sm:text-[15px]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-slate-900"
                            >
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
