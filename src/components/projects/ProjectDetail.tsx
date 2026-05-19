import Link from "next/link";
import type { Project } from "@/content/types";
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon, CheckCircleIcon } from "@/components/ui/icons";

type ProjectDetailProps = {
    project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="max-w-4xl">
            {/* Back link */}
            <Link
                href="/projects"
                className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowRightIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                Back to Projects
            </Link>

            {/* Header */}
            <header className="space-y-4">
                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {project.featured ? "Featured Project" : "Project"}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                </p>
            </header>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                    <GithubIcon className="h-5 w-5" />
                    View Source
                </a>
                {project.live && (
                    <a

                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <ExternalLinkIcon className="h-5 w-5" />
                        Live Demo
                    </a>
                )}
            </div>

            {/* Tech Stack */}
            <section className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    Tech Stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* Key Results */}
            <section className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    Key Results
                </h2>
                <ul className="mt-4 space-y-4">
                    {project.results.map((result, index) => (
                        <li
                            key={index}
                            className="flex gap-4 rounded-xl border border-border bg-card p-4"
                        >
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <p className="text-muted-foreground">{result}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
