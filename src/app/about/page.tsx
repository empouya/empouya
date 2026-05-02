import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Eid Mohammad Ahmadi, a Full Stack Engineer focused on Python, React, and scalable systems.",
};


export default function AboutPage() {
    return (
        <Section>
            <div className="max-w-5xl space-y-12">
                <SectionHeading
                    eyebrow="About"
                    title="Engineering scalable applications with Python, React, and AI-focused thinking"
                    description={profile.cv.summary}
                />

                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
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
                    <SectionHeading eyebrow="Skills" title="Technical Profile" />
                    <div className="mt-8 grid gap-6">
                        {profile.cv.detailedSkills.map((skill) => (
                            <div
                                key={skill.label}
                                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                            >
                                <h3 className="text-lg font-semibold text-slate-900">{skill.label}</h3>
                                <p className="mt-2 text-slate-600">{skill.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <h2 className="text-lg font-semibold text-slate-900">Education</h2>
                        <p className="mt-3 text-slate-700">{profile.cv.education.degree}</p>
                        <p className="mt-1 text-slate-600">{profile.cv.education.school}</p>
                        <p className="mt-1 text-slate-600">{profile.cv.education.date}</p>
                        <p className="mt-2 text-slate-600">{profile.cv.education.details}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <h2 className="text-lg font-semibold text-slate-900">Languages</h2>
                        <ul className="mt-3 space-y-2 text-slate-600">
                            {profile.cv.languages.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <h2 className="text-lg font-semibold text-slate-900">Soft Skills</h2>
                        <ul className="mt-3 space-y-2 text-slate-600">
                            {profile.cv.softSkills.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}
