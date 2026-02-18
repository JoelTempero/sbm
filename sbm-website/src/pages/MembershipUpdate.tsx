import { useState } from 'react'
import type { FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Send, UserCog } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'

export default function MembershipUpdate() {
  const [formData, setFormData] = useState({
    membershipNumber: '',
    name: '',
    email: '',
    phone: '',
    school: '',
    details: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert(
      'Thank you! Your update request has been submitted. We will process your changes shortly.'
    )
  }

  return (
    <>
      <Helmet>
        <title>Update Your Details | SBM</title>
        <meta
          name="description"
          content="Update your membership details with the School Business Managers' Association."
        />
      </Helmet>

      <PageHero
        label="Membership"
        title="Update Your Details"
        subtitle="Keep your membership information current by submitting any changes below."
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[700px] mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <UserCog className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl text-primary">Update Form</h2>
                  <p className="text-text-light text-sm">
                    Please provide your membership number so we can locate your record.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="membershipNumber" className="block text-sm font-medium text-text mb-2">
                    Membership Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="membershipNumber"
                    name="membershipNumber"
                    value={formData.membershipNumber}
                    onChange={handleChange}
                    required
                    placeholder="e.g. SBM-001234"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
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
                  <label htmlFor="school" className="block text-sm font-medium text-text mb-2">
                    School
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="details" className="block text-sm font-medium text-text mb-2">
                    Details to Update <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe the changes you need made to your membership record..."
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-light transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  Submit Update
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
