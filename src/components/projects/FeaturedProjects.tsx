import { getFeaturedProjects } from "@/content/projects";
import Link from "next/link";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    return (
        <section className="px-8 py-16">
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>

            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="border rounded p-4 hover:bg-gray-50 transition"
                    >
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {project.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}