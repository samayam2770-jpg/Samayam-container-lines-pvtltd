"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  Phone
} from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);


  return (
    <>
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[998] bg-black/60 transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <header
        role="banner"
        className={`fixed z-1000 top-0 left-0 z-50 w-full transition-all duration-300
        ${
          scrolled || menuOpen
            ? "backdrop-blur-lg bg-[white]/80 text-black shadow-[0_4px_32px_rgba(0,0,0,0.2)] after:content-[''] after:block after:w-[100%] after:border-b after:border-black/[0.4] after:mx-auto"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] h-[10vh] items-center justify-between px-5 xl:px-2">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Samayam Container Lines Pvt Ltd Home"
            className="flex w-[70%] lg:w-[33%] items-center justify-start gap-1"
          >
            <Image
              src={"/logo-final-01.png"}
              alt="Samayam Container Lines Pvt Ltd Logo"
              height={1000}
              width={1000}
              priority
              className="h-[60px] w-auto pointer-events-none object-fill"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[18px] font-bold leading-none text-[var(--secondary)] sm:text-[20px]">
                SAMAYAM
              </span>

              <span className="text-[10px] font-medium sm:text-[13px]">
                CONTAINER LINES PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:w-[33%] items-center justify-center gap-8 xl:flex"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.08,
                  duration: 0.4,
                }}
              >
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={`group relative flex items-center text-[15px] font-500 tracking-[1px] transition ${
                    scrolled || menuOpen
                      ? "hover:text-black/65"
                      : "hover:text-white/65"
                  }`}
                >
                  {item.label}

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden w-[10%] lg:w-[33%] items-center justify-end xl:flex">
            <motion.a
              href="tel:+919840059829"
              aria-label="Call Samayam Container Lines Pvt Ltd"
              whileTap={{ scale: 0.96 }}
              className={`inline-flex overflow-hidden transition-all duration-500 relative items-center px-5 py-2 gap-4 text-[15px] font-medium group
                ${
                  scrolled || menuOpen
                    ? "bg-[var(--secondary)] text-[white] hover:text-[var(--secondary)]"
                    : "text-[var(--secondary)] hover:text-[white] bg-[white]"
                }`}
            >
              <span className="z-10">Talk to Experts</span>

              <span
                className={`w-8 h-8 z-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-360
                ${
                  scrolled || menuOpen
                    ? "text-[var(--secondary)] group-hover:text-[white] bg-[white] group-hover:bg-[var(--secondary)]"
                    : "bg-[var(--secondary)] group-hover:bg-[white] text-white group-hover:text-[var(--secondary)]"
                }`}
              >
                <Phone className="w-4 md:w-4 h-4 md:h-4 group-hover:rotate-360" />
              </span>

              {/* Hover Background */}
              <span
                className={`absolute z-0 inset-0 translate-y-full border-1 transition-all duration-500 group-hover:translate-y-0
                ${
                  scrolled || menuOpen
                    ? "bg-[white]"
                    : "bg-[var(--secondary)]"
                }`}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex rounded-sm h-11 w-11 items-center justify-center border border-black/20 bg-black/10 backdrop-blur-lg transition-all duration-800 hover:bg-black/20 xl:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-500 xl:hidden ${
            menuOpen ? "max-h-screen pb-5" : "max-h-0"
          }`}
        >
          <div className="mx-4 mt-1 rounded-[28px] border border-black/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:mx-6">

            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col"
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-4 text-[15px] font-medium text-black transition hover:text-black/65 ${
                    index !== navItems.length - 1
                      ? "border-b border-black/8"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <motion.a
              href="tel:+919840059829"
              aria-label="Call Samayam Container Lines Pvt Ltd"
              className="inline-flex relative overflow-hidden items-center justify-center rounded-2xl mt-4 gap-4 w-full py-2 text-[15px] font-medium text-white/85 hover:text-[var(--secondary)] bg-[var(--secondary)] group"
            >
              <span className="z-10">Talk to Experts</span>

              <span className="w-8 h-8 z-10 rounded-full bg-[white] group-hover:bg-[var(--secondary)] group-hover:text-[white] text-[var(--secondary)] flex items-center justify-center transition-all duration-500 group-hover:rotate-360">
                <Phone className="w-4 md:w-4 h-4 md:h-4 group-hover:rotate-360" />
              </span>

              {/* Hover Background */}
              <span className="absolute z-0 inset-0 translate-y-full bg-[white] transition-transform duration-500 group-hover:translate-y-0" />
            </motion.a>
          </div>
        </div>
      </header>
    </>
  )
}