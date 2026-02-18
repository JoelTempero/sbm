import type { ConferenceInfo, RegionalMeeting } from '../types'

export const upcomingConference: ConferenceInfo = {
  year: '2026',
  title: 'Wellington awaits',
  dates: '15 - 17 July 2026',
  venue: 'Tākina Convention and Exhibition Centre',
  venueDescription: "Wellington's world-class venue provides the perfect setting for three days of learning, connecting, and growing together.",
  image: 'https://sbm.org.nz/wp-content/uploads/2025/07/artwork.png',
  memberPrice: 'Discounted rates available',
  nonMemberPrice: '$1,300 + GST',
  registrationNote: 'Registrations open early 2026. Conference subsidies up to $1,200 (excl GST) available for financial members.',
  websiteUrl: 'http://www.sbmconference.org.nz/',
  subsidyUrl: 'https://sbm.org.nz/wp-content/uploads/2025/11/Conference-Subsidy-Application.pdf',
}

export const regionalMeetings: RegionalMeeting[] = [
  {
    region: 'Northland',
    dates: ['Term 1: Thu 5 March', 'Term 2: Wed 17 June', 'Term 3: Thu 20 August', 'Term 4: Thu 12 November'],
  },
  {
    region: 'Auckland',
    dates: ['Term 1: Wed 11 March', 'Term 2: Wed 17 June', 'Term 3: Thu 17 Sept', 'Term 4: Thu 26 Nov'],
  },
  {
    region: 'Bay of Plenty',
    dates: ['Term 1: Wed 11 March', 'Term 2: Wed 17 June', 'Term 3: Wed 16 Sept', 'Term 4: Wed 4 Nov'],
  },
  {
    region: 'Waikato',
    dates: ['Term 1: Thu 5 March', 'Term 2: Wed 17 June', 'Term 3: Thu 17 Sept', 'Term 4: Thu 26 Nov'],
  },
  {
    region: 'Central',
    dates: ['Term 1: Mon 9 March', 'Term 2: Wed 17 June', 'Term 3: Tue 18 August', 'Term 4: Thu 22 October'],
  },
  {
    region: 'Wellington',
    dates: ['Term 1: Fri 20 March', 'Term 2: Wed 17 June', 'Term 3: Wed 9 Sept', 'Term 4: Wed 18 Nov'],
  },
  {
    region: 'Tasman',
    dates: ['Term 1: Fri 13 March', 'Term 2: Fri 15 May', 'AGM: Tue 30 June', 'Term 3: Fri 21 August', 'Term 4: Fri 27 Nov'],
  },
  {
    region: 'Canterbury',
    dates: ['Term 1: Fri 6 March', 'Term 2: Wed 17 June', 'Term 3: Fri 21 August', 'Term 4: Fri 16 October'],
  },
  {
    region: 'Otago Southland',
    dates: ['Term 1: Mon 16 March', 'Term 2: Wed 17 June', 'Term 3: Fri 21 August', 'Term 4: Fri 20 Nov'],
  },
]
