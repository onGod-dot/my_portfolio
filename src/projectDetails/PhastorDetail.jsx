import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Phastor",
  category: "3D Web Experience",
  heroImg: "/Past works /phastor.png",
  tagline:
    "An immersive 3D web experience that pushes the boundaries of browser-based visuals — combining interactive three-dimensional environments with a bold, modern design aesthetic.",
  year: "2024",
  stack: [
    "React",
    "Three.js / WebGL",
    "Tailwind CSS",
    "GSAP (Animations)",
    "Lovable (Deployment)",
  ],
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
};

export default function PhastorDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
