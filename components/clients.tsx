// // // components/ClientsMarquee.tsx
// // 'use client';

// // import Image from 'next/image';
// // import { motion } from 'framer-motion';

// // const clients = [
// //   '/clients/1.svg', '/clients/2.png', '/clients/3.svg', '/clients/4.png',
// //   '/clients/5.svg', '/clients/6.png', '/clients/7.svg', '/clients/8.png',
// //   '/clients/9.svg', '/clients/10.png',
// //   // duplicate for seamless loop
// //   '/clients/1.svg', '/clients/2.png', '/clients/3.svg', '/clients/4.png',
// //   '/clients/5.svg', '/clients/6.png', '/clients/7.svg', '/clients/8.png',
// // ];

// // export default function ClientsMarquee() {
// //   return (
// //     <section className="py-16 md:py-24 overflow-hidden bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
// //       <div className="text-center mb-10">
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
// //           Companies I’ve Worked With
// //         </h2>
// //       </div>

// //       <div className="relative">
// //         <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent z-10 pointer-events-none" />
// //         <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-950 dark:to-transparent z-10 pointer-events-none" />

// //         <motion.div
// //           className="flex items-center gap-12 md:gap-16 lg:gap-20"
// //           animate={{ x: ['0%', '-50%'] }}
// //           transition={{
// //             duration: 25,
// //             repeat: Infinity,
// //             ease: 'linear',
// //           }}
// //         >
// //           {clients.map((logo, idx) => (
// //             <div
// //               key={idx}
// //               className="flex-shrink-0 w-28 md:w-32 lg:w-40 h-14 md:h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
// //             >
// //               <Image
// //                 src={logo}
// //                 alt="client logo"
// //                 fill
// //                 className="object-contain"
// //                 sizes="160px"
// //               />
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }























// // components/Clients.tsx
// import Image from 'next/image';
// import React from 'react';

// interface Client {
//   name: string;
//   logo: string;     // e.g. "/clients/company-name.svg"
//   url?: string;     // optional website link
// }

// const clients: Client[] = [
//   { name: "Bank Alfalah", logo: "/BAF.png", url: "https://www.bankalfalah.com/" },
//   { name: "byco",logo: "/Byco.png",url:"" },
//   { name: "caltex", logo: "/Caltex.png", url: "https://gamma.studio" },
//   { name: "fbl",  logo: "/FBL.png" },
//   { name: "hbl",   logo: "/HBL.png" },
//   { name: "ubl",   logo: "/UBL.png", url: "https://UBL.group" },
//   { name: "PUMA",   logo: "/PumaEnergy.png", url: "https://UBL.group" },
//   { name: "n3",   logo: "/N3.png", url: "https://UBL.group" },
//   { name: "soneri",   logo: "/Soneri Bank.png", url: "https://UBL.group" },
//   { name: "hascol",   logo: "/Hascol.png", url: "https://UBL.group" }

  
// ];

// export default function Clients() {
//   return (
//     <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/30">
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
//             Clients I've Worked With
//           </h2>
//           <p className="mt-3 text-gray-600 dark:text-gray-400">
//             Proud to collaborate with great teams and brands
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-10 lg:gap-12 items-center">
//           {clients.map((client) => (
//             <div
//               key={client.name}
//               className="flex items-center justify-center h-20 sm:h-24 px-4"
//             >
//               {client.url ? (
//                 <a
//                   href={client.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block transition-opacity hover:opacity-80"
//                   title={client.name}
//                 >
//                   <ClientLogo logo={client.logo} name={client.name} />
//                 </a>
//               ) : (
//                 <ClientLogo logo={client.logo} name={client.name} />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-500">
//           and many more…
//         </div>

//       </div>
//     </section>
//   );
// }

// function ClientLogo({ logo, name }: { logo: string; name: string }) {
//   return (
//     <div className="relative w-28 sm:w-32 md:w-36 h-14 sm:h-16">
//       <Image
//         src={logo}
//         alt={`${name} logo`}
//         fill
//         className="object-contain"
//         sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
//       />
//     </div>
//   );
// }
















// import Image from 'next/image';
// import Link from 'next/link';
// import type { FC } from 'react';

// interface Client {
//   name: string;
//   logo: string;
//   url?: string;
// }

// const clients: Client[] = [
//   { name: "Bank Alfalah", logo: "/BAF.png", url: "https://www.bankalfalah.com/" },
//   { name: "byco",logo: "/Byco.png",url:"" },
//   { name: "caltex", logo: "/Caltex.png", url: "https://gamma.studio" },
//   { name: "fbl",  logo: "/FBL.png" },
//   { name: "hbl",   logo: "/hbl_oldlogo.png" },
//   { name: "ubl",   logo: "/UBL.png", url: "https://UBL.group" },
//   { name: "PUMA",   logo: "/PumaEnergy.png", url: "https://UBL.group" },
//   { name: "n3",   logo: "/N3.png", url: "https://UBL.group" },
//   { name: "soneri",   logo: "/Soneri Bank.png", url: "https://UBL.group" },
//   { name: "hascol",   logo: "/Hascol.png", url: "https://UBL.group" },
//   { name: "SUZUKI",   logo: "/PumaEnergy.png", url: "https://UBL.group" },
//   { name: "SU",   logo: "/abl_logo.png", url: "https://UBL.group" },
//   { name: "SU",   logo: "/mcb-logo.svg", url: "https://UBL.group" },

  
// ];  

// const ClientsSection: FC = () => {
//   return (
//     <section className="py-28 md:py-36 lg:py-40 bg-white dark:bg-neutral-950">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//         {/* Heading – understated & confident */}
//         <div className="text-center mb-20 md:mb-24">
//           <h2 className="
//             text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight
//             text-neutral-900 dark:text-neutral-100
//           ">
//             CLIENTS
//           </h2>
//           <p className="
//             mt-5 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto
//             dark:text-neutral-400 font-light
//           ">
//             Working alongside exceptional teams building the future.
//           </p>
//         </div>

//         {/* Logo grid – clean, centered, generous gaps */}
//         <div className="
//           grid grid-cols-2 gap-x-10 gap-y-16 
//           sm:grid-cols-3 sm:gap-x-12 sm:gap-y-20
//           md:grid-cols-4 md:gap-x-16 md:gap-y-24
//           lg:grid-cols-6 lg:gap-x-20 lg:gap-y-28
//           place-items-center
//         ">
//           {clients.map((client) => (
//             <div
//               key={client.name}
//               className="
//                 group relative flex items-center justify-center
//                 w-full max-w-[130px] sm:max-w-[150px] lg:max-w-[170px]
//                 h-16 sm:h-20 transition-all duration-300
//               "
//             >
//               {client.url ? (
//                 <Link
//                   href={client.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     block w-full h-full
//                     opacity-100 group-hover:placeholder-opacity-95
//                     transition-opacity duration-300
//                     focus-visible:opacity-100 focus:outline-none
//                     focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700
//                     rounded-xl
//                   "
//                   aria-label={`Visit ${client.name}`}
//                 >
//                   <Logo src={client.logo} alt={client.name} />
//                 </Link>
//               ) : (
//                 <Logo src={client.logo} alt={client.name} />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Subtle ending note */}
//         {/* <div className="mt-20 md:mt-28 text-center">
//           <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-500 font-light italic">
//             And more meaningful collaborations in progress…
//           </p>
//         </div> */}

//       </div>
//     </section>
//   );
// };

// interface LogoProps {
//   src: string;
//   alt: string;
// }

// const Logo: FC<LogoProps> = ({ src, alt }) => (
//   <div className="relative w-full h-full">
//     <Image
//       src={src}
//       alt={alt}
//       fill
//       className="object-contain"
//       sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 170px"
//       quality={92}
//       // remove grayscale if your logos are already styled / colored
//       // className="object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
//     />
//   </div>
// );

// export default ClientsSection;











// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import type { FC } from 'react';
// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// interface Client {
//   name: string;
//   logo: string;
//   url?: string;
// }

// const clients: Client[] = [
//   { name: "Bank Alfalah", logo: "/BAF.png", url: "https://www.bankalfalah.com/" },
//   { name: "Byco", logo: "/Byco.png", url: "" },
//   { name: "Caltex", logo: "/Caltex.png" },
//   { name: "FBL", logo: "/FBL.png" },
//   { name: "HBL", logo: "/hbl_oldlogo.png" },
//   { name: "UBL", logo: "/UBL.png", url: "https://UBL.group" },
//   { name: "PUMA Energy", logo: "/PumaEnergy.png" },
//   { name: "N3", logo: "/N3.png" },
//   { name: "Soneri Bank", logo: "/Soneri Bank.png" },
//   { name: "Hascol", logo: "/Hascol.png" },
//   { name: "ABL", logo: "/abl_logo.png" },
//   { name: "MCB", logo: "/mcb-logo.svg" },
// ];

// /* ─── animation variants ─────────────────────────────────────────── */
// const sectionVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.07 } },
// };

// const headingVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 28, scale: 0.94 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const lineVariants = {
//   hidden: { scaleX: 0, opacity: 0 },
//   visible: {
//     scaleX: 1,
//     opacity: 1,
//     transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
//   },
// };

// /* ─── main component ─────────────────────────────────────────────── */
// const ClientsSection: FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-80px' });

//   return (
//     <section
//       ref={ref}
//       className="relative py-28 md:py-36 lg:py-44 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-400 to-white dark:bg-neutral-950"
//     >
//       {/* ── Watermark background text ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
//       >
//         <span
//           className="font-black uppercase leading-none tracking-tighter text-neutral-900/[0.06] dark:text-white/[0.05]"
//           style={{ fontSize: 'clamp(5rem, 18vw, 18rem)', whiteSpace: 'nowrap' }}
//         >
//           CLIENTS
//         </span>
//       </div>

//       {/* ── Grain texture ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: 'repeat',
//           backgroundSize: '128px',
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         {/* ── Heading ─────────────────────────────────────────────── */}
//         <motion.div
//           className="text-center mb-20 md:mb-28"
//           variants={sectionVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           <motion.p
//             variants={headingVariants}
//             className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-500 mb-5 font-medium"
//           >
//             Trusted by industry leaders
//           </motion.p>

//           <motion.h2
//             variants={headingVariants}
//             className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
//             style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//           >
//             Companies I've{' '}
//             <span className="italic font-normal text-neutral-500 dark:text-neutral-400">
//               worked with
//             </span>
//           </motion.h2>

//           {/* Animated underline */}
//           <motion.div
//             variants={lineVariants}
//             className="mx-auto mt-7 h-px w-24 bg-neutral-400 dark:bg-neutral-600 origin-center"
//           />
//         </motion.div>

//         {/* ── Logo Grid ───────────────────────────────────────────── */}
//         <motion.div
//           className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
//           variants={sectionVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           {clients.map((client) => (
//             <motion.div
//               key={`${client.name}-${client.logo}`}
//               variants={cardVariants}
//               whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
//               className="group"
//             >
//               <ClientCard client={client} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// /* ─── single client card ─────────────────────────────────────────── */
// const ClientCard: FC<{ client: Client }> = ({ client }) => {
//   const inner = (
//     <div
//       className="
//         relative flex items-center justify-center
//         h-24 sm:h-28 px-5
//         rounded-2xl border border-neutral-200/80 dark:border-neutral-800
//         bg-white dark:bg-neutral-900
//         shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-none
//         overflow-hidden
//         transition-all duration-300
//         group-hover:border-neutral-300 dark:group-hover:border-neutral-700
//         group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
//       "
//     >
//       {/* Inner glow on hover */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/60 to-transparent dark:from-white/5 pointer-events-none" />

//       <div className="relative w-full h-10 sm:h-12">
//         <Image
//           src={client.logo}
//           alt={`${client.name} logo`}
//           fill
//           className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
//           sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
//           quality={95}
//         />
//       </div>
//     </div>
//   );

//   if (client.url) {
//     return (
//       <Link
//         href={client.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={`Visit ${client.name}`}
//         className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-2xl"
//       >
//         {inner}
//       </Link>
//     );
//   }

//   return inner;
// };

// export default ClientsSection;


























































// animation 

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import type { FC } from 'react';
// import { useRef, useEffect, useState } from 'react';
// import { motion, useInView, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

// interface Client {
//   name: string;
//   logo: string;
//   url?: string;
// }

// const clients: Client[] = [
//   { name: "Bank Alfalah", logo: "/BAF.png", url: "https://www.bankalfalah.com/" },
//   { name: "Byco", logo: "/Byco.png" },
//   { name: "Caltex", logo: "/Caltex.png" },
//   { name: "FBL", logo: "/FBL.png" },
//   { name: "HBL", logo: "/hbl_oldlogo.png" },
//   { name: "UBL", logo: "/UBL.png", url: "https://UBL.group" },
//   { name: "PUMA Energy", logo: "/PumaEnergy.png" },
//   { name: "N3", logo: "/N3.png" },
//   { name: "Soneri Bank", logo: "/Soneri Bank.png" },
//   { name: "Hascol", logo: "/Hascol.png" },
//   { name: "ABL", logo: "/abl_logo.png" },
//   { name: "MCB", logo: "/mcb-logo.svg" },
// ];

// // Triple the array for seamless infinite loop
// const loopClients = [...clients, ...clients, ...clients];

// /* ─── heading variants ─────────────────────────────────────────────── */
// const headingVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
// };

// const subVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
// };

// const lineVariants = {
//   hidden: { scaleX: 0 },
//   visible: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
// };

// /* ─── 3D Marquee Track ─────────────────────────────────────────────── */
// const MarqueeTrack: FC<{ speed?: number; reversed?: boolean; rowIndex: number }> = ({
//   speed = 0.4,
//   reversed = false,
//   rowIndex,
// }) => {
//   const x = useMotionValue(0);
//   const isPaused = useRef(false);

//   // Each card is 220px wide + 20px gap = 240px
//   const CARD_W = 240;
//   const TOTAL_W = clients.length * CARD_W; // reset point = 1 copy width

//   useAnimationFrame(() => {
//     if (isPaused.current) return;
//     const dir = reversed ? 1 : -1;
//     x.set(x.get() + dir * speed);

//     // Seamless reset
//     if (!reversed && x.get() <= -TOTAL_W) x.set(0);
//     if (reversed && x.get() >= 0) x.set(-TOTAL_W);
//   });

//   // 3D row tilt: top row tilts slightly back, bottom slightly forward
//   const rotateX = rowIndex === 0 ? 6 : rowIndex === 1 ? 0 : -6;

//   return (
//     <div
//       style={{ perspective: '1200px' }}
//       className="w-full overflow-hidden"
//       onMouseEnter={() => (isPaused.current = true)}
//       onMouseLeave={() => (isPaused.current = false)}
//     >
//       <motion.div
//         style={{
//           x,
//           rotateX,
//           transformStyle: 'preserve-3d',
//           display: 'flex',
//           gap: '20px',
//           width: 'max-content',
//           willChange: 'transform',
//         }}
//       >
//         {loopClients.map((client, idx) => (
//           <ClientCard key={`${client.name}-${rowIndex}-${idx}`} client={client} index={idx} />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// /* ─── single card ──────────────────────────────────────────────────── */
// const ClientCard: FC<{ client: Client; index: number }> = ({ client, index }) => {
//   const [hovered, setHovered] = useState(false);

//   const card = (
//     <motion.div
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       animate={
//         hovered
//           ? { rotateY: 8, rotateX: -4, scale: 1.06, z: 40 }
//           : { rotateY: 0, rotateX: 0, scale: 1, z: 0 }
//       }
//       transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//       style={{
//         width: '220px',
//         flexShrink: 0,
//         transformStyle: 'preserve-3d',
//         perspective: '600px',
//       }}
//       className="
//         relative flex items-center justify-center
//         h-24
//         rounded-2xl
//         border border-neutral-200/70 dark:border-neutral-800
//         bg-white dark:bg-neutral-900
//         cursor-pointer
//         overflow-hidden
//       "
//     >
//       {/* Shimmer layer */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none rounded-2xl"
//         animate={
//           hovered
//             ? {
//                 background:
//                   'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)',
//               }
//             : {
//                 background: 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%)',
//               }
//         }
//         transition={{ duration: 0.3 }}
//       />

//       {/* Shadow depth layer for 3D feel */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none rounded-2xl"
//         animate={
//           hovered
//             ? { boxShadow: '0 24px 48px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1)' }
//             : { boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }
//         }
//         transition={{ duration: 0.35 }}
//       />

//       {/* Logo */}
//       <div className="relative w-[140px] h-12 px-2">
//         <Image
//           src={client.logo}
//           alt={`${client.name} logo`}
//           fill
//           className="object-contain transition-all duration-400"
//           style={{
//             filter: hovered ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.55)',
//           }}
//           sizes="160px"
//           quality={95}
//         />
//       </div>

//       {/* Bottom name label */}
//       <motion.div
//         className="absolute bottom-0 left-0 right-0 flex justify-center pb-2"
//         animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
//         transition={{ duration: 0.25 }}
//       >
//         <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 font-medium">
//           {client.name}
//         </span>
//       </motion.div>
//     </motion.div>
//   );

//   if (client.url) {
//     return (
//       <Link href={client.url} target="_blank" rel="noopener noreferrer" aria-label={client.name}>
//         {card}
//       </Link>
//     );
//   }
//   return card;
// };

// /* ─── main section ─────────────────────────────────────────────────── */
// const ClientsSection: FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-60px' });

//   return (
//     <section
//       ref={ref}
//       className="relative py-28 md:py-36 lg:py-44 overflow-hidden bg-[#f5f4f1] dark:bg-neutral-950"
//     >
//       {/* ── Watermark ── */}
//       <div
//         aria-hidden
//         className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
//       >
//         <span
//           className="font-black uppercase leading-none tracking-tighter text-neutral-900/[0.055] dark:text-white/[0.04]"
//           style={{ fontSize: 'clamp(5rem, 18vw, 18rem)', whiteSpace: 'nowrap' }}
//         >
//           CLIENTS
//         </span>
//       </div>

//       {/* ── Left / right fade edges ── */}
//       <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10"
//         style={{ background: 'linear-gradient(to right, #f5f4f1, transparent)' }}
//       />
//       <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10"
//         style={{ background: 'linear-gradient(to left, #f5f4f1, transparent)' }}
//       />
//       {/* Dark mode equivalents via Tailwind */}
//       <div className="hidden dark:block pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10"
//         style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
//       />
//       <div className="hidden dark:block pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10"
//         style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         {/* ── Heading ── */}
//         <div className="text-center mb-16 md:mb-20">
//           <motion.p
//             variants={subVariants}
//             initial="hidden"
//             animate={isInView ? 'visible' : 'hidden'}
//             className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-neutral-500 dark:text-neutral-500 mb-4 font-medium"
//           >
//             Trusted by industry leaders
//           </motion.p>

//           <motion.h2
//             variants={headingVariants}
//             initial="hidden"
//             animate={isInView ? 'visible' : 'hidden'}
//             className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
//             style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//           >
//             Companies I've{' '}
//             <em className="not-italic font-normal text-neutral-400 dark:text-neutral-500">
//               worked with
//             </em>
//           </motion.h2>

//           <motion.div
//             variants={lineVariants}
//             initial="hidden"
//             animate={isInView ? 'visible' : 'hidden'}
//             className="mx-auto mt-6 h-px w-20 bg-neutral-400 dark:bg-neutral-700 origin-center"
//           />
//         </div>
//       </div>

//       {/* ── 3D Marquee Rows ── */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="flex flex-col gap-5"
//         style={{ perspective: '900px', transformStyle: 'preserve-3d' }}
//       >
//         {/* Row 1 — left to right (reversed) — tilts back */}
//         <MarqueeTrack speed={0.38} reversed={false} rowIndex={0} />

//         {/* Row 2 — right to left — flat center row */}
//         <MarqueeTrack speed={0.52} reversed={true} rowIndex={1} />

//         {/* Row 3 — left to right — tilts forward */}
//         <MarqueeTrack speed={0.3} reversed={false} rowIndex={2} />
//       </motion.div>

//       {/* ── Bottom hint ── */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ delay: 1.2, duration: 0.6 }}
//         className="mt-14 text-center text-[11px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600"
//       >
//         Hover to explore · Pause to engage
//       </motion.p>
//     </section>
//   );
// };

// export default ClientsSection;































// more perfect


'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════ */
interface Client {
  name: string;
  logo: string;
  url?: string;
}

const clients: Client[] = [
  { name: 'Bank Alfalah', logo: '/bank_alfalah.png',           url: 'https://www.bankalfalah.com/' },
  { name: 'Byco',         logo: '/Byco.png' },
  { name: 'Caltex',       logo: '/caltex_logo.png' },
  { name: 'FBL',          logo: '/faisal-logo.svg' },
  { name: 'HBL',          logo: '/hbl_new.png' },
  { name: 'UBL',          logo: '/ubl-.png',           url: 'https://ubl.com.pk' },
  { name: 'PUMA Energy',  logo: '/puma_logo.png' },
  { name: 'N3',           logo: '/N3_logo.png' },
  { name: 'Soneri Bank',  logo: '/soneri_logo.png' },
  { name: 'Hascol',       logo: '/has-logo.png' },
  { name: 'ABL',          logo: '/abl_logo.png' },
  { name: 'MCB',          logo: '/mcb-logo.svg' },
];

const rev = [...clients].reverse();
const row1 = [...clients, ...clients, ...clients];
const row2 = [...rev,     ...rev,     ...rev    ];
const row3 = [...clients, ...clients, ...clients];

const CARD_W  = 216;
const CARD_H  = 96;
const GAP     = 16;
const STRIDE  = CARD_W + GAP;
const RESET_W = clients.length * STRIDE;

/* ═══════════════════════════════════════════════════════════════════
   MARQUEE TRACK
═══════════════════════════════════════════════════════════════════ */
interface TrackProps {
  items:   Client[];
  speed:   number;
  dir:     1 | -1;
  rotateX: number;
  fade?:   number;
}

const MarqueeTrack: FC<TrackProps> = ({ items, speed, dir, rotateX, fade = 1 }) => {
  const x      = useMotionValue(dir === 1 ? 0 : -RESET_W);
  const paused = useRef(false);

  useAnimationFrame(() => {
    if (paused.current) return;
    const next = x.get() - dir * speed;
    if (dir === 1  && next <= -RESET_W) { x.set(0);       return; }
    if (dir === -1 && next >= 0)        { x.set(-RESET_W); return; }
    x.set(next);
  });

  return (
    <div
      className="w-full overflow-hidden"
      style={{ perspective: '2000px' }}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <motion.div
        style={{
          x,
          rotateX,
          opacity: fade,
          display: 'flex',
          gap: GAP,
          width: 'max-content',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        {items.map((client, idx) => (
          <ClientCard key={`${client.name}-${idx}`} client={client} />
        ))}
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   CLIENT CARD
═══════════════════════════════════════════════════════════════════ */
const ClientCard: FC<{ client: Client }> = ({ client }) => {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={
        hovered
          ? { scale: 1.07, rotateY: 9, rotateX: -5, z: 60 }
          : { scale: 1,    rotateY: 0, rotateX: 0,  z: 0  }
      }
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        transformStyle: 'preserve-3d',
        position: 'relative',
        cursor: client.url ? 'pointer' : 'default',
      }}
      className="flex items-center justify-center rounded-2xl overflow-hidden"
    >
      {/* Card base — white glass */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(6,182,212,0.18)',
        }}
      />

      {/* Top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Bottom accent line — shows on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px]"
        animate={{
          background: hovered
            ? 'linear-gradient(90deg, transparent, #06b6d4, #2563eb, transparent)'
            : 'linear-gradient(90deg, transparent, transparent, transparent, transparent)',
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={{
          background: hovered
            ? 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(30,58,138,0.05) 100%)'
            : 'transparent',
          boxShadow: hovered
            ? '0 24px 60px rgba(6,182,212,0.18), 0 8px 20px rgba(30,58,138,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
            : '0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
        transition={{ duration: 0.32 }}
      />

      {/* Logo */}
      <div className="relative z-10 w-[138px] h-10">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          className="object-contain transition-all duration-300"
          style={{
            filter: hovered
              ? 'grayscale(0%) opacity(1) drop-shadow(0 2px 8px rgba(6,182,212,0.2))'
              : 'grayscale(100%) opacity(0.4)',
          }}
          sizes="160px"
          quality={95}
        />
      </div>

      {/* Name badge */}
      {/* <motion.div
        className="absolute bottom-[7px] left-0 right-0 z-10 flex justify-center"
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
        transition={{ duration: 0.22 }}
      >
        <span
          className="text-[7.5px] tracking-[0.28em] uppercase font-semibold"
          style={{ color: '#06b6d4' }}
        >
          {client.name}
        </span>
      </motion.div> */}
    </motion.div>
  );

  if (client.url) {
    return (
      <Link
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${client.name}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
      >
        {inner}
      </Link>
    );
  }
  return inner;
};

/* ═══════════════════════════════════════════════════════════════════
   SECTION
═══════════════════════════════════════════════════════════════════ */
const ClientsSection: FC = () => {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-32 md:py-44 lg:py-52"
    >
      {/* ── Very faint technical grid overlay ───────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,138,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Animated background blobs ────────────────────────── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.06) 0%, transparent 70%)',
        }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── Watermark ────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.6, delay: 0.2 }}
      >
        <span
          className="font-black uppercase leading-none tracking-[-0.04em]"
          style={{
            fontSize: 'clamp(5rem, 20vw, 20rem)',
            whiteSpace: 'nowrap',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.07) 0%, rgba(30,58,138,0.05) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          CLIENTS
        </span>
      </motion.div>

      {/* ── Edge fades — white ────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-36 md:w-56 lg:w-72 z-20"
        style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-36 md:w-56 lg:w-72 z-20"
        style={{ background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)' }} />

      {/* ── HEADING ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center mb-20 md:mb-24">

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] tracking-[0.4em] uppercase font-semibold"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(37,99,235,0.08) 100%)',
              border: '1px solid rgba(6,182,212,0.25)',
              color: '#0891b2',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#06b6d4' }}
            />
            Trusted Collaborations
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-[1.06] tracking-tight font-bold text-gray-900"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Brands that
          <br />
          <span
            className="italic font-light"
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #1e3a8a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            trusted the vision
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed"
        >
          From Pakistan&apos;s leading banks to global energy giants delivering work built to last.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
          className="mx-auto mt-10 flex items-center justify-center gap-3 origin-center"
        >
          <div
            className="h-px w-16"
            style={{ background: 'linear-gradient(to right, transparent, #06b6d4)' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #1e3a8a)' }}
          />
          <div
            className="h-px w-16"
            style={{ background: 'linear-gradient(to left, transparent, #1e3a8a)' }}
          />
        </motion.div>
      </div>

      {/* ── 3D MARQUEE ROWS ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
        className="relative z-10 flex flex-col gap-[14px]"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        <MarqueeTrack items={row1} speed={0.42} dir={1}  rotateX={7}  fade={0.88} />
        <MarqueeTrack items={row2} speed={0.58} dir={-1} rotateX={0}  fade={1}    />
        <MarqueeTrack items={row3} speed={0.30} dir={1}  rotateX={-7} fade={0.88} />
      </motion.div>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.92 }}
        className="relative z-10 mx-auto mt-20 md:mt-28 max-w-3xl px-6"
      >
        <div
          className="flex items-stretch justify-center divide-x rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(30,58,138,0.04) 100%)',
            border: '1px solid rgba(6,182,212,0.15)',
          }}
        >
          {[
            { value: '12+', label: 'Industry Leaders' },
            { value: '8+',  label: 'Years of Trust'   },
            { value: '50+', label: 'Projects Delivered'},
          ].map((stat, i) => (
            <div
              key={i}
              className="flex-1 text-center py-6 px-4"
              style={{ borderColor: 'rgba(6,182,212,0.12)' }}
            >
              <div
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: 'linear-gradient(135deg, #06b6d4 0%, #1e3a8a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="mt-1.5 text-[9.5px] tracking-[0.3em] uppercase font-semibold text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default ClientsSection;