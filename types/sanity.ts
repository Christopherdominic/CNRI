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
  image: SanityImage
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
