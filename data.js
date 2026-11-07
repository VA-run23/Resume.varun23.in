// ── Resume Data ──
// Edit this file to update resume content. No HTML knowledge needed.

const RESUME_DATA = {
    name: "Varun D Magar",
    subtitle: "Software Engineer building scalable backend systems, cloud infrastructure, and distributed applications.",
    profileImage: "profile.jpg",
    location: {
        name: "Mysore, Karnataka, India",
        url: "https://www.google.com/maps/place/Mysore"
    },
    email: "2023cs_varundmagar_d@nie.ac.in",

    socials: [
        { type: "github", url: "https://github.com/VA-run23", label: "GitHub" },
        { type: "linkedin", url: "https://linkedin.com/in/va-run23", label: "LinkedIn" },
        { type: "leetcode", url: "https://leetcode.com/u/VA-run23/", label: "LeetCode" },
        { type: "portfolio", url: "https://varun23.in/", label: "Varun23.in - Portfolio" }
    ],

    about: "I'm a pre-final year Computer Science student at the National Institute of Engineering, Mysore (Class of 2027), specializing in backend systems, cloud infrastructure, and distributed architectures. I build production-grade software — from cloud-to-edge IoT platforms to containerized microservices to scalable APIs serving thousands of requests. I've maintained a 650+ day coding streak, earned LeetCode Knight rank (top 5% globally) with 700+ problems solved, and shipped systems that have won awards at national-level expos. My focus is on building reliable, scalable systems that solve real problems — whether that's optimizing database performance, designing fault-tolerant architectures, or automating deployments. Currently exploring Kubernetes, distributed tracing, and system design patterns. Open to SDE, Cloud Engineer, DevOps Engineer, and Full-Stack Developer internship opportunities.",

    education: [
        {
            institution: "National Institute of Engineering, Mysuru",
            period: "Sep '23 - June '27",
            degree: "B.E. in Computer Science and Engineering | CGPA: 8.95/10.0 (up to 6th Sem)",
            details: [
                "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Distributed Systems, Object-Oriented Design, Software Engineering, Machine Learning"
            ]
        }
    ],

    competitiveProgramming: [
        '<strong>LeetCode Knight (Top 5% globally):</strong> Peak rating 2116; solved 700+ problems spanning dynamic programming, graph algorithms, and system design patterns. | <a href="https://leetcode.com/u/VA-run23/" target="_blank" class="hover:underline">leetcode.com/u/VA-run23</a>',
        '<strong>650+ day active coding streak</strong> across GitHub, LeetCode, and GeeksforGeeks — consistent discipline in problem-solving, debugging, and continuous technical growth.'
    ],

    projects: [
        {
            name: "PrintBridge - Cloud-to-Edge Remote Printing System (PaaS)",
            url: "https://printbridge-by-vps.onrender.com",
            period: "May '26",
            role: "Backend Engineer | 4-Member Team | Node.js, Express, Sharp, PDFKit, ThingSpeak",
            bullets: [
                "Reduced end-to-end remote print latency to under 30 seconds by architecting a Node.js/Express cloud backend that dispatches jobs through an automated queue to a local edge daemon in real time.",
                "Designed a fault-tolerant edge agent with multi-OS driver fallbacks, mutex locks to eliminate race conditions on shared hardware, and exponential-backoff retries for resilience under concurrent load.",
                "Eliminated server out-of-memory crashes with a stream-based rendering pipeline and zero-retention file lifecycle; instrumented real-time health monitoring via ThingSpeak telemetry."
            ]
        },
        {
            name: "Digital Democracy - AI-Powered Civic Engagement Platform",
            url: "https://d-05-minor-project.netlify.app",
            period: "Sep '25 - Dec '25",
            role: "Backend Engineer | 4-Member Team | MERN Stack, Gemini AI, Docker, Jest",
            bullets: [
                "Cut server memory use and network payload by offloading admin analytics from the single-threaded Node.js event loop to native MongoDB aggregation pipelines.",
                "Designed a 48-hour rolling time-decay trending algorithm and infinite-depth comment threading (adjacency-list pattern), overcoming NoSQL document-size limits.",
                "Built an RBAC-secured moderation engine with bulk-resolution tools; containerized services with Docker and automated Jest regression tests in a GitHub Actions CI pipeline."
            ]
        },
        {
            name: "VSKript - Full-Stack Blogging Platform",
            url: "https://vskript.netlify.app/",
            period: "Dec '25 - Mar '26",
            role: "Full-Stack Developer | 3-Member Team | React, Redux, Node.js, MongoDB, JWT",
            bullets: [
                "Improved API response latency by 40% via selective data population; built a zero-disk-footprint media pipeline with on-the-fly stream compression and Cloudinary CDN delivery.",
                "Engineered a race-condition-safe, privacy-first analytics engine using cryptographic visitor hashing, atomic DB operations, and connection pooling; built a reusable React activity-heatmap component."
            ]
        }
    ],

    additionalProjects: [
        {
            name: "Above Influence - AI Wellness Tool",
            url: "https://above-influence.vercel.app/",
            displayUrl: "above-influence.vercel.app",
            description: "Built a LangChain-based LLM orchestration engine with a 3-tier fallback pipeline that distills raw API data into key behavioral signals, reducing token usage while computing 0-100% goal-alignment scores and automated risk ratings.",
            tags: ["React", "n8n", "Gemini AI", "LangChain"]
        },
        {
            name: "Streak Card 23 - Dynamic SVG Generator",
            url: "https://streak-card23.vercel.app/",
            displayUrl: "streak-card23.vercel.app",
            description: "Served 2,000+ dynamic developer widgets from a Node.js microservice that aggregates cross-platform time-series metrics into on-the-fly SVGs, using HTTP caching to stay within upstream API rate limits.",
            tags: ["Node.js", "Express", "SVG", "REST APIs"]
        },
        {
            name: "2 Player Chess Game",
            url: "https://chessgame-by-23neurobytes.onrender.com/",
            displayUrl: "chessgame-by-23neurobytes.onrender.com",
            description: "A real-time two-player chess game built with Socket.io, allowing two players to play against each other in the browser. Developed as a hands-on project to learn WebSockets and real-time communication.",
            tags: ["JavaScript", "Socket.io", "HTML/CSS"]
        }
    ],

    skills: [
        "Python", "Java", "C++", "JavaScript", "SQL",
        "Node.js", "Express.js", "React.js", "Redux",
        "MongoDB", "MySQL", "Docker", "Kubernetes", "AWS (EC2, S3, IAM)",
        "REST APIs", "Microservices", "CI/CD", "GitHub Actions", "Jest",
        "Concurrency", "Caching", "Rate Limiting", "JWT", "RBAC",
        "Linux", "Git", "System Design"
    ],

    achievements: [
        '<strong>LeetCode Knight (Top 5% globally):</strong> Peak rating 2116; 700+ problems solved; 650+ day active coding streak.',
        '<strong>IoT Project Expo 2026:</strong> 3rd place among 25+ teams for PrintBridge — Institution\'s Innovation Council (IIC), AICTE.',
        '<strong>Innovista 2.0:</strong> Bronze medal (3rd place) among 50+ teams at National Institute of Engineering, Mysuru.',
        'Published 20+ technical articles on backend engineering, system design, and software development through <a href="https://vskript.netlify.app/profile/2" target="_blank" class="hover:underline">VSKript</a>.',
        '<a href="https://coursera.org/share/406f4053ac5de1398397fc51f9280d85" target="_blank" class="hover:underline"><strong>IBM DevOps and Software Engineering Certificate (Coursera)</strong></a>, <a href="https://www.credly.com/users/va-run23/badges" target="_blank" class="hover:underline">verified on Credly</a>.'
    ]
};
