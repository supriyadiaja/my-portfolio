'use client'

import { profile } from '@/data/portfolio'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <h1 className="text-balance text-4xl font-bold text-[#ededed]">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-[#888888]">
              <span className="font-semibold text-[#ededed]">{profile.role}</span>
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-[#1a1a1a]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover grayscale transition-all hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1 rounded border border-[#222222] bg-[#0f0f0f] p-4">
            <div className="text-2xl font-bold text-[#ededed]">4+</div>
            <div className="text-xs text-[#888888]">Projects Built</div>
          </div>
          <div className="space-y-1 rounded border border-[#222222] bg-[#0f0f0f] p-4">
            <div className="text-2xl font-bold text-[#ededed]">2</div>
            <div className="text-xs text-[#888888]">Years Experience</div>
          </div>
          <div className="space-y-1 rounded border border-[#222222] bg-[#0f0f0f] p-4">
            <div className="text-2xl font-bold text-[#ededed]">100%</div>
            <div className="text-xs text-[#888888]">Client Satisfied</div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4">
        <p className="text-balance leading-relaxed text-[#888888]">
          {profile.bio}
        </p>
        <p className="text-balance leading-relaxed text-[#888888]">
          Saat ini saya fokus pada pembuatan aplikasi web yang scalable, performant, dan user-friendly. Saya selalu antusias untuk belajar teknologi baru dan mengimplementasikan best practices dalam development.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <Link
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[#ededed] transition-colors hover:text-[#888888]"
        >
          Lihat GitHub Saya
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 text-[#ededed] transition-colors hover:text-[#888888]"
        >
          Kirim Email
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </Link>
      </div>
    </section>
  )
}
