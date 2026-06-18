import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "LayerIt",
  category: "Web Application",
  heroImg: "/Past works /layerit.png",
  tagline:
    "A web application built to layer and manage digital content with an intuitive interface — giving users precise control over how their content is structured and presented.",
  year: "2024",
  stack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "REST API",
    "Vercel (Deployment)",
  ],
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
};

export default function LayerItDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
