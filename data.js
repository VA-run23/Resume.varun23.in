// ── Resume Data ──
// Edit this file to update resume content. No HTML knowledge needed.

const RESUME_DATA = {
    name: "Varun D Magar",
    subtitle: "Backend engineer and CS undergrad who likes building systems that don't fall over — from cloud-to-edge architectures to fault-tolerant APIs.",
    profileImage: "profile.jpg",
    location: {
        name: "Mysore, India",
        url: "https://www.google.com/maps/place/Mysore"
    },
    email: "2023cs_varundmagar_d@nie.ac.in",

    socials: [
        { type: "github", url: "https://github.com/VA-run23", label: "GitHub" },
        { type: "linkedin", url: "https://linkedin.com/in/va-run23", label: "LinkedIn" },
        { type: "leetcode", url: "https://leetcode.com/u/VA-run23/", label: "LeetCode" },
        { type: "portfolio", url: "https://va-run23.netlify.app", label: "Portfolio" }
    ],

    about: "I'm a Computer Science undergrad at the National Institute of Engineering, Mysore (Class of 2027) with a focus on backend engineering and distributed systems. I like taking a broadly-defined problem and turning it into something concrete — whether that's architecting a cloud-to-edge printing platform, designing a race-condition-proof analytics engine, or building a Node.js microservice that serves 2,000+ developer widgets. Outside of building, I write technical articles on system design and backend engineering, and I spend a fair bit of time on LeetCode (Knight, top 5% globally). Currently looking for SDE internship opportunities where I can work on hard, real-world engineering problems.",

    education: [
        {
            institution: "National Institute of Engineering, Mysore",
            period: "Sep '23 - June '27",
            degree: "B.E. in Computer Science and Engineering | CGPA: 8.94/10.0 (up to 6th Sem)",
            details: [
                "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Computer Networks, Database Management Systems, Distributed Systems, Software Engineering, Machine Learning"
            ]
        }
    ],

    competitiveProgramming: [
        '<strong>LeetCode Knight (Top 5% globally):</strong> Peak rating 2116; solved 700+ problems spanning dynamic programming, graph algorithms, and system design patterns. | <a href="https://leetcode.com/u/VA-run23/" target="_blank" class="hover:underline">leetcode.com/u/VA-run23</a>',
        '<strong>600+ day active coding streak</strong> across LeetCode, GitHub, and GeeksForGeeks - consistent discipline in debugging, problem-solving, and continuous technical growth.'
    ],

    projects: [
        {
            name: "PrintBridge - Cloud-Native Printing System (PaaS)",
            url: "https://printbridge-by-vps.onrender.com",
            period: "May '26",
            role: "Backend Engineer | 4-Member Team | Node.js, Express, Sharp, PDFKit, ThingSpeak",
            bullets: [
                "Accelerated end-to-end remote print execution to under 30 seconds by engineering a Cloud-to-Edge PaaS architecture that bridges a Node.js/Express backend with a local edge daemon for real-time, automated job queuing.",
                "Engineered a highly resilient hardware concurrency system by developing a fault-tolerant edge agent featuring multi-OS printer driver fallbacks, mutex locks to prevent physical race conditions, and exponential backoff algorithms.",
                "Eliminated server OOM crashes and secured seamless ease of scaling by building a memory-efficient, stream-based document rendering pipeline, while ensuring high availability via real-time ThingSpeak telemetry and a zero-retention file lifecycle."
            ]
        },
        {
            name: "Digital Democracy - AI-Powered Civic Engagement Platform",
            url: "https://d-05-minor-project.netlify.app",
            period: "Sep '25 - Dec '25",
            role: "Backend Engineer | 4-Member Team | MERN Stack, Gemini AI, Docker, Jest",
            bullets: [
                "Accelerated admin analytics by offloading heavy data crunching from the single-threaded Node.js event loop to native MongoDB Aggregation pipelines, drastically reducing server memory overhead and network payload.",
                "Engineered a 48-hour rolling time-decay trending algorithm and infinite-depth threading by leveraging weighted interaction scores and an Adjacency List pattern, overcoming fundamental NoSQL document size constraints.",
                "Developed a robust Admin Moderation and Trust Engine with granular Role-Based Access Control (RBAC) and programmatic policy constraints, empowering moderators with bulk-resolution capabilities to enforce platform safety."
            ]
        },
        {
            name: "VSKript - Full-Stack Blogging Platform",
            url: "https://vskript.netlify.app/",
            period: "Dec '25 - Mar '26",
            role: "Full-Stack Developer | 3-Member Team | React, Redux, Node.js, MongoDB, JWT",
            bullets: [
                "Optimized API response latency by 40% and accelerated database reads, achieving a zero-disk-footprint media upload pipeline by coupling selective data population with on-the-fly cloud stream compression.",
                "Built a custom GitHub-style activity heatmap as a reusable React component and integrated Cloudinary CDN for optimized media delivery, improving user engagement analytics and content load times.",
                "Engineered a race-condition-proof, privacy-first analytics engine by utilizing cryptographic visitor hashing, atomic database transactions, and MongoDB connection pooling to guarantee data integrity and system stability during heavy concurrent traffic spikes."
            ]
        }
    ],

    additionalProjects: [
        {
            name: "Above Influence - AI Wellness Tool",
            url: "https://above-influence.vercel.app/",
            displayUrl: "above-influence.vercel.app",
            description: "Engineered a LangChain-powered AI orchestration engine with a 3-tier fallback pipeline, optimizing LLM token utilization by filtering raw API datasets into top-tier behavioral signals to compute 0-100% Goal Alignment Scores.",
            tags: ["React", "n8n", "Gemini AI"]
        },
        {
            name: "Streak Card 23 - SVG Generator",
            url: "https://streak-card23.vercel.app/",
            displayUrl: "streak-card23.vercel.app",
            description: "Generated 2,000+ dynamic developer widgets by architecting a high-performance Node.js microservice, aggregating cross-platform time-series metrics into on-the-fly SVG renders while leveraging strategic HTTP caching.",
            tags: ["Node.js", "SVG", "REST APIs"]
        },
        {
            name: "Chess Pro - Multiplayer Platform",
            url: "https://github.com/VA-run23",
            displayUrl: "github.com/VA-run23",
            description: "Built an interactive chess platform with real-time multiplayer, AI opponent using chess engine, move validation, game history tracking, and WebSocket-based live gameplay.",
            tags: ["JavaScript", "WebSockets", "Chess.js"]
        }
    ],

    skills: [
        "C++", "JavaScript", "Python", "SQL", "Java",
        "React.js", "Redux", "Node.js", "Express.js",
        "MongoDB", "MySQL", "Docker", "Kubernetes", "AWS",
        "REST APIs", "Socket.IO", "Microservices", "JWT", "RBAC"
    ],

    achievements: [
        "Published 20+ technical articles on backend engineering, system design, web development, and software engineering through VSKript.",
        '<strong>IoT Project Expo 2026:</strong> 3rd Place out of 25+ teams for PrintBridge - Institution\'s Innovation Council (IIC), AICTE.',
        '<strong>Innovista 2.0:</strong> Bronze Medal (3rd Place) out of 50+ teams - National Institute of Engineering, Mysuru.',
        '<a href="https://coursera.org/share/406f4053ac5de1398397fc51f9280d85" target="_blank" class="hover:underline"><strong>IBM DevOps and Software Engineering (Coursera)</strong></a> | <a href="https://www.credly.com/users/va-run23/badges" target="_blank" class="hover:underline">Verified DevOps Credentials (Credly)</a>'
    ]
};
