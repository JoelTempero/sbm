import { useState } from 'react'
import type { FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LogIn,
  Lock,
  Mail,
  User,
  CreditCard,
  Calendar,
  MapPin,
  FileText,
  Bell,
  UserCog,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedSection from '../components/ui/AnimatedSection'

const quickLinks = [
  {
    icon: UserCog,
    title: 'Update Details',
    description: 'Update your membership information',
    link: '/membership-update',
  },
  {
    icon: Calendar,
    title: 'Conference Registration',
    description: 'Register for the upcoming conference',
    link: '/conference/upcoming',
  },
  {
    icon: MapPin,
    title: 'Regional Meetings',
    description: 'View regional meeting dates',
    link: '/conference/upcoming',
  },
]

const announcements = [
  {
    date: '15 Feb 2026',
    title: 'Conference 2026 Registrations Opening Soon',
    excerpt: 'Registrations for the Wellington conference will open in early 2026. Stay tuned for details.',
  },
  {
    date: '1 Jan 2026',
    title: 'Membership Renewals Due',
    excerpt: 'The new membership year has begun. Please ensure your membership is renewed for 2026.',
  },
  {
    date: '10 Dec 2025',
    title: 'Regional Meeting Dates Published',
    excerpt: 'The 2026 regional meeting schedule has been published. Check your region for dates.',
  },
]

export default function Members() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Member Login | SBM</title>
          <meta
            name="description"
            content="Log in to your SBM membership account."
          />
        </Helmet>

        <PageHero
          label="Members"
          title="Member Login"
          subtitle="Access your membership dashboard and resources."
        />

        <section className="py-20 lg:py-28 px-6 lg:px-10">
          <div className="max-w-[450px] mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <LogIn className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl text-primary">Welcome Back</h2>
                  <p className="text-text-light text-sm mt-2">
                    Sign in to access your member dashboard.
                  </p>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@school.nz"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-light transition-all hover:-translate-y-0.5"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-6 text-center space-y-3">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Password reset functionality would be available in the full application.')
                    }}
                    className="block text-sm text-primary hover:text-primary-light transition-colors"
                  >
                    Forgot Password?
                  </a>
                  <p className="text-sm text-text-light">
                    Don't have an account?{' '}
                    <Link
                      to="/membership-form"
                      className="text-primary font-medium hover:text-primary-light transition-colors"
                    >
                      Apply for membership
                    </Link>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Member Dashboard | SBM</title>
        <meta
          name="description"
          content="SBM Member Dashboard - Access your membership resources and information."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-bg to-bg-cream py-12 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-sm mb-1">Welcome back,</p>
              <h1 className="text-3xl md:text-4xl text-primary">Member Dashboard</h1>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-5 py-2.5 border border-border rounded-full text-sm font-medium text-text hover:bg-bg-cream transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Membership Status Card */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                        <User className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl text-primary">Membership Status</h2>
                        <p className="text-text-light text-sm">Full Membership</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      Active
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-bg-cream rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="w-4 h-4 text-primary/60" />
                        <p className="text-xs text-text-light">Member Since</p>
                      </div>
                      <p className="font-medium text-text">January 2020</p>
                    </div>
                    <div className="bg-bg-cream rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-primary/60" />
                        <p className="text-xs text-text-light">Membership #</p>
                      </div>
                      <p className="font-medium text-text">SBM-001234</p>
                    </div>
                    <div className="bg-bg-cream rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-primary/60" />
                        <p className="text-xs text-text-light">Renewal Date</p>
                      </div>
                      <p className="font-medium text-text">31 Dec 2026</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Links */}
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl text-primary mb-4">Quick Links</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {quickLinks.map((item) => (
                    <Link key={item.title} to={item.link}>
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border h-full hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(10,37,64,0.1)] transition-all group"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="w-6 h-6 text-primary mb-3" />
                        <p className="font-medium text-text mb-1">{item.title}</p>
                        <p className="text-xs text-text-light">{item.description}</p>
                        <ArrowRight className="w-4 h-4 text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar - Announcements */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.06)] border border-border sticky top-28">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="w-5 h-5 text-accent-dark" />
                  <h3 className="text-xl text-primary">Announcements</h3>
                </div>
                <div className="space-y-5">
                  {announcements.map((item) => (
                    <div key={item.title} className="pb-5 border-b border-border last:border-0 last:pb-0">
                      <p className="text-xs text-accent-dark font-medium mb-1">{item.date}</p>
                      <p className="font-medium text-text text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-text-light leading-relaxed">{item.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
