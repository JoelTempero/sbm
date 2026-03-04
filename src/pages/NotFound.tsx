import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | SBM</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <section className="py-28 lg:py-40 px-6 lg:px-10">
        <div className="max-w-[600px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-8xl md:text-9xl font-bold text-primary/10 mb-4">404</p>
            <h1 className="text-3xl md:text-4xl text-primary mb-4">Page Not Found</h1>
            <p className="text-text-light text-lg mb-10 max-w-md mx-auto">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text rounded-full font-semibold hover:bg-bg-cream transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
