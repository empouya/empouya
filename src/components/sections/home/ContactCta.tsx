import Link from "next/link";
import Section from "@/components/sections/Section";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRightIcon, MailIcon } from "@/components/ui/icons";
import { contact } from "@/content/site";

export default function ContactCta() {
    return (
        <FadeIn>
            <Section className="border-t border-border">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/10 via-card to-card p-8 sm:p-12">
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                            <MailIcon className="h-8 w-8" />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Let&apos;s build something together
                        </h2>

                        <p className="mt-4 max-w-xl text-muted-foreground text-pretty">
                            If you&apos;re looking for a developer who cares about product quality, clear structure, and practical solutions, I&apos;d be happy to connect.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                Get in Touch
                                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <a
                                href={`mailto:${contact.email}`}
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                            >
                                {contact.email}
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </FadeIn>
    );
}
