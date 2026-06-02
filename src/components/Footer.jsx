"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#f5f5f3] pt-6 lg:pt-10 border-t border-[#d8dfe0]"
      aria-label="Website Footer"
    >

      {/* Main Footer */}
      <div className="relative max-w-[1400px] mx-auto px-6">

        <div className="grid gap-6 md:gap-14 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Link
              href="/"
              aria-label="SAMAYAM Container Lines Pvt Ltd Home"
              className="group flex items-center gap-3"
            >
              <Image
                src="/logo-final-01.png"
                alt="SAMAYAM Container Lines Pvt Ltd Logistics Company Logo"
                width={1000}
                height={1000}
                priority={false}
                className="h-16 w-auto pointer-events-none object-contain"
              />

              <div>
                <h2 className="text-[24px] font-bold text-[var(--secondary)] leading-none">
                  SAMAYAM
                </h2>

                <p className="text-[12px] tracking-wide text-[var(--primary)]">
                  CONTAINER LINES PVT. LTD.
                </p>
              </div>
            </Link>

            <p className="mt-4 md:mt-8 max-w-[420px] text-[16px] leading-8 text-[#6b7280]">
              Reliable international freight forwarding and logistics
              solutions delivering cargo safely across global trade
              routes with professionalism and trust.
            </p>

            <motion.a
              href="#contact"
              aria-label="Contact SAMAYAM Container Lines Pvt Ltd"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-4 md:mt-8 inline-flex items-center gap-3 transition-all duration-500 text-[16px] font-medium text-[var(--primary)] hover:text-[var(--secondary)]"
            >
              Get In Touch

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] group-hover:bg-[var(--secondary)] text-white transition-all duration-500 group-hover:-rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </motion.a>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            aria-label="Footer Navigation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-[14px] uppercase tracking-[0.25em] text-[#7b8487]">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {[
                "Home",
                "About",
                "Services",
                "Gallery",
                "Contact",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.3,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    aria-label={`Navigate to ${item}`}
                    className="group inline-flex text-[17px] text-[#111827] transition hover:text-[#1F5E2C]"
                  >
                    <span className="relative">
                      {item}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1F5E2C] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>

          {/* Services */}
          <motion.nav
            aria-label="Logistics Services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-[14px] uppercase tracking-[0.25em] text-[#7b8487]">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {[
                "Ocean Freight",
                "Warehousing",
                "Marine Insurance",
                "Customs Clearance",
                "Road Transportation",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.3,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="#services"
                    aria-label={`${item} Services`}
                    className="group inline-flex text-[17px] text-[#111827]"
                  >
                    <span className="relative">
                      {item}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1F5E2C] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>

          {/* Contact */}
          <motion.address
            aria-label="Company Contact Information"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="not-italic"
          >
            <h3 className="text-[14px] uppercase tracking-[0.25em] text-[#7b8487]">
              Contact
            </h3>

            <div className="mt-6 space-y-6">

              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <Phone
                  className="mt-1 h-5 w-5 text-[#1F5E2C]"
                  aria-hidden="true"
                />

                <div className="text-[16px] text-[#111827]">
                  <a
                    href="tel:+919840059829"
                    aria-label="Call +91 98400 59829"
                  >
                    +91 98400 59829
                  </a>

                  <br />

                  <a
                    href="tel:+914448659829"
                    aria-label="Call +91 44486 59829"
                  >
                    +91 44486 59829
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <Mail
                  className="mt-1 h-5 w-5 text-[#1F5E2C]"
                  aria-hidden="true"
                />

                <a
                  href="mailto:ram@samayam.org.in"
                  aria-label="Email SAMAYAM Container Lines"
                  className="text-[16px] text-[#111827]"
                >
                  ram@samayam.org.in
                </a>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <MapPin
                  className="mt-1 h-5 w-5 text-[#1F5E2C]"
                  aria-hidden="true"
                />

                <p className="text-[16px] leading-7 text-[#111827]">
                  Old No:269/2, New No:126,
                  <br />
                  2nd Floor, Thambu Chetty Street,
                  <br />
                  Mannady, Chennai – 600001.
                </p>
              </motion.div>

            </div>
          </motion.address>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="mt-6 flex border-t border-[#d8dfe0] py-5 text-center items-center justify-center"
        >

          <p className="text-[14px] text-[#6b7280]">
            © 2026 SAMAYAM Container Lines Pvt. Ltd.
            All rights reserved.
          </p>

        </motion.div>

      </div>
    </footer>
  )
}