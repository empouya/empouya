import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
    const groups = [
        { title: "Frontend", items: profile.skills.frontend },
        { title: "Backend", items: profile.skills.backend },
        { title: "Tools", items: profile.skills.tools },
    ];

    return (
        <Section>
            <div className="max-w-5xl space-y-12">
                <SectionHeading
                    eyebrow="About"
                    title="Building software with structure, clarity, and long-term care"
                    description="A little more about how I work, what I value, and the technologies I use most often."
                />

                <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
                    <div className="space-y-4 text-slate-700">
                        {profile.about.map((paragraph) => (
                            <p key={paragraph} className="leading-8">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <h2 className="text-lg font-semibold text-slate-900">Working Style</h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {profile.traits.map((trait) => (
                                <span
                                    key={trait}
                                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                                >
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <SectionHeading
                        eyebrow="Stack"
                        title="Tools I rely on most"
                    />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {groups.map((group) => (
                            <div
                                key={group.title}
                                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                            >
                                <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                                <ul className="mt-4 space-y-2 text-slate-600">
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
