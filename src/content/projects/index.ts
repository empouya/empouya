import project1 from "./data/project1.json";
import project2 from "./data/project2.json";
import project3 from "./data/project3.json";

export type Project = {
    id: string;
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    featured: boolean;
    results: string[];
};

export const projects: Project[] = [project1, project2, project3];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
