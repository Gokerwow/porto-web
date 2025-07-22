import Link from "next/link";
import { projects } from "../data";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

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
            <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-white text-sm ${project.status.color}`}>
                    {project.status.name}
                </span>
            </div>
            <div className="mt-4">
                {project.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                    </span>
                ))}
            </div>
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