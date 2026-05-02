import Section from "@/components/sections/Section";
import { profile } from "@/content/site/profile";

export default function PersonalityPreview() {
    return (
        <Section>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold">How I Think</h2>
                    <p className="mt-2 max-w-2xl text-gray-600">
                        I care about building useful software with clarity, intention, and long-term maintainability.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded border p-4">
                        <h3 className="text-lg font-semibold">Interests</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            {profile.interests.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded border p-4">
                        <h3 className="text-lg font-semibold">Philosophy</h3>
                        <p className="mt-4 text-gray-700">{profile.philosophy}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
