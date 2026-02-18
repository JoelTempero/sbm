import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'

const sections = [
  {
    title: '1. Membership Terms',
    content: [
      'Membership of the School Business Managers\' Association (SBM) is open to individuals employed in school business management roles within New Zealand schools.',
      'Membership categories include Associate, Full, and Group memberships as described on our membership page.',
      'The membership year runs from 1 January to 31 December each year. Membership fees are non-refundable and non-transferable.',
      'Members are expected to maintain professional standards and comply with the SBM Code of Ethics at all times.',
      'The Association reserves the right to decline or revoke membership where a member does not meet eligibility requirements or has breached the Code of Ethics.',
    ],
  },
  {
    title: '2. Payment & Fees',
    content: [
      'Membership fees are invoiced annually and are due within 30 days of the invoice date. All fees are quoted exclusive of GST unless otherwise stated.',
      'Failure to pay membership fees by the due date may result in suspension of membership benefits.',
      'Conference registration fees, event fees, and other charges are payable as specified at the time of registration.',
      'The Association reserves the right to adjust membership and event fees from time to time. Members will be given reasonable notice of any fee changes.',
    ],
  },
  {
    title: '3. Code of Conduct',
    content: [
      'Members are expected to conduct themselves professionally and ethically in all interactions related to the Association.',
      'Members must respect the confidentiality of information shared within Association forums, meetings, and communications.',
      'Harassment, discrimination, or any form of unprofessional conduct at Association events or through Association channels will not be tolerated.',
      'Breaches of the Code of Conduct may result in disciplinary action, including suspension or termination of membership.',
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      'All content, materials, publications, and resources produced by or on behalf of the SBM Association remain the intellectual property of the Association.',
      'Members may use Association materials for their own professional development but may not reproduce, distribute, or commercially exploit such materials without prior written consent.',
      'The SBM name, logo, and branding may not be used by members or third parties without express written permission from the Executive.',
    ],
  },
  {
    title: '5. Website Use',
    content: [
      'This website is provided for the benefit of SBM members and the general public. Use of this website is subject to these terms and conditions.',
      'While we endeavour to keep the information on this website accurate and up to date, the Association makes no warranties or representations regarding the completeness or accuracy of the content.',
      'Users must not attempt to interfere with the proper functioning of this website, introduce malicious code, or access areas of the site for which they are not authorised.',
      'Links to external websites are provided for convenience and do not imply endorsement. The Association is not responsible for the content or privacy practices of linked sites.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      'To the fullest extent permitted by New Zealand law, the SBM Association, its Executive, delegates, and agents shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from membership of the Association, attendance at events, or use of this website.',
      'The Association does not guarantee uninterrupted access to its website or member services and shall not be held liable for any disruptions.',
      'Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under New Zealand law.',
    ],
  },
  {
    title: '7. Governing Law',
    content: [
      'These terms and conditions are governed by and construed in accordance with the laws of New Zealand.',
      'Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Zealand.',
      'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.',
    ],
  },
  {
    title: '8. Changes to Terms',
    content: [
      'The SBM Association reserves the right to update or amend these terms and conditions at any time.',
      'Changes will be published on this website and, where appropriate, communicated to members via email or other channels.',
      'Continued membership or use of the website after changes have been published constitutes acceptance of the updated terms.',
      'Members are encouraged to review these terms periodically to stay informed of any changes.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | SBM</title>
        <meta
          name="description"
          content="Terms and conditions for the School Business Managers' Association of New Zealand."
        />
      </Helmet>

      <PageHero
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border">
              <p className="text-text-light leading-relaxed mb-8">
                These terms and conditions govern your membership of the School Business
                Managers' Association of New Zealand (SBM) and your use of this website.
                By becoming a member or using this website, you agree to be bound by these
                terms. These terms were last updated on 1 January {new Date().getFullYear()}.
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
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-text-light text-sm">
                  If you have any questions about these terms, please{' '}
                  <Link to="/contact" className="text-primary hover:text-primary-light transition-colors">
                    contact us
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
