export function ProjectCard() {
    return (
        {
                <div
                    key={project.id}
                    className="group perspective-1000 hover:scale-[1.015] transition-all duration-500"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-[3deg] group-hover:rotate-y-[3deg]">
                        {/* Glassmorphism card */}
                        <div className={`relative h-full rounded-2xl overflow-hidden border border-gray-200/70 bg-white/50 backdrop-blur-md shadow-lg hover:shadow-xl transition-all`}>
                            {/* Media container with gradient overlay */}
                            <div className="relative h-64 overflow-hidden">
                                {project.media.endsWith('.mp4') ? (
                                    <video
                                        autoPlay loop muted playsInline
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    >
                                        <source src={project.media} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={project.media}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                                <div className={`absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent`}></div>
                                <span className={`absolute top-4 right-4 px-3 py-1 bg-white/80 text-gray-800 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm`}>
                                    {project.year}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                                        {project.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <button className={`px-0 py-1 font-medium text-sm bg-gradient-to-r ${project.accent} bg-clip-text text-transparent group-hover:brightness-110 transition-all`}>
                                        View Project Details →
                                    </button>
                                    <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${project.accent} flex items-center justify-center text-white shadow-sm`}>
                                        <span className="text-xs font-bold">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    );
}