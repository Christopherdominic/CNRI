import { client } from '@/lib/sanity';
import { Course } from '@/types/sanity';
import {
  GraduationCap, BookOpen, Clock, Award, Users,
  Target, CheckCircle, Briefcase, ChevronDown,
} from 'lucide-react';
import CurriculumAccordion from '@/components/CurriculumAccordion';

async function getCourse(): Promise<Course | null> {
  return client.fetch(
    `*[_type == "course" && isActive == true][0] {
      _id, title, acronym, slug, aim, objectives, targetBeneficiaries,
      duration, totalCredits, curriculum, assessmentStructure,
      graduationRequirements, diplomaClassification, careerProspects,
      directEntryEligibility
    }`
  );
}

export const revalidate = 0;

export default async function CoursesPage() {
  const course = await getCourse();

  // Fallback static data when Sanity has no content yet — always fully populated
  const data: Required<Pick<Course,
    'title'|'acronym'|'duration'|'totalCredits'|'aim'|'objectives'|
    'targetBeneficiaries'|'assessmentStructure'|'graduationRequirements'|
    'diplomaClassification'|'careerProspects'|'directEntryEligibility'|'curriculum'
  >> = {
    title: course?.title ?? staticCourse.title,
    acronym: course?.acronym ?? staticCourse.acronym,
    duration: course?.duration ?? staticCourse.duration!,
    totalCredits: course?.totalCredits ?? staticCourse.totalCredits!,
    aim: course?.aim ?? staticCourse.aim!,
    objectives: course?.objectives ?? staticCourse.objectives!,
    targetBeneficiaries: course?.targetBeneficiaries ?? staticCourse.targetBeneficiaries!,
    assessmentStructure: course?.assessmentStructure ?? staticCourse.assessmentStructure!,
    graduationRequirements: course?.graduationRequirements ?? staticCourse.graduationRequirements!,
    diplomaClassification: course?.diplomaClassification ?? staticCourse.diplomaClassification!,
    careerProspects: course?.careerProspects ?? staticCourse.careerProspects!,
    directEntryEligibility: course?.directEntryEligibility ?? staticCourse.directEntryEligibility!,
    curriculum: course?.curriculum ?? staticCourse.curriculum!,
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4 text-sm">
            Academic Programme
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <p className="text-2xl font-semibold text-primary-600 mb-6">({data.acronym})</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A foundational and professional academic pathway equipping learners with comprehensive
            theoretical knowledge, practical competencies, and field experience in public health and nutrition.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center bg-white shadow rounded-lg px-5 py-3 gap-2">
              <Clock className="text-primary-600" size={20} />
              <span className="font-semibold text-gray-700">{data.duration ?? 'Two Academic Years'}</span>
            </div>
            <div className="flex items-center bg-white shadow rounded-lg px-5 py-3 gap-2">
              <BookOpen className="text-accent-600" size={20} />
              <span className="font-semibold text-gray-700">{data.totalCredits ?? 79} Credit Units</span>
            </div>
            <div className="flex items-center bg-white shadow rounded-lg px-5 py-3 gap-2">
              <GraduationCap className="text-purple-600" size={20} />
              <span className="font-semibold text-gray-700">4 Semesters</span>
            </div>
          </div>
        </div>

        {/* Aim & Objectives */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 p-3 rounded-lg mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Aim</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {data.aim ?? 'To train competent public health and community nutrition practitioners and prepare graduates for direct entry into relevant degree programmes.'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-accent-500 p-3 rounded-lg mr-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Objectives</h2>
            </div>
            <ul className="space-y-2">
              {data.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-600 mt-1 flex-shrink-0">•</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Beneficiaries */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-purple-500 p-3 rounded-lg mr-4">
              <Users className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Target Beneficiaries</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.targetBeneficiaries.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <CheckCircle className="text-primary-600 flex-shrink-0" size={18} />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Requirements */}
        <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
          <p className="text-gray-700 leading-relaxed">
            Possession of the West African School Certificate (WASC) or the National Examination Council (NECO)
            or its equivalent with ordinary level credit in <strong>Biology, English, Mathematics, Chemistry,
            and Physics or Geography</strong>. These should be obtained in not more than two sittings.
          </p>
        </div>

        {/* Curriculum */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programme Curriculum</h2>
          <CurriculumAccordion semesters={data.curriculum} />
        </div>

        {/* Assessment & Graduation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Structure</h2>
            <div className="space-y-4">
              {[
                { label: 'Continuous Assessment', value: data.assessmentStructure?.continuousAssessment ?? 40, color: 'bg-primary-500' },
                { label: 'End-of-Semester Examination', value: data.assessmentStructure?.examination ?? 60, color: 'bg-accent-500' },
              ].map((item, i) => (                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="font-bold text-gray-900">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`${item.color} h-3 rounded-full`} style={{width: `${item.value}%`}}></div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray-600 mt-4">
                Minimum pass mark per course: <strong>{data.assessmentStructure?.minimumPass ?? 50}%</strong>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Graduation Requirements</h2>
            <ul className="space-y-3">
              {data.graduationRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diploma Classification */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary-600 p-3 rounded-lg mr-4">
              <Award className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Classification of Diploma</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-3 rounded-tl-lg font-semibold">CGPA Range</th>
                  <th className="px-6 py-3 rounded-tr-lg font-semibold">Class of Diploma</th>
                </tr>
              </thead>
              <tbody>
                {data.diplomaClassification.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.cgpaRange}</td>
                    <td className="px-6 py-4 text-gray-700">{row.classification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Career Prospects & Direct Entry */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white shadow-lg">
            <div className="flex items-center mb-6">
              <Briefcase className="mr-3" size={28} />
              <h2 className="text-2xl font-bold">Career Opportunities</h2>
            </div>
            <ul className="space-y-3">
              {data.careerProspects.map((career, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-primary-50">{career}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-8 text-white shadow-lg">
            <div className="flex items-center mb-6">
              <GraduationCap className="mr-3" size={28} />
              <h2 className="text-2xl font-bold">Direct Entry Eligibility</h2>
            </div>
            <p className="text-accent-50 mb-4 text-sm">
              Graduates with minimum Merit or Pass (CGPA ≥ 3.00) may be eligible for Direct Entry into 200 Level of:
            </p>
            <ul className="space-y-3">
              {data.directEntryEligibility.map((entry, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-accent-50">{entry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-xl p-10 text-center text-white">
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

// ─── Static fallback data ────────────────────────────────────────────────────
const staticCourse: Course = {
  _id: 'static',
  title: 'Two-Year Diploma in Public Health and Community Nutrition',
  acronym: 'DPHCN',
  slug: {current: 'dphcn'},
  duration: 'Two Academic Years (Four Semesters)',
  totalCredits: 79,
  isActive: true,
  aim: 'To train competent public health and community nutrition practitioners and prepare graduates for direct entry into relevant degree programmes.',
  objectives: [
    'Produce skilled middle-level professionals in public health and community nutrition',
    'Provide academic preparation for direct entry into 200-level degree programmes',
    'Equip learners with practical skills for community-based nutrition and health interventions',
    'Promote entrepreneurship and self-employment in nutrition-related services',
    'Reduce health inequalities through community-oriented capacity building',
  ],
  targetBeneficiaries: [
    'Secondary school graduates seeking career pathways in health and nutrition',
    'Community health workers and volunteers',
    'Nutrition aides and extension workers',
    'Women and youths interested in public health careers',
    'Candidates intending to progress to university degree programmes',
  ],
  assessmentStructure: {continuousAssessment: 40, examination: 60, minimumPass: 50},
  graduationRequirements: [
    'Complete all 79 credit units',
    'Obtain a minimum CGPA of 3.00',
    'Successfully complete and defend the project',
    'Meet attendance and conduct requirements',
    'Fulfil all financial obligations',
  ],
  diplomaClassification: [
    {cgpaRange: '4.50 – 5.00', classification: 'Distinction'},
    {cgpaRange: '3.50 – 4.49', classification: 'Merit'},
    {cgpaRange: '3.00 – 3.49', classification: 'Pass'},
    {cgpaRange: 'Below 3.00', classification: 'Fail'},
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
        {code: 'DBIO 101', title: 'Introductory Biology', credits: 2, description: 'Definition of Biology, Branches of Biology, application of Biology, Living and non-living things, characteristics of living things, Interrelationship between plants and animals, Economic importance of animals and plants, origin of life.'},
        {code: 'DBIO 113', title: 'Practical Biology I', credits: 2, description: 'Basic laboratory skills, microscopy, preparation of slides, biological drawings, and experimental techniques.'},
        {code: 'DCBS 109', title: 'Practical Chemistry I', credits: 2, description: 'Basic apparatus, terminologies, safety regulations. Acid-base titrations, Redox titrations, weighing and gravimetric analyses.'},
        {code: 'DCHM 101', title: 'Introductory Inorganic Chemistry', credits: 2, description: 'Periodic Table, periodicity of elements, Electronic structure, Stoichiometry, mole concept, transition metal complexes.'},
        {code: 'DPHCN 101', title: 'Food & Nutrition: An Introduction', credits: 3, description: 'Meaning and importance of food and nutrition, classes of nutrients, functions and sources, digestion and absorption, balanced diet, food groups, causes and prevention of malnutrition.'},
        {code: 'DPHCN 103', title: 'Basic Human Biology for Nutrition', credits: 2, description: 'Basic structure and functions of the human body, cell structure, overview of body systems, digestion and absorption of nutrients, metabolism, hormones and enzymes.'},
        {code: 'DPHCN 105', title: 'Food Hygiene and Sanitation', credits: 2, description: 'Meaning and importance of food hygiene, types and sources of food contamination, food-borne diseases, personal hygiene, safe food preparation and storage, food preservation methods.'},
        {code: 'DPHCN 107', title: 'Introduction to Public Health', credits: 3, description: 'Definition and scope of public health, determinants of health and disease, prevention of diseases, communicable and non-communicable diseases, primary health care, health promotion.'},
        {code: 'DGST 101', title: 'Communication in English I', credits: 2, description: 'Effective communication and writing in English. Study skills, essay writing, sentence construction, punctuation, outline and paragraphs.'},
        {code: 'DGST 103', title: 'Nigerian Peoples and Culture', credits: 2, description: 'Historical and political development of Nigeria, concept of culture, culture areas of Nigeria, norms and values, moral obligations of citizens.'},
        {code: 'DMTH 103', title: 'Algebra and Elementary Trigonometry', credits: 2, description: 'Polynomial functions, quadratic equations, binomial expansion, permutation and combination, arithmetic and geometric progressions, trigonometric identities.'},
      ],
    },
    {
      year: 1, semester: 2, label: 'Year One — Second Semester', totalCredits: 24,
      courses: [
        {code: 'DBIO 108', title: 'Genetics I', credits: 2, description: 'Heritable and non-heritable characteristics, chromosomes, genes, chromosome theory of inheritance, genetic terms, sex linkage.'},
        {code: 'DCHM 102', title: 'Organic Chemistry II', credits: 2, description: 'Nomenclature and classification of organic compounds, homologous series, hybridization of carbon, chemistry of Alkyl halides, Alcohols, carbonyl compounds, carboxylic acid.'},
        {code: 'DCBS 110', title: 'Practical Chemistry II', credits: 2, description: 'Elemental tests on known and unknown compounds, qualitative analysis of inorganic anions and cations, solubility tests, functional group tests.'},
        {code: 'DPHY 106', title: 'Practical Physics I', credits: 2, description: 'Measurements of physical quantities, treatment of measurement errors, graphical analysis, simple pendulum, Hooke\'s Law, determination of spring constant.'},
        {code: 'DPHCN 102', title: 'Nutrition Education & Communication', credits: 3, description: 'Principles of nutrition education, communication methods, behavior change strategies, nutrition counseling, preparation of teaching materials, use of media in nutrition education.'},
        {code: 'DPHCN 104', title: 'Community Development & Organization', credits: 3, description: 'Concept of community development, community structure and leadership, community needs assessment, mobilization and participation, planning and implementation of community projects.'},
        {code: 'DPHCN 106', title: 'Nutrition Across the Life Cycle', credits: 3, description: 'Nutritional needs at different stages of life, maternal and child nutrition, breastfeeding and complementary feeding, adolescent nutrition, adult and elderly nutrition.'},
        {code: 'DPHCN 108', title: 'Basic Statistics for Health Sciences', credits: 3, description: 'Introduction to statistics, types of data, data collection and presentation, measures of average and variation, simple probability, sampling methods, basic hypothesis testing.'},
        {code: 'DPHY 108', title: 'Mechanics, Thermal Physics & Waves', credits: 2, description: 'Space and Time, Kinematics, Fundamental Laws of Mechanics, work and energy, Elasticity, Hydrostatics, Temperature, heat, gas laws, Laws of thermodynamics.'},
        {code: 'DMTH 104', title: 'Differential and Integral Calculus', credits: 2, description: 'Functions of real variable, limits and continuity, differentiation techniques, higher derivatives, integration as the inverse of differentiation.'},
      ],
    },
    {
      year: 2, semester: 1, label: 'Year Two — Third Semester', totalCredits: 20,
      courses: [
        {code: 'DBIO 203', title: 'Genetics II', credits: 2, description: 'Mendel\'s experiments, monohybrid and dihybrid inheritance, sex determination, sex linked characters, Mendel\'s law, complete and incomplete dominances, blood group, blood genotype.'},
        {code: 'DPHCN 201', title: 'Community Nutrition', credits: 3, description: 'Concept and importance of community nutrition, assessment of nutritional status in communities, causes of malnutrition, nutrition intervention programs, maternal and child nutrition services, food security.'},
        {code: 'DPHCN 203', title: 'Therapeutic & Clinical Nutrition', credits: 3, description: 'Principles of therapeutic nutrition, dietary management of diseases, nutrition in diabetes, hypertension, obesity, cardiovascular diseases, gastrointestinal disorders, hospital diets.'},
        {code: 'DPHCN 205', title: 'Epidemiology & Disease Prevention', credits: 3, description: 'Basic concepts of epidemiology, measures of disease occurrence, modes of disease transmission, outbreak investigation, prevention and control of communicable and non-communicable diseases.'},
        {code: 'DPHCN 207', title: 'Fieldwork / Community Internship Project', credits: 6, description: 'Supervised practical training in community settings, participation in nutrition and public health activities, community assessment, data collection and reporting, implementation of nutrition programs.'},
        {code: 'DPHY 215', title: 'Electricity, Magnetism & Modern Physics', credits: 3, description: 'Electric force, field and potential, Electric Flux, Capacitances, Current Electricity, Magnetic force, Electromagnetic Induction, Alternating currents, Photoelectric effect.'},
      ],
    },
    {
      year: 2, semester: 2, label: 'Year Two — Fourth Semester', totalCredits: 19,
      courses: [
        {code: 'DCHM 202', title: 'Organic Chemistry II', credits: 2, description: 'Factors affecting structure and properties of organic compounds, atomic orbitals, bonding and hybridization, Alkyl halides, Aromatic chemistry, Thiols, Ethers and Amines.'},
        {code: 'DBIO 210', title: 'Practical Biology II', credits: 2, description: 'Scientific methods, handling and care of microscope, preparation of microscopic slides, Microtomy, Photometry, Calorimetry, Chromatography, techniques of writing scientific reports.'},
        {code: 'DPHCN 202', title: 'National & International Nutrition Programmes', credits: 3, description: 'Overview of nutrition programmes at national and international levels, maternal and child nutrition programmes, school feeding programmes, food fortification initiatives, roles of government and international agencies.'},
        {code: 'DPHCN 204', title: 'Public Health Policy and Health Systems', credits: 3, description: 'Concept of public health policy, health systems structure and organization, primary health care, health planning and management, health financing, health reforms.'},
        {code: 'DPHCN 206', title: 'Nutrition in Emergencies & Vulnerable Populations', credits: 3, description: 'Concept of emergencies and disasters, effects of emergencies on nutrition and health, identification of vulnerable groups, management of acute malnutrition, food aid and supplementation programmes.'},
        {code: 'DPHCN 208', title: 'Project Writing', credits: 6, description: 'Principles of research writing, identification of research problems, proposal development, literature review, research design and methodology, data collection and analysis, report writing format.'},
      ],
    },
  ],
}
