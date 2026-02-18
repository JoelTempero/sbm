import type { MembershipTier } from '../types'

export const membershipTiers: MembershipTier[] = [
  {
    id: '1',
    type: 'Associate',
    price: '$250',
    period: '+GST/year',
    description: 'For those who carry out business management duties part of the time.',
    features: [
      'Regional meeting access',
      'Member communications',
      'Conference discounts',
      'Networking opportunities',
    ],
    featured: false,
    ctaText: 'Apply Now',
    ctaLink: '/membership-form',
  },
  {
    id: '2',
    type: 'Full Membership',
    price: '$300',
    period: '+GST/year',
    description: 'For school employees responsible for Finance, Property, or HR management most of the time.',
    features: [
      'Full voting rights',
      'Regional meeting access',
      'Conference subsidies available',
      'Professional development',
      'Networking & advocacy',
    ],
    featured: true,
    ctaText: 'Apply Now',
    ctaLink: '/membership-form',
  },
  {
    id: '3',
    type: 'Group',
    price: '$550',
    period: '+GST/year',
    description: 'For schools with two or more eligible members. Best value for larger teams.',
    features: [
      'Multiple memberships',
      'All full member benefits',
      'Team networking',
      'Cost savings',
    ],
    featured: false,
    ctaText: 'Contact Us',
    ctaLink: 'mailto:admin@sbm.org.nz',
  },
]
