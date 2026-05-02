import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";

export default function ContactPage() {
    return (
        <Section>
            <div className="max-w-3xl space-y-8">
                <div>
                    <h1 className="text-3xl font-bold">Contact</h1>
                    <p className="mt-4 text-gray-600">
                        If you’d like to discuss a project, collaboration, or opportunity, feel free to reach out.
                    </p>
                </div>

                <div className="space-y-4 rounded border p-6">
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Email
                        </h2>
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="mt-1 inline-block text-gray-800 underline"
                        >
                            {profile.contact.email}
                        </a>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                            GitHub
                        </h2>
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-block text-gray-800 underline"
                        >
                            {profile.contact.github}
                        </a>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                            LinkedIn
                        </h2>
                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-block text-gray-800 underline"
                        >
                            {profile.contact.linkedin}
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
