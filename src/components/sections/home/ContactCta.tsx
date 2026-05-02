import Link from "next/link";
import Section from "@/components/sections/Section";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactCta() {
    return (
        <FadeIn>
            <Section className="border-t border-slate-200/70">
                <div className="rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-8 shadow-[0_18px_50px_rgba(217,119,6,0.08)]">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                        Let&apos;s build something together
                    </h2>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        If you&apos;re looking for a developer who cares about product quality, clear structure, and practical solutions, I&apos;d be happy to connect.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/contact"
                            className="inline-flex rounded-full border border-amber-700 bg-amber-600 px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5 hover:bg-amber-700"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
