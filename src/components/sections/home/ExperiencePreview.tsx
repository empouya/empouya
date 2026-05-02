import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";

export default function SkillsPreview() {
    const groups = [
        { title: "Frontend", items: profile.skills.frontend },
        { title: "Backend", items: profile.skills.backend },
        { title: "Tools", items: profile.skills.tools },
    ];

    return (
        <Section>
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold">Skills</h2>
                    <p className="mt-2 max-w-2xl text-gray-600">
                        Technologies and tools I use to build modern web applications.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {groups.map((group) => (
                        <div key={group.title} className="rounded border p-4">
                            <h3 className="text-lg font-semibold">{group.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded border px-2 py-1 text-sm text-gray-700"
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
