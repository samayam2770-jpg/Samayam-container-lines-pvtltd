"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Do you handle both imports and exports?",
    answer:
      "Yes, we provide complete import and export freight forwarding services with global logistics coordination and shipment management.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We work across industries including IT related products, automobile, clothing & related accessories, agro products, construction & related equipments, glass products, solar equipment, seafood exports, pharmaceuticals, chemicals, and industrial cargo.",
  },
  {
    question: "Do you provide customs clearance services?",
    answer:
      "Absolutely. Our team manages customs documentation, compliance procedures, and clearance support for smooth international shipping.",
  },
  {
    question: "Can you arrange inland transportation?",
    answer:
      "Yes, we provide inland transportation, container movement, warehousing coordination, and cargo delivery solutions.",
  },
  {
    question: "Do you offer cargo insurance?",
    answer:
      "Yes, marine cargo insurance services are available to protect shipments during domestic and international transit.",
  },
]

export default function Faqs() {
  const [active, setActive] = useState(0)

  const toggleFaq = (index) => {
    setActive(active === index ? null : index)
  }

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className="relative bg-[#f5f5f3] pb-0 lg:pb-12 pt-12 lg:pt-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading */}
        <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[60px] md:text-[80px] xl:text-[124px] pointer-events-none font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
              FAQS
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="max-w-[520px]"
          >
            <p className="text-[18px] md:text-[20px] leading-7 text-[#6b7280]">
              Quick answers to common questions about freight
              forwarding, customs clearance, transportation,
              and shipment handling.
            </p>
          </motion.div>

        </div>

        {/* FAQ Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-sm border-3 border-black/5 bg-white/70 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:p-4"
        >

          {faqs.map((faq, index) => {
            const isOpen = active === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`group rounded-sm transition-all duration-500 ${
                  isOpen
                    ? "bg-[#f8f6f2]"
                    : "hover:bg-[#faf9f7]"
                }`}
              >
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="flex w-full items-start justify-between gap-6 px-5 py-6 text-left lg:px-7"
                  >

                    <div className="flex items-start gap-5">

                      <span
                        className={`mt-1 text-xs font-semibold transition-all duration-300 ${
                          isOpen
                            ? "text-[var(--secondary)]"
                            : "text-[#9ca3af]"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <div>
                        <h3
                          itemProp="name"
                          className={`text-[16px] font-medium leading-[1.3] lg:text-[20px] transition-colors duration-300 ${
                            isOpen
                              ? "text-[#111827]"
                              : "text-[#374151]"
                          }`}
                        >
                          {faq.question}
                        </h3>

                        {/* Animated Answer */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-answer-${index}`}
                              role="region"
                              aria-labelledby={`faq-question-${index}`}
                              itemScope
                              itemProp="acceptedAnswer"
                              itemType="https://schema.org/Answer"
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="overflow-hidden"
                            >
                              <p
                                itemProp="text"
                                className="mt-4 max-w-3xl text-[12px] leading-relaxed text-[#66707a] lg:text-[16px]"
                              >
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    </div>

                    {/* Plus Button */}
                    <motion.div
                      aria-hidden="true"
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                        isOpen
                          ? "bg-[#111827] text-white"
                          : "bg-[#f1efeb] text-[#111827]"
                      }`}
                    >
                      <Plus size={20} />
                    </motion.div>

                  </button>
                </div>

                {index !== faqs.length - 1 && (
                  <div className="mx-5 h-px bg-black/[0.06] lg:mx-7" />
                )}
              </motion.div>
            )
          })}

        </motion.div>
      </div>
    </section>
  )
}