import project1 from "./data/project1.json";
import project2 from "./data/project2.json";
import project3 from "./data/project3.json";

export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    featured: boolean;
    result: string;
    slug: string;
};

export const projects: Project[] = [project1, project2, project3];

export function getFeaturedProjects() {
    return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}