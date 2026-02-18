import type { NavLink } from '../types'

export const mainNavLinks: NavLink[] = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Profile of the Association', path: '/about/profile' },
      { label: 'Welcome from the President', path: '/about/president' },
      { label: 'Our People', path: '/about/our-people' },
      { label: 'Region Map', path: '/about/region-map' },
    ],
  },
  {
    label: 'Membership',
    path: '/membership',
    children: [
      { label: 'Membership Information', path: '/membership' },
      { label: 'Membership Form', path: '/membership-form' },
      { label: 'Update Details', path: '/membership-update' },
    ],
  },
  {
    label: 'Conference',
    path: '/conference',
    children: [
      { label: 'Upcoming Conferences', path: '/conference/upcoming' },
      { label: 'Past Conferences', path: '/conference/past' },
    ],
  },
  {
    label: 'Partners',
    path: '/sponsors',
    children: [
      { label: 'Association Partners & Sponsors', path: '/sponsors/partners' },
      { label: 'Sponsorship Opportunities', path: '/sponsors/opportunities' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks: NavLink[] = [
  { label: 'About', path: '/about/profile' },
  { label: 'Membership', path: '/membership' },
  { label: 'Our People', path: '/about/our-people' },
  { label: 'Conference', path: '/conference/upcoming' },
  { label: 'Partners', path: '/sponsors/partners' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Member Login', path: '/members' },
]
