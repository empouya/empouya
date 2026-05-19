import Link from "next/link";
import Container from "@/components/ui/layout/Container";
import { profile } from "@/content/site";
import { contact } from "@/content/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <Container className="py-12">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <Link href="/" className="text-lg font-bold tracking-tight">
                            {profile.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            {profile.role} based in {contact.location}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                            aria-label="GitHub"
                        >
                            <GithubIcon className="h-5 w-5" />
                        </a>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon className="h-5 w-5" />
                        </a>
                        <a
                            href={`mailto:${contact.email}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                            aria-label="Email"
                        >
                            <MailIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
