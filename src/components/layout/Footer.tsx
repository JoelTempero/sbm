import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-bg-footer text-white py-16 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pb-10 border-b border-white/10 mb-10 gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://sbm.org.nz/wp-content/themes/sbma/images/logo.svg"
              alt="SBM Logo"
              className="h-10 brightness-0 invert"
            />
          </div>
          <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://sbm.org.nz/wp-content/uploads/2025/09/SBM-Constitution-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Constitution
              </a>
            </li>
            <li>
              <a
                href="https://sbm.org.nz/wp-content/uploads/2024/03/Code-of-Ethics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Code of Ethics
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-4 text-center">
          <p>&copy; {new Date().getFullYear()} School Business Managers' Association. All Rights Reserved.</p>
          <p>The professional body of choice for school business leaders.</p>
        </div>
      </div>
    </footer>
  )
}
