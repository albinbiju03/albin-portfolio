"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((item) => document.getElementById(item.href.substring(1)))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top <= 140) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActive(id);

    setMobileOpen(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        navbar-glass
      "
    >
      <div
        className="
          container
          h-[82px]
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link
          href="#home"
          onClick={() => handleClick("home")}
          className="
            text-2xl
            md:text-3xl
            font-black
            tracking-tight
            text-[#EEF4ED]
          "
        >
          Albin<span className="text-[#134074]">.</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => {
            const id = item.href.substring(1);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleClick(id)}
                className={`nav-link ${
                  active === id ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="#contact"
            className="
              ml-2
              px-6
              py-3
              rounded-2xl
              bg-[#EEF4ED]
              text-[#0B2545]
              font-bold
              hover:bg-white
              hover:-translate-y-1
              transition-all
              shadow-lg
              shadow-[#134074]/20
            "
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Button */}

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            md:hidden
            w-11
            h-11
            rounded-xl
            flex
            items-center
            justify-center
            bg-[#0B2545]/70
            border
            border-[#EEF4ED]/10
            text-[#EEF4ED]
          "
        >
          {mobileOpen ? (
            <FaXmark size={20} />
          ) : (
            <FaBars size={20} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div
          className="
            md:hidden
            border-t
            border-[#EEF4ED]/10
            bg-[#050B12]/95
            backdrop-blur-2xl
          "
        >
          <nav
            className="
              container
              py-5
              flex
              flex-col
              gap-2
            "
          >
            {navLinks.map((item) => {
              const id = item.href.substring(1);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleClick(id)}
                  className={`
                    px-4
                    py-3
                    rounded-xl
                    ${
                      active === id
                        ? "bg-[#134074]/40 text-[#EEF4ED]"
                        : "text-gray-400"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="#contact"
              onClick={() => handleClick("contact")}
              className="
                mt-2
                text-center
                px-5
                py-3
                rounded-xl
                bg-[#EEF4ED]
                text-[#0B2545]
                font-bold
              "
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}