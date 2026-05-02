import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SkillsPreview() {
    const groups = [
        { title: "Frontend", items: profile.skills.frontend },
        { title: "Backend", items: profile.skills.backend },
        { title: "Tools", items: profile.skills.tools },
    ];

    return (
        <Section className="border-t border-slate-200/70">
            <div className="space-y-10">
                <SectionHeading
                    eyebrow="Capabilities"
                    title="Skills & Tech Stack"
                    description="The technologies I use to design, build, and ship modern web applications."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {groups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                        >
                            <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
