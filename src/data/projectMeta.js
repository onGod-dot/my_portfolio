export const PROJECT_META = [
  {
    id: 1,
    slug: "smart-market",
    title: "Smart Market",
    category: "E-Commerce Platform",
    color: "bg-lime-400",
    img: "/Past works /smartmarket.png",
    previewUrl: "https://smart-market-dkd7.vercel.app/",
  },
  {
    id: 2,
    slug: "tardydevs",
    title: "TardyDevs",
    category: "Dev Studio",
    color: "bg-purple-400",
    img: "/Past works /tardydevs.png",
    previewUrl: "https://www.tardydevs.com",
  },
  {
    id: 3,
    slug: "layerit",
    title: "LayerIt",
    category: "Web Application",
    color: "bg-orange-400",
    img: "/Past works /layerit.png",
    previewUrl: "https://web-redo-project.vercel.app/",
  },
  {
    id: 4,
    slug: "buddy",
    title: "Buddy AI",
    category: "AI Assistant",
    color: "bg-blue-400",
    img: "/Past works /buddy.png",
    previewUrl: "https://buddy-ai-inky.vercel.app/",
  },
  {
    id: 5,
    slug: "phastor",
    title: "Phastor",
    category: "3D Web Experience",
    color: "bg-pink-400",
    img: "/Past works /phastor.png",
    previewUrl: "https://phastor-built-3d.lovable.app/",
  },
  {
    id: 6,
    slug: "teki",
    title: "Teki Essentials",
    category: "E-Commerce",
    color: "bg-cyan-400",
    img: "/Past works /teki.png",
    previewUrl: "https://teki-essentials.lovable.app/",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
