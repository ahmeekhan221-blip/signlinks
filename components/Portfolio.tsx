// // app/page.tsx
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
//       {/* Hero - big & simple */}
//       {/* <header className="relative h-screen flex items-center justify-center px-6 text-center">
//         <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-blue-100/30 dark:from-sky-950/30 dark:to-blue-950/20" />

//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
//             <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
//               Ahmee Advertising
//             </span>
//           </h1>

//           <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-light">
//             We create campaigns people actually remember
//           </p>

//           <div className="mt-10 flex flex-wrap justify-center gap-5">
//             <a
//               href="#work"
//               className="px-9 py-5 bg-sky-600 hover:bg-sky-700 text-white text-lg font-medium rounded-full transition shadow-lg shadow-sky-200/40 dark:shadow-sky-900/30"
//             >
//               See Our Work
//             </a>
//             <a
//               href="mailto:hello@ahmee.pk"
//               className="px-9 py-5 border-2 border-sky-600 text-sky-600 dark:border-sky-500 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/50 text-lg font-medium rounded-full transition"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </header> */}

//       {/* Work Grid - big images, minimal text */}
//       <section id="work" className="px-5 sm:px-8 md:px-12 py-20 md:py-32 max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-24 text-slate-800 dark:text-slate-100">
//           Portfolio
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//           {/* Project Card - repeat & customize */}
//           <WorkCard
//             title="hbl"
//             client="hbl"
//             image="/n3_1.jpeg"
//             category="hbl"
//           />

//           <WorkCard
//            title="hbl"
//             client="hbl"
//             image="/n3_1.jpeg"
//             category="hbl"
//           />

//           <WorkCard
//             title="hbl"
//             client="Meezan Bank"
//             image="/n3_1.jpeg"
//             category="hbl"
//           />

//           <WorkCard
//             title="hbl"
//             client="hbl"
//             image="/n3_1.jpeg"
//             category="Video"
//           />


//           {/* Add 3–12 more depending on how many strong pieces you have */}
//         </div>
//       </section>

//       {/* Very simple contact / footer */}
//       {/* <section className="py-24 text-center bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
//         <h2 className="text-4xl md:text-5xl font-bold mb-8">
//           Ready to make something <span className="text-sky-600">unforgettable</span>?
//         </h2>

//         <a
//           href="mailto:hello@ahmee.pk"
//           className="inline-block px-10 py-6 bg-sky-600 hover:bg-sky-700 text-white text-xl font-medium rounded-full transition shadow-xl shadow-sky-200/40 dark:shadow-sky-900/40"
//         >
//           Let’s Talk →
//         </a>

//         <p className="mt-12 text-slate-600 dark:text-slate-400">
//           Karachi, Pakistan • hello@ahmee.pk • +92 321 1234567
//         </p>
//       </section> */}
//     </div>
//   );
// }

// // Simple reusable card (image dominant)
// type WorkCardProps = {
//   title: string;
//   client: string;
//   image: string;
//   category: string;
// };

// function WorkCard({ title, client, image, category }: WorkCardProps) {
//   return (
//     <div className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:shadow-sky-200/30 dark:hover:shadow-sky-900/30 transition-all duration-300">
//       <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
        
//         {/* Text overlay appears on hover */}
//         <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <p className="text-sm font-medium uppercase tracking-wide text-sky-300">{client}</p>
//           <h3 className="text-xl sm:text-2xl font-bold mt-1">{title}</h3>
//           <p className="text-sm mt-2 text-slate-200">{category}</p>
//         </div>
//       </div>
//     </div>
//   );
// } 


















'use client';

import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div id="portfolio" className="relative bg-white py-16 sm:py-20 lg:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlM2E4YSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-cyan-600 to-[#1e3a8a] text-transparent bg-clip-text mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            WHAT WE HAVE DONE
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium signage and branding solutions delivered across Pakistan — from large-scale rooftop signs to nationwide bank branch rollouts.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.client}</span>
                  <span>{project.scope}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Highlights */}
        {/* <div className="mt-16 sm:mt-20 lg:mt-24 bg-gradient-to-r from-[#1e3a8a] to-cyan-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center">
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">1,600+</div>
              <p className="text-lg opacity-90">Branches Branded</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">1,000+</div>
              <p className="text-lg opacity-90">LED Modules Installed</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">Pakistan's Largest</div>
              <p className="text-lg opacity-90">Backlit Rooftop fascia</p>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-[#1e3a8a] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Start Your Project
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-gray-600">
            Ready to elevate your brand visibility? Contact us today.
          </p>
        </div> */}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Pakistan's Largest Backlit LED Sign",
    description: "Massive 460 ft × 9 ft rooftop installation at Dawood Centre, Karachi — featuring 8,000 GE Tetra Max HO LEDs.",
    client: "Corporate Landmark",
    scope: "Rooftop Signage",
    category: "Large Format",
    image: "/download.jfif",
  },
  {
    title: "HBL Nationwide Branch Branding",
    description: "600+ branches completed with backlit fascia signs, ATM kiosks, 3D letters, and over 350,000 LED modules.",
    client: "Habib Bank Limited (HBL)",
    scope: "600+ Branches",
    category: "Banking",
    image: "/hbl.jpeg",
  },
  {
    title: "MCB Comprehensive Rollout",
    description: "1,000+ branches featuring illuminated fascias, channel letters, ATM signage, and 550,000+ LED modules.",
    client: "Muslim Commercial Bank (MCB)",
    scope: "1,000+ Branches",
    category: "Banking",
    image: "/download (1).jfif",
  },
  {
    title: "MCB Islamic Banking Branding",
    description: "Backlit fascia signs, ATM kiosks, illuminated channel letters, and regulatory signage for Islamic branches.",
    client: "MCB Islamic",
    scope: "Islamic Banking Network",
    category: "Banking",
    image: "/mcb_p.jfif",
  },
  {
    title: "Fuel Station & Canopy Fabrication",
    description: "Weather-resistant canopy signage, dispenser branding, and full station identity for Oil Marketing Companies.",
    client: "Oil & Gas Sector",
    scope: "Fuel Stations",
    category: "Oil & Gas",
    image: "/puma.jpeg",
  },
  {
    title: "Retail & 3D Lettering Projects",
    description: "Premium stainless steel, brass, and illuminated 3D channel letters with UV branding for retail clients.",
    client: "Automotive & Hospitality",
    scope: "Retail Branding",
    category: "Retail",
    image: "/3d.jpeg",
  },
];

export default Portfolio;







