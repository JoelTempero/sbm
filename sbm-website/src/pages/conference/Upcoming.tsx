import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, MapPin, DollarSign, ExternalLink, FileText, MapPinned } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { upcomingConference, regionalMeetings } from '../../data/conference'

export default function Upcoming() {
  return (
    <>
      <Helmet>
        <title>Upcoming Conference | SBM</title>
        <meta
          name="description"
          content={`SBM Conference ${upcomingConference.year} - ${upcomingConference.dates} at ${upcomingConference.venue}. Join school business managers from across New Zealand.`}
        />
      </Helmet>

      <PageHero
        label="Conference"
        title="Upcoming Conference"
        subtitle={`${upcomingConference.title} - ${upcomingConference.year}`}
      />

      {/* Conference Hero */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">
                  Annual Conference {upcomingConference.year}
                </span>
                <h2 className="text-3xl md:text-4xl text-primary mb-6">
                  {upcomingConference.title}
                </h2>
                <p className="text-text-light leading-relaxed mb-8">
                  {upcomingConference.venueDescription}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text">Dates</p>
                      <p className="text-text-light">{upcomingConference.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text">Venue</p>
                      <p className="text-text-light">{upcomingConference.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text">Pricing</p>
                      <p className="text-text-light">
                        Members: {upcomingConference.memberPrice}
                      </p>
                      <p className="text-text-light">
                        Non-Members: {upcomingConference.nonMemberPrice}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-text-light bg-accent/10 rounded-xl p-4 mb-8">
                  {upcomingConference.registrationNote}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={upcomingConference.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Conference Website
                  </a>
                  <a
                    href={upcomingConference.subsidyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bg-cream text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5 border border-border"
                  >
                    <FileText className="w-4 h-4" />
                    Subsidy Application
                  </a>
                </div>
              </div>

              <div className="relative">
                <img
                  src={upcomingConference.image}
                  alt={`SBM Conference ${upcomingConference.year}`}
                  className="w-full rounded-2xl shadow-[0_12px_48px_rgba(10,37,64,0.1)]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Regional Meetings */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Regional Meetings</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Regular meetings are held in regions across New Zealand. These are a great
                opportunity to connect with local peers and stay up to date.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalMeetings.map((meeting, index) => (
              <AnimatedSection key={meeting.region} delay={index * 0.05}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg text-primary mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-dark" />
                    {meeting.region}
                  </h3>
                  <ul className="space-y-2">
                    {meeting.dates.map((date) => (
                      <li key={date} className="text-sm text-text-light flex items-start gap-2">
                        <Calendar className="w-3.5 h-3.5 text-primary/40 flex-shrink-0 mt-0.5" />
                        {date}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
