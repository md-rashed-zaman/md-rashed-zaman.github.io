"use client";

import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { CPSection } from "@/components/sections/cp";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-24">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CPSection />
      <ContactSection />
      <div className="h-10" />
    </section>
  );
}
