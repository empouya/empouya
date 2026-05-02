import { getFeaturedProjects } from "@/content/projects";
import Link from "next/link";
import Section from "@/components/sections/Section";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    return (
        <Section>
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="rounded border p-4 transition hover:scale-[1.02] hover:shadow-sm"
                    >
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
