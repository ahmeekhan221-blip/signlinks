// // app/team/page.tsx
// import { type FC } from 'react';

// type TeamMember = {
//   name: string;
//   title: string;
//   image: string;
//   description?: string;
//   linkedin?: string;
//   twitter?: string;
//   github?: string;
// };

// const teamMembers: TeamMember[] = [
//   {
//     name: '',
//     title: 'Founder & CEO',
//     image: '',
//     description:
//       '',
//     linkedin: '',
//     twitter: '',
//   },
//   {
//     name: 'Nihal Khan Ghauri',
//     title: 'Agnetic AI Engineer',
//     image: '/nihalkhanghauri.webp',
//     description:
//       'Distributed systems architect. Previously scaled infrastructure at high-growth startups to millions of daily users.',
//     github: 'https://github.com/hamzaq',
//     linkedin: 'https://linkedin.com/in/hamza-qureshi',
//   },
// //   {
// //     name: 'Sara Farooq',
// //     title: 'Head of Design',
// //     image: 'https://img.freepik.com/premium-photo/woman-suit_777078-105229.jpg',
// //     description:
// //       'Crafting emotionally intelligent interfaces. Obsessed with motion, typography and human-centered design.',
// //     linkedin: 'https://linkedin.com/in/sara-farooq-design',
// //   },
// //   {
// //     name: 'Zain Abbas',
// //     title: 'Lead Backend Engineer',
// //     image: 'https://www.shutterstock.com/shutterstock/photos/1466709059/display_1500/stock-photo-young-pakistani-businessman-wearing-suit-leaning-on-metal-wall-inside-the-underpass-to-take-a-break-1466709059.jpg',
// //     description:
// //       'Performance & reliability focused. TypeScript, Go, PostgreSQL, event-driven architecture.',
// //     github: 'https://github.com/zainabbas',
// //     linkedin: 'https://linkedin.com/in/zain-abbas-engineer',
// //   },
// //   {
// //     name: 'Fatima Rehman',
// //     title: 'Product Marketing Lead',
// //     image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=800&q=80',
// //     description:
// //       'Storyteller bridging complex tech with clear customer value and market positioning.',
// //     linkedin: 'https://linkedin.com/in/fatima-rehman',
// //   },
// //   {
// //     name: 'Omar Khalid',
// //     title: 'Senior Frontend Engineer',
// //     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
// //     description:
// //       'React & Next.js specialist. Performance, accessibility and elegant code are core principles.',
// //     github: 'https://github.com/omarkhalid',
// //   },
// ];

// const TeamPage: FC = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen">
//       {/* Very subtle background texture */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_0.8px,transparent_0.8px)] dark:bg-[radial-gradient(#1f2937_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

//         {/* ==================== CEO MESSAGE ==================== */}
//         <section className="mx-auto max-w-4xl mb-20 lg:mb-28">
//           <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start bg-white/70 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 lg:p-10 shadow-xl shadow-gray-200/30 dark:shadow-black/20">
            
//             {/* CEO Portrait */}
//             <div className="shrink-0">
//               <div className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/80 dark:ring-gray-800/80">
//                 <img
//                   src={teamMembers[0].image}
//                   alt={`${teamMembers[0].name} — ${teamMembers[0].title}`}
//                   className="h-full w-full object-cover object-top"
//                   width={288}
//                   height={288}
//                   loading="lazy"
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="flex-1 text-center md:text-left space-y-6">
//               <div>
//                 <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                   From Our CEO
//                 </h1>
//                 <p className="mt-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
//                   {teamMembers[0].name} — {teamMembers[0].title}
//                 </p>
//               </div>

//               <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
//                 <p>
//                   We founded this company with a simple conviction: great technology should feel effortless — making work faster, clearer, and more human.
//                 </p>
//                 <p>
//                   That north star still guides every line of code, every design choice, and every customer interaction. What keeps us grounded is our compact, remarkably talented team — people who combine exceptional skill with genuine care, curiosity, and pride of ownership.
//                 </p>
//                 <p className="font-medium">
//                   Thank you — whether you’re using our product daily, exploring what we build, or considering joining us — for being part of this journey.
//                 </p>
//                 <p className="italic text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200/50 dark:border-gray-800/50 mt-6 pt-6">
//                   Here’s to creating tools that people truly love.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ==================== TEAM GRID ==================== */}
//         <section>
//           <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12 lg:mb-16">
//             Our Team
//           </h2>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {teamMembers.map((person, index) => (
//               <div
//                 key={person.name}
//                 className={`group relative bg-white dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/60 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-900/20 hover:-translate-y-1 hover:border-indigo-400/40 dark:hover:border-indigo-500/40 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
//               >
//                 {/* Image + overlay */}
//                 <div className="relative aspect-[4/5] overflow-hidden">
//                   <img
//                     src={person.image}
//                     alt={person.name}
//                     className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                     width={400}
//                     height={500}
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 text-center space-y-4">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
//                       {person.name}
//                     </h3>
//                     <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
//                       {person.title}
//                     </p>
//                   </div>

//                   {person.description && (
//                     <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-3">
//                       {person.description}
//                     </p>
//                   )}

//                   {/* Social links */}
//                   {(person.linkedin || person.twitter || person.github) && (
//                     <div className="flex justify-center gap-5 pt-2 opacity-80 group-hover:opacity-100 transition-opacity">
//                       {person.linkedin && (
//                         <a
//                           href={person.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
//                           aria-label="LinkedIn"
//                         >
//                           <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                           </svg>
//                         </a>
//                       )}

//                       {person.twitter && (
//                         <a
//                           href={person.twitter}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
//                           aria-label="X"
//                         >
//                           <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                           </svg>
//                         </a>
//                       )}

//                       {person.github && (
//                         <a
//                           href={person.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
//                           aria-label="GitHub"
//                         >
//                           <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                           </svg>
//                         </a>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;





import React from 'react'

function page() {
  return (
    <div>on final </div>
  )
}

export default page