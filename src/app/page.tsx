import React from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CinematicHero } from "@/components/home/CinematicHero";
import { InfrastructureStory } from "@/components/home/InfrastructureStory";
import { SolutionTabs } from "@/components/home/SolutionTabs";
import { ProductDirectory } from "@/components/home/ProductDirectory";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { DeveloperShowcase } from "@/components/home/DeveloperShowcase";
import { CustomerStoryCarousel } from "@/components/home/CustomerStoryCarousel";
import { SharedFaq } from "@/components/common/SharedFaq";
import { SalesCTA } from "@/components/common/SalesCTA";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <CinematicHero />
        <InfrastructureStory />
        <SolutionTabs />
        <ProductDirectory />
        <TestimonialCarousel initialIndex={0} />
        <DeveloperShowcase />
        <CustomerStoryCarousel />
        <SharedFaq />
        <SalesCTA href={SITE_CONFIG.routes.homeContactSales} />
      </main>
      <SiteFooter />
    </>
  );
}
