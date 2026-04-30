"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import Link from "next/link";
import ProjectFilter from "@/components/ui/filters/ProjectFilter";

export default function ProjectsPage() {
    const [selected, setSelected] = useState("all");

    const filtered = projects.filter((p) => {
        if (selected === "all") return true;
        if (selected === "featured") return p.featured;
        if (selected === "react") return p.tech.includes("React");
        if (selected === "next") return p.tech.includes("Next.js");
        return true;
    });

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>

            <ProjectFilter selected={selected} setSelected={setSelected} />

            <div className="grid gap-4">
                {filtered.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="border p-4 rounded hover:scale-[1.01] transition"
                    >
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-600">
                            {project.description}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}