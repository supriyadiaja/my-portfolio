'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Section = 'home' | 'projects' | 'skills' | 'experience'

interface SidebarProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

const menuItems: { label: string; id: Section }[] = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
]

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-[#222222] bg-[#111111] md:hidden">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 text-xs transition-colors ${
              activeSection === item.id
                ? 'text-[#ededed]'
                : 'text-[#555555] hover:text-[#ededed]'
            }`}
          >
            <div className="h-1 w-1 rounded-full bg-current" />
            {item.label}
          </button>
        ))}
      </nav>
    )
  }

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[200px] border-r border-[#222222] bg-[#0a0a0a] pt-12 md:flex md:flex-col md:px-6">
      <div className="mb-12">
        <Image src="/logo.jpeg" alt="Logo" className="rounded-full" width={50} height={50} />
      </div>
      <nav className="flex flex-col gap-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-left text-sm transition-all duration-200 ${
              activeSection === item.id
                ? 'rounded bg-[#1f1f1f] px-3 py-2 font-medium text-[#ededed]'
                : 'px-3 py-2 text-[#888888] hover:text-[#ededed]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
