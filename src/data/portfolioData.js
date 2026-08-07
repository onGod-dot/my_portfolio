// ─── Portfolio Data (single source of truth for site content) ────
//
// This is the LIVE data the site renders and the AI assistant reads. It is
// imported by `src/services/aiContext.js` and `src/components/ChatWidget.jsx`.
//
// CUSTOMIZING: edit the values below with your own details. For a clean,
// fully-commented starter template (with guidance on every field), see
// `src/data/examplePortfolioData.js`. See also `docs/customization.md`.
//
// FIELDS TO EDIT:
//   profile.name / role / bio / location / email / socials  → your identity
//   experience[]   → your work / organization / education history
//   techStack[]    → your skills, grouped by `category`
//   projects[]     → short project summaries (keep `slug` in sync with
//                    projectMeta.js + projectDetailsData.js)
//   achievements[] → awards / hackathons (optional)
//   capabilities[] → high-level specializations
export const PORTFOLIO_DATA = {
    profile: {
        name: "Cyril Jerry Baah",
        role: "Entrepreneurial Web Dev & AI/ML Expert",
        bio: "I'm Cyril Jerry Baah, Entrepreneurial Web Dev & AI/ML Expert and Information Systems & Technology student with experience building and launching digital products. Co-Founder of TardyDevs, a development brand focused on software solutions and digital innovation.",
        location: "Ghana",
        email: "baahcyril2@gmail.com",
        socials: {
            github: "https://github.com/onGod-dot",
            linkedin: "https://www.linkedin.com/in/cyril-baah-957761302"
        }
    },
    experience: [
        {
            title: "Co-Founder & Web Developer — TardyDevs",
            period: "2025 – Present",
            description: [
                "Co-Founded and manage a software development brand focused on web applications, AI solutions, and digital products.",
                "Lead project planning, development, deployment, and branding initiatives.",
                "Collaborate with developers and clients to deliver innovative technology solutions."
            ]
        },
        {
            title: "Web Designer — Layerit & Buddy",
            period: "2025",
            description: [
                "Designed and developed a productivity-focused application aimed at improving organization and workflow management.",
                "Implemented user-centric features with scalability and performance in mind."
            ]
        },
        {
            title: "Lead Developer — Campus Plug",
            period: "2025 – Present",
            description: [
                "Developing a campus marketplace platform connecting buyers and sellers within university communities.",
                "Designing the frontend experience and backend architecture.",
                "Integrating authentication, product listings, and database management systems."
            ]
        },
        {
            title: "Computer Technician Assistant (Intern) — Volta River Authority (VRA), Aboadze",
            period: "October 2025 – December 2025",
            description: [
                "Assisted in the installation, maintenance, and troubleshooting of computer hardware and software systems.",
                "Provided technical support to staff by diagnosing and resolving computer-related issues."
            ]
        }
    ],
    techStack: [
        { name: "Python", category: "Language" },
        { name: "TensorFlow", category: "Deep Learning" },
        { name: "PyTorch", category: "Deep Learning" },
        { name: "React", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Supabase", category: "Backend" },
        { name: "Docker", category: "DevOps" },
        { name: "MLOps", category: "Machine Learning Operations" },
        { name: "Scikit-Learn", category: "Machine Learning" },
        { name: "OpenCV", category: "Computer Vision" },
        { name: "FastAPI", category: "Backend" },
        { name: "Streamlit", category: "ML Deployment" },
        { name: "Pandas", category: "Data Analysis" },
        { name: "Matplotlib", category: "Visualization" },
        { name: "Seaborn", category: "Visualization" },
        { name: "Keras", category: "Deep Learning" },
        { name: "Numpy", category: "Data Science" },
        { name: "Google Gemini", category: "LLM / GenAI" },
        { name: "RAG", category: "AI Architecture" },
        { name: "ExpressJS", category: "Backend" },
        { name: "Microsoft Azure", category: "Cloud" }
    ],
    projects: [
        {
            slug: "smart-market",
            title: "Smart Market",
            category: "E-Commerce Platform",
            description: "A modern e-commerce platform built to simplify buying and selling online."
        },
        {
            slug: "tardydevs",
            title: "TardyDevs",
            category: "Dev Studio",
            description: "The official brand and digital home of TardyDevs — a development studio focused on software solutions and digital innovation."
        },
        {
            slug: "layerit",
            title: "LayerIt",
            category: "Web Application",
            description: "A web application for layering and managing digital content with an intuitive interface."
        },
        {
            slug: "buddy",
            title: "Buddy AI",
            category: "AI Assistant",
            description: "An AI-powered companion app for everyday tasks and intelligent, context-aware conversations."
        },
        {
            slug: "phastor",
            title: "Phastor",
            category: "3D Web Experience",
            description: "An immersive 3D web experience combining interactive environments with bold, modern design."
        },
        {
            slug: "teki",
            title: "Teki Essentials",
            category: "E-Commerce",
            description: "A clean, modern e-commerce storefront for lifestyle and essential products."
        }
    ],
    achievements: [
        {
            title: "National Finalist - Base Indonesia Hackathon 2025",
            project: "Base Realms",
            description: "Built an onchain 16-bit RPG battle game on Base chain with QRIS payment integration, ERC-721/ERC-1155 NFTs, and seasonal reward pools. Onboards non-crypto users through familiar payment methods.",
            team: "Terra Bit (Firdaus Khotibul Zickrian & Gagah Athallah Fatha)",
            track: "Base Track",
            techStack: ["Solidity", "Next.js", "TypeScript", "JavaScript", "CSS"],
            links: {
                devfolio: "https://devfolio.co/projects/base-realms-b63a",
                github: "https://github.com/zickrian/Base-Realms",
                live: "https://baserealms.app/"
            }
        }
    ],
    capabilities: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Machine Learning Operations (MLOps)",
        "Data Analysis",
        "Web Development"
    ]
};
