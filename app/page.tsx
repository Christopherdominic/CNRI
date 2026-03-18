import Hero from "@/components/Hero";
import FocusCards from "@/components/FocusCards";
import ImpactSection from "@/components/ImpactSection";
import ActivitiesPreview from "@/components/ActivitiesPreview";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          CNRI bridges the gap between academia, government, and communities to combat malnutrition, 
          food insecurity, and health disparities in Nigeria and across Africa.
        </p>
      </section>
      <FocusCards />
      <ImpactSection />
      <ActivitiesPreview />
      <CTABanner />
    </>
  );
}
