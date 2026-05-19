import type { Experience } from "@/content/types";

export const experience: Experience = {
    role: "Backend / Full Stack Developer",
    company: "Independent Projects",
    date: "2022 - Present",
    bullets: [
        "Designed and developed full-stack applications with a strong focus on backend systems using Python (Django, DRF) and React",
        "Built scalable REST APIs with structured data models, authentication, and clear business logic separation",
        "Designed systems with modular architecture and explicit domain boundaries to improve maintainability and scalability",
        "Worked on data-intensive and AI-related projects involving machine learning, data pipelines, and algorithmic problem solving",
        "Implemented asynchronous and event-driven patterns in backend systems to simulate scalable service interactions",
        "Developed responsive frontend interfaces and integrated them with backend services for complete feature delivery",
        "Containerized applications using Docker and applied deployment and environment configuration practices",
        "Collaborated in iterative development cycles, improving system design, code quality, and feature robustness",
    ],
    projects: [
        {
            name: "TaskHive",
            description:
                "Production-style Django REST backend with modular architecture, strong domain modeling, and high test coverage, focused on data integrity and scalability.",
        },
        {
            name: "RideFlow",
            description:
                "Event-driven backend system simulating distributed services and asynchronous workflows for scalable application design.",
        },
        {
            name: "AI & Data Projects",
            description:
                "Implemented machine learning and data processing projects including search algorithms, reinforcement learning, clustering, and neural networks.",
        },
    ],
};