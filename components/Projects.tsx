"use client";

import { projects } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

const projectColors: Record<
  string,
  { from: string; to: string; accent: string }
> = {
  "Dashboard Absensi": { from: "#0f2027", to: "#1a3a4a", accent: "#38bdf8" },
  "Website Event Organizer": {
    from: "#1a0a2e",
    to: "#2d1b4e",
    accent: "#a78bfa",
  },
  "Aplikasi AsetQ": { from: "#0a1f0a", to: "#1a3a1a", accent: "#4ade80" },
  "Aplikasi Management Bengkel": {
    from: "#1f0a0a",
    to: "#3a1a1a",
    accent: "#fb923c",
  },
};

function ProjectPlaceholder({
  title,
  accent,
  from,
  to,
}: {
  title: string;
  accent: string;
  from: string;
  to: string;
}) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-t-md"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* Grid lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${initials}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke={accent}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${initials})`} />
      </svg>

      {/* Glow circle */}
      <div
        className="absolute h-32 w-32 rounded-full opacity-20 blur-2xl"
        style={{ background: accent }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-2">
        <span
          className="text-4xl font-bold tracking-widest opacity-80"
          style={{ color: accent, fontFamily: "monospace" }}
        >
          {initials}
        </span>
        <span
          className="text-[10px] tracking-[0.3em] opacity-40"
          style={{ color: accent }}
        >
          PROJECT PREVIEW
        </span>
      </div>

      {/* Year badge */}
      <div
        className="absolute bottom-3 right-3 rounded px-2 py-0.5 text-[10px] font-mono opacity-60"
        style={{
          background: accent + "22",
          color: accent,
          border: `1px solid ${accent}44`,
        }}
      >
        {projects.find((p) => p.title === title)?.year}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-[#ededed]">My Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => {
          const colors = projectColors[project.title] ?? {
            from: "#111",
            to: "#1a1a1a",
            accent: "#888888",
          };

          return (
            <div
              key={index}
              className="overflow-hidden rounded border border-[#222222] bg-[#0f0f0f] transition-all hover:border-[#444444]"
            >
              {/* Image / Placeholder */}
              {project.image ? (
                <div className="relative h-44 w-full overflow-hidden rounded-t-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <ProjectPlaceholder
                  title={project.title}
                  accent={colors.accent}
                  from={colors.from}
                  to={colors.to}
                />
              )}

              {/* Content */}
              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#ededed]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#888888]">
                      {project.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-medium text-[#555555]">
                    {project.year}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#222222] px-2.5 py-1 text-xs text-[#aaaaaa]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-1">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#888888] transition-colors hover:text-[#ededed]"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#888888] transition-colors hover:text-[#ededed]"
                    >
                      Live Demo →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
