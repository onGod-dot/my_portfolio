import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Smart Market",
  category: "E-Commerce Platform",
  heroImg: "/Past works /smartmarket.png",
  tagline:
    "A modern e-commerce platform built to simplify buying and selling online — with a clean UI, smart product discovery, and a seamless checkout experience.",
  year: "2024",
  stack: [
    "React",
    "Node.js",
    "Tailwind CSS",
    "REST API",
    "Supabase / PostgreSQL",
    "Vercel (Deployment)",
  ],
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
};

export default function SmartMarketDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
