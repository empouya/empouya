import type { Project } from "@/lib/projects";

type ProjectDetailProps = {
    project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="max-w-3xl space-y-8">
            <header className="space-y-4">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-gray-700">{project.description}</p>
            </header>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded border px-2 py-1 text-sm text-gray-700"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Key Results</h2>
                <ul className="space-y-2 text-gray-700">
                    {project.results.map((result) => (
                        <li key={result}>- {result}</li>
                    ))}
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Links</h2>
                <div className="flex flex-wrap gap-4 text-sm">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        Live Demo
                    </a>
                </div>
            </section>
        </div>
    );
}
