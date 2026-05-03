# EID MOHAMMAD AHMADI | Portfolio

A modern, high-performance portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This site is designed to showcase projects, professional experience, and technical expertise in a clean, scalable, and GitHub Pages-friendly format.

## 🚀 Live Site

Check out the live portfolio here: [https://empouya.github.io/](https://empouya.github.io/)

---

## 📖 Overview

This project is a static-export portfolio website engineered for maximum performance and SEO. It serves as a centralized hub for:

- **Professional Profile:** Detailed engineering background and career summary.
- **Project Showcases:** Full project listings with dynamic, build-time generated detail pages.
- **Recruiter-Friendly UX:** Dedicated About and Contact sections for easy networking.
- **Optimized Deployment:** Fully compatible with GitHub Pages via automated CI/CD.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Deployment:** GitHub Pages & GitHub Actions

## ✨ Features

- 📱 **Responsive Design:** Seamless experience across mobile, tablet, and desktop.
- 🌓 **Theme Toggle:** Native support for light and dark modes.
- 🔍 **SEO Optimized:** Built-in metadata, `robots.txt`, and automated `sitemap.xml` generation.
- ⚡ **Static Export:** Pre-rendered routes for lightning-fast load times.
- 🎨 **Polish:** Smooth interactions and staggered animations using Framer Motion.
- 📂 **Data-Driven:** Project content is separated from UI logic for easy maintenance.

---

## 📁 Project Structure
```txt
src/
 ├── app/               # Next.js App Router (pages & layouts)
 │    ├── about/        # About page
 │    ├── contact/      # Contact page
 │    ├── projects/     # Project listing and [slug] dynamic routes
 │    ├── globals.css   # Global styles and Tailwind directives
 │    └── layout.tsx    # Root layout and metadata
 ├── components/        # Reusable UI components
 │    ├── animations/   # Framer Motion wrappers
 │    ├── hero/         # Hero section components
 │    ├── layout/       # Navbar, Footer, etc.
 │    └── ui/           # Atomic design components (Buttons, Inputs)
 ├── content/           # Data-driven content (JSON/TS)
 │    ├── projects/     # Project data and image assets
 │    └── site/         # Global site/profile configuration
 └── lib/               # Utility functions and hooks
```

---

## ⚙️ Content Management

### Project Data
Project details are managed via JSON files in `src/content/projects/data/`. Example schema:
```json
{
  "id": "project-1",
  "slug": "portfolio-website",
  "title": "Portfolio Website",
  "description": "A modern portfolio built with Next.js",
  "tech": ["Next.js", "TypeScript", "Tailwind"],
  "image": "/projects/portfolio/cover.jpg",
  "github": "[https://github.com/empouya/repo](https://github.com/empouya/repo)",
  "live": "[https://empouya.github.io/](https://empouya.github.io/)",
  "featured": true,
  "results": ["Improved SEO ranking", "99/100 Lighthouse score"]
}
```

### Site Profile
General profile info (name, social links, bio) is managed in `src/content/site/profile.ts`.

---

## 🛠 Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/empouya/empouya.github.io.git](https://github.com/empouya/empouya.github.io.git)
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🚀 Deployment

This portfolio is configured for **GitHub Pages** deployment using **GitHub Actions**.

1. **Build:** `npm run build` generates a static export in the `out/` directory.
2. **Action:** On every push to the `main` branch, the `.github/workflows/deploy.yml` action triggers.
3. **Requirement:** Ensure your repository name follows the pattern `username.github.io` and GitHub Pages is set to deploy from "GitHub Actions" in the repository settings.

---

## 👤 Author

**EID MOHAMMAD AHMADI**

- **GitHub:** [@empouya](https://github.com/empouya)
- **LinkedIn:** [In/empouya](https://linkedin.com/in/empouya/)
- **Portfolio:** [empouya.github.io](https://empouya.github.io/)

---
*Built with ❤️ using Next.js and Tailwind CSS.*