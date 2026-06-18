import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Buddy AI",
  category: "AI Assistant",
  heroImg: "/Past works /buddy.png",
  tagline:
    "An AI-powered companion app designed to assist users with everyday tasks, answer questions, and provide intelligent, context-aware conversations in a clean chat interface.",
  year: "2024",
  stack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "LLM API Integration",
    "REST API",
    "Vercel (Deployment)",
  ],
  features: [
    "Conversational AI interface for natural, flowing interactions with the assistant.",
    "Context-aware responses that retain conversation history for coherent multi-turn dialogue.",
    "Task assistance covering writing, summarisation, Q&A, and general productivity.",
    "AI image generation with speech-to-text , text-to-speech ai integration",
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
};

export default function BuddyDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
