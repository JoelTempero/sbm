import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Award, Check, Mail, Phone, Users, Globe, Megaphone, BookOpen } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'

const tiers = [
  {
    name: 'Gold Partner',
    price: '$5,000',
    priceNote: '+GST/year (indicative)',
    featured: true,
    benefits: [
      'Premium logo placement on SBM website',
      'Exhibition space at the annual conference',
      'Speaking or workshop opportunity at conference',
      'Feature in member communications and newsletters',
      'Social media recognition throughout the year',
      'Complimentary conference registrations (x2)',
      'Access to regional meeting sponsorship',
      'Logo on all conference materials',
    ],
  },
  {
    name: 'Silver Partner',
    price: '$2,500',
    priceNote: '+GST/year (indicative)',
    featured: false,
    benefits: [
      'Logo placement on SBM website',
      'Exhibition space at the annual conference',
      'Inclusion in member communications',
      'Social media recognition',
      'Complimentary conference registration (x1)',
      'Logo on conference materials',
    ],
  },
]

const reasons = [
  {
    icon: Users,
    title: 'Reach Decision Makers',
    description:
      'Connect directly with school business managers who influence purchasing decisions across New Zealand schools.',
  },
  {
    icon: Globe,
    title: 'Nationwide Exposure',
    description:
      'Gain visibility across our nationwide network through regional meetings, conferences, and digital channels.',
  },
  {
    icon: Megaphone,
    title: 'Brand Alignment',
    description:
      'Associate your brand with the leading professional body for school business management in New Zealand.',
  },
  {
    icon: BookOpen,
    title: 'Education Sector Impact',
    description:
      'Demonstrate your commitment to supporting quality education through school business excellence.',
  },
]

export default function Opportunities() {
  return (
    <>
      <Helmet>
        <title>Sponsorship Opportunities | SBM</title>
        <meta
          name="description"
          content="Explore sponsorship and partnership opportunities with the School Business Managers' Association of New Zealand."
        />
      </Helmet>

      <PageHero
        label="Partners"
        title="Sponsorship Opportunities"
        subtitle="Partner with New Zealand's leading professional body for school business managers."
      />

      {/* Why Sponsor */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Why Partner with SBM?</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Sponsoring the SBM Association gives your organisation direct access to
                school business professionals across New Zealand and demonstrates your
                commitment to the education sector.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl text-primary mb-3">{reason.title}</h3>
                  <p className="text-text-light leading-relaxed">{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Sponsorship Tiers</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                We offer two sponsorship levels. Pricing below is indicative and packages
                can be tailored to your needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <AnimatedSection key={tier.name} delay={index * 0.1}>
                <motion.div
                  className={`relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border h-full ${
                    tier.featured
                      ? 'border-accent shadow-[0_12px_48px_rgba(10,37,64,0.12)]'
                      : 'border-border'
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Award
                      className={`w-6 h-6 ${
                        tier.featured ? 'text-accent-dark' : 'text-text-light'
                      }`}
                    />
                    <h3 className="text-2xl text-primary">{tier.name}</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{tier.price}</span>
                    <span className="text-text-light text-sm ml-2">{tier.priceNote}</span>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-dark flex-shrink-0 mt-0.5" />
                        <span className="text-text-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-primary">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Interested in becoming a sponsor? We'd love to discuss how a partnership
              can work for your organisation. Contact us to learn more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:admin@sbm.org.nz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark rounded-full font-semibold text-lg hover:bg-accent-dark transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                admin@sbm.org.nz
              </a>
              <a
                href="tel:+6492700020"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
