import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight, Mail } from 'lucide-react'
import { regionalDelegates } from '../../data/team'
import { regionalMeetings } from '../../data/conference'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'

const regions = [
  'Northland',
  'Auckland',
  'Waikato',
  'Bay of Plenty',
  'Central',
  'Wellington',
  'Tasman',
  'Canterbury',
  'Otago / Southland',
]

export default function RegionMap() {
  return (
    <>
      <Helmet>
        <title>Region Map | SBM</title>
        <meta
          name="description"
          content="Explore the 9 SBM regions across New Zealand, find your regional delegate, and view upcoming regional meeting dates."
        />
      </Helmet>

      <PageHero
        label="About Us"
        title="Region Map"
        subtitle="The SBM Association is organised into 9 regions across New Zealand, each represented by a dedicated regional delegate."
      />

      {/* Regions Overview */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">
                Our 9 Regions
              </h2>
              <p className="text-text-light max-w-2xl mx-auto">
                The SBM Association covers all of Aotearoa New Zealand through 9
                regions. Each region holds regular meetings during each school term,
                providing local support and networking opportunities for members.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => {
              const delegate = regionalDelegates.find(
                (d) =>
                  d.region === region ||
                  (region === 'Otago / Southland' &&
                    d.region === 'Otago / Southland')
              )
              const meetingKey =
                region === 'Otago / Southland' ? 'Otago Southland' : region
              const meeting = regionalMeetings.find(
                (m) => m.region === meetingKey
              )

              return (
                <AnimatedSection key={region} delay={index * 0.08}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full hover:shadow-[0_12px_48px_rgba(10,37,64,0.1)] transition-shadow"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Region Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl text-primary">{region}</h3>
                    </div>

                    {/* Delegate Info */}
                    {delegate && (
                      <div className="mb-5 pb-5 border-b border-border">
                        <p className="text-sm font-semibold text-text mb-1">
                          Regional Delegate
                        </p>
                        <p className="text-primary font-medium">
                          {delegate.name}
                        </p>
                        <p className="text-text-light text-sm mb-2">
                          {delegate.school}
                        </p>
                        <a
                          href={`mailto:${delegate.email}`}
                          className="inline-flex items-center gap-1.5 text-primary text-sm hover:text-primary-light transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {delegate.email}
                        </a>
                      </div>
                    )}

                    {/* Meeting Dates */}
                    {meeting && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-accent-dark" />
                          <p className="text-sm font-semibold text-text">
                            Meeting Dates
                          </p>
                        </div>
                        <ul className="space-y-1.5">
                          {meeting.dates.map((date) => (
                            <li
                              key={date}
                              className="text-text-light text-sm pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-accent/60 before:rounded-full"
                            >
                              {date}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Auckland note - no specific delegate in data */}
                    {!delegate && region === 'Auckland' && (
                      <div className="mb-5 pb-5 border-b border-border">
                        <p className="text-sm font-semibold text-text mb-1">
                          Regional Delegate
                        </p>
                        <p className="text-text-light text-sm">
                          Contact the SBM executive for Auckland region enquiries.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regional Meetings Info */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl text-primary mb-4">
              Regional Meetings
            </h2>
            <p className="text-text-light text-lg mb-4 max-w-xl mx-auto">
              Regional meetings are held each term and provide an opportunity for
              members to connect, share knowledge, and stay up to date with the latest
              developments in school business management.
            </p>
            <p className="text-text-light mb-8 max-w-xl mx-auto">
              Meetings are open to all SBM members. Contact your regional delegate for
              venue details and agendas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-primary">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Have Questions About Your Region?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Get in touch with us or your regional delegate to learn more about
              meetings, events, and membership in your area.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark rounded-full font-semibold text-lg hover:bg-accent-dark transition-all hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
