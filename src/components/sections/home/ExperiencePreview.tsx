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
                        eyebrow="Experience"
                        title={profile.cv.experience.role}
                        description={profile.cv.experience.date}
                    />

                    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                            <ul className="space-y-3 text-slate-700">
                                {profile.cv.experience.bullets.map((item) => (
                                    <li key={item}>- {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            {profile.cv.experience.projects.map((project) => (
                                <div
                                    key={project.name}
                                    className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                                >
                                    <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                                    <p className="mt-2 text-slate-600">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
