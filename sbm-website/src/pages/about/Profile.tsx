import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Eye, Compass, Users, BookOpen, MessageCircle, ArrowRight } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'

const values = [
  {
    icon: Compass,
    title: 'Leadership',
    description:
      'Providing strong leadership within the school business management community and the wider education sector.',
  },
  {
    icon: MessageCircle,
    title: 'Advocacy',
    description:
      'Advocating on behalf of school business managers to ensure their voice is heard in education policy and decision-making.',
  },
  {
    icon: BookOpen,
    title: 'Professional Development',
    description:
      'Supporting our members with ongoing professional development opportunities to grow their skills and knowledge.',
  },
  {
    icon: Users,
    title: 'Networking',
    description:
      'Creating opportunities for members to connect, collaborate, and share best practices across the country.',
  },
]

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile of the Association | SBM</title>
        <meta
          name="description"
          content="Learn about the School Business Managers' Association (SBM), the only membership organisation representing school business managers in New Zealand."
        />
      </Helmet>

      <PageHero
        label="About Us"
        title="Profile of the Association"
        subtitle="The professional body of choice for school business leaders in New Zealand."
      />

      {/* About SBM Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-primary mb-6">
                  About SBM
                </h2>
                <p className="text-text-light leading-relaxed mb-4">
                  The School Business Managers' Association (SBM) is the only membership
                  organisation representing school business managers in New Zealand. Our
                  members come from schools that teach New Entrants through to Year 13
                  students.
                </p>
                <p className="text-text-light leading-relaxed">
                  The Education Sector is constantly being reviewed and change is
                  inevitable. As a member of the SBM Executive, a big part of our job is
                  to ensure our members are kept informed and up-to-date with these
                  changes.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://sbm.org.nz/wp-content/uploads/2022/12/values.png"
                  alt="SBM Values"
                  className="w-full rounded-2xl shadow-[0_12px_48px_rgba(10,37,64,0.1)]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl text-primary mb-4">Our Mission</h3>
                <p className="text-text-light leading-relaxed text-lg">
                  To be a sustainable organisation with visibility, relevance, and
                  influence.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] h-full">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-dark" />
                </div>
                <h3 className="text-2xl text-primary mb-4">Our Vision</h3>
                <p className="text-text-light leading-relaxed text-lg">
                  To be the professional body of choice for school business leaders.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Our Values</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Our values guide everything we do as an association, ensuring we deliver
                meaningful outcomes for our members and the education sector.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full hover:shadow-[0_12px_48px_rgba(10,37,64,0.1)] transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl text-primary mb-3">{value.title}</h3>
                  <p className="text-text-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
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
              Join New Zealand's Leading Association for School Business Managers
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Become part of a nationwide network of professionals dedicated to
              excellence in school business management.
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark rounded-full font-semibold text-lg hover:bg-accent-dark transition-all hover:-translate-y-0.5"
            >
              Explore Membership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
