import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Section from "@/components/sections/Section";

export default function Hero() {
    return (
        <FadeIn>
            <Section className="min-h-[70vh] flex items-center">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Full Stack Developer
                    </h1>

                    <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                        Building scalable, performant web applications with modern technologies.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/projects" className="rounded border px-4 py-2 transition hover:opacity-80">
                            View Projects
                        </Link>
                        <Link href="/contact" className="rounded border px-4 py-2 transition hover:opacity-80">
                            Contact
                        </Link>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
