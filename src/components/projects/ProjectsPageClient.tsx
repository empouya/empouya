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
        return true;
    });

    return (
        <Section>
            <div className="space-y-8">
                <SectionHeading
                    eyebrow="Projects"
                    title="Project Library"
                    description="Browse selected work and filter projects by focus area."
                />

                <ProjectFilter selected={selected} setSelected={setSelected} />

                <div className="grid gap-4 md:grid-cols-2">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
