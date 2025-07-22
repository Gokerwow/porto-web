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
        longDescription: "EduTask is a comprehensive task management platform designed specifically for academic environments. It facilitates seamless collaboration between students, teachers, and administrators through intuitive project tracking, assignment management, and productivity tools. The system features real-time updates, deadline tracking, and collaborative workspaces that enhance the educational experience.",
        media: "/assets/videos/Edutask.mp4",
        tags: ["Laravel", "Livewire", "PHP", "MySQL", "Tailwind CSS"],
        year: "2025",
        duration: "4 months",
        accent: "from-amber-400 to-rose-500",
        status: status[1],
        features: [
            "Real-time task collaboration",
            "Assignment deadline tracking",
            "Student-teacher communication portal",
            "Progress analytics and reporting",
            "Mobile-responsive interface",
            "File sharing and document management"
        ],
        technologies: {
            backend: ["Laravel 10", "PHP 8.2", "MySQL"],
            frontend: ["Livewire", "Alpine.js", "Tailwind CSS"],
            tools: ["Git", "Docker", "PHPUnit"]
        },
        challenges: [
            "Implementing real-time collaboration features",
            "Designing scalable notification system",
            "Creating intuitive user interface for academic workflows"
        ],
        github: "https://github.com/username/edutask",
        demo: "https://edutask-demo.com"
    },
    {
        id: 2,
        title: "NauTure",
        description: "A Web-Based Auction Information System for Agricultural Products to Connect Farmers with Buyers",
        longDescription: "NauTure bridges the gap between farmers and buyers through a modern auction platform specifically designed for agricultural products. The system enables farmers to list their produce with detailed information, photos, and auction parameters, while buyers can browse, bid, and purchase directly from producers. This platform promotes fair pricing and reduces middleman costs in agricultural commerce.",
        media: "assets/videos/Nauture.mp4",
        tags: ["Laravel", "Vue.js", "MySQL", "WebSocket", "Payment Gateway"],
        year: "2025",
        duration: "6 months",
        accent: "from-emerald-400 to-cyan-500",
        status: status[0],
        features: [
            "Real-time bidding system",
            "Product quality verification",
            "Secure payment processing",
            "Farmer and buyer profiles",
            "Market price analytics",
            "Mobile-first design",
            "Multi-language support"
        ],
        technologies: {
            backend: ["Laravel 10", "PHP 8.2", "MySQL", "Redis"],
            frontend: ["Vue.js 3", "Tailwind CSS", "WebSocket"],
            tools: ["Payment Gateway API", "Image Processing", "AWS S3"]
        },
        challenges: [
            "Building real-time auction bidding system",
            "Implementing secure payment processing",
            "Creating trust system between farmers and buyers"
        ],
        github: "https://github.com/username/nauture",
        demo: "https://nauture-platform.com"
    },
    {
        id: 3,
        title: "Biasly",
        description: "A Modern Web Application for K-Pop Fans to Create, Manage, and Share Curated Lists and Profiles",
        longDescription: "Biasly is a vibrant social platform designed for K-Pop enthusiasts to express their fandom through customizable lists, profiles, and interactive features. Users can create bias lists, rank their favorite artists, share collections with the community, and discover new music through personalized recommendations. The platform features smooth animations and an engaging user experience tailored to the K-Pop community.",
        media: "/assets/Biasly.png",
        tags: ["Next.js", "React", "Framer Motion", "TypeScript", "Prisma"],
        year: "2025",
        duration: "3 months",
        accent: "from-violet-400 to-indigo-500",
        status: status[2],
        features: [
            "Interactive bias list creation",
            "Animated profile customization",
            "Community sharing and discovery",
            "Music integration and previews",
            "Trending artists and songs tracking",
            "Social features and commenting",
            "Dark/light theme support"
        ],
        technologies: {
            backend: ["Next.js API Routes", "Prisma ORM", "PostgreSQL"],
            frontend: ["React 18", "TypeScript", "Framer Motion", "Tailwind CSS"],
            tools: ["Vercel", "Spotify API", "Image Optimization"]
        },
        challenges: [
            "Creating smooth and performant animations",
            "Designing engaging user interface for fan community",
            "Integrating with music streaming APIs"
        ],
        github: "https://github.com/username/biasly",
        demo: "https://biasly.app",
        liveUrl: "https://biasly.app"
    },
    {
        id: 4,
        title: "Zuno",
        description: "A Full-Stack Web Application for Streaming Movie and Anime Content with Personalized User Features",
        longDescription: "Zuno is a comprehensive streaming platform that combines movies and anime content with advanced personalization features. Users can browse extensive catalogs, create watchlists, track viewing progress, and receive AI-powered recommendations. The platform includes social features like reviews, ratings, and community discussions, making it a complete entertainment hub for movie and anime enthusiasts.",
        media: "/assets/videos/Zuno.mp4",
        tags: ["Laravel", "React", "MySQL", "FFmpeg", "Recommendation Engine"],
        year: "2025",
        duration: "8 months",
        accent: "from-red-400 to-orange-500",
        status: status[2],
        features: [
            "High-quality video streaming",
            "AI-powered content recommendations",
            "Personal watchlists and progress tracking",
            "User reviews and rating system",
            "Advanced search and filtering",
            "Multi-device synchronization",
            "Offline download capability",
            "Community discussion forums"
        ],
        technologies: {
            backend: ["Laravel 10", "PHP 8.2", "MySQL", "FFmpeg", "Redis"],
            frontend: ["React 18", "TypeScript", "Video.js", "Tailwind CSS"],
            tools: ["AWS CloudFront", "Elasticsearch", "Machine Learning APIs"]
        },
        challenges: [
            "Implementing efficient video streaming",
            "Building recommendation algorithm",
            "Handling large-scale content delivery",
            "Creating responsive video player"
        ],
        github: "https://github.com/username/zuno",
        demo: "https://zuno-streaming.com",
        liveUrl: "https://zuno-streaming.com"
    },
];