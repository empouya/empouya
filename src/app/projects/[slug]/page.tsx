import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({
    params,
}: PageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">{project.title}</h1>

            <p className="mt-4 text-gray-700">{project.description}</p>

            <div className="mt-4">
                <strong>Tech:</strong> {project.tech.join(", ")}
            </div>

            <div className="mt-2 text-sm text-gray-600">
                Result: {project.result}
            </div>
        </main>
    );
}