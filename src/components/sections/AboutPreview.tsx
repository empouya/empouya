import Link from "next/link";
import Section from "@/components/sections/Section";

export default function AboutPreview() {
    return (
        <Section className="border-t">
            <h2 className="mb-4 text-2xl font-bold">About Me</h2>

            <p className="max-w-2xl text-gray-600">
                I&apos;m a developer focused on building clean, scalable systems and intuitive user experiences.
                I enjoy solving real-world problems with code and continuously improving system design.
            </p>

            <Link href="/about" className="mt-4 inline-block underline">
                Learn more →
            </Link>
        </Section>
    );
}
