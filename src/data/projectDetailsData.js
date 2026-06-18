// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  "smart-market": {
    title: "Smart Market",
    category: "E-Commerce Platform",
    tagline:
      "A modern e-commerce platform built to simplify buying and selling online — with a clean UI, smart product discovery, and a seamless checkout experience.",
    year: "2024",
    stack: ["React", "Node.js", "Tailwind CSS", "REST API", "Supabase / PostgreSQL", "Vercel"],
    features: [
      "Product listing and search with category filters for fast discovery.",
      "Clean and responsive storefront UI optimised for both desktop and mobile.",
      "Cart and checkout flow with order summary and confirmation.",
      "Seller dashboard to manage product listings, inventory, and orders.",
      "User authentication with secure login and profile management.",
      "Real-time updates on product availability and order status.",
    ],
    impact: [
      "Simplifies the online shopping experience with an intuitive and distraction-free interface.",
      "Empowers small sellers to list and manage products without technical complexity.",
      "Demonstrates a full e-commerce pipeline from product discovery to order completion.",
    ],
    links: {
      live: "https://smart-market-dkd7.vercel.app/",
    },
  },
  tardydevs: {
    title: "TardyDevs",
    category: "Dev Studio",
    tagline:
      "The official brand and digital home of TardyDevs — a development studio focused on building software solutions, digital products, and innovative web experiences.",
    year: "2024",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel"],
    features: [
      "Studio landing page showcasing services, projects, and team identity.",
      "Portfolio section highlighting past builds across web, AI, and business platforms.",
      "Services breakdown covering web development, UI/UX design, and product consulting.",
      "Contact and inquiry flow for potential clients to reach the team.",
      "Responsive design with smooth animations for a polished brand experience.",
      "Blog / updates section to share development insights and studio news.",
    ],
    impact: [
      "Establishes TardyDevs as a credible development brand with a professional online presence.",
      "Serves as a central hub for client acquisition, project showcases, and studio identity.",
      "Reflects the studio's design standards and technical capability through the site itself.",
    ],
    links: {
      live: "https://www.tardydevs.com",
    },
  },
  layerit: {
    title: "LayerIt",
    category: "Web Application",
    tagline:
      "A web application built to layer and manage digital content with an intuitive interface — giving users precise control over how their content is structured and presented.",
    year: "2024",
    stack: ["React", "Tailwind CSS", "Node.js", "REST API", "Vercel"],
    features: [
      "Layer-based content management for organising digital assets and information.",
      "Drag-and-drop interface for reordering and structuring content layers intuitively.",
      "Real-time preview of how content changes appear across different layouts.",
      "User authentication and personalised workspaces for managing projects.",
      "Export and sharing options for delivering layered content to end users.",
      "Clean, minimal UI focused on productivity and ease of use.",
    ],
    impact: [
      "Streamlines content organisation by giving users a visual, layer-based workflow.",
      "Reduces time spent on manual content structuring with intuitive drag-and-drop controls.",
      "Provides a flexible foundation for content management across different use cases.",
    ],
    links: {
      live: "https://web-redo-project.vercel.app/",
    },
  },
  buddy: {
    title: "Buddy AI",
    category: "AI Assistant",
    tagline:
      "An AI-powered companion app designed to assist users with everyday tasks, answer questions, and provide intelligent, context-aware conversations in a clean chat interface.",
    year: "2024",
    stack: ["React", "Tailwind CSS", "Node.js", "LLM API Integration", "REST API", "Vercel"],
    features: [
      "Conversational AI interface for natural, flowing interactions with the assistant.",
      "Context-aware responses that retain conversation history for coherent multi-turn dialogue.",
      "Task assistance covering writing, summarisation, Q&A, and general productivity.",
      "Clean and minimal chat UI optimised for focus and readability.",
      "Fast response times with streaming output for a smooth user experience.",
      "Mobile-responsive design for use across devices.",
    ],
    impact: [
      "Makes AI assistance accessible through a friendly, approachable chat interface.",
      "Boosts productivity by handling everyday cognitive tasks quickly and accurately.",
      "Demonstrates a practical LLM integration with a polished, user-focused product experience.",
    ],
    links: {
      live: "https://buddy-ai-inky.vercel.app/",
    },
  },
  phastor: {
    title: "Phastor",
    category: "3D Web Experience",
    tagline:
      "An immersive 3D web experience that pushes the boundaries of browser-based visuals — combining interactive three-dimensional environments with a bold, modern design aesthetic.",
    year: "2024",
    stack: ["React", "Three.js / WebGL", "Tailwind CSS", "GSAP", "Lovable"],
    features: [
      "Full 3D interactive environment rendered entirely in the browser using WebGL.",
      "Smooth camera controls and scene transitions for an immersive exploration experience.",
      "Responsive 3D rendering that adapts to different screen sizes and device capabilities.",
      "Custom shaders and lighting for a visually striking and unique aesthetic.",
      "Performance-optimised 3D pipeline to ensure smooth frame rates across devices.",
      "Bold typographic design layered over the 3D environment for strong visual identity.",
    ],
    impact: [
      "Showcases the capability of building high-fidelity 3D experiences purely in the browser.",
      "Demonstrates advanced front-end skills combining WebGL, animation, and UI design.",
      "Delivers a memorable, differentiated web experience that stands out from conventional sites.",
    ],
    links: {
      live: "https://phastor-built-3d.lovable.app/",
    },
  },
  teki: {
    title: "Teki Essentials",
    category: "E-Commerce",
    tagline:
      "A clean, modern e-commerce storefront for Teki Essentials — built to showcase and sell lifestyle and essential products with a smooth, brand-forward shopping experience.",
    year: "2024",
    stack: ["React", "Tailwind CSS", "Node.js", "Supabase / PostgreSQL", "Lovable"],
    features: [
      "Brand-focused product storefront with a clean, lifestyle-oriented visual design.",
      "Product catalogue with filtering by category, price range, and availability.",
      "Product detail pages with image gallery, descriptions, and add-to-cart functionality.",
      "Smooth cart and checkout flow with order summary and confirmation.",
      "Mobile-first responsive design for a seamless shopping experience on any device.",
      "Admin-friendly product management for easy catalogue updates.",
    ],
    impact: [
      "Gives Teki Essentials a strong digital retail presence with a brand-consistent storefront.",
      "Simplifies the customer shopping journey from product discovery to purchase completion.",
      "Demonstrates a complete, production-ready e-commerce build with modern web technologies.",
    ],
    links: {
      live: "https://teki-essentials.lovable.app/",
    },
  },
};
