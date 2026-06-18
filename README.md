# Snr Dev Cyril — Personal Portfolio

The personal portfolio of **Cyril Jerry Baah**, also known as **Snr Dev Cyril** — Entrepreneurial Web Developer, AI/ML Expert, and co-founder of [TardyDevs](https://www.tardydevs.com).

Built with React, Vite, Tailwind CSS, GSAP, and Lenis smooth scroll.

---

## About

This is a fully animated, performance-optimised portfolio site showcasing:

- **Past Explorations** — Projects including Smart Market, TardyDevs, LayerIt, Buddy AI, Phastor, and Teki Essentials
- **Professional Experience** — Co-Founder at TardyDevs, Lead Developer at Campus Plug, Web Designer, and VRA internship
- **Technical Capabilities** — React, Node.js, Java, Web Design, API Development, Systems Design, AI/ML
- **Notable Achievements** — 3rd Runner-Up at a Hackathon, IS Club President at University of Mines and Technology
- **AI Chat Terminal** — Powered by Together AI (Llama 3.3 70B), answering questions about the portfolio

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8, Tailwind CSS 3 |
| Animations | GSAP 3 + ScrollTrigger, Lenis smooth scroll |
| AI Bot | Together AI — `meta-llama/Llama-3.3-70B-Instruct-Turbo` |
| Routing | React Router DOM 7 |
| Icons | Lucide React, React Icons |
| Markdown | React Markdown |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/onGod-dot/my_portfolio.git
cd my_portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Together AI key to .env:
# VITE_TOGETHER_API_KEY=your_key_here

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_TOGETHER_API_KEY` | Together AI API key for the chat bot |

> ⚠️ Never commit your `.env` file — it is listed in `.gitignore`.

---

## Project Structure

```
src/
├── components/       # UI components (Hero, About, Footer, ChatWidget, etc.)
├── data/             # Portfolio content (projects, experience, skills)
├── pages/            # Page-level components
├── projectDetails/   # Individual project detail pages
├── services/         # AI chat services (Together AI, intent router)
├── hooks/            # Custom React hooks
└── utils/            # GSAP animation utilities, easing functions

public/
├── Past works/       # Project preview images
├── hackathon-base/   # Hackathon achievement photos
└── partners/         # Partner/client logos
```

---

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview production build
npm run format    # Format code with Prettier
```

---

## Contact

- **Email** — baahcyril2@gmail.com
- **GitHub** — [@onGod-dot](https://github.com/onGod-dot)
- **LinkedIn** — [Cyril Baah](https://www.linkedin.com/in/cyril-baah-957761302)

---

© 2026 Snr Dev Cyril. All rights reserved.
