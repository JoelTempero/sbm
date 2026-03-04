import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight, CalendarDays, Users, BookOpen, Shield } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'
import { membershipTiers } from '../data/membership'

const benefits = [
  {
    icon: Users,
    title: 'Networking',
    description:
      'Connect with school business managers across New Zealand through regional meetings and national events.',
  },
  {
    icon: BookOpen,
    title: 'Professional Development',
    description:
      'Access conferences, workshops, and resources designed to grow your skills and advance your career.',
  },
  {
    icon: Shield,
    title: 'Advocacy',
    description:
      'Your voice is represented in education policy discussions and sector-wide consultations.',
  },
  {
    icon: CalendarDays,
    title: 'Regional Meetings',
    description:
      'Attend regular regional meetings held throughout the year in locations across the country.',
  },
]

export default function Membership() {
  return (
    <>
      <Helmet>
        <title>Membership | SBM</title>
        <meta
          name="description"
          content="Join the School Business Managers' Association. Explore membership tiers, benefits, and pricing for school business professionals in New Zealand."
        />
      </Helmet>

      <PageHero
        label="Membership"
        title="Membership"
        subtitle="Join the professional body of choice for school business leaders in New Zealand."
      />

      {/* Membership Year Note */}
      <section className="py-12 px-6 lg:px-10 bg-accent/10">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-text-light text-lg">
            <CalendarDays className="inline w-5 h-5 mr-2 text-accent-dark -mt-0.5" />
            The membership year runs from <strong className="text-text">1 January to 31 December</strong>.
            Memberships are invoiced annually.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Membership Tiers</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Choose the membership option that best suits your role and school.
                All prices are exclusive of GST.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <AnimatedSection key={tier.id} delay={index * 0.1}>
                <motion.div
                  className={`relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border h-full flex flex-col ${
                    tier.featured
                      ? 'border-primary shadow-[0_12px_48px_rgba(10,37,64,0.12)]'
                      : 'border-border'
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl text-primary mb-2">{tier.type}</h3>
                  <p className="text-text-light text-sm mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-text-light text-sm ml-1">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-dark flex-shrink-0 mt-0.5" />
                        <span className="text-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tier.ctaLink}
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all hover:-translate-y-0.5 ${
                      tier.featured
                        ? 'bg-primary text-white hover:bg-primary-light'
                        : 'bg-bg-cream text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {tier.ctaText}
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Why Join SBM?</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Membership in the School Business Managers' Association provides access to a
                wealth of resources and a nationwide community of professionals.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text-light leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-primary">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Become part of New Zealand's leading professional body for school business
              managers. Complete your membership application today.
            </p>
            <Link
              to="/membership-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark rounded-full font-semibold text-lg hover:bg-accent-dark transition-all hover:-translate-y-0.5"
            >
              Apply for Membership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
