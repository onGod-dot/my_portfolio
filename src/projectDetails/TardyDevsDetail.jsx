import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "TardyDevs",
  category: "Dev Studio",
  heroImg: "/Past works /tardydevs.png",
  tagline:
    "The official brand and digital home of TardyDevs — a development studio focused on building software solutions, digital products, and innovative web experiences.",
  year: "2024",
  stack: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Vercel (Deployment)",
  ],
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
};

export default function TardyDevsDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
