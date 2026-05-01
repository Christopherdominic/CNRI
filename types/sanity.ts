export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Program {
  _id: string
  title: string
  acronym: string
  description: string
  slug: {
    current: string
  }
  image?: SanityImage
  order: number
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  description?: string
  category: 'leadership' | 'coordinators' | 'staff' | 'technical' | 'advisory' | 'interns'
  image?: SanityImage
  order: number
}

export interface Partner {
  _id: string
  name: string
  fullName?: string
  location?: string
  description: string
  logo?: SanityImage
  website?: string
  order: number
}

export interface Activity {
  _id: string
  title: string
  description: string
  date: string
  tag?: string
  image: SanityImage
  gallery?: Array<SanityImage & { caption?: string }>
  slug: {
    current: string
  }
  featured: boolean
}

export interface FocusArea {
  _id: string
  title: string
  description: string
  icon?: string
  color: string
  points?: string[]
  order: number
}

export interface Conference {
  _id: string
  title: string
  theme: string
  description: any[] // Block content
  startDate?: string
  endDate?: string
  location?: string
  objectives?: string[]
  subThemes?: string[]
  targetParticipants?: string[]
  activities?: Array<{
    title: string
    icon?: string
  }>
  registrationLink?: string
  isActive: boolean
  bannerImage?: SanityImage
}

export interface SiteSettings {
  _id: string
  title: string
  description: string
  contactEmail: string
  contactPhone?: string
  address?: string
  socialMedia?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  logo?: SanityImage
  heroImage?: SanityImage
}

export interface About {
  _id: string
  overview: any[] // Block content
  mission: string
  vision: string
  commitment?: string
  impactStats?: Array<{
    value: string
    label: string
  }>
}

export interface CourseUnit {
  code: string
  title: string
  credits: number
  description?: string
}

export interface CourseSemester {
  year: number
  semester: number
  label: string
  courses: CourseUnit[]
  totalCredits: number
}

export interface Course {
  _id: string
  title: string
  acronym: string
  slug: { current: string }
  introduction?: any[]
  rationale?: any[]
  aim?: string
  objectives?: string[]
  targetBeneficiaries?: string[]
  duration?: string
  totalCredits?: number
  admissionRequirements?: any[]
  curriculum?: CourseSemester[]
  assessmentStructure?: {
    continuousAssessment: number
    examination: number
    minimumPass: number
  }
  graduationRequirements?: string[]
  diplomaClassification?: Array<{ cgpaRange: string; classification: string }>
  careerProspects?: string[]
  directEntryEligibility?: string[]
  isActive: boolean
}
