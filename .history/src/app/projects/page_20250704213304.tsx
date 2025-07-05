export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-featured online store with payment integration and inventory management.",
            imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["React", "Node.js", "MongoDB"],
            demoUrl: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Productivity application for team collaboration and task organization.",
            imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["Vue.js", "Firebase"],
            demoUrl: "#"
        },
        {
            id: 3,
            title: "Health Tracker",
            description: "Mobile application for tracking fitness activities and nutrition.",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["React Native", "GraphQL"],
            demoUrl: "#"
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Custom designed portfolio website with interactive elements.",
            imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["Next.js", "Tailwind CSS"],
            demoUrl: "#"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Here are some of my recent works. Each project represents unique challenges and solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={project.imageUrl} 
                                    alt={project.title}
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <a 
                                        href={project.demoUrl}
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}