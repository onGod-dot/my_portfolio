import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Umat Clinic",
  category: "Healthcare DSS",
  heroImg: "/Past works /Umat Clinic.png",
  tagline:
    "A smart integrated Decision Support System built to aid healthcare delivery at UMaT, Tarkwa, Ghana, helping medical staff make faster, data-informed clinical decisions.",
  year: "2025",
  stack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "AI/ML Integration",
    "REST API",
    "Vercel (Deployment)",
  ],
  features: [
    "Smart clinical decision support that surfaces recommendations based on patient data inputs.",
    "Patient intake and records management with a clean, structured interface.",
    "Role-based access for medical staff, ensuring data privacy and appropriate permissions.",
    "Real-time data syncing via Supabase for up-to-date patient information.",
    "Integrated AI logic to assist in symptom analysis and triage prioritisation.",
    "Mobile-responsive design for use on clinic tablets and phones.",
    "Secure authentication flow protecting sensitive healthcare data.",
  ],
  impact: [
    "Assists healthcare workers at UMaT, Tarkwa in making faster and more informed clinical decisions.",
    "Reduces manual workload by digitising patient intake and record-keeping processes.",
    "Demonstrates how AI-powered tools can address real healthcare infrastructure gaps in Ghana.",
  ],
  links: {
    live: "https://umat-clinic.vercel.app/auth",
  },
};

export default function UmatClinicDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
