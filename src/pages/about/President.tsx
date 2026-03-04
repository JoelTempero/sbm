import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'
import AnimatedSection from '../../components/ui/AnimatedSection'

export default function President() {
  return (
    <>
      <Helmet>
        <title>Welcome from the President | SBM</title>
        <meta
          name="description"
          content="A welcome message from the Acting President of the School Business Managers' Association, Cheryl English."
        />
      </Helmet>

      <PageHero
        label="About Us"
        title="Welcome from the President"
        subtitle="A message from our Acting President, Cheryl English."
      />

      {/* President Message Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
              {/* President Photo & Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src="https://sbm.org.nz/wp-content/uploads/2025/09/CE-pres-msg-website.png"
                    alt="Cheryl English, Acting President"
                    className="w-64 lg:w-full rounded-2xl shadow-[0_12px_48px_rgba(10,37,64,0.12)]"
                  />
                </div>
                <h2 className="text-2xl text-primary mb-1">Cheryl English</h2>
                <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
                  Acting President
                </p>
                <p className="text-text-light text-sm mt-2">
                  Shirley Boys' High School &amp; Avonside Girls' High School
                </p>
              </div>

              {/* Message Content */}
              <div className="space-y-5">
                <p className="text-text-light leading-relaxed">
                  Kia ora and welcome to the School Business Managers' Association
                  website.
                </p>
                <p className="text-text-light leading-relaxed">
                  As the Acting President of the SBM Association, I am proud to lead
                  an organisation that represents the dedicated school business managers
                  across Aotearoa New Zealand. Our members play a vital role in the
                  effective management and governance of schools, ensuring that
                  educational institutions run smoothly and efficiently.
                </p>
                <p className="text-text-light leading-relaxed">
                  The SBM Association is committed to supporting our members through
                  professional development, advocacy, and networking opportunities. We
                  understand the challenges that school business managers face, and we
                  strive to provide the resources and support needed to navigate the
                  ever-changing education landscape.
                </p>
                <p className="text-text-light leading-relaxed">
                  Our annual conference remains a highlight of our calendar, bringing
                  together school business professionals from across the country to
                  share knowledge, learn from experts, and build lasting connections.
                  We also facilitate regional meetings throughout the year, ensuring
                  our members stay connected and informed no matter where they are in
                  New Zealand.
                </p>
                <p className="text-text-light leading-relaxed">
                  I encourage all school business managers to consider joining the SBM
                  Association. Whether you are new to the role or have years of
                  experience, there is something here for everyone. Together, we can
                  continue to raise the profile of school business management and
                  ensure our members have the support they need to excel.
                </p>
                <p className="text-text-light leading-relaxed">
                  I look forward to connecting with you at our upcoming events and
                  conferences. Please do not hesitate to reach out to any member of
                  our executive team if you have questions or would like to learn more
                  about what we do.
                </p>
                <p className="text-text-light leading-relaxed font-medium">
                  Nga mihi nui,
                </p>
                <p className="text-primary font-semibold text-lg">
                  Cheryl English
                </p>
                <p className="text-text-light text-sm">
                  Acting President, School Business Managers' Association
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-10 bg-bg-cream">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-primary mb-6">
              Become a Member Today
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-xl mx-auto">
              Join the SBM Association and gain access to professional development,
              networking, advocacy, and conference subsidies.
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-light transition-all hover:-translate-y-0.5"
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
