import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Teki Essentials",
  category: "E-Commerce",
  heroImg: "/Past works /teki.png",
  tagline:
    "A clean, modern e-commerce storefront for Teki Essentials — built to showcase and sell lifestyle and essential products with a smooth, brand-forward shopping experience.",
  year: "2024",
  stack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Supabase / PostgreSQL",
    "Lovable (Deployment)",
  ],
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
};

export default function TekiDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
