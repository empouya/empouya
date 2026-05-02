import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border bg-[var(--surface)] p-5 transition duration-200 ease-out hover:-translate-y-1 hover:border-amber-500 hover:shadow-md"
        >
            <div className="mb-5 h-32 rounded-xl border bg-amber-50 transition duration-200 ease-out group-hover:bg-amber-100" />

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-amber-700">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border px-2.5 py-1 text-xs font-medium"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <ul className="space-y-2 text-sm text-[var(--muted)]">
                    {project.results.slice(0, 2).map((result) => (
                        <li key={result}>- {result}</li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}
