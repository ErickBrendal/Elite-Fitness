import { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import HeroSection from './components/HeroSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import DashboardPreview from './components/DashboardPreview.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import SmartBookingCTA from './components/SmartBookingCTA.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="dashboard">
          <DashboardPreview />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="booking">
          <SmartBookingCTA />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
