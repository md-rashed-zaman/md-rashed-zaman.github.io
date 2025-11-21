"use client";

import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { CPSection } from "@/components/sections/cp";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";

export default function Page() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 md:py-24">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <CPSection />
      <ProjectsSection />
      <EducationSection />
      <div className="h-24"></div>
    </section>
  );
}