import type { Metadata } from "next";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Browse software projects by Eid Mohammad Ahmadi, including full stack, backend, and AI-related engineering work.",
};

export default function ProjectsPage() {
    return <ProjectsPageClient />;
}
