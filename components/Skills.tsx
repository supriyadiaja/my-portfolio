'use client'

import { skills } from '@/data/portfolio'

const skillCategories = [
  { title: 'Frontend Development', key: 'frontend' as const },
  { title: 'Backend Development', key: 'backend' as const },
  { title: 'Tools & DevOps', key: 'tools' as const },
  { title: 'IT Support', key: 'itSupport' as const },
]

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-[#ededed]">Skills</h2>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.key} className="space-y-3">
            <h3 className="text-sm font-semibold text-[#ededed]">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[category.key].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#222222] bg-[#0f0f0f] px-3 py-1.5 text-xs text-[#aaaaaa] transition-all hover:border-[#444444] hover:bg-[#1a1a1a] hover:text-[#ededed]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
