'use client';

import { useState } from 'react';
import CourseDetail, { CourseData } from '@/components/CourseDetail';

const PDPHCN: CourseData = {
  title: 'Professional Diploma in Public Health and Community Nutrition',
  acronym: 'PDPHCN',
  duration: 'One Academic Year (Two Semesters)',
  totalCredits: 28,
  semesters: 2,
  aim: 'To equip learners with the knowledge, skills, and competencies needed to address pressing public health and nutrition challenges at community and national levels.',
  objectives: [
    'Develop a pool of skilled professionals for teaching, dietetics, nursing, and community development.',
    'Equip learners with nutrition education and intervention strategies for families and communities.',
    'Provide opportunities for self-employment and entrepreneurship in nutrition-related fields.',
    'Support Kaduna State\'s vision of improving nutrition outcomes and reducing health inequalities.',
  ],
  targetBeneficiaries: [
    'Post-secondary students',
    'Community health workers, nutritionists and volunteers',
    'Professionals seeking to upgrade their skills in public health and nutrition',
  ],
  admissionText: 'Candidate must complete Senior Secondary Education (WAEC/NECO) or an equivalent recognised qualification such as a high school diploma or vocational/technical certification. Candidate must have 5 credits including English and Mathematics.',
  feeText: 'Programme Fee: ₦150,000 (inclusive of tuition, exam, and administrative fees)',
  deliveryModes: [
    'Blended learning: Self-instructional materials, online learning resources, and in-person tutorials.',
    'Audio and video lectures via KASU e-learning platform.',
    'Fieldwork and Practicals to enhance community engagement.',
  ],
  assessmentStructure: { continuousAssessment: 40, examination: 60, minimumPass: 50 },
  gradingSystem: [
    { score: '70 – 100', grade: 'A', point: '5.0', remarks: 'Excellent' },
    { score: '60 – 69',  grade: 'B', point: '4.0', remarks: 'Very Good' },
    { score: '50 – 59',  grade: 'C', point: '3.0', remarks: 'Good (Pass)' },
    { score: '45 – 49',  grade: 'D', point: '2.0', remarks: 'Marginal Fail' },
    { score: '0 – 44',   grade: 'F', point: '0',   remarks: 'Fail' },
  ],
  graduationRequirements: [
    'Earn a minimum of 28 credit units including all core courses.',
    'Obtain a CGPA of at least 3.00 on a 5-point scale.',
    'Successfully complete and defend the fieldwork/community project.',
    'Fulfill all financial obligations to the University.',
    'Obtain Senate approval for graduation.',
  ],
  diplomaClassification: [
    { cgpaRange: '4.50 – 5.00', classification: 'Distinction' },
    { cgpaRange: '3.50 – 4.49', classification: 'Merit' },
    { cgpaRange: '3.00 – 3.49', classification: 'Pass' },
    { cgpaRange: 'Below 3.00',  classification: 'Fail (Not Eligible for Award)' },
  ],
  careerProspects: [
    'Community Nutrition Officer',
    'Public Health Assistant',
    'Nutrition Educator',
    'NGO / Development Programme Assistant',
    'Food Safety and Quality Officer',
    'Entrepreneur in nutrition services',
    'Teaching and health care professional',
  ],
  curriculum: [
    {
      year: 1, semester: 1, label: 'First Semester', totalCredits: 16,
      courses: [
        {
          code: 'PHCN-01', title: 'Food & Nutrition: An Introduction', credits: 4,
          description: 'Introduces basic principles of food, nutrients, and their roles in human health. Covers macronutrients, micronutrients, food groups, digestion, absorption, metabolism, and dietary guidelines.',
        },
        {
          code: 'PHCN-02', title: 'Therapeutic Nutrition', credits: 4,
          description: 'Explores the use of diet in prevention and management of diseases. Focus on diet therapy, clinical nutrition, and nutritional care process for conditions including diabetes, hypertension, obesity, and renal diseases.',
        },
        {
          code: 'PHCN-03', title: 'Food Hygiene and Sanitation', credits: 4,
          description: 'Covers food safety principles, hygiene practices, and sanitation techniques to prevent foodborne illnesses. Includes HACCP, Codex Alimentarius, and WASH principles.',
        },
        {
          code: 'PHCN-04', title: 'Nutrition Education', credits: 4,
          description: 'Introduces principles and methods of nutrition education and communication, focusing on community engagement, behavior change theories, and use of ICT and media for nutrition promotion.',
        },
      ],
    },
    {
      year: 1, semester: 2, label: 'Second Semester', totalCredits: 12,
      courses: [
        {
          code: 'PHCN-05', title: 'Community Nutrition', credits: 4,
          description: 'Examines nutrition problems at community level and interventions to address them. Emphasis on maternal and child nutrition, supplementation, fortification, and nutrition-sensitive agriculture.',
        },
        {
          code: 'PHCN-06', title: 'Public Health', credits: 4,
          description: 'Covers principles of public health with focus on nutrition-related issues and preventive health services. Includes epidemiology, health promotion, primary health care, and emerging public health issues.',
        },
        {
          code: 'PHCN-07', title: 'National & International Programmes for Public Health', credits: 4,
          description: 'Provides an overview of national and global nutrition and public health programs, policies, and partnerships. Covers WHO, UNICEF, FAO, WFP roles and Nigeria\'s National Policy on Food & Nutrition.',
        },
      ],
    },
  ],
};

const DPHCN: CourseData = {
  title: 'Two-Year Diploma in Public Health and Community Nutrition',
  acronym: 'DPHCN',
  duration: 'Two Academic Years (Four Semesters)',
  totalCredits: 79,
  semesters: 4,
  aim: 'To train competent public health and community nutrition practitioners and prepare graduates for direct entry into relevant degree programmes.',
  objectives: [
    'Produce skilled middle-level professionals in public health and community nutrition.',
    'Provide academic preparation for direct entry into 200-level degree programmes.',
    'Equip learners with practical skills for community-based nutrition and health interventions.',
    'Promote entrepreneurship and self-employment in nutrition-related services.',
    'Reduce health inequalities through community-oriented capacity building.',
  ],
  targetBeneficiaries: [
    'Secondary school graduates seeking career pathways in health and nutrition',
    'Community health workers and volunteers',
    'Nutrition aides and extension workers',
    'Women and youths interested in public health careers',
    'Candidates intending to progress to university degree programmes',
  ],
  admissionText: 'Possession of the West African School Certificate (WASC) or NECO or equivalent with ordinary level credit in Biology, English, Mathematics, Chemistry, and Physics or Geography. These should be obtained in not more than two sittings.',
  assessmentStructure: { continuousAssessment: 40, examination: 60, minimumPass: 50 },
  graduationRequirements: [
    'Complete all 79 credit units.',
    'Obtain a minimum CGPA of 3.00.',
    'Successfully complete and defend the project.',
    'Meet attendance and conduct requirements.',
    'Fulfil all financial obligations to the University.',
  ],
  diplomaClassification: [
    { cgpaRange: '4.50 – 5.00', classification: 'Distinction' },
    { cgpaRange: '3.50 – 4.49', classification: 'Merit' },
    { cgpaRange: '3.00 – 3.49', classification: 'Pass' },
    { cgpaRange: 'Below 3.00',  classification: 'Fail' },
  ],
  careerProspects: [
    'Community Nutrition Officer',
    'Public Health Assistant',
    'Nutrition Educator',
    'NGO / Development Programme Assistant',
    'Food Safety and Quality Officer',
    'Entrepreneur in nutrition services',
  ],
  directEntryEligibility: [
    'Nursing',
    'Physiotherapy',
    'Medical Laboratory Sciences',
    'Radiography',
    'Related Science courses',
  ],
  curriculum: [
    {
      year: 1, semester: 1, label: 'Year One — First Semester', totalCredits: 24,
      courses: [
        { code: 'DBIO 101',   title: 'Introductory Biology',                  credits: 2, description: 'Definition of Biology, Branches of Biology, Living and non-living things, characteristics of living things, Economic importance of animals and plants, origin of life.' },
        { code: 'DBIO 113',   title: 'Practical Biology I',                   credits: 2, description: 'Basic laboratory skills, microscopy, preparation of slides, biological drawings, and experimental techniques.' },
        { code: 'DCBS 109',   title: 'Practical Chemistry I',                 credits: 2, description: 'Basic apparatus, terminologies, safety regulations. Acid-base titrations, Redox titrations, weighing and gravimetric analyses.' },
        { code: 'DCHM 101',   title: 'Introductory Inorganic Chemistry',      credits: 2, description: 'Periodic Table, periodicity of elements, Electronic structure, Stoichiometry, mole concept, transition metal complexes.' },
        { code: 'DPHCN 101',  title: 'Food & Nutrition: An Introduction',     credits: 3, description: 'Meaning and importance of food and nutrition, classes of nutrients, functions and sources, digestion and absorption, balanced diet, food groups, causes and prevention of malnutrition.' },
        { code: 'DPHCN 103',  title: 'Basic Human Biology for Nutrition',     credits: 2, description: 'Basic structure and functions of the human body, cell structure, overview of body systems, digestion and absorption of nutrients, metabolism, hormones and enzymes.' },
        { code: 'DPHCN 105',  title: 'Food Hygiene and Sanitation',           credits: 2, description: 'Meaning and importance of food hygiene, types and sources of food contamination, food-borne diseases, personal hygiene, safe food preparation and storage, food preservation methods.' },
        { code: 'DPHCN 107',  title: 'Introduction to Public Health',         credits: 3, description: 'Definition and scope of public health, determinants of health and disease, prevention of diseases, communicable and non-communicable diseases, primary health care, health promotion.' },
        { code: 'DGST 101',   title: 'Communication in English I',            credits: 2, description: 'Effective communication and writing in English. Study skills, essay writing, sentence construction, punctuation, outline and paragraphs.' },
        { code: 'DGST 103',   title: 'Nigerian Peoples and Culture',          credits: 2, description: 'Historical and political development of Nigeria, concept of culture, culture areas of Nigeria, norms and values, moral obligations of citizens.' },
        { code: 'DMTH 103',   title: 'Algebra and Elementary Trigonometry',   credits: 2, description: 'Polynomial functions, quadratic equations, binomial expansion, permutation and combination, arithmetic and geometric progressions, trigonometric identities.' },
      ],
    },
    {
      year: 1, semester: 2, label: 'Year One — Second Semester', totalCredits: 24,
      courses: [
        { code: 'DBIO 108',   title: 'Genetics I',                            credits: 2, description: 'Heritable and non-heritable characteristics, chromosomes, genes, chromosome theory of inheritance, genetic terms, sex linkage.' },
        { code: 'DCHM 102',   title: 'Organic Chemistry II',                  credits: 2, description: 'Nomenclature and classification of organic compounds, homologous series, hybridization of carbon, chemistry of Alkyl halides, Alcohols, carbonyl compounds, carboxylic acid.' },
        { code: 'DCBS 110',   title: 'Practical Chemistry II',                credits: 2, description: 'Elemental tests on known and unknown compounds, qualitative analysis of inorganic anions and cations, solubility tests, functional group tests.' },
        { code: 'DPHY 106',   title: 'Practical Physics I',                   credits: 2, description: 'Measurements of physical quantities, treatment of measurement errors, graphical analysis, simple pendulum, Hooke\'s Law, determination of spring constant.' },
        { code: 'DPHCN 102',  title: 'Nutrition Education & Communication',   credits: 3, description: 'Principles of nutrition education, communication methods, behavior change strategies, nutrition counseling, preparation of teaching materials, use of media in nutrition education.' },
        { code: 'DPHCN 104',  title: 'Community Development & Organization',  credits: 3, description: 'Concept of community development, community structure and leadership, community needs assessment, mobilization and participation, planning and implementation of community projects.' },
        { code: 'DPHCN 106',  title: 'Nutrition Across the Life Cycle',       credits: 3, description: 'Nutritional needs at different stages of life, maternal and child nutrition, breastfeeding and complementary feeding, adolescent nutrition, adult and elderly nutrition.' },
        { code: 'DPHCN 108',  title: 'Basic Statistics for Health Sciences',  credits: 3, description: 'Introduction to statistics, types of data, data collection and presentation, measures of average and variation, simple probability, sampling methods, basic hypothesis testing.' },
        { code: 'DPHY 108',   title: 'Mechanics, Thermal Physics & Waves',    credits: 2, description: 'Space and Time, Kinematics, Fundamental Laws of Mechanics, work and energy, Elasticity, Hydrostatics, Temperature, heat, gas laws, Laws of thermodynamics.' },
        { code: 'DMTH 104',   title: 'Differential and Integral Calculus',    credits: 2, description: 'Functions of real variable, limits and continuity, differentiation techniques, higher derivatives, integration as the inverse of differentiation.' },
      ],
    },
    {
      year: 2, semester: 1, label: 'Year Two — Third Semester', totalCredits: 20,
      courses: [
        { code: 'DBIO 203',   title: 'Genetics II',                                   credits: 2, description: 'Mendel\'s experiments, monohybrid and dihybrid inheritance, sex determination, sex linked characters, Mendel\'s law, complete and incomplete dominances, blood group, blood genotype.' },
        { code: 'DPHCN 201',  title: 'Community Nutrition',                           credits: 3, description: 'Concept and importance of community nutrition, assessment of nutritional status in communities, causes of malnutrition, nutrition intervention programs, maternal and child nutrition services, food security.' },
        { code: 'DPHCN 203',  title: 'Therapeutic & Clinical Nutrition',              credits: 3, description: 'Principles of therapeutic nutrition, dietary management of diseases, nutrition in diabetes, hypertension, obesity, cardiovascular diseases, gastrointestinal disorders, hospital diets.' },
        { code: 'DPHCN 205',  title: 'Epidemiology & Disease Prevention',             credits: 3, description: 'Basic concepts of epidemiology, measures of disease occurrence, modes of disease transmission, outbreak investigation, prevention and control of communicable and non-communicable diseases.' },
        { code: 'DPHCN 207',  title: 'Fieldwork / Community Internship Project',      credits: 6, description: 'Supervised practical training in community settings, participation in nutrition and public health activities, community assessment, data collection and reporting, implementation of nutrition programs.' },
        { code: 'DPHY 215',   title: 'Electricity, Magnetism & Modern Physics',       credits: 3, description: 'Electric force, field and potential, Electric Flux, Capacitances, Current Electricity, Magnetic force, Electromagnetic Induction, Alternating currents, Photoelectric effect.' },
      ],
    },
    {
      year: 2, semester: 2, label: 'Year Two — Fourth Semester', totalCredits: 19,
      courses: [
        { code: 'DCHM 202',   title: 'Organic Chemistry II',                          credits: 2, description: 'Factors affecting structure and properties of organic compounds, atomic orbitals, bonding and hybridization, Alkyl halides, Aromatic chemistry, Thiols, Ethers and Amines.' },
        { code: 'DBIO 210',   title: 'Practical Biology II',                          credits: 2, description: 'Scientific methods, handling and care of microscope, preparation of microscopic slides, Microtomy, Photometry, Calorimetry, Chromatography, techniques of writing scientific reports.' },
        { code: 'DPHCN 202',  title: 'National & International Nutrition Programmes', credits: 3, description: 'Overview of nutrition programmes at national and international levels, maternal and child nutrition programmes, school feeding programmes, food fortification initiatives, roles of government and international agencies.' },
        { code: 'DPHCN 204',  title: 'Public Health Policy and Health Systems',       credits: 3, description: 'Concept of public health policy, health systems structure and organization, primary health care, health planning and management, health financing, health reforms.' },
        { code: 'DPHCN 206',  title: 'Nutrition in Emergencies & Vulnerable Populations', credits: 3, description: 'Concept of emergencies and disasters, effects of emergencies on nutrition and health, identification of vulnerable groups, management of acute malnutrition, food aid and supplementation programmes.' },
        { code: 'DPHCN 208',  title: 'Project Writing',                               credits: 6, description: 'Principles of research writing, identification of research problems, proposal development, literature review, research design and methodology, data collection and analysis, report writing format.' },
      ],
    },
  ],
};

const programmes = [
  {
    id: 'pdphcn',
    label: 'Professional Diploma',
    sublabel: 'PDPHCN — 1 Year',
    badge: 'bg-accent-500',
    data: PDPHCN,
  },
  {
    id: 'dphcn',
    label: 'Two-Year Diploma',
    sublabel: 'DPHCN — 2 Years',
    badge: 'bg-primary-600',
    data: DPHCN,
  },
];

export default function CoursesPage() {
  const [active, setActive] = useState<'pdphcn' | 'dphcn'>('pdphcn');
  const current = programmes.find((p) => p.id === active)!;

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4 text-sm">
            Academic Programmes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Courses & Diplomas
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CNRI offers two diploma programmes in Public Health and Community Nutrition, designed for different entry levels and career goals.
          </p>
        </div>

        {/* Programme selector cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programmes.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActive(prog.id as 'pdphcn' | 'dphcn')}
              className={`text-left rounded-xl p-6 border-2 transition-all shadow-md hover:shadow-lg ${
                active === prog.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-primary-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className={`text-xs font-bold ${prog.badge} text-white px-3 py-1 rounded-full`}>
                    {prog.sublabel}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mt-3">{prog.data.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">({prog.data.acronym})</p>
                </div>
                {active === prog.id && (
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Viewing
                  </span>
                )}
              </div>
              <div className="flex gap-4 mt-4 text-sm text-gray-600">
                <span>📅 {prog.data.duration}</span>
                <span>📚 {prog.data.totalCredits} Credits</span>
              </div>
            </button>
          ))}
        </div>

        {/* Divider with programme title */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">{current.data.title}</h2>
            <p className="text-primary-600 font-semibold">({current.data.acronym})</p>
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Course detail */}
        <CourseDetail data={current.data} />

        {/* CTA */}
        <div className="bg-gray-900 rounded-xl p-10 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Take the first step toward a career in public health and community nutrition.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </a>
        </div>

      </div>
    </div>
  );
}
