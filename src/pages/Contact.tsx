import { useState } from 'react'
import type { FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Send, Users } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'
import { contactPersons, postalAddress } from '../data/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you as soon as possible.')
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | SBM</title>
        <meta
          name="description"
          content="Get in touch with the School Business Managers' Association of New Zealand."
        />
      </Helmet>

      <PageHero
        label="Contact"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us using the details below."
      />

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border">
                <h2 className="text-2xl text-primary mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
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
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Enquiry</option>
                        <option value="conference">Conference Enquiry</option>
                        <option value="sponsorship">Sponsorship Enquiry</option>
                        <option value="regional">Regional Meeting Enquiry</option>
                        <option value="general">General Enquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-light transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar - Contact Details */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                {/* Contact Persons */}
                <div className="bg-bg-cream rounded-2xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-primary">Key Contacts</h3>
                  </div>
                  <ul className="space-y-4">
                    {contactPersons.map((person) => (
                      <li key={person.role} className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-accent-dark flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-text text-sm">{person.role}</p>
                          <a
                            href={`mailto:${person.email}`}
                            className="text-primary text-sm hover:text-primary-light transition-colors"
                          >
                            {person.email}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Postal Address */}
                <div className="bg-bg-cream rounded-2xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-primary">Postal Address</h3>
                  </div>
                  <address className="text-text-light not-italic leading-relaxed text-sm">
                    {postalAddress.line1}
                    <br />
                    {postalAddress.line2}
                    <br />
                    {postalAddress.line3}
                    <br />
                    {postalAddress.line4}
                  </address>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
