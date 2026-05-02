import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";

export default function AboutPage() {
    const groups = [
        { title: "Frontend", items: profile.skills.frontend },
        { title: "Backend", items: profile.skills.backend },
        { title: "Tools", items: profile.skills.tools },
    ];

    return (
        <Section>
            <div className="max-w-4xl space-y-10">
                <div>
                    <h1 className="text-3xl font-bold">About</h1>
                    <div className="mt-6 space-y-4 text-gray-700">
                        {profile.about.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Working Style</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {profile.traits.map((trait) => (
                            <span
                                key={trait}
                                className="rounded border px-3 py-1 text-sm text-gray-700"
                            >
                                {trait}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Skills</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {groups.map((group) => (
                            <div key={group.title} className="rounded border p-4">
                                <h3 className="text-lg font-semibold">{group.title}</h3>
                                <ul className="mt-4 space-y-2 text-gray-700">
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
