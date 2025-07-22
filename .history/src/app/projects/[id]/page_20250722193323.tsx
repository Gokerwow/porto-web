import Link from "next/link";
import { projects } from "../data";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Code, Zap, Target } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center p-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Project not found</h1>
                    <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className={`bg-gradient-to-r ${project.accent} text-white`}>
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Projects
                    </Link>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status.color} text-white`}>
                                    {project.status.name}
                                </span>
                                <span className="text-white/80 text-sm">{project.year}</span>
                            </div>
                            
                            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                {project.github && (
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur text-white rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        View Code
                                    </a>
                                )}
                                {(project.demo || project.liveUrl) && (
                                    <a 
                                        href={project.demo || project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        <div className="lg:justify-self-end">
                            {isVideo ? (
                                <video 
                                    className="rounded-2xl shadow-2xl max-w-md w-full"
                                    controls
                                    poster={project.media?.replace('.mp4', '-poster.jpg')}
                                >
                                    <source src={project.media} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img 
                                    src={project.media} 
                                    alt={project.title}
                                    className="rounded-2xl shadow-2xl max-w-md w-full"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Overview */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {project.longDescription}
                            </p>
                        </section>

                        {/* Key Features */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <Zap className="w-6 h-6 mr-3 text-blue-600" />
                                Key Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technologies */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <Code className="w-6 h-6 mr-3 text-green-600" />
                                Technologies Used
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.backend.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.frontend.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Tools & Services</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.tools.map((tool, index) => (
                                            <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Challenges */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <Target className="w-6 h-6 mr-3 text-red-600" />
                                Challenges Overcome
                            </h2>
                            <div className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-red-100">
                                        <p className="text-gray-700 leading-relaxed">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Project Info */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Project Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Year</div>
                                        <div className="font-medium text-gray-800">{project.year}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Duration</div>
                                        <div className="font-medium text-gray-800">{project.duration}</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 mr-3 flex items-center">
                                        <div className={`w-3 h-3 rounded-full ${project.status.color}`}></div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Status</div>
                                        <div className="font-medium text-gray-800">{project.status.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Links</h3>
                            <div className="space-y-3">
                                {project.github && (
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-gray-600 mr-3" />
                                        <span className="text-gray-700">View Source Code</span>
                                    </a>
                                )}
                                {(project.demo || project.liveUrl) && (
                                    <a 
                                        href={project.demo || project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-gray-600 mr-3" />
                                        <span className="text-gray-700">Live Demo</span>
                                    </a>
                                )}
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