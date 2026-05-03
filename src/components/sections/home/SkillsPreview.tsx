import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { CodeIcon } from "@/components/ui/icons";

export default function SkillsPreview() {
    const groups = [
        { title: "Frontend", items: profile.skills.frontend, color: "text-blue-500" },
        { title: "Backend", items: profile.skills.backend, color: "text-green-500" },
        { title: "Tools & DevOps", items: profile.skills.tools, color: "text-purple-500" },
        { title: "AI & Data", items: profile.skills.ai, color: "text-orange-500" },
    ];

    return (
        <FadeIn>
            <Section className="border-t border-border">
                <SectionHeading
                    eyebrow="Capabilities"
                    title="Skills & Tech Stack"
                    description="The technologies I use to design, build, and ship modern web applications."
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {groups.map((group) => (
                        <div
                            key={group.title}
                            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ${group.color}`}>
                                    <CodeIcon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:border-accent/30"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </FadeIn>
    );
}
