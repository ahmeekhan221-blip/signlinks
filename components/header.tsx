// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// interface NavItem {
//   label: string;
//   href: string;
// }

// const navigation: NavItem[] = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Portfolio", href: "#portfolio" },
//   { label: "Achievements", href: "#achievements" },
//   { label: "Team", href: "#team" },
//   { label: "Contact", href: "#contact" }
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScrollTo = (href: string, index: number) => {
//     setActiveIndex(index);
//     setIsOpen(false);
//     if (href.startsWith('#')) {
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <div className="bg-[#f8f9fc] py-4">
//       {/* Font Import */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
//       `}} />

//       <header className="container mx-auto px-2 sm:px-0">
//         <motion.div 
//           className="bg-white rounded-[50px] shadow-lg px-8 py-2"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ 
//             y: -2,
//             boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)"
//           }}
//         >
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <Link
//               href="/#"
//               className="flex items-center space-x-3"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <Image
//                   src="/Logo for Web.png"
//                   alt="Sign Links LOGO"
//                   width={170}
//                   height={170}
//                   priority
//                   className="rounded-lg"
//                 />
//               </motion.div>
              
//               {/* <div className="flex flex-col leading-none" style={{ fontFamily: "'Orbitron', sans-serif" }}>
//                 <motion.div 
//                   className="text-2xl font-black uppercase"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <motion.span 
//                     className="text-[#252074]"
//                     // whileHover={{ color: "#04acec" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     SIGN
//                   </motion.span>
//                   <motion.span 
//                     className="text-[#04acec]"
//                     // whileHover={{ color: "#252074" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     LINKS
//                   </motion.span>
//                 </motion.div>
//                 <span className="text-[5px] uppercase tracking-[0.3em] font-bold text-gray-500">
//                   Advertising Solution Provider
//                 </span>
//               </div> */}
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               {navigation.map((item, index) => (
//                 <motion.button
//                   key={item.label}
//                   onClick={() => handleScrollTo(item.href, index)}
//                   className={`relative font-medium text-[12px] pb-1 ${
//                     activeIndex === index 
//                       ? 'text-[#4a90e2]' 
//                       : 'text-[#5a6c7d]'
//                   }`}
//                   whileHover={{ 
//                     y: -2,
//                     color: "#4a90e2"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {item.label}
//                   <motion.span
//                     className="absolute bottom-0 left-0 h-[2px] bg-[#4a90e2]"
//                     initial={{ width: activeIndex === index ? "100%" : "0%" }}
//                     animate={{ width: activeIndex === index ? "100%" : "0%" }}
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.button>
//               ))}
//             </nav>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden">
//               <motion.button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-2 hover:bg-gray-100 rounded-md"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <motion.div
//                   animate={{ rotate: isOpen ? 90 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {isOpen ? (
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   ) : (
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                   )}
//                 </motion.div>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" 
//             onClick={() => setIsOpen(false)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div 
//               className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="bg-gradient-to-r from-[#252074] to-[#04acec] p-6 flex items-center justify-between">
//                 <motion.h2 
//                   className="text-xl font-bold text-white uppercase" 
//                   style={{ fontFamily: "'Orbitron', sans-serif" }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   SIGN<span className="text-white">LINKS</span>
//                 </motion.h2>
//                 <motion.button
//                   onClick={() => setIsOpen(false)}
//                   className="p-2 hover:bg-white/20 rounded-md"
//                   whileHover={{ rotate: 90, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   initial={{ opacity: 0, rotate: -90 }}
//                   animate={{ opacity: 1, rotate: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </motion.button>
//               </div>
              
//               <nav className="p-4">
//                 {navigation.map((item, index) => (
//                   <motion.button
//                     key={item.label}
//                     onClick={() => handleScrollTo(item.href, index)}
//                     className={`w-full text-left p-3 rounded-lg font-medium ${
//                       activeIndex === index
//                         ? 'bg-blue-50 text-[#4a90e2]'
//                         : 'text-gray-700'
//                     }`}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.1 * index + 0.3 }}
//                     whileHover={{ 
//                       x: 8,
//                       backgroundColor: "#eff6ff",
//                       color: "#4a90e2",
//                       scale: 1.02,
//                       boxShadow: "0 4px 12px rgba(74, 144, 226, 0.1)"
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {item.label}
//                   </motion.button>
//                 ))}
//               </nav>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }





















"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Achievements", href: "#achievements" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll handler + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Optional: auto-highlight active section
      const sections = navigation.map((item) => item.href.slice(1));
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (href: string, label: string) => {
    setIsOpen(false);
    setActiveSection(label.toLowerCase());

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // adjust for fixed header height
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 g ${
          isScrolled
            ? "py-3  bg-transparent border-b border-white/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl ">
          <motion.div
            className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-400 shadow-lg ${
              isScrolled ? "bg-white" : "bg-white"
            }`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/Logo for Web.png"
                  alt="Sign Links LOGO"
                  width={140}
                  height={140}
                  priority
                  className="object-contain drop-shadow-md"
                />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => handleScrollTo(item.href, item.label)}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-[#4a90e2]" : "text-gray-700 hover:text-[#4a90e2]"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {item.label}

                    {/* Underline indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#4a90e2] to-[#04acec] transition-all duration-1000 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-full hover:bg-gray-100/80 transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M4 8h16M4 16h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50 lg:hidden overflow-y-auto "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="p-6 border-b bg-gradient-to-r from-white to-[#6DB8E8] rounded-bl-2xl rounded-bt-2xl ">
                <div className="flex items-center justify-between">
                  {/* <h2 className="text-2xl font-black text-white tracking-wider" style={{ fontFamily: "'Orbitron', san-serif" }}>
                    SIGN<span className="text-white/90">LINKS</span>
                  </h2> */}
                  <Image
                  src="/Logo for Web.png"
                  alt="Sign Links LOGO"
                  width={140}
                  height={140}
                  priority
                  className="object-contain drop-shadow-md"
                />

                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ rotate: 90, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              <nav className="p-5 flex flex-col gap-2">
                {navigation.map((item, i) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => handleScrollTo(item.href, item.label)}
                      className={`flex items-center justify-center gap-3 p-4 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? "bg-blue-50 text-[#4a90e2] shadow-sm"
                          : "text-gray-800 hover:bg-gray-50 hover:text-[#4a90e2]"
                      }`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i + 0.2, duration: 0.5 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      <div className="h-24 lg:h-28" />
    </>
  );
}