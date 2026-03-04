import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, ExternalLink, ArrowRight, Handshake } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { goldSponsors, silverSponsors } from '../../data/sponsors'

export default function Partners() {
  return (
    <>
      <Helmet>
        <title>Partners & Sponsors | SBM</title>
        <meta
          name="description"
          content="Meet the valued partners and sponsors of the School Business Managers' Association of New Zealand."
        />
      </Helmet>

      <PageHero
        label="Partners"
        title="Association Partners & Sponsors"
        subtitle="We gratefully acknowledge the support of our valued partners and sponsors."
      />

      {/* Partnership Description */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Our Partners</h2>
              <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
                The SBM Association partners with organisations that share our commitment to
                supporting school business management in New Zealand. Our sponsors provide
                valuable resources, services, and support that benefit our members and the
                wider education community.
              </p>
            </div>
          </AnimatedSection>

          {/* Gold Sponsors */}
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-accent-dark" />
                <h3 className="text-2xl text-primary">Gold Partners</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {goldSponsors.map((sponsor, index) => (
                  <AnimatedSection key={sponsor.id} delay={index * 0.08}>
                    <motion.a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border-2 border-accent/30 h-full hover:border-accent hover:shadow-[0_12px_48px_rgba(10,37,64,0.1)] transition-all group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center h-20 mb-6">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-text mb-1">{sponsor.name}</p>
                        <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Visit website <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Silver Sponsors */}
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-text-light" />
                <h3 className="text-2xl text-primary">Silver Partners</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {silverSponsors.map((sponsor, index) => (
                  <AnimatedSection key={sponsor.id} delay={index * 0.08}>
                    <motion.a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(10,37,64,0.1)] transition-all group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center h-16 mb-6">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-text mb-1">{sponsor.name}</p>
                        <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Visit website <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-primary">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Interested in Partnering with SBM?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Learn about our sponsorship opportunities and how your organisation can
              support school business management in New Zealand.
            </p>
            <Link
              to="/sponsors/opportunities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark rounded-full font-semibold text-lg hover:bg-accent-dark transition-all hover:-translate-y-0.5"
            >
              Sponsorship Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
