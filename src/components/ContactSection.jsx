"use client"

import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { useState } from "react"

export default function ContactSection() {

  const branches = [
    {
      name: "Chennai Office",
      phone: "+91 9840059829",
      email: "ram@samayam.org.in",
      address:
        "Old No:269/2, New No:126, 2nd Floor, Thambu Chetty Street, Mannady, Parry’s, Chennai – 600001.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1043446425115!2d80.28894811373422!3d13.09257304105298!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f4fc14edd65%3A0xb149ad61b4ca19a7!2s126%2C%20Thambu%20Chetty%20St%2C%20Mannadi%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001!5e0!3m2!1sen!2sin!4v1779690835033!5m2!1sen!2sin",
    },
    {
      name: "Malaysia Office",
      phone: "+60 123782079",
      email: "ram@samayam.org.in",
      address:
        "SAMAYAM CONTAINER LINES SDN BHD NO:20, LORONG JALAN ISTANA, KAWASAN 1, BANDAR KLANG, 41000 KLANG, SELANGOR DARUL EHSAN, MALAYSIA",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.2946121278944!2d101.44767384348705!3d3.0404456034446348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc534db55a0f69%3A0xe4c8d15732f8185b!2s20%2C%20Jalan%20Istana%2C%20Kawasan%201%2C%2041000%20Klang%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1781088688193!5m2!1sen!2sin",
    },
  ];

  const [activeBranch, setActiveBranch] = useState(0);

  const branch = branches[activeBranch];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setSuccess(false)

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {

        setSuccess(true)

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      }

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact Samayam Container Lines"
      className="overflow-hidden bg-[#f5f5f3] pt-12 lg:pt-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[60px] md:text-[80px] xl:text-[124px] pointer-events-none font-light uppercase leading-[0.9] tracking-[-0.04em] text-[#c9d3d5]">
            GET IN TOUCH
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[var(--primary)]/10 p-6"
          >
            {/* Branch Switcher */}
            <div className="relative flex w-fit bg-white border border-black/10 p-1 mb-12">
              {branches.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveBranch(index)}
                  className="relative px-6 py-3 text-sm font-medium z-10"
                >
                  {activeBranch === index && (
                    <motion.div
                      layoutId="contactActiveBranch"
                      className="absolute inset-0 bg-[var(--primary)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative text-[16px] ${
                      activeBranch === index
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeBranch}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-12">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-7"
                >
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 md:w-16 md:h-16 bg-[var(--secondary)]/20 flex items-center justify-center shrink-0"
                  >
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>

                  <div>
                    <h3 className="text-[16px] uppercase tracking-[0.18em] text-[#7b8487]">
                      Phone
                    </h3>

                    <div className="text-[16px] md:text-[18px] font-medium text-[#111827]">
                      <a
                        href={`tel:${branch.phone}`}
                        aria-label={`Call ${branch.phone}`}
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-7"
                >
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 md:w-16 md:h-16 bg-[var(--secondary)]/20 flex items-center justify-center shrink-0"
                  >
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>

                  <div>
                    <h3 className="text-[16px] uppercase tracking-[0.18em] text-[#7b8487]">
                      Contact Email
                    </h3>

                    <p className="text-[16px] md:text-[18px] font-medium text-[#111827]">
                      <a
                        href={`mailto:${branch.email}`}
                        aria-label={`Send email to ${branch.email}`}
                      >
                        {branch.email}
                      </a>
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-7"
                >
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 md:w-16 md:h-16 bg-[var(--secondary)]/20 flex items-center justify-center shrink-0"
                  >
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>

                  <div>
                    <h3 className="text-[16px] uppercase tracking-[0.18em] text-[#7b8487]">
                      Address
                    </h3>

                    <address className="not-italic text-[16px] md:text-[18px] leading-[1.35] font-medium text-[#111827] max-w-[580px]">
                      {branch.address}
                    </address>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-12 overflow-hidden"
              >
                <iframe
                  title={`${branch.name} Location`}
                  className="w-full h-[320px] object-cover transition duration-700"
                  src={branch.mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:pl-4"
          >

            <div className="sticky top-10">

              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#7b8487]">
                Send Message
              </p>

              <h3 className="text-[46px] md:text-[56px] leading-[0.95] tracking-[-0.04em] font-medium text-[#111827] max-w-[620px]">
                Have questions?
              </h3>

              <p className="mt-6 text-[18px] md:text-[20px] leading-8 text-[#6b7280] max-w-[600px]">
                Connect with our logistics experts for freight solutions,
                shipment support, and global cargo assistance tailored
                to your business requirements.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >

                <motion.input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                  viewport={{ once: true }}
                  className="w-full h-14 md:h-16 border border-[#cfd7d8] bg-transparent px-6 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none transition-all duration-300 focus:border-black focus:bg-white"
                />

                <motion.input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  aria-label="Email Address"
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  className="w-full h-14 md:h-16 border border-[#cfd7d8] bg-transparent px-6 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none transition-all duration-300 focus:border-black focus:bg-white"
                />

                <motion.input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  aria-label="Phone Number"
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="w-full h-14 md:h-16 border border-[#cfd7d8] bg-transparent px-6 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none transition-all duration-300 focus:border-black focus:bg-white"
                />

                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  aria-label="Message"
                  rows={5}
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="w-full border border-[#cfd7d8] bg-transparent px-6 py-6 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none resize-none transition-all duration-300 focus:border-black focus:bg-white"
                />

                {/* Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Submit Contact Form"
                  className="group inline-flex overflow-hidden relative items-center justify-center w-full h-14 md:h-16 bg-[var(--primary)] text-white text-[18px] font-medium transition-all duration-500 disabled:opacity-70"
                >
                  <span className="z-10">
                    {loading ? "Sending..." : "Get Freight Support"}
                  </span>

                  {/* Hover Background */}
                  <span className="absolute z-0 inset-0 translate-y-full bg-[var(--secondary)] transition-transform duration-500 group-hover:translate-y-0" />
                </motion.button>

                {success && (
                  <p
                    role="status"
                    className="text-green-600 text-[16px] font-medium"
                  >
                    Message sent successfully.
                  </p>
                )}

              </form>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}