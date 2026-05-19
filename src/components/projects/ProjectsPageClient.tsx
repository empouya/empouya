"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import ProjectFilter from "@/components/ui/filters/ProjectFilter";
import Section from "@/components/sections/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import type { ProjectFilterValue } from "@/components/ui/filters/filter-options";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsPageClient() {
    const [selected, setSelected] = useState<ProjectFilterValue>("all");

    const filtered = projects.filter((project) => {
        if (selected === "all") return true;
        if (selected === "featured") return project.featured;
        if (selected === "react") return project.tech.includes("React");
        if (selected === "next") return project.tech.includes("Next.js");
        if (selected === "python") return project.tech.some(t =>
            ["Python", "Django", "FastAPI"].includes(t)
        );
        if (selected === "java") return project.tech.some(t =>
            ["Java", "WebSockets"].includes(t)
        );
        return true;
    });

    return (
        <Section>
            <SectionHeading
                eyebrow="Projects"
                title="Project Library"
                description="Browse selected work and filter projects by focus area."
            />

            <div className="mt-8">
                <ProjectFilter selected={selected} setSelected={setSelected} />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {filtered.length > 0 ? (
                    filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <div className="col-span-2 rounded-2xl border border-border bg-card p-12 text-center">
                        <p className="text-muted-foreground">No projects found matching this filter.</p>
                    </div>
                )}
            </div>
        </Section>
    );
}
