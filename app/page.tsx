import Hero from "@/components/Hero";
import FocusCards from "@/components/FocusCards";
import ImpactSection from "@/components/ImpactSection";
import ActivitiesPreview from "@/components/ActivitiesPreview";
import CTABanner from "@/components/CTABanner";
import { client } from '@/lib/sanity';
import { Activity } from '@/types/sanity';

async function getFeaturedActivities(): Promise<Activity[]> {
  return client.fetch(
    `*[_type == "activity" && featured == true] | order(date desc) [0...3] {
      _id,
      title,
      description,
      date,
      image,
      slug,
      featured
    }`
  );
}

export const revalidate = 0;

export default async function Home() {
  const activities = await getFeaturedActivities();

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
      <ActivitiesPreview activities={activities} />
      <CTABanner />
    </>
  );
}
