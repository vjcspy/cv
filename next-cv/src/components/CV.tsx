import React, { useState } from "react";
import Image from "next/image";
import { cv, type Project } from "@/data/cv";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="cv-section-header">{children}</h2>
);

const ProjectBlock = ({ project }: { project: Project }) => (
  <div className="cv-project-block mb-4">
    <div className="cv-project-header">
      <span className="cv-project-title">{project.title}</span>
      {project.dates && <span className="cv-project-date">{project.dates}</span>}
    </div>
    {project.domain && <p className="mt-1">{project.domain}</p>}
    {project.role && <p className="cv-project-role">{project.role}</p>}
    {project.description && (
      <p className="mt-1">
        <span className="font-bold">Description:</span> {project.description}
      </p>
    )}
    {project.responsibilitiesLabel && (
      <p className="font-bold mt-1">{project.responsibilitiesLabel}</p>
    )}
    <ul className="list-disc pl-6 space-y-1 mt-1">
      {project.bullets.map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </ul>
    {project.achievement && (
      <p className="mt-1">
        <span className="font-bold">Achievement:</span> {project.achievement}
      </p>
    )}
    {project.award && (
      <p className="cv-award">
        <span className="font-bold">Award:</span>{" "}
        <span className="cv-award-title">{project.award.title}</span> &mdash;{" "}
        {project.award.detailPrefix} <strong>{project.award.highlight}</strong>{" "}
        {project.award.detailSuffix}
      </p>
    )}
    <p>
      <span className="font-bold">{project.techStackLabel}</span> {project.techStack}
    </p>
  </div>
);

const CV = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`cv-page-wrapper min-h-screen py-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        className="cv-container max-w-[8.5in] mx-auto shadow-lg transition-colors duration-300 px-10 py-8"
        data-theme={isDarkMode ? "dark" : "light"}
      >
        {/* Header */}
        <header className="mb-4">
          <div className="flex flex-wrap items-center gap-4 mb-3">
            {cv.badges.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-16 w-auto"
              />
            ))}
          </div>
          <hr
            className="mb-3"
            style={{ borderTopWidth: "2px", borderColor: "var(--cv-accent)" }}
          />
          <h1 className="cv-name text-center">{cv.name}</h1>
          <p className="cv-subtitle text-center mb-2">{cv.subtitle}</p>
          <p className="text-center text-sm" style={{ color: "var(--cv-muted)" }}>
            {cv.contact.phone} &nbsp;|&nbsp; {cv.contact.email}
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-4">
          <SectionHeader>Professional Summary</SectionHeader>
          <ul className="list-disc pl-6 pt-2 space-y-1">
            {cv.summary.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>

        {/* Technical Leadership & Recognition */}
        <section className="mb-4">
          <SectionHeader>Technical Leadership &amp; Recognition</SectionHeader>
          <ul className="list-disc pl-6 pt-2 space-y-1">
            {cv.leadership.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>

        {/* Core Technical Skills */}
        <section className="mb-4">
          <SectionHeader>Core Technical Skills</SectionHeader>
          <div className="pt-2 space-y-3">
            {cv.skillGroups.map((group) => (
              <div key={group.title} className="cv-skill-group">
                <p className="font-bold">{group.title}</p>
                <ul className="list-disc pl-6 space-y-0.5">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-4">
          <SectionHeader>Education</SectionHeader>
          <div className="pt-2">
            <p className="font-bold">
              {cv.education.school}, {cv.education.program}
            </p>
            <p>
              <span className="font-bold">Focus:</span> {cv.education.focus}
            </p>
          </div>
        </section>

        {/* Certifications & Professional Development */}
        <section className="mb-4">
          <SectionHeader>Certifications &amp; Professional Development</SectionHeader>
          <ul className="list-disc pl-6 pt-2 space-y-1">
            {cv.certifications.map((c, i) => (
              <li key={i}>
                <span className="font-bold">{c.label}</span> {c.detail}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <SectionHeader>Projects</SectionHeader>
          <div className="pt-2">
            {cv.projects.map((project) => (
              <ProjectBlock key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <SectionHeader>Personal Projects</SectionHeader>
          <div className="pt-2">
            {cv.personalProjects.map((project) => (
              <ProjectBlock key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex gap-3 no-print">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`min-w-[48px] min-h-[48px] px-5 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation ${
            isDarkMode
              ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              : "bg-gray-700 hover:bg-gray-800 text-white"
          }`}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        {/* PDF Download Button */}
        <a
          href="/cv.pdf"
          download="Dinh_Khoi_CV.pdf"
          className="min-w-[48px] min-h-[48px] px-5 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation"
          style={{ backgroundColor: "#F4AC62" }}
          title="Download CV as PDF"
          aria-label="Download CV as PDF"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">PDF</span>
        </a>
      </div>
    </div>
  );
};

export default CV;
