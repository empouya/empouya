import { projects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-6">Projects</h1>

            <div className="grid gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="border p-4 rounded hover:bg-gray-50"
                    >
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-600">
                            {project.description}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}