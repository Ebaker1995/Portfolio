import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Eric Baker's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        /> */}
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Interests" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact Me!" />
      </Page>
    </>
  );
}
