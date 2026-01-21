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
        media: "Edutask_ugaxh6",
        tags: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
        year: "2025",
        duration: "4 months",
        accent: "from-amber-400 to-rose-500",
        status: status[0],
        features: [
            "Real-time task collaboration",
            "Assignment deadline tracking",
            "Student-teacher communication portal",
            "Progress analytics and reporting",
            "Mobile-responsive interface",
            "File sharing and document management"
        ],
        technologies: {
            backend: ["Laravel 12", "PHP", "MySQL"],
            frontend: ["Livewire", "Alpine.js", "Tailwind CSS"],
            tools: ["Git"]
        },
        challenges: [
            "Implementing real-time collaboration features",
            "Designing scalable notification system",
            "Creating intuitive user interface for academic workflows"
        ],
        github: "https://github.com/Gokerwow/edutask",
        demo: null
    },
    {
        id: 2,
        title: "NauTure",
        description: "A Web-Based Auction Information System for Agricultural Products to Connect Farmers with Buyers",
        longDescription: "NauTure bridges the gap between farmers and buyers through a modern auction platform specifically designed for agricultural products. The system enables farmers to list their produce with detailed information, photos, and auction parameters, while buyers can browse, bid, and purchase directly from producers. This platform promotes fair pricing and reduces middleman costs in agricultural commerce.",
        media: "Nauture_z6nzru",
        tags: ["Laravel", "MySQL", "Payment Gateway"],
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
            backend: ["Laravel 11", "PHP 8.2", "MySQL"],
            frontend: ["Tailwind CSS"],
            tools: ["Payment Gateway API"]
        },
        challenges: [
            "Building real-time auction bidding system",
            "Implementing secure payment processing",
            "Creating trust system between farmers and buyers"
        ],
        github: "https://github.com/hikam074/nauture",
        demo: null
    },
    {
        id: 3,
        title: "Biasly",
        description: "A Digital Asset Tracker & Inventory Management System for K-Pop Photocard Collectors",
        longDescription: "Biasly is a specialized inventory management platform that solves the chaos of tracking physical K-Pop collections. Pivoting from an initial Wiki concept, it evolved into a robust SaaS-like tool where users can catalog their photocard assets, track market valuations, and manage wishlists. The platform leverages a secure Supabase backend to handle real-time data sync, image storage, and complex filtering for thousands of unique merchandise items.",
        media: "Biasly_zpa4mi",
        tags: ["Next.js 14", "Supabase", "TypeScript", "Tailwind CSS"],
        year: "2025",
        duration: "Ongoing",
        accent: "from-pink-500 to-rose-500", // Adjusted to match a "Photocard/K-pop" vibe but kept professional
        status: status[2],
        features: [
            "Full CRUD inventory management for physical assets",
            "Secure user authentication with Row Level Security (RLS)",
            "High-performance image upload & hosting (Supabase Storage)",
            "Real-time collection valuation dashboard",
            "Dynamic filtering and search for niche merchandise",
            "Wishlist tracking and priority management",
            "Responsive mobile-first design for on-the-go tracking"
        ],
        technologies: {
            backend: ["Supabase (PostgreSQL)", "Row Level Security (RLS)", "Supabase Auth", "Storage Buckets"],
            frontend: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "React Hook Form"],
            tools: ["Vercel", "Git", "Figma"]
        },
        challenges: [
            "Pivoting architecture from a static Wiki to a dynamic user-generated content platform",
            "Implementing complex Row Level Security (RLS) policies to ensure data privacy",
            "Optimizing image delivery and storage for heavy media grids",
            "Designing a scalable database schema to handle diverse artist metadata"
        ],
        github: "https://github.com/Gokerwow/biasly",
        demo: null,
        liveUrl: null // Updated to your likely subdomain
    },
    {
        id: 4,
        title: "Zuno",
        description: "A Full-Stack Web Application for Streaming Movie and Anime Content with Personalized User Features",
        longDescription: "Zuno is a comprehensive streaming platform that combines movies and anime content with advanced personalization features. Users can browse extensive catalogs, create watchlists, track viewing progress, and receive AI-powered recommendations. The platform includes social features like reviews, ratings, and community discussions, making it a complete entertainment hub for movie and anime enthusiasts.",
        media: "Zuno_eu7rxh",
        tags: ["Laravel", "React", "MySQL",],
        year: "2025",
        duration: "Ongoing",
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
        github: "https://github.com/Gokerwow/movie-streaming",
        demo: null,
        liveUrl: null
    },
    {
        id: 5, // or whatever the next ID is
        title: "SIMBA",
        description: "Enterprise Inventory & Asset Management Dashboard for Healthcare",
        longDescription: "SIMBA is a robust Web application developed for RSD Balung Hospital to digitize their asset tracking. Built with Vite and React, it serves as the primary interface for hospital staff to manage thousands of physical assets. The system focuses on high-speed data retrieval, complex data visualization for depreciation reports, and a strict secure interface that adapts to different staff clearance levels.",
        media: "Simba_qce6gh", // Make sure you have a screenshot of the dashboard!
        tags: ["React (Vite)", "Tailwind CSS", "Enterprise"],
        year: "2025",
        duration: "5 Months",
        accent: "from-emerald-400 to-cyan-500", // "Medical/Clean" colors
        status: status[0], // Active/Ongoing
        features: [
            "High-performance dashboard powered by Vite",
            "Real-time data integration with Laravel API",
            "Frontend Role-Based Access Control (RBAC)",
            "Complex data tables with sorting and filtering",
            "Interactive charts for asset depreciation tracking",
            "Form validation for error-free data entry",
            "Responsive design for tablet and desktop usage"
        ],
        technologies: {
            frontend: ["React 18", "Vite", "Tailwind CSS", "Axios", "Recharts"], // Recharts is a guess, but common for dashboards
            tools: ["Git", "Figma", "Postman"],
            methodology: ["Component-Driven Design", "Agile"],
            backend: ["Laravel"]
        },
        challenges: [
            "Translating complex hospital logistics into an intuitive user interface",
            "Managing large datasets on the client-side without performance lags",
            "Implementing strict frontend security layers to match backend permissions",
            "Ensuring cross-browser compatibility for older hospital hardware"
        ],
        github: null, // Usually closed source for client work
        demo: null,
        liveUrl: null // Likely an internal intranet link, so keep null
    },
];