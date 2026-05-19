import Section from "@/components/sections/Section";
import { profile } from "@/content/site";
import { about, interests, philosophy } from "@/content/site";
import { detailedSkills } from "@/content/site";
import { education, languages } from "@/content/site";
import { availability } from "@/content/site";
import { contact } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Eid Mohammad Ahmadi, a Full Stack Engineer focused on Python, React, and scalable systems.",
};

export default function AboutPage() {
    return (
        <main>
            <FadeIn>
                <Section>
                    <div className="max-w-4xl">
                        <SectionHeading
                            eyebrow="About"
                            title="Engineering scalable applications with Python, React, and AI-focused thinking"
                            description={profile.tagline}
                        />

                        {/* About paragraphs */}
                        <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed">
                            {about.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </Section>
            </FadeIn>

            {/* Working Style */}
            <FadeIn>
                <Section className="border-t border-border">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-2xl border border-border bg-card p-8">
                            <h2 className="text-xl font-semibold text-foreground">Working Style</h2>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {profile.traits.map((trait) => (
                                    <span
                                        key={trait}
                                        className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-8">
                            <h2 className="text-xl font-semibold text-foreground">Soft Skills</h2>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {profile.traits.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </FadeIn>

            {/* Technical Skills */}
            <FadeIn>
                <Section className="border-t border-border">
                    <SectionHeading eyebrow="Skills" title="Technical Profile" />
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {detailedSkills.map((skill) => (
                            <div
                                key={skill.label}
                                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
                            >
                                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                                    {skill.label}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{skill.value}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            </FadeIn>

            {/* Education & Languages */}
            <FadeIn>
                <Section className="border-t border-border">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-border bg-card p-6">
                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                                Education
                            </h2>
                            <p className="mt-4 text-lg font-semibold text-foreground">{education.degree}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{education.date}</p>
                            <p className="mt-3 text-sm text-muted-foreground">{education.details}</p>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6">
                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                                Languages
                            </h2>
                            <ul className="mt-4 space-y-2">
                                {languages.map((item) => (
                                    <li key={item} className="text-foreground">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-card p-6">
                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                                Availability
                            </h2>
                            <p className="mt-4 text-lg font-semibold text-foreground">{availability.status}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{availability.type}</p>
                            <p className="mt-3 text-sm text-muted-foreground">{contact.location}</p>
                        </div>
                    </div>
                </Section>
            </FadeIn>
        </main>
    );
}
