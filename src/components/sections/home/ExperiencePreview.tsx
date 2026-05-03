import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { CheckCircleIcon } from "@/components/ui/icons";

export default function ExperiencePreview() {
    const { experience } = profile.cv;

    return (
        <FadeIn>
            <Section className="border-t border-border">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                    <div>
                        <SectionHeading
                            eyebrow="Experience"
                            title={experience.role}
                        />
                        <div className="mt-4">
                            <p className="text-lg font-medium text-accent">{experience.company}</p>
                            <p className="text-sm text-muted-foreground">{experience.date}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {experience.bullets.slice(0, 5).map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 hover:shadow-sm"
                            >
                                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Projects */}
                <div className="mt-16">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        Key Projects
                    </h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {experience.projects.map((project) => (
                            <div
                                key={project.name}
                                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
                            >
                                <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {project.name}
                                </h4>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
