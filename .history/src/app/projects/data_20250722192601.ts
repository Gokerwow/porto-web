// src/app/projects/data.ts
const status = [
    {
        name: "Done",
        color: "bg-green-400"
    },
    {
        name: "Almost Done",
        color: "bg-yellow-400"
    },
    {
        name: "Progress",
        color: "bg-orange-400"
    },
]

export const projects = [
    {
        id: 1,
        title: "EduTask",
        description: "A Laravel-Based Task Management and Productivity System for Academic and Collaborative Work",
        media: "/assets/videos/Edutask.mp4",
        tags: ["Laravel", "Livewire"],
        year: "2025",
        accent: "from-amber-400 to-rose-500",
        status: status[1]
    },
    {
        id: 2,
        title: "NauTure",
        description: "A Web-Based Auction Information System for Agricultural Products to Connect Farmers with Buyers",
        media: "assets/videos/Nauture.mp4",
        tags: ["Laravel"],
        year: "2025",
        accent: "from-emerald-400 to-cyan-500",
        status: status[0]
    },
    {
        id: 3,
        title: "Biasly",
        description: "A Modern Web Application for K-Pop Fans to Create, Manage, and Share Curated Lists and Profiles",
        media: "/assets/Biasly.png",
        tags: ["Next JS", "React", "Framer Motion"],
        year: "2025",
        accent: "from-violet-400 to-indigo-500",
        status: status[2]
    },
    {
        id: 4,
        title: "Zuno",
        description: "A Full-Stack Web Application for Streaming Movie and Anime Content with Personalized User Features",
        media: "/assets/videos/Zuno.mp4",
        tags: ["Laravel", "React"],
        year: "2025",
        accent: "from-red-400 to-orange-500",
        status: status[2]
    },
];