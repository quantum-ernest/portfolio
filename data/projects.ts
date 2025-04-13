interface Project {
    id: string
    title: string
    description: string
    image: string
    techStack: string[]
    demoLink?: string
    githubLink?: string
    featured: boolean
    category: "web" | "tool" | "opensource" | "other"
}

export const projects: Project[] = [
    {
        id: "cmscribe",
        title: "Git Commit Generator",
        description:
            "AI-powered commit message generator that leverages various AI providers to create meaningful commit messages from your code changes.",
        image: "/ai-commit-generator.png?height=300&width=500",
        techStack: ["Python"],
        demoLink: "#",
        githubLink: "https://github.com/quantum-ernest/cmscribe",
        featured: true,
        category: "tool",
    },
    {
        id: "tialinks",
        title: "URL Shortner & Analytics",
        description:
            " URL shortener and analytics tool for developers and businesses. Simplify URLs, track engagement, and analyze link performance effortlessly!",
        image: "/url-shortner.png?height=300&width=500",
        techStack: ["FastAPI", "React", "TimescaleDB", "Redis"],
        demoLink: "https://tialinks-demo.ernestasare.com/",
        githubLink: "https://github.com/quantum-ernest/tialinks",
        featured: true,
        category: "web",
    },
    {
        id: "streamlit-shortcuts",
        title: "Streamlit Shortcuts",
        description: `Streamlit keyboard shortcuts for your buttons.`,
        image: "/opensource.png?height=300&width=500",
        techStack: ["Python"],
        demoLink: "https://shortcuts.streamlit.app/",
        githubLink: "https://github.com/adriangalilea/streamlit-shortcuts",
        featured: true,
        category: "opensource",
    },
    {
        id: "jorge",
        title: "Jorge",
        description: `A personal site generator with org-mode support`,
        image: "/opensource.png?height=300&width=500",
        techStack: ["Go"],
        demoLink: "#",
        githubLink: "https://github.com/facundoolano/jorge",
        featured: true,
        category: "opensource",
    },
    {
        id: "course-management-system",
        title: "Course Management System",
        description: `Designed and built a backend service for an NGO’s course management platform, allowing mentors to create courses, assign projects, and support mentee registration and grading, with multiple mentors per course.`,
        image: "/course-management-system.png?height=300&width=500",
        techStack: ["FastAPI", "PostgresQl", "Redis"],
        demoLink: "#",
        githubLink: "#",
        featured: true,
        category: "web",
    },
    {
        id: "student-attendance-system",
        title: "Student Attendance System",
        description: `Developed a desktop application leveraging a deep-learning image classifier for accurate facial recognition-based student attendance management, achieving a 98% accuracy rate`,
        image: "/placeholder.svg?height=300&width=500",
        techStack: ["Python", "TKinter", "Tensorflow"],
        demoLink: "#",
        githubLink: "#",
        featured: true,
        category: "web",
    },
    {
        id: "final-year-project",
        title: "Final Year Project - undergraduate",
        description: `Built an intelligent video surveillance system for deterring, detecting, and preventing unauthorized personnel from entering restricted areas`,
        image: "/placeholder.svg?height=300&width=500",
        techStack: ["Python", "PyQt"],
        demoLink: "#",
        githubLink: "#",
        featured: true,
        category: "other",
    },
]

export const projectCategories = [
    {id: "all", name: "All Projects"},
    {id: "tool", name: "Tools"},
    {id: "opensource", name: "Open Source Contributions"},
    {id: "web", name: "Web Development"},
    {id: "other", name: "Other Projects"},
]
