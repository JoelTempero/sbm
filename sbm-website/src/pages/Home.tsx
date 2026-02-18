import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Calendar, MessageSquare, ArrowRight, Mail } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/ui/AnimatedSection'
import { membershipTiers } from '../data/membership'
import { executives, regionalDelegates } from '../data/team'
import { goldSponsors, silverSponsors } from '../data/sponsors'
import { lifeMembers } from '../data/lifeMembers'
import { upcomingConference, regionalMeetings } from '../data/conference'
import { contactPersons, postalAddress } from '../data/contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>School Business Managers' Association | New Zealand</title>
        <meta name="description" content="The School Business Managers' Association is the only independent membership organisation representing school business managers across New Zealand." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-10 pt-28 pb-20 bg-gradient-to-br from-bg to-bg-cream relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(232,184,109,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-bg to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-primary mb-6 shadow-[0_4px_24px_rgba(10,37,64,0.08)]">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Professional Association for NZ Schools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] text-primary mb-6 tracking-tight leading-[1.1]">
              The professional body of choice for <em className="text-accent-dark italic">school business leaders</em>
            </h1>
            <p className="text-lg lg:text-xl text-text-light mb-10 max-w-xl">
              The School Business Managers' Association is the only independent membership organisation representing school business managers across New Zealand, from the far north to the deep south.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(10,37,64,0.12)]"
              >
                Become a Member <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about/profile"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold border-2 border-border hover:border-primary transition-all hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-[0_12px_48px_rgba(10,37,64,0.12)] relative">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-accent rounded-full opacity-20" />
              <div className="text-center py-6">
                <div className="font-serif text-6xl lg:text-7xl text-primary leading-none">30+</div>
                <div className="text-text-light mt-2 font-medium">Years supporting NZ schools</div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Users, label: 'National Network' },
                  { icon: GraduationCap, label: 'Professional Development' },
                  { icon: Calendar, label: 'Annual Conference' },
                  { icon: MessageSquare, label: 'Sector Advocacy' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 font-medium text-text">
                    <div className="w-10 h-10 bg-bg-cream rounded-[10px] flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Strip */}
      <div className="bg-white py-10 border-t border-b border-border">
        <p className="text-center text-text-light text-sm font-medium uppercase tracking-[0.1em] mb-6">
          Proudly supported by
        </p>
        <div className="flex justify-center items-center gap-8 lg:gap-12 flex-wrap max-w-[1200px] mx-auto px-6">
          {goldSponsors.map((sponsor) => (
            <img
              key={sponsor.id}
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-8 lg:h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">About Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] text-primary mb-6">
                Supporting school business excellence since 1993
              </h2>
              <p className="text-text-light text-lg mb-5">
                The School Business Managers' Association (SBM) is the only membership organisation representing school business managers in New Zealand. Our members come from schools that teach New Entrants through to Year 13 students.
              </p>
              <p className="text-text-light text-lg mb-10">
                The Education Sector is constantly being reviewed and change is inevitable. As a member of the SBM Executive, a big part of our job is to ensure our members are kept informed and up-to-date with these changes.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Mission', desc: 'To be a sustainable organisation with visibility, relevance, and influence.' },
                  { title: 'Vision', desc: 'To be the professional body of choice for school business leaders.' },
                  { title: 'Leadership', desc: 'Commitment to leadership development across all regions.' },
                  { title: 'Advocacy', desc: 'Representation on numerous Sector Groups in NZ and worldwide.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-[0_4px_24px_rgba(10,37,64,0.08)]">
                    <h4 className="font-serif text-xl text-primary mb-2">{item.title}</h4>
                    <p className="text-text-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="https://sbm.org.nz/wp-content/uploads/2022/12/values.png"
                alt="SBM Values"
                className="w-full rounded-2xl shadow-[0_12px_48px_rgba(10,37,64,0.12)]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* President's Welcome */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">Welcome</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-primary">A message from our President</h2>
          </div>
          <AnimatedSection>
            <div className="grid md:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start bg-bg-cream p-10 lg:p-16 rounded-2xl">
              <div className="relative text-center md:text-left">
                <img
                  src="https://sbm.org.nz/wp-content/uploads/2025/09/CE-pres-msg-website.png"
                  alt="Cheryl English"
                  className="w-full rounded-lg shadow-[0_4px_24px_rgba(10,37,64,0.08)]"
                />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap">
                  Acting President
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl text-primary mb-2">
                  A warm welcome to the School Business Managers' Association!
                </h3>
                <p className="text-accent-dark font-semibold mb-6">Cheryl English</p>
                <div className="space-y-4 text-text-light">
                  <p>The SBM Association is the only independent organisation representing the interests of School Business Managers in NZ.</p>
                  <p>The SBM offers many great benefits to our members including networking opportunities with like-minded colleagues, regular professional development on a regional level, and a fantastic annual conference with amazing sponsors.</p>
                  <p>We also have representation on numerous Sector Groups both within New Zealand and around the world.</p>
                  <p>If you are looking for an organisation whose strategic goals focus on a commitment to leadership development, ongoing professional learning, membership engagement and advocating on your behalf, then I urge you to join.</p>
                </div>
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
                >
                  Learn About Membership <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(232,184,109,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-xs uppercase tracking-[0.15em] mb-4">Membership</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-white mb-5">Join our professional community</h2>
            <p className="text-white/70 text-lg">Membership is open to school business managers across New Zealand. Choose the option that best fits your role and school.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <AnimatedSection key={tier.id}>
                <div
                  className={`rounded-2xl p-8 lg:p-10 transition-all hover:-translate-y-2 ${
                    tier.featured
                      ? 'bg-white text-text scale-105'
                      : 'bg-white/5 border border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className={`text-xs font-semibold uppercase tracking-[0.1em] mb-4 ${tier.featured ? 'text-primary' : 'text-accent'}`}>
                    {tier.type}
                  </div>
                  <div className="font-serif text-5xl mb-2">
                    {tier.price}<span className="text-base opacity-70">{tier.period}</span>
                  </div>
                  <p className={`mb-8 min-h-[80px] ${tier.featured ? 'text-text-light' : 'opacity-80'}`}>
                    {tier.description}
                  </p>
                  <ul className="mb-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={`py-3 border-t flex items-center gap-3 ${
                          tier.featured ? 'border-border' : 'border-white/10'
                        }`}
                      >
                        <span className={`font-bold ${tier.featured ? 'text-primary' : 'text-accent'}`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tier.ctaLink.startsWith('mailto') ? (
                    <a
                      href={tier.ctaLink}
                      className={`w-full flex justify-center items-center gap-2 px-6 py-4 rounded-full font-semibold transition-all ${
                        tier.featured
                          ? 'bg-primary text-white hover:bg-primary-light'
                          : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
                      }`}
                    >
                      {tier.ctaText}
                    </a>
                  ) : (
                    <Link
                      to={tier.ctaLink}
                      className={`w-full flex justify-center items-center gap-2 px-6 py-4 rounded-full font-semibold transition-all ${
                        tier.featured
                          ? 'bg-primary text-white hover:bg-primary-light'
                          : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
                      }`}
                    >
                      {tier.ctaText}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">Our People</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-primary mb-5">Leadership you can count on</h2>
            <p className="text-text-light text-lg">The SBM leadership team consists of 4 National Executive Committee officers and 9 Regional Delegates located throughout New Zealand.</p>
          </div>

          <div className="mb-16">
            <h3 className="font-serif text-2xl text-primary text-center mb-12">National Executive Committee</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
              {executives.map((member) => (
                <AnimatedSection key={member.id}>
                  <div className="text-center bg-bg p-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(10,37,64,0.12)] transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-white shadow-[0_4px_24px_rgba(10,37,64,0.08)]"
                    />
                    <h4 className="font-serif text-lg text-primary mb-1">{member.name}</h4>
                    <div className="text-accent-dark font-semibold text-sm mb-2">{member.role}</div>
                    <div className="text-text-light text-sm mb-4">{member.school}</div>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-primary font-medium text-sm px-4 py-2 bg-white rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-primary text-center mb-12">Regional Delegates</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {regionalDelegates.map((member) => (
                <AnimatedSection key={member.id}>
                  <div className="text-center bg-bg p-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(10,37,64,0.12)] transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-white shadow-[0_4px_24px_rgba(10,37,64,0.08)]"
                    />
                    <h4 className="font-serif text-lg text-primary mb-1">{member.name}</h4>
                    <div className="text-accent-dark font-semibold text-sm mb-2">{member.region}</div>
                    <div className="text-text-light text-sm mb-4">{member.school}</div>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-primary font-medium text-sm px-4 py-2 bg-white rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conference Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-gradient-to-br from-bg-cream to-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">Conference 2026</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-primary mb-5">{upcomingConference.title}</h2>
            <p className="text-text-light text-lg">Join us for professional development, networking, and inspiration at New Zealand's premier school business management conference.</p>
          </div>

          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div className="rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(10,37,64,0.12)]">
                <img src={upcomingConference.image} alt="SBM Conference 2026" className="w-full block" />
              </div>
              <div>
                <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 rounded-full font-semibold mb-6">
                  <Calendar className="w-5 h-5" /> {upcomingConference.dates}
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl text-primary mb-4">{upcomingConference.venue}</h3>
                <p className="text-text-light text-lg mb-6">{upcomingConference.venueDescription}</p>
                <div className="bg-white p-6 rounded-lg mb-6">
                  <h4 className="font-serif text-lg text-primary mb-3">Registration Fees</h4>
                  <p className="text-text-light mb-2"><strong>SBM Members:</strong> {upcomingConference.memberPrice}</p>
                  <p className="text-text-light mb-4"><strong>Non-members:</strong> {upcomingConference.nonMemberPrice}</p>
                  <p className="text-sm text-text-light">{upcomingConference.registrationNote}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={upcomingConference.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all"
                  >
                    Visit Conference Website <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={upcomingConference.subsidyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold border-2 border-border hover:border-primary transition-all"
                  >
                    Subsidy Application
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-10 lg:p-16 rounded-2xl">
              <h3 className="font-serif text-2xl lg:text-3xl text-primary text-center mb-12">2026 Regional Meeting Dates</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {regionalMeetings.map((meeting) => (
                  <div key={meeting.region} className="bg-bg p-6 rounded-lg border-l-4 border-accent">
                    <h4 className="font-serif text-lg text-primary mb-3">{meeting.region}</h4>
                    <div className="text-text-light text-sm leading-relaxed">
                      {meeting.dates.map((date, i) => (
                        <p key={i}>{date}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">Partners & Sponsors</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-primary mb-5">Our valued supporters</h2>
            <p className="text-text-light text-lg">We're grateful to our partners and sponsors who generously support our annual conference and day-to-day operations.</p>
          </div>

          <AnimatedSection>
            <div className="mb-16">
              <h3 className="font-serif text-xl text-primary text-center mb-8 relative">
                Gold Partners
                <span className="block w-16 h-[3px] bg-[#D4AF37] mx-auto mt-4 rounded" />
              </h3>
              <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-12">
                {goldSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-6 bg-bg rounded-lg hover:scale-105 hover:shadow-[0_4px_24px_rgba(10,37,64,0.08)] transition-all"
                  >
                    <img src={sponsor.logo} alt={sponsor.name} className="max-h-[50px] max-w-[180px]" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="font-serif text-xl text-primary text-center mb-8 relative">
                Silver Sponsors
                <span className="block w-16 h-[3px] bg-[#C0C0C0] mx-auto mt-4 rounded" />
              </h3>
              <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-12">
                {silverSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-6 bg-bg rounded-lg hover:scale-105 hover:shadow-[0_4px_24px_rgba(10,37,64,0.08)] transition-all"
                  >
                    <img src={sponsor.logo} alt={sponsor.name} className="max-h-[50px] max-w-[180px]" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Life Members */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">Honoured Members</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-primary mb-5">Life Members</h2>
            <p className="text-text-light text-lg">Life membership has been conferred for outstanding services to the Association. We are honoured to have them as part of our community.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lifeMembers.map((member) => (
              <AnimatedSection key={member.name}>
                <div className="bg-white p-4 rounded-lg flex items-center gap-3 text-left">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm font-semibold shrink-0">{member.year}</span>
                  <div>
                    <div className="font-medium text-text">{member.name}</div>
                    <div className="text-text-light text-sm">{member.location}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-dark text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-xs uppercase tracking-[0.15em] mb-4">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] text-white mb-5">We're here to help</h2>
            <p className="text-white/70 text-lg">Have questions about membership, the conference, or anything else? We'd love to hear from you.</p>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <AnimatedSection>
              <div>
                <h3 className="font-serif text-2xl mb-6">Contact Details</h3>
                <ul>
                  {contactPersons.map((person) => (
                    <li key={person.role} className="flex gap-4 py-4 border-b border-white/10">
                      <span className="text-accent font-semibold min-w-[150px]">{person.role}</span>
                      <a href={`mailto:${person.email}`} className="text-white/80 hover:text-white transition-opacity">
                        {person.email}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 bg-white/5 rounded-lg">
                  <h4 className="text-accent font-semibold mb-3">Postal Address</h4>
                  <p className="text-white/80 leading-relaxed">
                    {postalAddress.line1}<br />
                    {postalAddress.line2}<br />
                    {postalAddress.line3}<br />
                    {postalAddress.line4}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 lg:p-12 rounded-2xl">
                <h3 className="font-serif text-2xl text-primary mb-8">Send a Message</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message. We will be in touch soon.') }}>
                  <div className="mb-6">
                    <label htmlFor="home-name" className="block text-text font-medium mb-2">Your Name *</label>
                    <input type="text" id="home-name" name="name" required className="w-full px-4 py-3.5 border-2 border-border rounded-lg text-text focus:border-primary focus:outline-none transition-colors" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="home-email" className="block text-text font-medium mb-2">Email Address *</label>
                    <input type="email" id="home-email" name="email" required className="w-full px-4 py-3.5 border-2 border-border rounded-lg text-text focus:border-primary focus:outline-none transition-colors" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="home-phone" className="block text-text font-medium mb-2">Phone Number</label>
                    <input type="tel" id="home-phone" name="phone" className="w-full px-4 py-3.5 border-2 border-border rounded-lg text-text focus:border-primary focus:outline-none transition-colors" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="home-message" className="block text-text font-medium mb-2">Your Message *</label>
                    <textarea id="home-message" name="message" required className="w-full px-4 py-3.5 border-2 border-border rounded-lg text-text focus:border-primary focus:outline-none transition-colors min-h-[120px] resize-y" />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all"
                  >
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
