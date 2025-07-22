import Link from "next/link";
import Projects from "../page";

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