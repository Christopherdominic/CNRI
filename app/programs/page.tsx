import { client } from '@/lib/sanity';
import { Course } from '@/types/sanity';
import ProgramsClient from './ProgramsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses | CNRI',
};

async function getCourses(): Promise<Course[]> {
  return client.fetch(
    `*[_type == "course" && isActive == true] | order(acronym asc) {
      _id, title, acronym, slug, aim, objectives, targetBeneficiaries,
      duration, totalCredits, semesters, admissionText, feeText, deliveryModes,
      assessmentStructure, gradingSystem, graduationRequirements,
      diplomaClassification, careerProspects, directEntryEligibility, curriculum
    }`
  );
}

export const revalidate = 0;

export default async function ProgramsPage() {
  const courses = await getCourses();
  return <ProgramsClient courses={courses} />;
}
