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
















// components/ClientsSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

interface Client {
  name: string;
  logo: string;      // preferably .svg with transparent bg
  url?: string;
}

const clients: Client[] = [
  { name: "Bank Alfalah", logo: "/BAF.png", url: "https://www.bankalfalah.com/" },
  { name: "byco",logo: "/Byco.png",url:"" },
  { name: "caltex", logo: "/Caltex.png", url: "https://gamma.studio" },
  { name: "fbl",  logo: "/FBL.png" },
  { name: "hbl",   logo: "/hbl_oldlogo.png" },
  { name: "ubl",   logo: "/UBL.png", url: "https://UBL.group" },
  { name: "PUMA",   logo: "/PumaEnergy.png", url: "https://UBL.group" },
  { name: "n3",   logo: "/N3.png", url: "https://UBL.group" },
  { name: "soneri",   logo: "/Soneri Bank.png", url: "https://UBL.group" },
  { name: "hascol",   logo: "/Hascol.png", url: "https://UBL.group" },
  { name: "PSO",   logo: "/PSO.png", url: "https://UBL.group" },
  { name: "SUZUKI",   logo: "/PumaEnergy.png", url: "https://UBL.group" }

  
];  

const ClientsSection: FC = () => {
  return (
    <section className="py-28 md:py-36 lg:py-40 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading – understated & confident */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight
            text-neutral-900 dark:text-neutral-100
          ">
            CLIENTS
          </h2>
          <p className="
            mt-5 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto
            dark:text-neutral-400 font-light
          ">
            Working alongside exceptional teams building the future.
          </p>
        </div>

        {/* Logo grid – clean, centered, generous gaps */}
        <div className="
          grid grid-cols-2 gap-x-10 gap-y-16 
          sm:grid-cols-3 sm:gap-x-12 sm:gap-y-20
          md:grid-cols-4 md:gap-x-16 md:gap-y-24
          lg:grid-cols-6 lg:gap-x-20 lg:gap-y-28
          place-items-center
        ">
          {clients.map((client) => (
            <div
              key={client.name}
              className="
                group relative flex items-center justify-center
                w-full max-w-[130px] sm:max-w-[150px] lg:max-w-[170px]
                h-16 sm:h-20 transition-all duration-300
              "
            >
              {client.url ? (
                <Link
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full h-full
                    opacity-100 group-hover:placeholder-opacity-95
                    transition-opacity duration-300
                    focus-visible:opacity-100 focus:outline-none
                    focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700
                    rounded-xl
                  "
                  aria-label={`Visit ${client.name}`}
                >
                  <Logo src={client.logo} alt={client.name} />
                </Link>
              ) : (
                <Logo src={client.logo} alt={client.name} />
              )}
            </div>
          ))}
        </div>

        {/* Subtle ending note */}
        {/* <div className="mt-20 md:mt-28 text-center">
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-500 font-light italic">
            And more meaningful collaborations in progress…
          </p>
        </div> */}

      </div>
    </section>
  );
};

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: FC<LogoProps> = ({ src, alt }) => (
  <div className="relative w-full h-full">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
      sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 170px"
      quality={92}
      // remove grayscale if your logos are already styled / colored
      // className="object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
    />
  </div>
);

export default ClientsSection;