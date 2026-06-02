"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WhyChooseUs() {
  const slides = [
    {
      title: "Industry Experience",
      description:
        "Over two decades of expertise in global freight forwarding and logistics operations.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Global Network",
      description:
        "Strong partnerships and agent support across major international ports and trade routes.",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "End-to-End Logistics",
      description:
        "Complete cargo handling solutions from pickup to final delivery.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Customer-Centric Service",
      description:
        "Tailored logistics strategies designed according to customer requirements.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Reliable Operations",
      description:
        "Professional handling, transparent communication, and timely shipment execution.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Competitive Freight Solutions",
      description:
        "Strong carrier relationships offering reliable and cost-effective freight rates.",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section
      id="whychooseus"
      aria-label="Why Choose Samayam Container Lines"
      className="relative bg-[#f5f5f3] pt-12 lg:pt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[60px] md:text-[80px] xl:text-[124px] pointer-events-none font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
            WHY CHOOSE US
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[0.9fr_1.7fr] gap-10 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-[#cfd7d8]">

              {slides.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${item.title}`}
                  aria-pressed={activeIndex === index}
                  className={`w-full text-left py-4 transition-all duration-300 ${
                    activeIndex === index
                      ? "text-[#1b1f21] border-b border-[#1b1f21]"
                      : "text-[#8b8f92] border-b border-[#cfd7d8]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[20px] font-medium">
                      {item.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className={`text-[26px] transition-all duration-300 ${
                        activeIndex === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              ))}

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative overflow-hidden">

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[activeIndex].image}
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].title}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.7 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[600px] pointer-events-none object-cover"
                />
              </AnimatePresence>

              {/* Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"
              />

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[activeIndex].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 w-full p-8 md:p-10"
                >
                  <p className="text-[18px] uppercase tracking-[0.25em] text-white/70 mb-3">
                    {slides[activeIndex].title}
                  </p>

                  <p className="text-white text-[16px] md:text-[18px] leading-8 max-w-[500px]">
                    {slides[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bars */}
              <div className="absolute bottom-0 left-0 w-full flex">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className="h-[3px] flex-1 bg-white/20 overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: activeIndex === index ? "100%" : "0%",
                      }}
                      transition={{
                        duration:
                          activeIndex === index ? 4 : 0.3,
                        ease: "linear",
                      }}
                      className="h-full bg-white"
                    />
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}