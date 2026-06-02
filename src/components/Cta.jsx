"use client"

import { ArrowRight } from "lucide-react"

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="overflow-hidden bg-[#f5f5f3] flex items-center justify-center text-white"
    >
      {/* Container */}
      <div className="w-[320px] sm:w-[780px] lg:w-[1024px] xl:w-7xl py-12 lg:py-20 px-6">
        <div className="mx-auto">

          {/* Decorative Crane */}
          <div
            aria-hidden="true"
            className="relative inset-x-0 -top-5 z-30 flex justify-center"
          >
            <div className="relative w-full max-w-7xl">

              {/* Main Beam */}
              <div className="mx-auto h-[4px] w-full bg-[var(--primary)] shadow-[0_10px_40px_rgba(31,94,44,0.25)]">

                {/* Beam Details */}
                <div className="top-0 flex items-center justify-center gap-11.5 sm:gap-13 xl:gap-16">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`${i >= 6 ? "hidden sm:block" : "block"} h-[4px] w-[6px] bg-[#dfe7e8]`}
                    />
                  ))}
                </div>
              </div>

              {/* Left Rope */}
              <div className="absolute rotate-60 sm:rotate-74 lg:rotate-76 xl:rotate-76 left-11 sm:left-37 lg:left-53 xl:left-74 -top-6 sm:-top-28 lg:-top-41 xl:-top-60 flex flex-col items-center">
                <div className="h-32 sm:h-84 lg:h-116 xl:h-160 w-[4px] bg-[var(--primary)]" />

                <div className="relative flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[3px] border-[#f3f3f3] bg-[var(--primary)] shadow-lg">
                  <div className="h-2 w-2 xl:h-3 xl:w-3 rounded-full bg-[#f3f3f3]" />
                </div>
              </div>

              {/* Middle Box */}
              <div className="flex items-center justify-center">
                <div className="z-100 flex items-center justify-center h-[46px] w-[46px] md:h-[52px] md:w-[52px] xl:h-[64px] xl:w-[64px] rounded-b-full bg-[var(--primary)]">
                  <div className="h-[36px] w-[36px] md:h-[40px] md:w-[40px] xl:h-[45px] xl:w-[45px] rounded-full bg-[#f3f3f3]" />
                </div>
              </div>

              {/* Right Rope */}
              <div className="absolute -rotate-60 sm:-rotate-74 lg:-rotate-76 xl:-rotate-76 right-11 sm:right-37 lg:right-53 xl:right-74 -top-6 sm:-top-28 lg:-top-41 xl:-top-60 flex flex-col items-center">
                <div className="h-32 sm:h-84 lg:h-116 xl:h-160 w-[4px] bg-[var(--primary)]" />

                <div className="relative flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[3px] border-[#f3f3f3] bg-[var(--primary)] shadow-lg">
                  <div className="h-2 w-2 xl:h-3 xl:w-3 rounded-full bg-[#f3f3f3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Container Styled Box */}
          <div className="mt-4 sm:mt-10 lg:mt-14 xl:mt-20 relative overflow-hidden border border-[var(--primary)]/10 bg-[#f8faf8] shadow-[0_20px_60px_rgba(31,94,44,0.08)]">

            {/* Shipping Container Lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden sm:flex justify-between px-4 md:px-6"
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-full w-[1px] bg-[var(--primary)]/[0.05]"
                />
              ))}
            </div>

            {/* Top Bar */}
            <div className="relative flex flex-col gap-4 border-b border-[var(--primary)]/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-2 sm:justify-start"
              >
                <div className="h-3 w-3 rounded-full bg-[var(--primary)]" />
                <div className="h-3 w-3 rounded-full bg-[var(--primary)]/50" />
                <div className="h-3 w-3 rounded-full bg-[var(--primary)]/20" />
              </div>

              <span className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--primary)]">
                SAMAYAM CONTAINER LINES PVT. LTD.
              </span>

              <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]/50">
                Global Freight
              </span>
            </div>

            {/* Content */}
            <div className="relative flex flex-col gap-10 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">

              {/* Left Content */}
              <header className="max-w-xl">
                <p className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[var(--primary)]/50">
                  Shipping Container Solutions
                </p>

                <h2
                  id="cta-heading"
                  className="text-3xl font-bold leading-tight text-[var(--primary)] sm:text-4xl md:text-5xl"
                >
                  Fast & Reliable
                  <span className="block text-[var(--secondary)]">
                    Global Logistics
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5f676b]">
                  Modern freight forwarding and container shipping for businesses
                  worldwide.
                </p>
              </header>

              {/* CTA Buttons */}
              <nav
                aria-label="Call to action buttons"
                className="flex w-full flex-col gap-3 md:gap-4 sm:w-auto sm:flex-row"
              >
                <a
                  href="#contact"
                  aria-label="Request a freight forwarding quote"
                  className="group flex w-full items-center justify-center gap-2 bg-[var(--primary)] px-6 py-3 md:py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:scale-[1.02] sm:w-auto"
                >
                  Request Quote

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+919840059829"
                  aria-label="Contact SAMAYAM Container Lines"
                  className="flex w-full items-center justify-center border border-[var(--primary)]/30 bg-transparent px-6 py-3 md:py-4 text-sm font-semibold text-[var(--secondary)] transition-all duration-300 hover:border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white sm:w-auto"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Bottom Industrial Strip */}
            <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[var(--primary)]/10 px-4 py-3 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)]/45">
              <span>Ocean Freight</span>
              <span>Air Cargo</span>
              <span>Custom Clearance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}








// "use client"

// import {
//   ArrowRight,
// } from "lucide-react"

// export default function Cta() {
//   return (
//     <section className="overflow-hidden bg-[#f6f6f4] flex items-center justify-center text-white">

//       {/* Container */}
//       <div className=" w-[320px] sm:w-[780px] lg:w-[1024px] xl:w-7xl py-20 px-6">
//       <div className="mx-auto">


//       {/* Crane */}
//       <div className="relative inset-x-0 -top-5 z-30 flex justify-center">
//         <div className="relative w-full max-w-7xl">
//           {/* Main Beam */}
//           <div className="mx-auto h-[4px] w-full bg-black shadow-[0_10px_40px_rgba(255,190,50,0.45)]">
//             {/* Beam Details */}
//             <div className="top-0 flex items-center justify-center gap-11.5 sm:gap-13 xl:gap-16">
//   {[...Array(10)].map((_, i) => (
//     <div
//       key={i}
//       className={`${i >= 6 ? "hidden sm:block" : "block"} h-[4px] w-[6px] bg-white`}
//     />
//   ))}
// </div>
//           </div>

//           {/* Left Rope */}
//           <div className="absolute rotate-60 sm:rotate-74 lg:rotate-76 xl:rotate-76 left-11 sm:left-37 lg:left-53 xl:left-74 -top-6 sm:-top-28 lg:-top-41 xl:-top-60 flex flex-col items-center">
//             <div className="h-32 sm:h-84 lg:h-116 xl:h-160 w-[4px] bg-black" />
//             <div className="relative flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[3px] border-gray-300 bg-[#040b16] shadow-lg">
//               <div className="h-2 w-2 xl:h-3 xl:w-3  rounded-full bg-gray-300" />
//             </div>
//           </div>

//           {/* Middle Box */}
//           <div className="flex items-center justify-center">
//             <div className="z-100 flex items-center justify-center h-[46px] w-[46px] md:h-[52px] md:w-[52px] xl:h-[64px] xl:w-[64px] rounded-b-full bg-black">
//                 <div className="h-[36px] w-[36px] md:h-[40px] md:w-[40px] xl:h-[45px] xl:w-[45px] rounded-full bg-white"/>
//             </div>
//           </div>

//           {/* Right Rope */}
//           <div className="absolute -rotate-60 sm:-rotate-74 lg:-rotate-76 xl:-rotate-76 right-11 sm:right-37 lg:right-53 xl:right-74 -top-6 sm:-top-28 lg:-top-41 xl:-top-60 flex flex-col items-center">
//             <div className="h-32 sm:h-84 lg:h-116 xl:h-160 w-[4px] bg-black" />
//             <div className="relative flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[3px] border-gray-300 bg-[#040b16] shadow-lg">
//               <div className="h-2 w-2 xl:h-3 xl:w-3 rounded-full bg-gray-300" />
//             </div>
//           </div>
//         </div>
//       </div>



//         {/* Container Styled Box */}
//         <div className="mt-4 sm:mt-10 lg:mt-14 xl:mt-20 relative overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
//           {/* Shipping Container Lines */}
//           <div className="pointer-events-none absolute inset-0 hidden sm:flex justify-between px-4 md:px-6">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="h-full w-[1px] bg-black/[0.04]"
//               />
//             ))}
//           </div>

//           {/* Top Bar */}
//           <div className="relative flex flex-col gap-4 border-b border-black/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            
//             <div className="flex items-center justify-center gap-2 sm:justify-start">
//               <div className="h-3 w-3 rounded-full bg-black" />
//               <div className="h-3 w-3 rounded-full bg-black/50" />
//               <div className="h-3 w-3 rounded-full bg-black/20" />
//             </div>

//             <span className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-black">
//               SAMAYAM CONTAINER LINES PVT. LTD.
//             </span>

//             <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
//               Global Freight
//             </span>
//           </div>

//           {/* Content */}
//           <div className="relative flex flex-col gap-10 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">
            
//             {/* Left Content */}
//             <div className="max-w-xl">
//               <p className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-black/40">
//                 Shipping Container Solutions
//               </p>

//               <h2 className="text-3xl font-bold font-black leading-tight text-black sm:text-4xl md:text-5xl">
//                 Fast & Reliable
//                 <span className="block text-black/40">
//                   Global Logistics
//                 </span>
//               </h2>

//               <p className="mt-4 text-sm sm:text-base leading-relaxed text-black/55">
//                 Modern freight forwarding and container shipping for businesses
//                 worldwide.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex w-full flex-col gap-3 md:gap-4 sm:w-auto sm:flex-row">
              
//               <button className="group flex w-full items-center justify-center gap-2 bg-black px-6 py-3 md:py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] sm:w-auto">
//                 Request Quote
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </button>

//               <button className="w-full border border-black/60 bg-[#fafafa] px-6 py-3 md:py-4 text-sm font-semibold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:w-auto">
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           {/* Bottom Industrial Strip */}
//           <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-black/10 px-4 py-3 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/35">
//             <span>Ocean Freight</span>
//             <span>Air Cargo</span>
//             <span>Custom Clearance</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>
//   )
// }
