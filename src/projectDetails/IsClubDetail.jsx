import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "IS Club UMaT",
  category: "Ed-Tech Platform",
  heroImg: "/Past works /isclub.png",
  tagline:
    "A learning platform built for the Information Systems and Technology Club at UMaT, providing members and students with curated roadmaps, resources, and learning materials.",
  year: "2026",
  stack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "Vercel (Deployment)",
  ],
  features: [
    "Curated learning roadmaps across key IS and tech disciplines for structured self-study.",
    "Resource library with categorised materials, links, and guides contributed by the club.",
    "Member-facing dashboard for tracking progress through roadmaps and resources.",
    "Clean, accessible UI designed for students at varying levels of technical experience.",
    "Mobile-responsive layout for easy access on campus devices.",
    "Maintained and expanded as a live club initiative under the IS Club presidency.",
  ],
  impact: [
    "Centralises learning resources for IS&T Club members and the wider UMaT student community.",
    "Bridges the gap between classroom learning and industry-relevant tech skills.",
    "A direct initiative of the IS Club presidency, demonstrating leadership through technology.",
  ],
  links: {
    live: "https://is-clubumat.vercel.app/",
  },
};

export default function IsClubDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
