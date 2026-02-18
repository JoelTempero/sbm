import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'

const pastConferences = [
  {
    year: '2025',
    location: 'Christchurch',
    venue: 'Te Pae Convention Centre',
    note: null,
  },
  {
    year: '2024',
    location: 'Hamilton',
    venue: 'Claudelands Event Centre',
    note: null,
  },
  {
    year: '2023',
    location: 'Wellington',
    venue: 'TSB Arena',
    note: null,
  },
  {
    year: '2022',
    location: 'Auckland',
    venue: 'Online / Hybrid format',
    note: 'Adapted to a hybrid format due to ongoing COVID-19 impacts.',
  },
  {
    year: '2021',
    location: 'Postponed',
    venue: null,
    note: 'Conference postponed due to COVID-19 pandemic.',
  },
  {
    year: '2020',
    location: 'Postponed',
    venue: null,
    note: 'Conference postponed due to COVID-19 pandemic.',
  },
  {
    year: '2019',
    location: 'Rotorua',
    venue: 'Energy Events Centre',
    note: null,
  },
]

export default function Past() {
  return (
    <>
      <Helmet>
        <title>Past Conferences | SBM</title>
        <meta
          name="description"
          content="A history of past School Business Managers' Association conferences held across New Zealand."
        />
      </Helmet>

      <PageHero
        label="Conference"
        title="Past Conferences"
        subtitle="A look back at our annual conference history across New Zealand."
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <p className="text-text-light leading-relaxed mb-12 text-center">
              The SBM Association has held annual conferences across New Zealand, bringing
              together school business managers for professional development, networking,
              and collaboration. Below is a representative overview of recent conferences.
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {pastConferences.map((conf, index) => (
              <AnimatedSection key={conf.year} delay={index * 0.08}>
                <div
                  className={`relative flex items-start gap-8 mb-10 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full mt-2 ring-4 ring-bg z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <motion.div
                    className="ml-14 md:ml-0 md:w-1/2 bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-primary">{conf.year}</span>
                      {conf.location !== 'Postponed' && (
                        <span className="flex items-center gap-1 text-sm text-accent-dark">
                          <MapPin className="w-3.5 h-3.5" />
                          {conf.location}
                        </span>
                      )}
                      {conf.location === 'Postponed' && (
                        <span className="text-sm text-text-light italic">
                          Postponed
                        </span>
                      )}
                    </div>
                    {conf.venue && (
                      <p className="text-text-light text-sm flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-primary/40" />
                        {conf.venue}
                      </p>
                    )}
                    {conf.note && (
                      <p className="text-sm text-text-light mt-2 italic">{conf.note}</p>
                    )}
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-center text-sm text-text-light mt-8 bg-bg-cream rounded-xl p-4">
              Note: The information above is representative content. For detailed records of
              past conferences, please contact{' '}
              <a href="mailto:admin@sbm.org.nz" className="text-primary hover:text-primary-light transition-colors">
                admin@sbm.org.nz
              </a>.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
