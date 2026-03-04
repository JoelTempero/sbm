export interface TeamMember {
  id: string
  name: string
  role: string
  school: string
  email: string
  image: string
  region?: string
}

export interface MembershipTier {
  id: string
  type: string
  price: string
  period: string
  description: string
  features: string[]
  featured: boolean
  ctaText: string
  ctaLink: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  website: string
  tier: 'gold' | 'silver'
}

export interface LifeMember {
  name: string
  location: string
  year: string
}

export interface RegionalMeeting {
  region: string
  dates: string[]
}

export interface ContactPerson {
  role: string
  email: string
}

export interface ConferenceInfo {
  year: string
  title: string
  dates: string
  venue: string
  venueDescription: string
  image: string
  memberPrice: string
  nonMemberPrice: string
  registrationNote: string
  websiteUrl: string
  subsidyUrl: string
}

export interface NavLink {
  label: string
  path: string
  children?: NavLink[]
}
