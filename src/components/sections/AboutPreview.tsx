import Link from "next/link";
import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";

export default function AboutPreview() {
    return (
        <Section className="border-t">
            <h2 className="mb-4 text-2xl font-bold">About Me</h2>

            <p className="max-w-2xl text-gray-600">{profile.shortIntro}</p>

            <div className="mt-6 flex flex-wrap gap-2">
                {profile.traits.map((trait) => (
                    <span
                        key={trait}
                        className="rounded border px-3 py-1 text-sm text-gray-700"
                    >
                        {trait}
                    </span>
                ))}
            </div>

            <Link href="/about" className="mt-4 inline-block underline">
                Learn more →
            </Link>
        </Section>
    );
}
