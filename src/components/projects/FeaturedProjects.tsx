import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import Section from "@/components/sections/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    return (
        <FadeIn>
            <Section className="border-t border-border">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <SectionHeading
                        eyebrow="Selected Work"
                        title="Featured Projects"
                        description="A few projects that best represent how I think about structure, delivery, and user-facing quality."
                    />
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                    >
                        View all projects
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Section>
        </FadeIn>
    );
}
