export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "ProviderConnect",
    description: "Full stack platform connecting case managers with housing providers. Features real time messaging with Socket.IO, RESTful API with 20+ endpoints, admin analytics dashboard, and CI/CD pipeline. Presented to 100+ housing professionals.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Socket.IO", "Jest"],
    github: null,
    live: "https://www.loom.com/share/715dde35093d429b92e140c5a7ddd109",
    featured: true,
  },
  {
    title: "HabitFlow",
    description: "Habit tracking app with microservices architecture. Two Spring Boot services communicate via Apache Kafka. Includes Prometheus metrics, Grafana dashboards, and Docker Compose orchestrating 7+ services.",
    tech: ["Java", "Spring Boot", "React", "Apache Kafka", "PostgreSQL", "Docker", "Prometheus"],
    github: "https://github.com/Amohamed24/habit-tracker",
    live: null,
    featured: false,
  },
]
