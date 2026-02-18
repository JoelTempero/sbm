import { useState } from 'react'
import type { FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Check, Send, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'

const benefitsList = [
  'Regional meeting access across New Zealand',
  'Annual conference discounts and subsidies',
  'Professional development opportunities',
  'Networking with school business professionals',
  'Member communications and updates',
  'Advocacy and representation',
]

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    schoolName: '',
    schoolAddress: '',
    role: '',
    membershipType: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert(
      'Thank you for your membership application! We will review your details and be in touch shortly.'
    )
  }

  return (
    <>
      <Helmet>
        <title>Membership Application | SBM</title>
        <meta
          name="description"
          content="Apply for membership with the School Business Managers' Association of New Zealand."
        />
      </Helmet>

      <PageHero
        label="Membership"
        title="Membership Application"
        subtitle="Complete the form below to apply for SBM membership."
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border"
              >
                <h2 className="text-2xl text-primary mb-8">Your Details</h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="schoolName" className="block text-sm font-medium text-text mb-2">
                    School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="schoolAddress" className="block text-sm font-medium text-text mb-2">
                    School Address
                  </label>
                  <input
                    type="text"
                    id="schoolAddress"
                    name="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-text mb-2">
                      Role / Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Business Manager, Finance Manager"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="membershipType" className="block text-sm font-medium text-text mb-2">
                      Membership Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="membershipType"
                      name="membershipType"
                      value={formData.membershipType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a type</option>
                      <option value="associate">Associate - $250 +GST/year</option>
                      <option value="full">Full Membership - $300 +GST/year</option>
                      <option value="group">Group - $550 +GST/year</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any additional information you'd like to share..."
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-light transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.15}>
              <div className="bg-bg-cream rounded-2xl p-8 lg:p-10 border border-border sticky top-28">
                <h3 className="text-2xl text-primary mb-6">Membership Benefits</h3>
                <ul className="space-y-4 mb-8">
                  {benefitsList.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-dark flex-shrink-0 mt-0.5" />
                      <span className="text-text-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-text-light mb-4">
                    Already a member?
                  </p>
                  <Link
                    to="/membership-update"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
                  >
                    Update your details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
