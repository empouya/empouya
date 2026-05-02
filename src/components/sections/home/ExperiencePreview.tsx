import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

export default function ExperiencePreview() {
    return (
        <FadeIn>
            <Section className="border-t border-slate-200/70">
                <div className="space-y-10">
                    <SectionHeading
                        eyebrow="Progress"
                        title="Experience & Achievements"
                        description="A concise view of the direction, standards, and project momentum behind my work."
                    />

                    <ul className="grid gap-4 md:grid-cols-3">
                        {profile.achievements.map((item) => (
                            <li
                                key={item}
                                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </FadeIn>
    );
}
