"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Ocean Freight Operations",
      category: "Global Shipping",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
      height: "h-[320px]",
    },
    {
      title: "Container Logistics",
      category: "Cargo Handling",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
      height: "h-[500px]",
    },
    {
      title: "Warehouse Management",
      category: "Storage Solutions",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
      height: "h-[420px]",
    },
    {
      title: "Road Transportation",
      category: "Inland Freight",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
      height: "h-[400px]",
    },
    {
      title: "Port Cargo Services",
      category: "Freight Network",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
      height: "h-[520px]",
    },
    {
      title: "International Delivery",
      category: "Supply Chain",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop",
      height: "h-[300px]",
    },
  ]

  return (
    <section
      id="gallery"
      aria-label="Logistics Gallery"
      className="relative overflow-hidden bg-[#f5f5f3] pt-12 lg:pt-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-[-200px] h-[500px] w-[500px] rounded-full bg-[#1F5E2C]/5 blur-[140px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-10">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[60px] md:text-[80px] xl:text-[124px] pointer-events-none font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
              GALLERY
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="max-w-[520px]"
          >
            <p className="text-[18px] md:text-[20px] leading-9 text-[#6b7280]">
              Explore our logistics operations, freight handling,
              warehousing, and transportation services through
              real-world cargo movement and shipping solutions.
            </p>
          </motion.div>

        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-7 space-y-7">

          {galleryItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer"
            >

              {/* Image */}
              <div className={`overflow-hidden ${item.height}`}>
                <motion.img
                  src={item.image}
                  alt={`${item.title} - ${item.category}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full pointer-events-none object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 1 }}
                />
              </div>

              {/* Gradient Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:opacity-0 group-hover:opacity-100 transition duration-500"
              />

              {/* Shine Effect */}
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden pointer-events-none"
              >
                <div className="absolute top-0 -left-[120%] h-full w-[70%] rotate-12 bg-white/10 blur-3xl transition-all duration-1000 group-hover:left-[140%]" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 lg:translate-y-8 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-sm uppercase tracking-[0.25em] text-white/70 mb-3"
                >
                  {item.category}
                </motion.p>

                <div className="flex items-end justify-between gap-5">

                  <h3 className="text-white text-[28px] leading-tight font-medium max-w-[260px]">
                    {item.title}
                  </h3>

                  {/* WhatsApp Button */}
                  <motion.a
                    whileHover={{
                      rotate: -10,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.3 }}
                    href={`https://wa.me/919840059829?text=${encodeURIComponent(
                      `Hello, I am interested in your ${item.title} services. Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via WhatsApp about ${item.title}`}
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0"
                  >
                    <FaWhatsapp
                      aria-hidden="true"
                      className="w-7 h-7 text-[var(--primary)]"
                    />
                  </motion.a>

                </div>
              </div>

              {/* Floating Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
              >
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}