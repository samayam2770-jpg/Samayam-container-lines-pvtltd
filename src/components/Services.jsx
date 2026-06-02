"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Services() {
  const [showAll, setShowAll] = useState(false)

  const services = [
    {
      title: "Ocean Freight",
      description:
      "Efficient ocean freight solutions for reliable import and export cargo transportation across international shipping routes.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Customs Clearance",
      description:
      "Smooth customs documentation and clearance solutions for efficient international import and export cargo processing services.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Road Transportation",
      description:
        "Secure inland transportation services ensuring safe and reliable cargo movement across multiple domestic locations.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Warehousing",
      description:
        "Professional warehousing and inventory management solutions for secure cargo storage and efficient distribution operations.",
      type: "text",
    },
    {
      title: "Marine Insurance",
      description:
        "Comprehensive cargo insurance solutions to protect valuable shipments against unexpected transit risks and damages.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Container Trading",
      description:
      "Reliable container leasing and trading solutions for diverse international shipping and logistics operational requirements.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Commodities Trading",
      description:
        "Efficient sourcing and trading support solutions for multiple international commodity and industrial sectors.",
      type: "text",
    },
  ]

  const initialCount = 8

  const visibleServices = showAll
    ? services
    : services.slice(0, initialCount)

  const totalServiceCards = services.filter(
    (item) => item.type === "text"
  ).length

  const visibleServiceCards = visibleServices.filter(
    (item) => item.type === "text"
  ).length

  const remainingCount = totalServiceCards - visibleServiceCards

  return (
    <section
      id="services"
      aria-label="Logistics Services"
      className="relative overflow-hidden bg-[#f5f5f3] pt-12 lg:pt-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[60px] md:text-[80px] xl:text-[124px] pointer-events-none font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
            Our Services
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          <AnimatePresence>
            {visibleServices.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                  transition: { duration: 0.35 },
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.25, 1, 0.5, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden h-[330px] ${
                  item.type === "text"
                    ? "bg-[#dfe7e8] p-9 flex flex-col justify-between"
                    : ""
                }`}
              >
                {item.type === "image" ? (
                  <>
                    {/* Image */}
                    <motion.img
                      src={item.image}
                      alt="Logistics and freight forwarding services"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full pointer-events-none object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Dark Overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
                    />

                    {/* Animated Shine */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 overflow-hidden"
                    >
                      <div className="absolute top-0 -left-[120%] h-full w-[80%] rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-[24px] leading-tight font-medium text-[#111] max-w-[220px]">
                        {item.title}
                      </h3>

                      <p className="mt-8 text-[15px] leading-8 text-[#5f676b]">
                        {item.description}
                      </p>
                    </motion.div>

                    {/* Learn More */}
                    <motion.a
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                      href={`https://wa.me/919840059829?text=${encodeURIComponent(
                        `Hello, I want to know more about ${item.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Learn more about ${item.title}`}
                      className="w-fit text-[15px] font-medium text-black relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-black"
                    >
                      Learn More
                    </motion.a>

                    {/* Background Hover Glow */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                    >
                      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          {!showAll ? (
            <motion.button
              type="button"
              aria-label="View More Services"
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll(true)}
              className="group relative overflow-hidden h-16 px-10 bg-[var(--primary)] text-white text-[17px] font-medium transition-all duration-500"
            >
              {/* Sliding Background */}
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-y-full bg-[var(--secondary)] transition-transform duration-500 group-hover:translate-y-0"
              />

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                View {remainingCount} More Services

                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  aria-hidden="true"
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </span>
            </motion.button>
          ) : (
            <motion.button
              type="button"
              aria-label="Hide Services"
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll(false)}
              className="group relative overflow-hidden h-16 px-10 bg-[var(--secondary)] text-[white] text-[17px] font-medium transition-all duration-500"
            >
              {/* Hover Fill */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-y-full bg-[var(--primary)] transition-transform duration-500 group-hover:translate-y-0"
              />

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-500">
                Hide Services

                <motion.span
                  animate={{ y: [0, 2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  aria-hidden="true"
                  className="text-xl"
                >
                  ↑
                </motion.span>
              </span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}