import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNavLinks } from '../../data/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(10,37,64,0.08)]'
          : 'bg-white/95 backdrop-blur-xl'
      } border-b border-border`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex justify-between items-center h-28">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://sbm.org.nz/wp-content/themes/sbma/images/logo.svg"
            alt="SBM Logo"
            className="h-24"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {mainNavLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.path)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.path}
                className="flex items-center gap-1 px-4 py-2.5 rounded-full text-[0.95rem] font-medium text-text hover:bg-bg-cream hover:text-primary transition-all"
              >
                {link.label}
                {link.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              {link.children && openDropdown === link.path && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-[0_12px_48px_rgba(10,37,64,0.12)] border border-border py-2 min-w-[260px] z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-5 py-2.5 text-sm text-text hover:bg-bg-cream hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/membership"
            className="ml-2 px-6 py-2.5 bg-primary text-white rounded-full text-[0.95rem] font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
          >
            Join Now
          </Link>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="max-w-[1400px] mx-auto px-6 py-4">
            {mainNavLinks.map((link) => (
              <div key={link.path} className="py-1">
                <Link
                  to={link.path}
                  className="block py-3 px-4 text-text font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block py-2 px-4 text-sm text-text-light hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/membership"
              className="block mt-4 text-center py-3 bg-primary text-white rounded-full font-semibold"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
