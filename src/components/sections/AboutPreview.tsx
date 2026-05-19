import Link from "next/link";
import Section from "@/components/sections/Section";
import { profile } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function AboutPreview() {
    return (
        <FadeIn>
            <Section className="border-t border-border">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                    <div>
                        <SectionHeading
                            eyebrow="About"
                            title="A developer focused on clarity, performance, and long-term maintainability"
                        />

                        <p className="mt-6 text-muted-foreground leading-relaxed">
                            {profile.shortIntro}
                        </p>

                        <Link
                            href="/about"
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                        >
                            Learn more about me
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {profile.traits.map((trait, index) => (
                            <div
                                key={trait}
                                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <p className="mt-3 text-sm font-medium text-foreground">{trait}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
