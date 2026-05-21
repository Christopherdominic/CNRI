import { client } from '@/lib/sanity';
import { About, SiteSettings } from '@/types/sanity';
import AboutClient from './AboutClient';

async function getAbout(): Promise<About | null> {
  return client.fetch(
    `*[_type == "about"][0] {
      _id, overview, mission, vision, commitment, impactStats
    }`
  );
}

async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id, contactEmail, contactPhone, address, socialMedia
    }`
  );
}

export const revalidate = 0;

export default async function AboutPage() {
  const [about, settings] = await Promise.all([getAbout(), getSiteSettings()]);
  return <AboutClient about={about} settings={settings} />;
}
