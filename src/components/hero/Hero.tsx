import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-start px-8">
            <h1 className="text-5xl font-bold leading-tight">
                Full Stack Developer<br />
                building scalable web experiences
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl">
                I design and build performant, user-focused applications with modern web technologies.
            </p>

            <div className="mt-6 flex gap-4">
                <Link href="/projects" className="border px-4 py-2 rounded">
                    View Projects
                </Link>
                <Link href="/contact" className="border px-4 py-2 rounded">
                    Contact Me
                </Link>
            </div>
        </section>
    );
}