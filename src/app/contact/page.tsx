import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
    return (
        <Section>
            <div className="max-w-4xl space-y-10">
                <SectionHeading
                    eyebrow="Contact"
                    title="Let&apos;s talk about your next project"
                    description="If you'd like to discuss a collaboration, freelance work, or a product idea, feel free to reach out."
                />

                <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Email
                            </h2>
                            <a
                                href={`mailto:${profile.contact.email}`}
                                className="mt-2 inline-block break-all text-slate-900 underline"
                            >
                                {profile.contact.email}
                            </a>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                GitHub
                            </h2>
                            <a
                                href={profile.contact.github}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-block break-all text-slate-900 underline"
                            >
                                {profile.contact.github}
                            </a>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                LinkedIn
                            </h2>
                            <a
                                href={profile.contact.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-block break-all text-slate-900 underline"
                            >
                                {profile.contact.linkedin}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
