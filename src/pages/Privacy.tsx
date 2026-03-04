import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect personal information that you provide directly to us when you apply for membership, register for events, submit enquiries, or interact with our website. This may include your name, email address, phone number, school name, postal address, and role or position.',
      'We may also collect information about your membership history, event attendance, and interactions with our communications.',
      'When you visit our website, we may automatically collect technical information such as your IP address, browser type, operating system, and pages visited through the use of cookies and similar technologies.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the personal information we collect to administer your membership, process registrations and payments, and provide you with member services and benefits.',
      'We use your contact information to send you relevant communications, including newsletters, event invitations, member updates, and information from our sponsors that may be of interest to you.',
      'We may use aggregated, anonymised data for reporting purposes, such as membership statistics and event attendance trends, to help us improve our services.',
      'We will not use your personal information for purposes that are incompatible with the purposes for which it was collected, unless we have your consent or are required or permitted to do so by law.',
    ],
  },
  {
    title: '3. Information Sharing',
    content: [
      'We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.',
      'We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, or administering our services. These providers are contractually obligated to keep your information confidential.',
      'We may share your information with our sponsors in aggregated, anonymised form. We will not provide your individual contact details to sponsors without your explicit consent.',
      'We may disclose your information where required by law, regulation, or legal process, or to protect the rights, property, or safety of the Association, its members, or the public.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'We take reasonable steps to protect your personal information from unauthorised access, use, modification, disclosure, or destruction.',
      'We use industry-standard security measures including secure connections (SSL/TLS) for data transmission and secure storage for personal information.',
      'While we strive to protect your personal information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security of your data.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'Under the Privacy Act 2020, you have the right to access the personal information we hold about you and to request corrections to any inaccurate or incomplete information.',
      'You may request a copy of the personal information we hold about you by contacting us at admin@sbm.org.nz. We will respond to your request within 20 working days, as required by the Privacy Act 2020.',
      'You may opt out of receiving non-essential communications from us at any time by using the unsubscribe link in our emails or by contacting us directly.',
      'If you believe we have breached the Information Privacy Principles, you may make a complaint to us in writing. We will investigate and respond to your complaint within a reasonable timeframe.',
    ],
  },
  {
    title: '6. Cookies',
    content: [
      'Our website uses cookies and similar technologies to improve your browsing experience and help us understand how our website is used.',
      'Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences and provide a more personalised experience.',
      'You can control cookie settings through your browser. Disabling cookies may affect the functionality of some parts of our website.',
      'We use analytics cookies to collect anonymous information about how visitors use our website, which helps us to improve our content and user experience.',
    ],
  },
  {
    title: '7. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this privacy policy or our handling of your personal information, please contact us at:',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SBM</title>
        <meta
          name="description"
          content="Privacy policy for the School Business Managers' Association of New Zealand, compliant with the Privacy Act 2020."
        />
      </Helmet>

      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border">
              <p className="text-text-light leading-relaxed mb-4">
                The School Business Managers' Association of New Zealand (SBM) is committed
                to protecting the privacy of our members and website visitors. This privacy
                policy explains how we collect, use, store, and protect your personal
                information in accordance with the{' '}
                <strong>Privacy Act 2020</strong> (New Zealand).
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                This policy was last updated on 1 January {new Date().getFullYear()}.
              </p>

              <div className="space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-xl text-primary mb-4">{section.title}</h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph, i) => (
                        <p key={i} className="text-text-light leading-relaxed text-[0.95rem]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.title === '7. Contact Us' && (
                      <div className="mt-4 bg-bg-cream rounded-xl p-6">
                        <p className="text-text font-medium mb-1">
                          School Business Managers' Association
                        </p>
                        <p className="text-text-light text-sm mb-1">
                          Email:{' '}
                          <a
                            href="mailto:admin@sbm.org.nz"
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            admin@sbm.org.nz
                          </a>
                        </p>
                        <p className="text-text-light text-sm mt-4">
                          You also have the right to make a complaint to the{' '}
                          <a
                            href="https://www.privacy.org.nz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            Office of the Privacy Commissioner
                          </a>{' '}
                          if you believe your privacy has been breached.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-text-light text-sm">
                  For questions about this policy, please{' '}
                  <Link to="/contact" className="text-primary hover:text-primary-light transition-colors">
                    contact us
                  </Link>. See also our{' '}
                  <Link to="/terms" className="text-primary hover:text-primary-light transition-colors">
                    Terms and Conditions
                  </Link>.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
