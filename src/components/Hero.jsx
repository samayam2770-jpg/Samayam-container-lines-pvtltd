"use client"

import { motion,animate } from "framer-motion"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  
  const [recognition, setRecognition] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = animate(69, 95, {
      duration: 2,
      delay: 1,
      ease: "easeOut",
      onUpdate(value) {
        setRecognition(Math.floor(value))
      },
    })

    return () => controls.stop()
  }, [])

  useEffect(() => {
    const controls = animate(12, 27, {
      duration: 2,
      delay: 1.2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value))
      },
    })

    return () => controls.stop()
  }, [])

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative h-[100vh] overflow-hidden bg-black"
    >
      {/* Background Image Desktop */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        aria-hidden="true"
        className="hidden lg:flex pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-wide-bg-01.png')",
        }}
      />

      {/* Background Image Mobile */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        aria-hidden="true"
        className="flex lg:hidden pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-mobile-bg-01.png')",
        }}
      />

      {/* Animated Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#02172f]/50 via-[#03244b]/20 to-[#02172f]/2"
      />

      {/* Floating Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#1F5E2C]/20 blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[100vh]  max-w-[1400px] flex-col justify-between px-5 pb-32 md:pb-18 pt-30 md:pt-36 xl:px-2">

        {/* Main Content */}
        <div className="max-w-5xl">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="max-w-5xl text-[35px] pointer-events-none font-medium leading-[1] tracking-[0px] text-white md:text-[45px] lg:text-[80px]"
          >
            Efficient

            {/* Animated Star */}
            <motion.span
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-hidden="true"
              className="mx-3 xl:mx-5 inline-flex text-[24px] lg:text-[34px] xl:text-[40px] px-2 py-1 xl:px-4 xl:py-3 align-middle w-8 h-8 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-white text-black items-center justify-center"
            >
              ✦
            </motion.span>

            <br />

            transportation built
            <br />
            for global delivery
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="mt-6 md:mt-8 max-w-2xl text-[14px] tracking-[2px] text-white/85"
          >
            Reliable logistics and cargo solutions that move your
            business forward — fast, secure, and on time, across
            cities, borders, and supply chains.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="mt-10"
          >
            <motion.a
              href="#contact"
              aria-label="Start Shipping"
              whileHover={{
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center overflow-hidden px-3 md:px-5 py-2 gap-3 md:gap-4 text-[14px] md:text-[18px] font-medium text-[var(--secondary)] hover:text-white/85 transition-all duration-500 bg-[white]"
            >
              {/* Hover Background */}
              <span className="absolute inset-0 translate-y-full bg-[var(--secondary)] transition-transform duration-500 group-hover:translate-y-0" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 md:gap-4">
                Start Shipping

                <span className="w-7 md:w-9 h-7 md:h-9 rounded-full bg-[var(--secondary)] group-hover:bg-[white] text-white group-hover:text-[var(--secondary)] flex items-center justify-center transition-all duration-500 group-hover:rotate-135">
                  <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5" />
                </span>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          className="mt-4 sm:mt-2 md:mt-4  flex flex-col-reverse items-start justify-between gap-10 lg:flex-row lg:items-end"
        >

          {/* Scroll Indicator */}
          <div
            aria-hidden="true"
            className="flex flex-col items-center gap-1"
          >
            <div className="h-8 md:h-10 w-[2px] bg-white/40" />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ArrowDown
                size={30}
                className="text-white/40"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 sm:gap-10 lg:gap-20">

            {/* Stat 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
                className="text-4xl sm:text-[42px] xl:text-[56px] pointer-events-none font-medium text-white"
              >
                {recognition}%
              </motion.h2>

              <p className="mt-3 md:mt-4 max-w-[220px] text-[14px] sm:text-[16px] lg:text-[16px] font-medium leading-snug text-white">
                Recognition Gained
                <br />
                Through Branding
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                }}
                className="text-4xl sm:text-[42px] xl:text-[56px] pointer-events-none font-medium text-white"
              >
                {count}+
              </motion.h2>

              <p className="mt-3 md:mt-4 max-w-[220px] text-[14px] sm:text-[16px] lg:text-[16px] font-medium leading-snug text-white">
                Years of Bold Ideas
                <br />
                and Trusted Results
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}







// "use client"

// import { motion,animate } from "framer-motion"
// import { ArrowUpRight, ArrowDown } from "lucide-react"
// import { useEffect, useState } from "react"

// export default function Hero() {
  
//   const [recognition, setRecognition] = useState(0)
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const controls = animate(69, 95, {
//       duration: 2,
//       delay: 1,
//       ease: "easeOut",
//       onUpdate(value) {
//         setRecognition(Math.floor(value))
//       },
//     })

//     return () => controls.stop()
//   }, [])

//   useEffect(() => {
//     const controls = animate(12, 27, {
//       duration: 2,
//       delay: 1.2,
//       ease: "easeOut",
//       onUpdate(value) {
//         setCount(Math.floor(value))
//       },
//     })

//     return () => controls.stop()
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-black"
//     >
//       {/* Background Image Desktop */}
//       <motion.div
//         initial={{ scale: 1.12 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2 }}
//         className="hidden lg:flex absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/hero-wide-bg.png')",
//         }}
//       />

//       {/* Background Image Mobile */}
//       <motion.div
//         initial={{ scale: 1.12 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2 }}
//         className="flex lg:hidden absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/hero-mobile-bg.png')",
//         }}
//       />

//       {/* Animated Overlay */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 bg-gradient-to-r from-[#02172f]/50 via-[#03244b]/20 to-[#02172f]/2"
//       />

//       {/* Floating Glow */}
//       <div className="absolute top-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#1F5E2C]/20 blur-[120px]" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-5 pb-32 md:pb-18 pt-30 md:pt-50 xl:px-2">

//         {/* Main Content */}
//         <div className="max-w-5xl">

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 120 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 1,
//               ease: [0.25, 1, 0.5, 1],
//             }}
//             className="max-w-5xl text-[35px] font-medium leading-[1] tracking-[0px] text-white md:text-[45px] lg:text-[80px]"
//           >
//             Efficient

//             {/* Animated Star */}
//             <motion.span
//               animate={{
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 duration: 12,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="mx-3 xl:mx-5 inline-flex align-middle w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-white items-center justify-center"
//             >
//               <svg
//               viewBox="0 0 300 300"
//               className="w-100 h-100"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {/* Outer Tyre */}
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="130"
//                 fill="#000000"
//                 stroke="#1f1f1f"
//                 strokeWidth="10"
//               />

//               {/* Tyre Treads */}
//               {[...Array(28)].map((_, i) => {
//                 const angle = (i * 360) / 28

//                 return (
//                   <rect
//                     key={i}
//                     x="145"
//                     y="6"
//                     width="10"
//                     height="26"
//                     rx="2"
//                     fill="#ffffff"
//                     opacity="0.9"
//                     transform={`rotate(${angle} 150 150)`}
//                   />
//                 )
//               })}

//               {/* Rim Outer */}
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="92"
//                 fill="#ffffff"
//                 stroke="#000000"
//                 strokeWidth="7"
//               />

//               {/* Rim Inner */}
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="72"
//                 fill="#f4f4f5"
//                 stroke="#18181b"
//                 strokeWidth="4"
//               />

//               {/* Wheel Holes */}
//               {[...Array(6)].map((_, i) => {
//                 const angle = (i * Math.PI * 2) / 6
//                 const x = 150 + Math.cos(angle) * 42
//                 const y = 150 + Math.sin(angle) * 42

//                 return (
//                   <circle
//                     key={i}
//                     cx={x}
//                     cy={y}
//                     r="9"
//                     fill="#000000"
//                   />
//                 )
//               })}

//               {/* Center Hub */}
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="24"
//                 fill="#000000"
//                 stroke="#ffffff"
//                 strokeWidth="5"
//               />

//               {/* Subtle Highlight */}
//               <ellipse
//                 cx="110"
//                 cy="95"
//                 rx="28"
//                 ry="10"
//                 fill="#ffffff"
//                 opacity="0.12"
//                 transform="rotate(-25 110 95)"
//               />
//             </svg>
//             </motion.span>

//             <br />

//             transportation built
//             <br />
//             for global delivery
//           </motion.h1>

//           {/* Paragraph */}
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.3,
//             }}
//             className="mt-6 md:mt-8 max-w-2xl text-[14px] tracking-[2px] text-white/85"
//           >
//             Reliable logistics and cargo solutions that move your
//             business forward — fast, secure, and on time, across
//             cities, borders, and supply chains.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 1,
//               delay: 0.5,
//             }}
//             className="mt-10"
//           >
//             <motion.a
//               href="#contact"
//               whileHover={{
//                 y: -4,
//               }}
//               whileTap={{ scale: 0.96 }}
//               className="group relative inline-flex items-center overflow-hidden px-3 md:px-5 py-2 gap-3 md:gap-4 text-[14px] md:text-[18px] font-medium text-white/85 bg-[var(--primary)]"
//             >
//               {/* Hover Background */}
//               <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 group-hover:translate-y-0" />

//               {/* Content */}
//               <span className="relative z-10 flex items-center gap-3 md:gap-4">
//                 Start Shipping

//                 <span className="w-7 md:w-9 h-7 md:h-9 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
//                   <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5" />
//                 </span>
//               </span>
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Bottom Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             delay: 0.7,
//           }}
//           className="mt-4 sm:mt-2 md:mt-8 flex flex-col-reverse items-start justify-between gap-10 lg:flex-row lg:items-end"
//         >

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//             className="flex flex-col items-center gap-4"
//           >
//             <div className="h-10 md:h-20 w-[2px] bg-white/40" />

//             <ArrowDown
//               size={30}
//               className="text-white/50"
//             />
//           </motion.div>

//           {/* Stats */}
//           <div className="flex flex-wrap gap-5 sm:gap-10 lg:gap-20">

//             {/* Stat 1 */}
//             <motion.div
//               whileHover={{ y: -6 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.h2
//                 initial={{ opacity: 0, scale: 0.7 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 1,
//                 }}
//                 className="text-4xl sm:text-5xl xl:text-7xl font-medium text-white"
//               >
//                 {recognition}%
//               </motion.h2>

//               <p className="mt-3 md:mt-5 max-w-[220px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-snug text-white">
//                 Recognition Gained
//                 <br />
//                 Through Branding
//               </p>
//             </motion.div>

//             {/* Stat 2 */}
//             <motion.div
//               whileHover={{ y: -6 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.h2
//       initial={{ opacity: 0, scale: 0.7 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 1.2,
//       }}
//       className="text-4xl sm:text-5xl xl:text-7xl font-medium text-white"
//     >
//       {count}+
//     </motion.h2>

//               <p className="mt-3 md:mt-5 max-w-[220px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-snug text-white">
//                 Years of Bold Ideas
//                 <br />
//                 and Trusted Results
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

