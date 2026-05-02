import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block rounded border p-4 transition hover:scale-[1.01] hover:shadow-sm"
        >
            <div className="space-y-3">
                <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded border px-2 py-1 text-xs text-gray-700"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <ul className="space-y-1 text-sm text-gray-600">
                    {project.results.slice(0, 2).map((result) => (
                        <li key={result}>- {result}</li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}
