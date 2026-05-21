import type { SkillGroup, DetailedSkill } from "@/content/types";

export const skills: SkillGroup = {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Python", "Django", "Django REST Framework", "FastAPI", "Node.js", "Celery", "Django Channels", "WebSockets"],
    tools: ["Git", "Docker", "Nginx", "PostgreSQL", "MySQL", "Redis", "MinIO", "GitHub Actions", "Linux"],
    ai: ["Prometheus", "Grafana", "Locust", "Pytest", "Azure DevOps"],
};

export const detailedSkills: DetailedSkill[] = [
    { label: "Languages", value: "Python, JavaScript, TypeScript, SQL, Java, C#, C/C++, Assembly" },
    { label: "Backend", value: "Django, Django REST Framework, FastAPI, Node.js, Celery, Django Channels, WebSockets, REST APIs" },
    { label: "Frontend", value: "React, Next.js, HTML, CSS, Tailwind CSS" },
    { label: "Databases", value: "PostgreSQL, MySQL, SQL Server, Redis, MinIO" },
    { label: "Auth & Security", value: "JWT, OAuth, Social Login (Google/GitHub), RBAC, Multi-tenant systems" },
    { label: "DevOps & Infra", value: "Docker, Docker Compose, Nginx, GitHub Actions, Azure DevOps, Linux, S3-compatible storage, Alibaba Cloud (ECS)" },
    { label: "Observability", value: "Prometheus, Grafana, Locust, Pytest, distributed tracing, metrics instrumentation" },
    { label: "Architecture", value: "Modular monolith, event-driven systems, service-layer architecture, distributed systems, API design, data modeling, performance optimization" },
];