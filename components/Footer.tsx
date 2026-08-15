"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10">
      <div
        className="
          container
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        <div>
          <Link
            href="#home"
            className="
              text-2xl
              font-black
              text-[#EEF4ED]
            "
          >
            Albin<span className="text-[#134074]">.</span>
          </Link>

          <p className="mt-2 text-sm">
            Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:albinbiju@gmail.com"
            className="social-button"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <Link
            href="#home"
            className="
              social-button
              bg-[#EEF4ED]
              text-[#0B2545]
              hover:bg-white
            "
            aria-label="Back to top"
          >
            <FaArrowUp />
          </Link>
        </div>

        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Albin Biju.
          <br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}