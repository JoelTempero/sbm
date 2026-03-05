import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Profile from './pages/about/Profile'
import President from './pages/about/President'
import OurPeople from './pages/about/OurPeople'
import RegionMap from './pages/about/RegionMap'
import Membership from './pages/Membership'
import MembershipForm from './pages/MembershipForm'
import MembershipUpdate from './pages/MembershipUpdate'
import Upcoming from './pages/conference/Upcoming'
import Past from './pages/conference/Past'
import Partners from './pages/sponsors/Partners'
import Opportunities from './pages/sponsors/Opportunities'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Members from './pages/Members'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/sbm">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Profile />} />
            <Route path="about/profile" element={<Profile />} />
            <Route path="about/president" element={<President />} />
            <Route path="about/our-people" element={<OurPeople />} />
            <Route path="about/region-map" element={<RegionMap />} />
            <Route path="membership" element={<Membership />} />
            <Route path="membership-form" element={<MembershipForm />} />
            <Route path="membership-update" element={<MembershipUpdate />} />
            <Route path="conference" element={<Upcoming />} />
            <Route path="conference/upcoming" element={<Upcoming />} />
            <Route path="conference/past" element={<Past />} />
            <Route path="sponsors" element={<Partners />} />
            <Route path="sponsors/partners" element={<Partners />} />
            <Route path="sponsors/opportunities" element={<Opportunities />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="members" element={<Members />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
