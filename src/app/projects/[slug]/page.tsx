import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Section from "@/components/sections/Section";
import ProjectDetail from "@/components/projects/ProjectDetail";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <Section>
            <ProjectDetail project={project} />
        </Section>
    );
}
