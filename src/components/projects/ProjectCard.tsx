import Link from "next/link";
import type { Project } from "@/content/types";
import { ArrowRightIcon, GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent hover:shadow-xl">
            {/* Project Image/Placeholder */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 via-accent/10 to-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-accent/20">
                        {project.title.charAt(0)}
                    </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border transition-colors hover:border-accent hover:text-accent"
                        aria-label="View GitHub repository"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border transition-colors hover:border-accent hover:text-accent"
                            aria-label="View live demo"
                        >
                            <ExternalLinkIcon className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <Link href={`/projects/${project.slug}`} className="group/link">
                    <h3 className="text-xl font-semibold text-foreground transition-colors group-hover/link:text-accent">
                        {project.title}
                    </h3>
                </Link>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                            {item}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>

                {/* Results Preview */}
                <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Key Results
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {project.results[0]}
                    </p>
                </div>

                {/* View Project Link */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="group/arrow mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                    View Details
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/arrow:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
