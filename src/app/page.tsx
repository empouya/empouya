import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import AboutPreview from "@/components/sections/AboutPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
    </main>
  );
}