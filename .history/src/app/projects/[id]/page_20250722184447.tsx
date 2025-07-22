import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "EduTask",
        description: "A Laravel-Based Task Management and Productivity System for Academic and Collaborative Work",
        media: "/assets/videos/Edutask.mp4",
        tags: ["Laravel", "Livewire"],
        year: "2025",
        accent: "from-amber-400 to-rose-500",
        status: { name: "In Progress", color: "bg-yellow-500" },
    },
    {
        id: 2,
        title: "NauTure",
        description: "A Web-Based Auction Information System for Agricultural Products to Connect Farmers with Buyers",
        media: "assets/videos/Nauture.mp4",
        tags: ["Laravel"],
        year: "2025",
        accent: "from-emerald-400 to-cyan-500",
        status: { name: "Completed", color: "bg-green-500" },
    },
    {
        id: 3,
        title: "Biasly",
        description: "A Modern Web Application for K-Pop Fans to Create, Manage, and Share Curated Lists and Profiles",
        media: "/assets/Biasly.png",
        tags: ["Next JS", "React", "Framer Motion"],
        year: "2025",
        accent: "from-violet-400 to-indigo-500",
        status: { name: "Released", color: "bg-indigo-500" },
    },
    {
        id: 4,
        title: "Zuno",
        description: "A Full-Stack Web Application for Streaming Movie and Anime Content with Personalized User Features",
        media: "/assets/videos/Zuno.mp4",
        tags: ["Laravel", "React"],
        year: "2025",
        accent: "from-red-400 to-orange-500",
        status: { name: "Released", color: "bg-red-500" },
    },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id.toString() === params.id);

    if (!project) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link href="/projects" className="text-blue-600 hover:underline mt-4 block">
                    &larr; Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="p-10 text-center">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-4 text-gray-600">{project.description}</p>
            <p className="mt-2 text-sm text-gray-400">Year: {project.year}</p>
            <Link href="/projects" className="text-blue-600 hover:underline mt-6 block">
                &larr; Back to Projects
            </Link>
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}
