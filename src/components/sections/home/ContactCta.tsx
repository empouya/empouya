import Link from "next/link";
import Section from "@/components/sections/Section";

export default function ContactCta() {
    return (
        <Section className="border-t">
            <div className="rounded border p-6">
                <h2 className="text-2xl font-bold">Let’s build something together</h2>
                <p className="mt-3 max-w-2xl text-gray-600">
                    If you’re looking for a developer who cares about product quality, clear structure, and practical solutions, I’d be happy to connect.
                </p>

                <div className="mt-6">
                    <Link
                        href="/contact"
                        className="inline-block rounded border px-4 py-2 transition hover:opacity-80"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </Section>
    );
}
