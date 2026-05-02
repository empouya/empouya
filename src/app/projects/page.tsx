"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import ProjectFilter from "@/components/ui/filters/ProjectFilter";
import Section from "@/components/sections/Section";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
    const [selected, setSelected] = useState("all");

    const filtered = projects.filter((project) => {
        if (selected === "all") return true;
        if (selected === "featured") return project.featured;
        if (selected === "react") return project.tech.includes("React");
        if (selected === "next") return project.tech.includes("Next.js");
        return true;
    });

    return (
        <Section>
            <h1 className="mb-4 text-3xl font-bold">Projects</h1>

            <ProjectFilter selected={selected} setSelected={setSelected} />

            <div className="grid gap-4 md:grid-cols-2">
                {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
}
