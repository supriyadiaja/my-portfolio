"use client";

import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-[#ededed]">Work Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative space-y-3 border-l-2 border-[#222222] pl-6"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 h-3 w-3 -translate-x-[7px] rounded-full border-2 border-[#0a0a0a] bg-[#444444]" />

            <div>
              <h3 className="font-semibold text-[#ededed]">{exp.role}</h3>
              <p className="text-sm text-[#888888]">{exp.company}</p>
              <p className="mt-1 text-xs text-[#555555]">{exp.period}</p>
            </div>

            <ul className="space-y-1 text-sm leading-relaxed text-[#888888] list-none">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 text-[#444444] shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-[#1a1a1a] px-2 py-1 text-xs text-[#aaaaaa]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
