import type { SkillGroup, DetailedSkill } from "@/content/types";

export const skills: SkillGroup = {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Python", "Django", "Django REST Framework", "FastAPI", "Node.js", "REST APIs"],
    tools: ["Git", "Linux", "Docker", "PostgreSQL", "MySQL", "Redis"],
    ai: ["Machine Learning fundamentals", "Data pipelines", "LLM concepts", "RAG basics"],
};

export const detailedSkills: DetailedSkill[] = [
    { label: "Languages", value: "Python, JavaScript, TypeScript, Java, SQL, C/C++" },
    { label: "Backend", value: "Django, Django REST Framework, FastAPI, Node.js, REST APIs" },
    { label: "Frontend", value: "React, Next.js, HTML, CSS, Tailwind CSS" },
    {
        label: "AI & Data",
        value: "Machine Learning fundamentals, data processing pipelines, clustering, neural networks, LLM concepts, RAG basics",
    },
    { label: "Databases", value: "PostgreSQL, MySQL, Redis" },
    {
        label: "Cloud & DevOps",
        value: "Docker, Kubernetes (familiar), cloud concepts (AWS/Azure basics)",
    },
    { label: "Tools", value: "Git, Linux" },
    {
        label: "Concepts",
        value: "Scalable architecture, system design, clean architecture, API design, data modeling, asynchronous processing patterns",
    },
];