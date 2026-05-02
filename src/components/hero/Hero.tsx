import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import { siteTheme } from "@/lib/site-theme";

export default function Hero() {
    return (
        <FadeIn>
            <Section className="relative flex min-h-[78vh] items-center overflow-hidden">
                <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${siteTheme.gradients.hero}`}
                />
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                        {profile.name}
                    </p>

                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
                        {profile.cv.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {profile.cv.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            className="rounded-full border border-amber-700 bg-amber-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:-translate-y-0.5 hover:bg-amber-700"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
