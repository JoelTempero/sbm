import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, Award } from 'lucide-react'
import { executives, regionalDelegates } from '../../data/team'
import { lifeMembers } from '../../data/lifeMembers'
import type { TeamMember } from '../../types'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border hover:shadow-[0_12px_48px_rgba(10,37,64,0.1)] transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-[4/5] overflow-hidden bg-bg-cream">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-primary mb-1">{member.name}</h3>
        <p className="text-accent-dark font-semibold text-sm mb-2">
          {member.role}
          {member.region && ` — ${member.region}`}
        </p>
        <p className="text-text-light text-sm mb-4">{member.school}</p>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary-light transition-colors"
        >
          <Mail className="w-4 h-4" />
          {member.email}
        </a>
      </div>
    </motion.div>
  )
}

export default function OurPeople() {
  return (
    <>
      <Helmet>
        <title>Our People | SBM</title>
        <meta
          name="description"
          content="Meet the SBM national executive committee, regional delegates, and life members who lead the School Business Managers' Association."
        />
      </Helmet>

      <PageHero
        label="About Us"
        title="Our People"
        subtitle="Meet the dedicated leadership team and regional delegates who drive the SBM Association forward."
      />

      {/* National Executive Committee */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">
                National Executive Committee
              </h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Our national executive committee provides strategic direction and
                governance for the SBM Association.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <MemberCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Delegates */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">
                Regional Delegates
              </h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Our regional delegates are your local point of contact, representing
                members across New Zealand's regions and facilitating regional meetings
                and support.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regionalDelegates.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <MemberCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Life Members */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-dark" />
              </div>
              <h2 className="text-3xl md:text-4xl text-primary mb-4">
                Life Members
              </h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Life membership is awarded to individuals who have made an outstanding
                contribution to the SBM Association and the school business management
                profession.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lifeMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(10,37,64,0.04)] border border-border flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-accent-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{member.name}</p>
                    <p className="text-text-light text-sm">
                      {member.location} &middot; {member.year}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
