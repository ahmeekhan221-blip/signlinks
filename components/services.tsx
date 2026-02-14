// import React from 'react';

// import {
//   Search,
//   DollarSign,
//   ThumbsUp,
//   FileText,
//   Mail,
//   Star,
//   Link,
//   Code,
//   ShoppingCart,
//   Shield,
//   BarChart3,
//   Video,
//   Edit,
//   Mic,
//   MessageCircle,
// } from "lucide-react";

// const services = [
//   {
//     icon: Search,
//     title: "Search Engine\nOptimization",
//     description:
//       "Enhance your website's visibility on search engines and attract more organic traffic with tailored SEO strategies.",
//   },
//   {
//     icon: DollarSign,
//     title: "Pay-Per-Click\nAdvertising",
//     description:
//       "Drive instant traffic and measurable results with cost-effective PPC campaigns across major platforms.",
//   },
//   {
//     icon: ThumbsUp,
//     title: "Social Media\nMarketing",
//     description:
//       "Engage your audience and grow your brand with compelling social media campaigns and strategies.",
//   },
//   {
//     icon: FileText,
//     title: "Content\nMarketing",
//     description:
//       "Create and distribute valuable, relevant content to attract and retain a clearly defined audience.",
//   },
//   {
//     icon: Mail,
//     title: "Email\nMarketing",
//     description:
//       "Reach your audience directly and foster loyalty with personalized email marketing campaigns.",
//   },
//   {
//     icon: Star,
//     title: "Influencer\nMarketing",
//     description:
//       "Collaborate with industry influencers to amplify your brand and connect with niche audiences.",
//   },
//   {
//     icon: Link,
//     title: "Affiliate\nMarketing",
//     description:
//       "Boost your sales through partnerships and a robust affiliate marketing network.",
//   },
//   {
//     icon: Code,
//     title: "Website\nDevelopment",
//     description:
//       "Build user-friendly, responsive websites that drive conversions and represent your brand effectively.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "E-commerce\nSolutions",
//     description:
//       "Launch or enhance your online store with cutting-edge e-commerce solutions tailored to your needs.",
//   },
//   {
//     icon: Shield,
//     title: "Online Reputation\nManagement",
//     description:
//       "Monitor, manage, and improve your brand’s online reputation to build trust with your audience.",
//   },
//   {
//     icon: BarChart3,
//     title: "Digital\nAnalytics",
//     description:
//       "Analyze data to gain actionable insights and make informed decisions for your digital campaigns.",
//   },
//   {
//     icon: Video,
//     title: "Video\nMarketing",
//     description:
//       "Captivate your audience with engaging video content tailored to your brand and goals.",
//   },
//   {
//     icon: Edit,
//     title: "Blog\nManagement",
//     description:
//       "Maintain and grow your blog with high-quality content and effective SEO practices.",
//   },
//   {
//     icon: Mic,
//     title: "Podcast\nMarketing",
//     description:
//       "Leverage the power of podcasts to build your brand and connect with your target audience.",
//   },
//   {
//     icon: MessageCircle,
//     title: "Messenger\nMarketing",
//     description:
//       "Engage with your audience directly and efficiently through messenger platforms.",
//   },
// ];



// const Services = () => {
//   return (
//     <section id="services" className="py-16">
//       <div className="container mx-auto px-4">
//         <h1 className=' text-5xl font-bold mb-8'>Our Services</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative p-8 transition-transform duration-300 hover:translate-y-[20px] hover:translate-x-[10px] "
//             >
//               {/* Main card with border */}
//               <div className="absolute inset-0 border-2  rounded-lg shadow-lg"  style={{
//                 borderTopRightRadius: '3rem',
//                 borderBottomLeftRadius: '3rem'
//               }} />
              
//               {/* Content */}
//               <div className="relative space-y-4 " >
//                 <service.icon className="w-6 h-6" />
//                 <h3 className="text-xl font-bold whitespace-pre-line">
//                   {service.title}
//                 </h3>
//                 <p className=" text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
















































'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <div id="services" ref={containerRef} className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-cyan-500/5 to-[#1e3a8a]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -45, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-tl from-[#1e3a8a]/5 to-cyan-400/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-cyan-600 to-[#1e3a8a] text-transparent bg-clip-text mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Signage & Branding Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From concept to installation — premium, durable, and innovative visual solutions tailored for Pakistan&apos;s leading brands.
          </motion.p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-[#1e3a8a]/0 group-hover:from-cyan-500/10 group-hover:to-[#1e3a8a]/10 transition-opacity" />
              
              <div className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-[#1e3a8a] flex items-center justify-center mb-6 text-white shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value-Added & Infrastructure Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 lg:mt-24 text-center"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Value-Added Services & Advanced Infrastructure
          </h3>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-md">
              <h4 className="text-lg font-semibold mb-2">Design & Planning</h4>
              <p className="text-gray-600">Space/layout planning, interior design, fixture design, 3D visuals, graphic design, prototyping, manuals.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-md">
              <h4 className="text-lg font-semibold mb-2">In-House Technology</h4>
              <p className="text-gray-600">UV & Roland printing (3M-approved), CNC routers, fiber/CO2 lasers, laser welding, wall banders — full vertical integration for precision & speed.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-md">
              <h4 className="text-lg font-semibold mb-2">HSE Compliance</h4>
              <p className="text-gray-600">Zero-tolerance safety policy with dedicated HSE Manager, regular trainings, and client collaboration for safe, best-practice execution.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-[#1e3a8a] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Discuss Your Project
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

const servicesData = [
  {
    title: "Fascia & Canopy Signage",
    description: "Striking illuminated fascias, canopies, and rooftop signs for maximum brand visibility at branches and fuel stations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Retail & Branch Branding",
    description: "Complete branch makeovers, retail identity packages, and consistent nationwide rollouts for banks, OMCs, and stores.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "3D Lettering & Channel Letters",
    description: "Premium stainless steel, brass, acrylic, and illuminated channel letters for luxurious, standout signage.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4h-2m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Backlit & Illuminated Signage",
    description: "High-efficiency LED backlit fascias, displays, and large-format signs (including Pakistan's largest rooftop installations).",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Internal & Wayfinding Signage",
    description: "Directional, regulatory, safety, hazard, and indoor branding signs for seamless navigation and compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fuel Station & ATM Solutions",
    description: "Specialized fabrication for dispensers, canopies, ATM kiosks, and branded elements in high-traffic environments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default Services;