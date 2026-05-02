import Link from "next/link";
import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
    return (
        <Section className="border-t border-slate-200/70">
            <SectionHeading
                eyebrow="About"
                title="A developer focused on clarity, performance, and long-term maintainability"
                description={profile.shortIntro}
            />

            <div className="mt-8 flex flex-wrap gap-3">
                {profile.traits.map((trait) => (
                    <span
                        key={trait}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                        {trait}
                    </span>
                ))}
            </div>

            <Link
                href="/about"
                className="mt-6 inline-flex text-sm font-medium text-amber-700 hover:text-amber-800"
            >
                Learn more →
            </Link>
        </Section>
    );
}
