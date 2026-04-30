import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b p-4 flex justify-between">
            <span className="font-bold">MyPortfolio</span>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}