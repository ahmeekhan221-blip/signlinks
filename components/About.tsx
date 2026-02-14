// 'use client';

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// const AboutUs = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

//   return (
//     <div id='about' ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1e3a8a]/5 to-cyan-500/5 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [90, 0, 90],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/5 to-[#1e3a8a]/5 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlM2E4YSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

//       <motion.div 
//         style={{ opacity, scale }}
//         className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
//       >
//         {/* Header Section */}
//         <HeaderSection />

//         {/* Main Content Grid */}
//         <div className="mt-16 sm:mt-20 lg:mt-32 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
//           {/* Left Column - Story */}
//           <StorySection />

//           {/* Right Column - Stats & Features */}
//           <StatsAndFeatures />
//         </div>

//         {/* Timeline Section */}
//         <TimelineSection />

//         {/* Partnership Section */}
//         <PartnershipSection />

//         {/* CTA Section */}
//         <CTASection />
//       </motion.div>
//     </div>
//   );
// };

// // Header Section Component
// const HeaderSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <div ref={ref} className="text-center max-w-5xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="mb-8 sm:mb-12 flex justify-center"
//         >
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#1e3a8a] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
//             <div className="relative bg-white border-2 border-gray-100 shadow-xl rounded-2xl p-4 sm:p-6 md:p-8">
//               <img 
//                 src="/signlinkslogo.png" 
//                 alt="Sign Links Logo" 
//                 className="h-12 sm:h-16 md:h-20 w-auto"
//               />
//             </div>
//           </div>
//         </motion.div>

//         <motion.span 
//           className="inline-block text-xs sm:text-sm md:text-base font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a8a] uppercase mb-3 sm:mb-4"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           About Us
//         </motion.span>
        
//         <motion.h1 
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Crafting Visual
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-[#1e3a8a]">
//             Excellence
//           </span>
//         </motion.h1>

//         <motion.p 
//           className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           Pioneering signage solutions since 2005, transforming brands across Pakistan
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// // Story Section Component
// const StorySection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -50 }}
//       animate={isInView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.8 }}
//       className="space-y-6 sm:space-y-8"
//     >
//       <div className="relative">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={isInView ? { width: "4rem" } : {}}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="h-1 bg-gradient-to-r from-cyan-500 to-[#1e3a8a] mb-6 sm:mb-8"
//         />
        
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//           Our Journey
//         </h2>
        
//         <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Established in <span className="text-gray-900 font-semibold">2005</span>, Sign Links emerged as a premier end-to-end signage solution provider catering to the top corporate and retail sectors in Pakistan. Initially starting as a fabricator, we evolved into a full-fledged graphic conversion facility.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             Today, Sign Links collaborates with leading brands in sectors such as <span className="text-cyan-600 font-medium">Banking</span>, <span className="text-[#1e3a8a] font-medium">Oil & Gas</span>, <span className="text-cyan-500 font-medium">FMCG</span>, <span className="text-[#2563eb] font-medium">Automotive</span>, and <span className="text-cyan-600 font-medium">Hospitality</span>, meeting their diverse graphic requirements.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             With a dedicated team of over <span className="text-gray-900 font-semibold">70 professionals</span> spread across multiple locations in Pakistan and a cutting-edge facility in Karachi, Sign Links is continuously expanding its service offerings to meet evolving client needs.
//           </motion.p>
//         </div>
//       </div>

//       {/* Featured Badge */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 0.6, delay: 1 }}
//         className="relative group"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#1e3a8a] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
//         <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
//           <div className="flex flex-col sm:flex-row items-start gap-4">
//             <div className="flex-shrink-0">
//               <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-[#1e3a8a] flex items-center justify-center shadow-lg">
//                 <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
//                 3M Authorized Converter
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 Proudly recognized as one of the top-performing 3M Authorized Converters in Pakistan
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Stats and Features Component
// const StatsAndFeatures = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const stats = [
//     { 
//       number: "18+", 
//       label: "Years of Excellence",
//       icon: (
//         <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//       )
//     },
//     { 
//       number: "70+", 
//       label: "Professionals",
//       icon: (
//         <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     { 
//       number: "2005", 
//       label: "Established",
//       icon: (
//         <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//         </svg>
//       )
//     },
//     { 
//       number: "Top", 
//       label: "3M Converter",
//       icon: (
//         <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//         </svg>
//       )
//     }
//   ];

//   const features = [
//     {
//       title: "Banking",
//       description: "Premium signage for financial institutions",
//       gradient: "from-cyan-500 to-cyan-600",
//       icon: (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//         </svg>
//       )
//     },
//     {
//       title: "Oil & Gas",
//       description: "Industrial-grade solutions",
//       gradient: "from-[#1e3a8a] to-[#1e40af]",
//       icon: (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//         </svg>
//       )
//     },
//     {
//       title: "FMCG",
//       description: "Retail and consumer brands",
//       gradient: "from-cyan-400 to-cyan-500",
//       icon: (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//         </svg>
//       )
//     },
//     {
//       title: "Automotive",
//       description: "Showroom and dealership graphics",
//       gradient: "from-[#2563eb] to-[#1e3a8a]",
//       icon: (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       )
//     },
//     {
//       title: "Hospitality",
//       description: "Hotels and resorts branding",
//       gradient: "from-cyan-600 to-[#0891b2]",
//       icon: (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div ref={ref} className="space-y-6 sm:space-y-8">
//       {/* Stats Grid */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8 }}
//         className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
//       >
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.1 * index }}
//             whileHover={{ scale: 1.05, y: -5 }}
//             className="group relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-[#1e3a8a]/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg">
//               <div className="mb-3 flex justify-center">{stat.icon}</div>
//               <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a8a] mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Industry Sectors */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="space-y-4"
//       >
//         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//           Industry Sectors
//         </h3>
        
//         <div className="space-y-3">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
//               whileHover={{ x: 10 }}
//               className="group relative"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity`} />
//               <div className="relative bg-white border-2 border-gray-100 rounded-xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 shadow-md hover:shadow-lg transition-shadow">
//                 <div className="flex-shrink-0">
//                   {feature.icon}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">
//                     {feature.title}
//                   </h4>
//                   <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-1">
//                     {feature.description}
//                   </p>
//                 </div>
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Timeline Section Component
// const TimelineSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const timeline = [
//     { 
//       year: "2005", 
//       title: "Foundation", 
//       description: "Started as a signage fabricator",
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//         </svg>
//       )
//     },
//     { 
//       year: "2010", 
//       title: "Evolution", 
//       description: "Transformed into graphic conversion facility",
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       )
//     },
//     { 
//       year: "2015", 
//       title: "Expansion", 
//       description: "Grew to 70+ professionals across Pakistan",
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     { 
//       year: "2023", 
//       title: "Recognition", 
//       description: "Top 3M Authorized Converter status",
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div ref={ref} className="mt-16 sm:mt-20 lg:mt-32">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8 sm:mb-12"
//       >
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
//           Our Evolution
//         </h2>
//         <p className="text-base sm:text-lg text-gray-600">
//           Two decades of growth and innovation
//         </p>
//       </motion.div>

//       <div className="relative">
//         {/* Timeline Line - Desktop */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 1.5, delay: 0.3 }}
//           className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-[#1e3a8a] to-cyan-500 transform -translate-y-1/2 origin-left hidden lg:block"
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {timeline.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.5 + (0.1 * index) }}
//               className="relative"
//             >
//               <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 group hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-xl">
//                 <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-[#1e3a8a] flex items-center justify-center text-white shadow-lg">
//                     {item.icon}
//                   </div>
//                 </div>
                
//                 <div className="text-center mt-6 sm:mt-8">
//                   <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a8a] mb-2 sm:mb-3">
//                     {item.year}
//                   </div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-xs sm:text-sm md:text-base">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Partnership Section Component
// const PartnershipSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8 }}
//       className="mt-16 sm:mt-20 lg:mt-32 relative"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-[#1e3a8a]/5 rounded-2xl sm:rounded-3xl blur-3xl" />
      
//       <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="inline-block mb-4 sm:mb-6"
//           >
//             <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-[#1e3a8a] flex items-center justify-center mx-auto shadow-xl">
//               <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//             </div>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
//           >
//             Strategic Partnerships
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4"
//           >
//             With more than 18 years of industry expertise, Sign Links has cultivated strong partnerships with renowned suppliers and manufacturers. Our commitment to excellence and quality in all aspects of our operations has earned us recognition as one of Pakistan's premier signage solution providers.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.9 }}
//             className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-600 to-[#1e3a8a] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <span>Trusted by Leading Brands</span>
//             <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // CTA Section Component
// const CTASection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8 }}
//       className="mt-16 sm:mt-20 lg:mt-32 text-center pb-12"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
//       >
//         Ready to Transform Your Brand?
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
//       >
//         Let's create exceptional signage solutions that elevate your brand presence
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 0.6, delay: 0.6 }}
//         className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-[#1e3a8a] text-white font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
//         >
//           Get Started
//         </motion.button>
        
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-full text-sm sm:text-base md:text-lg hover:border-cyan-500 hover:text-cyan-600 transition-colors shadow-md"
//         >
//           View Portfolio
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutUs;













'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div id='about' ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1e3a8a]/5 to-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/5 to-[#1e3a8a]/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlM2E4YSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybn48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
      >
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content Grid */}
        <div className="mt-16 sm:mt-20 lg:mt-32 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left Column - Story */}
          <StorySection />

          {/* Right Column - Stats & Features */}
          <StatsAndFeatures />
        </div>

        {/* Timeline Section */}
        <TimelineSection />

        {/* Partnership Section */}
        <PartnershipSection />

        {/* CTA Section */}
        <CTASection />
      </motion.div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 sm:mb-12 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#1e3a8a] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white border-2 border-gray-100 shadow-xl rounded-2xl p-4 sm:p-6 md:p-8">
              <Image
                src="/signlinkslogo.png"
                alt="Sign Links Advertising Logo"
                width={120}
                height={80}
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </div>
          </div>
        </motion.div>

        <motion.span 
          className="inline-block text-xs sm:text-sm md:text-base font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a8a] uppercase mb-3 sm:mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Us
        </motion.span>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Crafting Visual
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-[#1e3a8a]">
            Excellence
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Delivering premium signage & branding solutions since 2005 — transforming brands nationwide in Pakistan
        </motion.p>
      </motion.div>
    </div>
  );
};

// Story Section Component
const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "4rem" } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-cyan-500 to-[#1e3a8a] mb-6 sm:mb-8"
        />
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Journey
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Founded in <span className="text-gray-900 font-semibold">2005</span> in Karachi, Sign Links Advertising® began as a dedicated signage fabricator and has evolved into Pakistan&apos;s premier end-to-end signage and graphic conversion specialist.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We proudly partner with leading brands across key industries including <span className="text-cyan-600 font-medium">Banking</span>, <span className="text-[#1e3a8a] font-medium">Oil & Gas</span>, <span className="text-cyan-500 font-medium">FMCG</span>, <span className="text-[#2563eb] font-medium">Automotive</span>, and <span className="text-cyan-600 font-medium">Hospitality</span>, delivering durable, high-impact visual solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            With a committed team of <span className="text-gray-900 font-semibold">over 70 professionals</span> operating from multiple locations and a state-of-the-art facility in Karachi, we continue to innovate and expand to exceed evolving client expectations.
          </motion.p>
        </div>
      </div>

      {/* Featured Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#1e3a8a] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
        <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-[#1e3a8a] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Top 3M Authorized Converter
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                One of Pakistan&apos;s highest-performing 3M Authorized Converters, delivering unmatched quality and durability
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Stats and Features Component
const StatsAndFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { 
      number: "20+", 
      label: "Years of Excellence",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      number: "70+", 
      label: "Skilled Professionals",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: "2005", 
      label: "Established",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      number: "Top", 
      label: "3M Converter",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const features = [
    {
      title: "Banking",
      description: "Premium branch & ATM branding nationwide",
      gradient: "from-cyan-500 to-cyan-600",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Oil & Gas",
      description: "Durable fuel station & canopy solutions",
      gradient: "from-[#1e3a8a] to-[#1e40af]",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "FMCG",
      description: "Eye-catching retail & consumer branding",
      gradient: "from-cyan-400 to-cyan-500",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Automotive",
      description: "Showroom & dealership graphics that stand out",
      gradient: "from-[#2563eb] to-[#1e3a8a]",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Hospitality",
      description: "Luxury hotel & resort signage solutions",
      gradient: "from-cyan-600 to-[#0891b2]",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <div ref={ref} className="space-y-6 sm:space-y-8">
      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-[#1e3a8a]/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg">
              <div className="mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a8a] mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Industry Sectors */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-4"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          Key Industry Sectors
        </h3>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
              whileHover={{ x: 10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative bg-white border-2 border-gray-100 rounded-xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-1">
                    {feature.description}
                  </p>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Timeline Section Component
const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    { 
      year: "2005", 
      title: "Foundation", 
      description: "Established in Karachi as a signage fabricator",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      year: "2010s", 
      title: "Evolution", 
      description: "Grew into full graphic conversion & branding specialist",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      year: "2020s", 
      title: "Nationwide Growth", 
      description: "Expanded to 70+ professionals across Pakistan",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      year: "Present", 
      title: "Industry Leadership", 
      description: "Recognized as a top 3M Authorized Converter",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <div ref={ref} className="mt-16 sm:mt-20 lg:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
          Our Evolution
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Over two decades of innovation, growth, and premium craftsmanship
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line - Desktop */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-[#1e3a8a] to-cyan-500 transform -translate-y-1/2 origin-left hidden lg:block"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + (0.1 * index) }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 group hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-xl">
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-[#1e3a8a] flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                <div className="text-center mt-6 sm:mt-8">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a8a] mb-2 sm:mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Partnership Section Component
const PartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-16 sm:mt-20 lg:mt-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-[#1e3a8a]/5 rounded-2xl sm:rounded-3xl blur-3xl" />
      
      <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-[#1e3a8a] flex items-center justify-center mx-auto shadow-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
          >
            Strategic Partnerships
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4"
          >
            With over 20 years of proven expertise, Sign Links Advertising® has built enduring partnerships with global leaders like 3M and GE. This enables us to deliver premium, long-lasting signage using certified materials and cutting-edge LED technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-600 to-[#1e3a8a] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Trusted by Pakistan&apos;s Top Brands</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// CTA Section Component
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-16 sm:mt-20 lg:mt-32 text-center pb-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
      >
        Ready to Elevate Your Brand?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
      >
        Partner with us to create standout, durable signage that drives visibility and impact across Pakistan
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-[#1e3a8a] text-white font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
        >
          Get in Touch
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-full text-sm sm:text-base md:text-lg hover:border-cyan-500 hover:text-cyan-600 transition-colors shadow-md"
        >
          Explore Our Work
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;