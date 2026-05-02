import { getFeaturedProjects } from "@/content/projects";
import Section from "@/components/sections/Section";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    return (
        <Section>
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
}
