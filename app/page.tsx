import { HeroSection } from "@/components/home/hero-section";
import { FeatureGridSection } from "@/components/home/feature-grid-section";
import { StatsSection } from "@/components/home/stats-section";
import { MapFeatureSection } from "@/components/home/map-feature-section";
import { FeaturedListingsSection } from "@/components/home/featured-listings-section";
import { FaqSection } from "@/components/home/faq-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";
import { BottomFeatureSection } from "@/components/home/bottom-feature-section";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const propertiesData = await prisma.property.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  })

  const properties = propertiesData.map((p: any) => ({
    ...p,
    images: JSON.parse(p.images as string),
    amenities: JSON.parse(p.amenities as string)
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureGridSection />
      <StatsSection />
      <MapFeatureSection />
      <FeaturedListingsSection properties={properties} />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
      <BottomFeatureSection />
    </div>
  );
}
