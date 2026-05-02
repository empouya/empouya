import { getFeaturedProjects } from "@/content/projects";
import Section from "@/components/sections/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    return (
        <Section>
            <div className="mb-10">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Featured Projects"
                    description="A few projects that best represent how I think about structure, delivery, and user-facing quality."
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
}
