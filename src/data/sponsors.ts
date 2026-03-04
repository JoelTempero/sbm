import type { Sponsor } from '../types'

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'FUJIFILM',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-platinum-fujifilm.svg',
    website: 'https://www.fujifilm.com/fbnz/en',
    tier: 'gold',
  },
  {
    id: '2',
    name: 'Furnware',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-gold-1.png',
    website: 'https://www.furnware.co.nz/',
    tier: 'gold',
  },
  {
    id: '3',
    name: 'OfficeMax',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-gold-2.png',
    website: 'https://www.officemax.co.nz/',
    tier: 'gold',
  },
  {
    id: '4',
    name: 'Programmed',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-gold-3.png',
    website: 'https://programmed.co.nz/',
    tier: 'gold',
  },
  {
    id: '5',
    name: 'ASB',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-gold-4.png',
    website: 'https://www.asb.co.nz/',
    tier: 'gold',
  },
  {
    id: '6',
    name: 'New Era Technology',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-new-era.jpg',
    website: 'https://www.newerait.co.nz/',
    tier: 'gold',
  },
  {
    id: '7',
    name: 'Uniform Group',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-silver-3.png',
    website: 'https://www.uniformgroup.co.nz',
    tier: 'silver',
  },
  {
    id: '8',
    name: 'Kindo',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-silver-5.png',
    website: 'https://kindo.co.nz/',
    tier: 'silver',
  },
  {
    id: '9',
    name: 'Alsco',
    logo: 'https://sbm.org.nz/wp-content/themes/sbma/images/sponsor-alsco.svg',
    website: 'https://www.alsco.co.nz/',
    tier: 'silver',
  },
]

export const goldSponsors = sponsors.filter(s => s.tier === 'gold')
export const silverSponsors = sponsors.filter(s => s.tier === 'silver')
