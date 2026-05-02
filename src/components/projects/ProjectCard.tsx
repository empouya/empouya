import Link from "next/link";
import type { Project } from "@/lib/projects";
import { siteTheme } from "@/lib/site-theme";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_18px_40px_rgba(217,119,6,0.12)]"
        >
            <div
                className={`mb-5 h-32 rounded-xl border border-amber-100 bg-gradient-to-br ${siteTheme.gradients.card}`}
            />

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-700">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <ul className="space-y-2 text-sm text-slate-600">
                    {project.results.slice(0, 2).map((result) => (
                        <li key={result}>- {result}</li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}
