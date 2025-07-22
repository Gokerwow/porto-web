import Link from "next/link";
import { projects } from "../data";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Zap, Target, Code2 } from "lucide-react";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl font-light text-gray-800 mb-4">Project not found</h1>
                    <p className="text-gray-500 mb-8 font-light">The project you&apos;re looking for doesn&apos;t exist.</p>
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const isVideo = project.media?.includes('.mp4');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <div className="border-b border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Projects
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-6 mb-8">
                                <span className={`px-4 py-1 rounded-full text-sm font-medium ${project.status.color} text-white`}>
                                    {project.status.name}
                                </span>
                                <span className="text-gray-400 font-light">{project.year}</span>
                                <span className="text-gray-400 font-light">•</span>
                                <span className="text-gray-400 font-light">{project.duration}</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-6">
                                {project.github && (
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        View Code
                                    </a>
                                )}
                                {(project.demo || project.liveUrl) && (
                                    <a 
                                        href={project.demo || project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        <div className="lg:col-span-5">
                            <div className="relative">
                                {isVideo ? (
                                    <video 
                                        className="w-full rounded-lg shadow-2xl"
                                        controls
                                        poster={project.media?.replace('.mp4', '-poster.jpg')}
                                    >
                                        <source src={project.media} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image 
                                        src={project.media} 
                                        alt={project.title}
                                        className="w-full rounded-lg shadow-2xl"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-20">
                            {/* Overview */}
                            <section>
                                <h2 className="text-3xl font-light text-gray-900 mb-8">Overview</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light">
                                    {project.longDescription}
                                </p>
                            </section>

                            {/* Key Features */}
                            <section>
                                <div className="flex items-center mb-8">
                                    <Zap className="w-6 h-6 mr-4 text-gray-400" />
                                    <h2 className="text-3xl font-light text-gray-900">Key Features</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {project.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-light leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Technologies */}
                            <section>
                                <div className="flex items-center mb-8">
                                    <Code2 className="w-6 h-6 mr-4 text-gray-400" />
                                    <h2 className="text-3xl font-light text-gray-900">Technologies</h2>
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Backend</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.backend.map((tech, index) => (
                                                <span key={index} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-light border border-gray-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Frontend</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.frontend.map((tech, index) => (
                                                <span key={index} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-light border border-gray-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Tools & Services</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.tools.map((tool, index) => (
                                                <span key={index} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-light border border-gray-200">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Challenges */}
                            <section>
                                <div className="flex items-center mb-8">
                                    <Target className="w-6 h-6 mr-4 text-gray-400" />
                                    <h2 className="text-3xl font-light text-gray-900">Challenges</h2>
                                </div>
                                <div className="space-y-6">
                                    {project.challenges.map((challenge, index) => (
                                        <div key={index} className="border-l-2 border-gray-200 pl-6">
                                            <p className="text-gray-700 font-light leading-relaxed">{challenge}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-8 space-y-12">
                                {/* Project Details */}
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-6">Project Details</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <Calendar className="w-5 h-5 text-gray-400 mr-4 mt-1" />
                                            <div>
                                                <div className="text-sm text-gray-500 font-light">Year</div>
                                                <div className="text-gray-800 font-medium">{project.year}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Clock className="w-5 h-5 text-gray-400 mr-4 mt-1" />
                                            <div>
                                                <div className="text-sm text-gray-500 font-light">Duration</div>
                                                <div className="text-gray-800 font-medium">{project.duration}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-5 h-5 mr-4 mt-1 flex items-center">
                                                <div className={`w-3 h-3 rounded-full ${project.status.color}`}></div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500 font-light">Status</div>
                                                <div className="text-gray-800 font-medium">{project.status.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-6">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm font-light">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-6">Links</h3>
                                    <div className="space-y-4">
                                        {project.github && (
                                            <a 
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-light"
                                            >
                                                <Github className="w-5 h-5 mr-3" />
                                                Source Code
                                            </a>
                                        )}
                                        {(project.demo || project.liveUrl) && (
                                            <a 
                                                href={project.demo || project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-light"
                                            >
                                                <ExternalLink className="w-5 h-5 mr-3" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}