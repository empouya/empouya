import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PersonalityPreview() {
    return (
        <Section>
            <div className="space-y-10">
                <SectionHeading
                    eyebrow="Mindset"
                    title="How I think about building software"
                    description="I care about useful products, clear systems, and design decisions that make software easier to trust and use."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <h3 className="text-lg font-semibold text-slate-900">Interests</h3>
                        <ul className="mt-4 space-y-2 text-slate-600">
                            {profile.interests.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                        <h3 className="text-lg font-semibold text-slate-900">Philosophy</h3>
                        <p className="mt-4 leading-7 text-slate-600">{profile.philosophy}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
