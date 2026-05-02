import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";

export default function Hero() {
    return (
        <FadeIn>
            <Section className="min-h-[70vh] flex items-center">
                <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        {profile.name}
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {profile.role}
                    </h1>

                    <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                        {profile.tagline}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/projects" className="rounded border px-4 py-2 transition hover:opacity-80">
                            View Projects
                        </Link>
                        <Link href="/contact" className="rounded border px-4 py-2 transition hover:opacity-80">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
