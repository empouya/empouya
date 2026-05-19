import Section from "@/components/sections/Section";
import { interests, philosophy } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

export default function PersonalityPreview() {
    return (
        <FadeIn>
            <Section>
                <SectionHeading
                    eyebrow="Mindset"
                    title="How I think about building software"
                    description="I care about useful products, clear systems, and design decisions that make software easier to trust and use."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg">
                        <h3 className="text-xl font-semibold text-foreground">Interests</h3>
                        <ul className="mt-6 space-y-3">
                            {interests.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-card p-8 transition-all hover:shadow-lg">
                        <h3 className="text-xl font-semibold text-foreground">Philosophy</h3>
                        <blockquote className="mt-6 border-l-2 border-accent pl-6">
                            <p className="text-lg italic leading-relaxed text-muted-foreground">
                                &ldquo;{philosophy}&rdquo;
                            </p>
                        </blockquote>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
