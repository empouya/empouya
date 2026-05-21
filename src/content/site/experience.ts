import type { Experience } from "@/content/types";

export const experience: Experience = {
    role: "Backend / Full Stack Developer",
    company: "Independent Projects",
    date: "2020 - Present",
    bullets: [
        "Designed and engineered maintainable backend system architectures using Python and Django/FastAPI, utilizing explicit service layers to lower long-term technical debt",
        "Optimized relational database layers (PostgreSQL/MySQL) via custom transactional patterns, rigorous indexing strategies, and execution plan optimization to handle multi-user concurrent scaling",
        "Implemented secure API layers featuring JWT authentication, social login (OAuth), and fine-grained role-based access control (RBAC)",
        "Integrated payment processing networks, building custom gateway logic (Stripe) and webhook managers to ensure transactional reliability",
        "Configured infrastructure environments on Linux servers using Nginx as a reverse proxy and load balancer, with Docker containerization",
        "Automated software quality workflows by enforcing style guidelines (PEP8/Flake8, ESLint) inside pull-request-driven CI/CD pipelines via GitHub Actions",
        "Built real-time systems using Django Channels and WebSockets, and async background processing via Celery with Redis",
        "Implemented full observability stacks using Prometheus instrumentation and Grafana dashboards to monitor latency, throughput, and worker queues",
    ],
    projects: [
        {
            name: "TaskHive",
            description:
                "Enterprise-grade Django REST backend with modular architecture, real-time WebSocket support, Celery async processing, Prometheus/Grafana observability, and 92%+ test coverage with sub-100ms P95 latency.",
        },
        {
            name: "Shipping Management System",
            description:
                "Enterprise internal logistics platform with high-integrity PostgreSQL transactions, multi-branch RBAC, audit trails, and Stripe payment routing.",
        },
        {
            name: "RideFlow",
            description:
                "Event-driven distributed backend simulation with asynchronous service isolation, Nginx load balancing, and encrypted service-to-service token validation.",
        },
    ],
};