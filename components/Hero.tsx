"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaPython,
  FaReact,
} from "react-icons/fa";

import { SiVercel } from "react-icons/si";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: FaCode,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Django",
    icon: FaCode,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "SQLite",
    icon: FaDatabase,
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
  },
  {
    name: "TypeScript",
    icon: FaCode,
  },
 {
  name: "Vercel",
  icon: SiVercel,
 },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "Nutri Bowl",
    category: "Full Stack Web Application",
    description:
      "A healthy meal subscription platform with 1, 3 and 6-month subscription plans. Built with Django and SQLite with authentication, subscription management and user dashboards.",
    image: "/projects/nutri-bowl.jpg.png",
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    title: "SmileCare Dental",
    category: "Web Application",
    description:
      "A responsive dental clinic website designed to provide information about dental services and make appointment booking easier for patients.",
    image: "/projects/smilecare.jpg.png",
    technologies: [
      "HTML",
      "CSS",
      "Django",
      "SQLite",
      "JavaScript",
      "Python",
    ],
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        id="home"
        className="
          min-h-screen
          flex
          items-center
          relative
          pt-28
          pb-20
        "
      >
        <div className="container">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              lg:gap-20
              items-center
            "
          >
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="fade-up">

              {/* Availability */}

              <div className="availability mb-6">
                <span className="availability-dot" />
                Available for Work
              </div>

              {/* Greeting */}

              <p
                className="
                  text-lg
                  md:text-xl
                  mb-3
                  text-[#A9B5C2]
                "
              >
                Hello, I&apos;m
              </p>

              {/* Name */}

              <h1
                className="
                  text-6xl
                  sm:text-7xl
                  lg:text-8xl
                  font-black
                  tracking-tight
                  leading-[0.9]
                "
              >
                Albin
                <br />

                <span className="gradient-text">
                  Biju
                </span>
              </h1>

              {/* Role */}

              <h2
                className="
                  mt-7
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                I&apos;m a{" "}
                <span className="gradient-text">
                  Full Stack Developer
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  md:text-lg
                  leading-8
                  text-[#A9B5C2]
                "
              >
                I build modern, responsive and user-focused
                web applications using React, Next.js,
                TypeScript, Python and Django. I enjoy
                solving real-world problems and turning
                ideas into practical digital products.
              </p>

              {/* Buttons */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  mt-8
                "
              >
                <Link
                  href="#projects"
                  className="btn-primary"
                >
                  View Projects
                  <FaArrowRight />
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="btn-secondary"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mt-7
                "
              >
                <a
                  href="https://github.com/albinbiju03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-button"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/albinbiju03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-button"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="mailto:albinbiju0330@gmail.com"
                  aria-label="Email"
                  className="social-button"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
              "
            >
              {/* Profile Image */}

              <div
                className="
                  relative
                  w-[280px]
                  h-[280px]
                  sm:w-[360px]
                  sm:h-[360px]
                  lg:w-[440px]
                  lg:h-[440px]
                "
              >
                {/* Blue Glow */}

                <div
                  className="
                    absolute
                    inset-[-35px]
                    rounded-full
                    bg-[#134074]/30
                    blur-3xl
                  "
                />

                {/* Outer Ring */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#EEF4ED]/20
                    p-2
                  "
                >
                  {/* Image Container */}

                  <div
                    className="
                      relative
                      w-full
                      h-full
                      rounded-full
                      overflow-hidden
                      border
                      border-[#134074]/70
                      bg-[#0B2545]
                    "
                  >
                  <Image
                      src="/profile.png"
                      alt="Albin Biju"
                      fill
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  STATS
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-4
                  gap-3
                  mt-8
                  w-full
                  max-w-xl
                "
              >
                <Stat
                  number="3+"
                  label="Projects"
                  icon={<FaCode />}
                />

                <Stat
                  number="10+"
                  label="Technologies"
                  icon={<FaReact />}
                />

                <Stat
                  number="BCA"
                  label="Graduate"
                  icon={<FaGraduationCap />}
                />

                <Stat
                  number="1"
                  label="Internship"
                  icon={<FaBriefcase />}
                />
              </div>
            </div>
          </div>

          {/* =================================================
              SCROLL INDICATOR
          ================================================= */}

          <div
            className="
              hidden
              md:flex
              flex-col
              items-center
              gap-3
              mt-14
              text-[#8C99A7]
            "
          >
            <div className="scroll-mouse" />

            <span className="text-xs tracking-widest uppercase">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="ABOUT ME"
            title="Building with purpose."
            description="A little more about me and how I approach development."
          />

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              mt-14
            "
          >
            {/* About Text */}

            <div className="glass rounded-3xl p-8 md:p-10">

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#EEF4ED]
                "
              >
                Who I Am
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  md:text-4xl
                  font-bold
                "
              >
                A developer who
                <span className="gradient-text">
                  {" "}
                  enjoys solving problems.
                </span>
              </h3>

              <p
                className="
                  mt-6
                  leading-8
                  text-[#A9B5C2]
                "
              >
                I&apos;m a recent BCA graduate with an
                interest in full-stack web development.
                I enjoy creating clean interfaces,
                developing backend functionality and
                connecting both sides into useful
                digital products.
              </p>

              <p
                className="
                  mt-4
                  leading-8
                  text-[#A9B5C2]
                "
              >
                My current technical focus includes
                React, Next.js, JavaScript, TypeScript,
                Python, Django, SQL and Git.
              </p>
            </div>

            {/* Info Cards */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              "
            >
              <InfoCard
                icon={<FaGraduationCap />}
                title="Education"
                value="BCA Graduate"
                text="St. Paul&apos;s College"
              />

              <InfoCard
                icon={<FaCode />}
                title="Focus"
                value="Full Stack"
                text="Web Development"
              />

              <InfoCard
                icon={<FaBriefcase />}
                title="Experience"
                value="Internship"
                text="Python Programming"
              />

              <InfoCard
                icon={<FaGitAlt />}
                title="Workflow"
                value="Git & GitHub"
                text="Version Control"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section id="skills" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="TECHNICAL SKILLS"
            title="My technical toolkit."
            description="Technologies I use to design, build and maintain modern web applications."
          />

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              mt-14
            "
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="skill-card"
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-[#134074]/45
                        border
                        border-[#EEF4ED]/10
                      "
                    >
                      <Icon
                        className="skill-icon"
                        size={23}
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">
                        {skill.name}
                      </h3>

                      <p className="text-sm mt-1">
                        Development skill
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {
      
      
      /* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="MY WORK"
            title="Featured projects."
            description="A selection of projects I&apos;ve built while developing my full-stack skills."
          />

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              mt-14
            "
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="
                  project-card
                  overflow-hidden
                  rounded-3xl
                  glass
                  group
                "
              >
                {/* Project Image */}

                <div
                  className="
                    relative
                    h-[260px]
                    md:h-[330px]
                    overflow-hidden
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      600px
                    "
                    className="
                      project-image
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0B2545]
                      via-transparent
                      to-transparent
                    "
                  />
                </div>

                {/* Project Content */}

                <div className="p-7">

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#EEF4ED]
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-[#A9B5C2]
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                    "
                  >
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            px-3
                            py-1.5
                            rounded-full
                            text-xs
                            font-semibold
                            bg-[#134074]/35
                            border
                            border-[#EEF4ED]/10
                            text-[#EEF4ED]
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  {/* Project Link */}

                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      text-[#EEF4ED]
                      font-semibold
                      hover:text-white
                      transition
                    "
                  >
                    Discuss Project
                    <FaArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION + CERTIFICATIONS + EXPERIENCE
          
          ORDER:
          1. Degree
          2. Certifications
          3. Internship
      ===================================================== */}

      <section id="experience" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Education & experience."
            description="My academic background, certifications and professional experience."
          />

          <div
            className="
              max-w-4xl
              mx-auto
              mt-14
              space-y-10
            "
          >

            {/* =================================================
                1. DEGREE / EDUCATION
            ================================================= */}

            <div className="glass rounded-3xl p-7 md:p-10">

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-6
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-[#134074]
                    text-[#EEF4ED]
                  "
                >
                  <FaGraduationCap size={25} />
                </div>

                {/* Content */}

                <div className="flex-1">

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#A9B5C2]
                    "
                  >
                    2023 – June 2026
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-[#EEF4ED]
                    "
                  >
                    Bachelor of Computer Applications
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[#EEF4ED]
                      font-semibold
                    "
                  >
                    St. Paul&apos;s College
                  </p>

                  <p className="mt-1 text-[#A9B5C2]">
                    Bangalore University
                  </p>

                  {/* CGPA */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-3
                      mt-6
                      px-4
                      py-3
                      rounded-2xl
                      bg-[#134074]/30
                      border
                      border-[#EEF4ED]/10
                    "
                  >
                    <FaGraduationCap
                      size={18}
                      className="text-[#EEF4ED]"
                    />

                    <span
                      className="
                        text-[#EEF4ED]
                        font-semibold
                      "
                    >
                      CGPA: 7.14
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* =================================================
                2. CERTIFICATIONS
            ================================================= */}

            <div className="glass rounded-3xl p-7 md:p-10">

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-6
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-[#0B2545]
                    text-[#EEF4ED]
                  "
                >
                  <FaCertificate size={23} />
                </div>

                {/* Content */}

                <div className="flex-1">

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#A9B5C2]
                    "
                  >
                    CERTIFICATIONS
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-[#EEF4ED]
                    "
                  >
                    Professional Certifications
                  </h3>

                  <div
                    className="
                      grid
                      sm:grid-cols-2
                      gap-4
                      mt-6
                    "
                  >

                    {/* Cyber Security */}

                    <div
                      className="
                        rounded-2xl
                        p-5
                        bg-[#0B2545]/40
                        border
                        border-[#EEF4ED]/10
                        hover:border-[#EEF4ED]/25
                        transition
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <FaCertificate
                          size={18}
                          className="text-[#EEF4ED]"
                        />

                        <h4
                          className="
                            font-semibold
                            text-[#EEF4ED]
                          "
                        >
                          Cyber Security
                        </h4>
                      </div>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[#A9B5C2]
                        "
                      >
                        IBM
                      </p>
                    </div>

                    {/* Artificial Intelligence */}

                    <div
                      className="
                        rounded-2xl
                        p-5
                        bg-[#0B2545]/40
                        border
                        border-[#EEF4ED]/10
                        hover:border-[#EEF4ED]/25
                        transition
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <FaCertificate
                          size={18}
                          className="text-[#EEF4ED]"
                        />

                        <h4
                          className="
                            font-semibold
                            text-[#EEF4ED]
                          "
                        >
                          Artificial Intelligence
                        </h4>
                      </div>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[#A9B5C2]
                        "
                      >
                        College Add-on Program
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                3. INTERNSHIP
            ================================================= */}

            <div className="glass rounded-3xl p-7 md:p-10">

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-6
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-[#134074]
                    text-[#EEF4ED]
                  "
                >
                  <FaBriefcase size={24} />
                </div>

                {/* Content */}

                <div className="flex-1">

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#A9B5C2]
                    "
                  >
                    April 2026 – May 2026
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-[#EEF4ED]
                    "
                  >
                    Python Programming Intern
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[#EEF4ED]
                      font-semibold
                    "
                  >
                    Oasis Infobyte
                  </p>

                  <p
                    className="
                      mt-5
                      leading-8
                      text-[#A9B5C2]
                    "
                  >
                    Completed a Python programming internship
                    focused on practical programming tasks,
                    problem solving and software development.
                    Worked with Python programming concepts,
                    debugging and scripting while strengthening
                    practical development skills.
                  </p>

                  {/* Internship Skills */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-6
                    "
                  >
                    {[
                      "Python",
                      "Programming",
                      "Problem Solving",
                      "Scripting",
                      "Development",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          bg-[#134074]/35
                          border
                          border-[#EEF4ED]/10
                          text-sm
                          text-[#EEF4ED]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="CONTACT"
            title="Let&apos;s build something."
            description="Have a project, opportunity or idea? I&apos;d love to hear from you."
          />

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              mt-14
            "
          >

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <div className="glass rounded-3xl p-8 md:p-10">

              <h3 className="text-2xl font-bold">
                Get in touch
              </h3>

              <p
                className="
                  mt-4
                  leading-7
                  text-[#A9B5C2]
                "
              >
                I&apos;m open to discussing full-stack
                development opportunities, projects,
                collaborations and internships.
              </p>

              {/* Email */}

              <a
                href="mailto:albinbiju0330@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  mt-8
                  p-4
                  rounded-2xl
                  bg-[#134074]/30
                  border
                  border-[#EEF4ED]/10
                  hover:border-[#EEF4ED]/25
                  transition-all
                "
              >
              
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    bg-[#0B2545]
                    text-[#EEF4ED]
                  "
                >
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-[#A9B5C2]">
                    Email
                  </p>

                  <span
                    className="
                      text-[#EEF4ED]
                      font-semibold
                    "
                  >
                    albinbiju0330@gmail.com
                  </span>
                </div>
              
              <div>
                  <p className="text-xs text-[#A9B5C2]">
                    Phone No
                  </p>

                  <span
                    className="
                      text-[#EEF4ED]
                      font-semibold
                    "
                  >
                   +91 6383764278
                  </span>
                </div>

              </a>

              {/* Social */}

              <div
                className="
                  flex
                  gap-3
                  mt-5
                "
              >
                <a
                  href="https://github.com/albinbiju03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-button"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/albinbiju03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-button"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="glass rounded-3xl p-8 md:p-10">

              <form
                action="mailto:albinbiju0330@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      mb-2
                      text-sm
                      font-semibold
                      text-[#EEF4ED]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      block
                      mb-2
                      text-sm
                      font-semibold
                      text-[#EEF4ED]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="exampl@email.com"
                    required
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      block
                      mb-2
                      text-sm
                      font-semibold
                      text-[#EEF4ED]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    btn-primary
                    w-full
                  "
                >
                  Send Message
                  <FaArrowRight />
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="stat-card text-center">

      <div
        className="
          flex
          justify-center
          text-[#EEF4ED]
          mb-2
        "
      >
        {icon}
      </div>

      <div
        className="
          text-2xl
          md:text-3xl
          font-black
          text-[#EEF4ED]
        "
      >
        {number}
      </div>

      <p className="text-xs mt-1">
        {label}
      </p>

    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">

      <span
        className="
          text-sm
          font-bold
          tracking-[0.25em]
          text-[#EEF4ED]
        "
      >
        {eyebrow}
      </span>

      <h2
        className="
          mt-4
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-5
          text-lg
          leading-8
          text-[#A9B5C2]
        "
      >
        {description}
      </p>

    </div>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  value,
  text,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="card p-6">

      <div
        className="
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          bg-[#134074]/40
          text-[#EEF4ED]
          mb-5
        "
      >
        {icon}
      </div>

      <p className="text-sm text-[#A9B5C2]">
        {title}
      </p>

      <h3
        className="
          mt-1
          text-xl
          font-bold
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-1
          text-sm
          text-[#A9B5C2]
        "
      >
        {text}
      </p>

    </div>
  );
}