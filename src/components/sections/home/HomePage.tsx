import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import AboutPreview from "@/components/sections/AboutPreview";
import SkillsPreview from "@/components/sections/home/SkillsPreview";
import ExperiencePreview from "@/components/sections/home/ExperiencePreview";
import PersonalityPreview from "@/components/sections/home/PersonalityPreview";
import ContactCta from "@/components/sections/home/ContactCta";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <AboutPreview />
            <FeaturedProjects />
            <SkillsPreview />
            <ExperiencePreview />
            <PersonalityPreview />
            <ContactCta />
        </main>
    );
}
