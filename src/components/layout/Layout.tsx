import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
