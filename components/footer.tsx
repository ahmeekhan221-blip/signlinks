// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white  py-8 md:py-12 ">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="text-center sm:text-left">
//             <h3 className="text-lg md:text-xl font-bold mb-4">Viral Spark Media Agency</h3>
//             <p className="text-gray-400 text-sm">
//               A top tier marketplace that helps market and build products that people love.
//             </p>
//           </div>
//           <div className="text-center sm:text-left">
//             <h4 className="font-semibold mb-4">Our services</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li className="hover:text-white transition-colors cursor-pointer">SEO Marketing</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Web Design</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Social Media</li>
//             </ul>
//           </div>
//           <div className="text-center sm:text-left">
//   <h4 className="font-semibold mb-4">Quick link</h4>
//   <ul className="space-y-2 text-gray-400 text-sm">
//     <li>
//       <Link
//         href="#about"
//         className="hover:text-white transition-colors cursor-pointer"
//       >
//         About Us
//       </Link>
//     </li>
//     <li>
//       <Link
//         href="#services"
//         className="hover:text-white transition-colors cursor-pointer"
//       >
//         Services
//       </Link>
//     </li>
//     <li>
//       <Link
//         href="#contact"
//         className="hover:text-white transition-colors cursor-pointer"
//       >
//         Contact Us
//       </Link>
//     </li>
//   </ul>
// </div>

//           <div className="text-center sm:text-left">
//             <h4 className="font-semibold mb-4">Contact us</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>karachi, Pakistan</li>
//               <li>viralsparkmediaagency@gmail.com</li>
//             </ul>
//           </div>
//         </div>
//       <div className="border-t border-gray-700 mt-10 md:mt-16 pt-6 text-center text-gray-500 text-sm space-y-2">
//   <p className="font-medium">
//     © 2025 <span className="text-white font-semibold">Viral Spark Media Agency</span>. All rights reserved.
//   </p>
//   <p className="text-gray-400">
// made with <span className="text-red-500 ">&hearts;</span> by {''}
//     <Link
//   href="https://nihalkhanghauri.vercel.app/"
//   target="_blank"
//   rel="noopener noreferrer"
//               // className="text-black font-bold font-serif relative inline-block hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-blue-400 before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100
//               // hover:translate-x-1"
//                className="text-white font-bold font-serif relative inline-block hover:text-black bg-clip-text  transition-all duration-300 before:absolute before:inset-0 before:bg-blue-100 before:from-transparent before:to-transparent before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 hover:translate-x-2 shadow-lg"

// >
//   Nihal Khan Ghauri
// </Link>

//   </p>
// </div>


//       </div>
//     </footer>
//   )
// }












// // components/Footer.tsx
// import Link from 'next/link';
// import { Twitter, Linkedin, Github, Mail, Send } from 'lucide-react';
// import Image from 'next/image';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#030303] text-gray-400">
//       {/* Main footer content */}
//       <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          
//           {/* Column 1 - Brand + Description */}
//           <div className="space-y-6">
//             <Link href="/" className="flex items-center gap-3">
              
//                 <Image
//                   src="/Logo for Web.png"
//                   alt="Sign Links LOGO"
//                   width={140}
//                   height={140}
//                   priority
//                   className="object-contain drop-shadow-md"
//                 />
//             </Link>
//             <p className="text-gray-400 leading-relaxed max-w-xs">
//               Building tools that make work feel better — faster, clearer, and more meaningful.
//             </p>

//             <div className="flex items-center gap-5 text-gray-500">
//               <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                 <Twitter className="h-5 w-5 hover:text-white transition-colors" />
//               </a>
//               <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <Linkedin className="h-5 w-5 hover:text-white transition-colors" />
//               </a>
//               <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                 <Github className="h-5 w-5 hover:text-white transition-colors" />
//               </a>
//             </div>
//           </div>

//           {/* Column 2 - Product */}
//           <div className='text-[13px]'>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
//               Useful Links
//             </h3>
//             <ul className="space-y-4">
//               <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
//               <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
//               <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
//               <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
//               <li><Link href="#achievements" className="hover:text-white transition-colors">Achievements</Link></li>
//               <li><Link href="#team" className="hover:text-white transition-colors">Team</Link></li>
//               <li><Link href="#contact" className="hover:text-white transition-colors">contact</Link></li>
//             </ul>
//           </div>

//           {/* Column 3 - Company */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
//               Company
//             </h3>
//             <ul className="space-y-4">
//               <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
//               <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
//               <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
//               <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
//               <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
//             </ul>
//           </div>

//           {/* Column 4 - Support + Contact */}
//           {/* <div className="space-y-8">
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
//                 Support
//               </h3>
//               <ul className="space-y-4">
//                 <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
//                 <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
//                 <li><Link href="/status" className="hover:text-white transition-colors">Status</Link></li>
//                 <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
//               </ul>
//             </div>

            
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
//                 Stay Updated
//               </h3>
//               <form className="flex">
//                 <input
//                   type="email"
//                   placeholder="your@email.com"
//                   className="flex-1 min-w-0 rounded-l-lg border-0 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="rounded-r-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-500 transition-colors flex items-center gap-2"
//                 >
//                   <Send className="h-4 w-4" />
//                 </button>
//               </form>
//               <p className="mt-3 text-xs text-gray-500">
//                 Get product updates, tips, and company news.
//               </p>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-gray-800">
//         <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
//           <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
//             <p className="text-sm text-gray-500">
//               © {currentYear} YourCompany. All rights reserved.
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 text-sm">
//               <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//               <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
//               <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
//               <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
//             </div>

//             <p className="text-sm text-gray-500">
//               Made with ♥ in Karachi
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }












// // components/Footer.tsx
// import Link from 'next/link';
// import Image from 'next/image';
// import { Twitter, Linkedin, Github } from 'lucide-react';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const services = [
//     "Fascia & Canopy Signage",
//     "Retail & Branch Branding",
//     "3D Lettering & Channel Letters",
//     "Backlit & Illuminated Signage",
//     "Internal & Wayfinding Signage",
//     "Fuel Station & ATM Solutions",
//   ];

//   return (
//     <footer className="bg-[#030303] text-gray-400">
//       {/* Main Footer */}
//       <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          
//           {/* Column 1 - Brand */}
//           <div className="space-y-6">
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/Logo for Web.png"
//                 alt="Sign Links LOGO"
//                 width={140}
//                 height={140}
//                 priority
//                 className="object-contain drop-shadow-md"
//               />
//             </Link>

//             <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
//               Premium signage & branding solutions across Pakistan — 
//               from concept to installation with precision, durability, and innovation.
//             </p>

//             <div className="flex items-center gap-5 text-gray-500 pt-2">
//               <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//                 <Twitter className="h-5 w-5 hover:text-white transition-colors duration-300" />
//               </a>
//               <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
//                 <Linkedin className="h-5 w-5 hover:text-white transition-colors duration-300" />
//               </a>
//               <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//                 <Github className="h-5 w-5 hover:text-white transition-colors duration-300" />
//               </a>
//             </div>
//           </div>

//           {/* Column 2 - Useful Links */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
//               Useful Links
//             </h3>
//             <ul className="space-y-4 text-sm">
//               <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
//               <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
//               <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
//               <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
//               <li><Link href="#achievements" className="hover:text-white transition-colors">Achievements</Link></li>
//               <li><Link href="#team" className="hover:text-white transition-colors">Team</Link></li>
//               <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Column 3 - Our Services */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
//               Our Services
//             </h3>
//             <ul className="space-y-4 text-sm">
//               {services.map((service, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#services"
//                     className="hover:text-white transition-colors"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

          
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
//           <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

//             <p className="text-sm text-gray-500 text-center md:text-left">
//               © {currentYear} Sign Links. All rights reserved.
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 text-sm">
//               <Link href="/privacy" className="hover:text-white transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="hover:text-white transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="/cookies" className="hover:text-white transition-colors">
//                 Cookie Policy
//               </Link>
//               <Link href="/sitemap" className="hover:text-white transition-colors">
//                 Sitemap
//               </Link>
//             </div>


//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
















// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Developer } from "./link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Fascia & Canopy Signage",
    "Retail & Branch Branding",
    "3D Lettering & Channel Letters",
    "Backlit & Illuminated Signage",
    "Internal & Wayfinding Signage",
    "Fuel Station & ATM Solutions",
  ];

  return (
    <footer className="relative bg-[#030303] text-gray-400 border-t border-gray-900">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 ">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Logo for Web.png"
                alt="Sign Links Logo"
                width={160}
                height={160}
                priority
                className="object-contain drop-shadow-xl"
              />
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
              Premium signage & branding solutions across Pakistan —
              delivering concept-to-installation excellence with durability,
              precision, and innovation.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "home",
                "about",
                "services",
                "portfolio",
                "achievements",
                "team",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="hover:text-white    transition- duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin size={24} className="mt-1 text-gray-500" />
                <span>Plot # 91 Block C, Sector 31/D, P&T Coperative Housing Korangi Karachi</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500" />
                <a
                  
                  className="hover:text-white transition-colors"
                >
                 +92-21 350062121   -35120202
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500" />
                <a
                  href="mailto:info@signlinks.com"
                  className="hover:text-white transition-colors"
                >info@signlinks.com.pk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="border-t border-gray-900">
  <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
    
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      
      <p className="text-sm text-gray-500">
        © {currentYear} Sign Links. All rights reserved.
      </p>

      

    </div>

    <div className="mt-1 flex justify-center">
      <Developer/>
    </div>

  </div>
</div>


      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
