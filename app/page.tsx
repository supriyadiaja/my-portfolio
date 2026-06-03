'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

type Section = 'home' | 'projects' | 'skills' | 'experience'

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'experience':
        return <Experience />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="w-full pl-0 pt-12 md:pl-12 pb-20 md:pb-0">
        <div className="mx-auto max-w-2xl px-6 md:px-0">
          {renderSection()}
          <Footer />
        </div>
      </main>
    </div>
  )
}
