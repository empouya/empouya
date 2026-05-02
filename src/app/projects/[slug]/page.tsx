import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Section from "@/components/sections/Section";
import ProjectDetail from "@/components/projects/ProjectDetail";

const siteUrl = "https://empouya.github.io";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        alternates: {
            canonical: `/projects/${project.slug}`,
        },
        openGraph: {
            title: project.title,
            description: project.description,
            url: `${siteUrl}/projects/${project.slug}`,
            type: "article",
            images: [
                {
                    url: "/seo/og-default.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${project.title} preview`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: ["/seo/og-default.jpg"],
        },
    };
}

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
