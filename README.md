# EID MOHAMMAD AHMADI | Portfolio

A modern, high-performance portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This site is designed to showcase projects, professional experience, and technical expertise in a clean, scalable, and GitHub Pages-friendly format[cite: 1].

## 🚀 Live Site

Check out the live portfolio here: [https://empouya.github.io/](https://empouya.github.io/)[cite: 1]

---

## 📖 Overview

This project is a static-export portfolio website engineered for maximum performance and SEO[cite: 1]. It serves as a centralized hub for:

- **Professional Profile:** Detailed engineering background and career summary[cite: 1].
- **Project Showcases:** Full project listings with dynamic, build-time generated detail pages[cite: 1].
- **Recruiter-Friendly UX:** Dedicated About and Contact sections for easy networking[cite: 1].
- **Optimized Deployment:** Fully compatible with GitHub Pages via automated CI/CD[cite: 1].

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)[cite: 1]
- **Library:** React 19[cite: 1]
- **Language:** TypeScript[cite: 1]
- **Styling:** Tailwind CSS 4[cite: 1]
- **Animation:** Framer Motion[cite: 1]
- **Deployment:** GitHub Pages & GitHub Actions[cite: 1]

## ✨ Features

- 📱 **Responsive Design:** Seamless experience across mobile, tablet, and desktop[cite: 1].
- 🌓 **Theme Toggle:** Native support for light and dark modes[cite: 1].
- 🔍 **SEO Optimized:** Built-in metadata, `robots.txt`, and automated `sitemap.xml` generation[cite: 1].
- ⚡ **Static Export:** Pre-rendered routes for lightning-fast load times[cite: 1].
- 🎨 **Polish:** Smooth interactions and staggered animations using Framer Motion[cite: 1].
- 📂 **Data-Driven:** Project content is separated from UI logic for easy maintenance[cite: 1].

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
```[cite: 1]

---

## ⚙️ Content Management

### Project Data
Project details are managed via JSON files in `src/content/projects/data/`[cite: 1]. Example schema:
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
```[cite: 1]

### Site Profile
General profile info (name, social links, bio) is managed in `src/content/site/profile.ts`[cite: 1].

---

## 🛠 Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/empouya/empouya.github.io.git](https://github.com/empouya/empouya.github.io.git)
   ```[cite: 1]

2. **Install dependencies:**
   ```bash
   npm install
   ```[cite: 1]

3. **Start development server:**
   ```bash
   npm run dev
   ```[cite: 1]
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser[cite: 1].

---

## 🚀 Deployment

This portfolio is configured for **GitHub Pages** deployment using **GitHub Actions**[cite: 1].

1. **Build:** `npm run build` generates a static export in the `out/` directory[cite: 1].
2. **Action:** On every push to the `main` branch, the `.github/workflows/deploy.yml` action triggers[cite: 1].
3. **Requirement:** Ensure your repository name follows the pattern `username.github.io` and GitHub Pages is set to deploy from "GitHub Actions" in the repository settings[cite: 1].

---

## 👤 Author

**EID MOHAMMAD AHMADI**

- **GitHub:** [@empouya](https://github.com/empouya)[cite: 1]
- **LinkedIn:** [In/empouya](https://linkedin.com/in/empouya/)[cite: 1]
- **Portfolio:** [empouya.github.io](https://empouya.github.io/)[cite: 1]

---
*Built with ❤️ using Next.js and Tailwind CSS.*[cite: 1]