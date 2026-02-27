// 'use client';

// import React from 'react';
// import Image from 'next/image';

// interface Certificate {
//   id: number;
//   title: string;
//   organization: string;
//   year: string;
// }

// interface Machine {
//   id: number;
//   name: string;
//   image: string;
// }

// const certificates: Certificate[] = [
//   {
//     id: 1,
//     title: 'ISO 9001:2015',
//     organization: 'Quality Management',
//     year: '2024',
//   },
//   {
//     id: 2,
//     title: 'CE Certification',
//     organization: 'European Standards',
//     year: '2024',
//   },
//   {
//     id: 3,
//     title: 'Industry Excellence',
//     organization: 'Manufacturing Association',
//     year: '2023',
//   },
//   {
//     id: 4,
//     title: 'Safety Standards',
//     organization: 'Safety Board',
//     year: '2023',
//   },
// ];

// const machines: Machine[] = [
//   {
//     id: 1,
//     name: 'Channel Letter Bending',
//     image: '/roland_sg3.jpg', 
    
//   },
//   {
//     id: 2,
//     name: 'ZPG Fiber Laser',
//     image: '/roland_sg3.jpg',
//   },
//   {
//     id: 3,
//     name: 'CNC Router Machine',
//     image: '/roland_sg3.jpg',
//   },
//   {
//     id: 4,
//     name: 'GZ UV Printer',
//     image: '/uv.jpg',
//   },
//   {
//     id: 5,
//     name: 'Handtop UV Hybrid Printer',
//     image: '/handtop.jpg',
//   },
//   {
//     id: 6,
//     name: 'Laminator',
//     image: '/laminater.jpg',
//   },
//   {
//     id: 7,
//     name: 'Laser Cutting Machine',
//     image: '/laminater.jpg',
//   },
//   {
//     id: 8,
//     name: 'Laser Welding Machine',
//     image: '/laminater.jpg',
//   },
//   {
//     id: 9,
//     name: 'Roland 640',
//     image: '/roland-sg2.jpg',
//   },
//   {
//     id: 10,
//     name: 'Roland 540',
//     image: '/roland_sg3.jpg',
//   },
// ];

// const Achievements: React.FC = () => {
//   return (
//     <div 
//     id="achievements"
//     className=" min-h-screen bg-gradient-to-b from-white to-sky-50">
//       {/* Certificates Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-5xl font-bold text-sky-700 mb-4">
//               Our Achievements
//             </h1>
//             <p className="text-xl text-gray-600">
//               Certified Excellence in Manufacturing
//             </p>
//           </div>

//           {/* Certificates Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {certificates.map((cert) => (
//               <div
//                 key={cert.id}
//                 className="bg-white rounded-xl shadow-lg border-2 border-sky-100 p-6 hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
//                   {cert.title}
//                 </h3>
//                 <p className="text-gray-600 text-center text-sm mb-1">
//                   {cert.organization}
//                 </p>
//                 <p className="text-sky-600 text-center font-semibold">
//                   {cert.year}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Machines Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-5xl font-bold text-sky-700 mb-4">
//               Our Machines
//             </h2>
//             <p className="text-xl text-gray-600">
//               State-of-the-art Manufacturing Equipment
//             </p>
//           </div>

//           {/* Machines Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {machines.map((machine) => (
//               <div
//                 key={machine.id}
//                 className="group bg-sky-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 {/* Machine Image */}
//                 <div className="relative h-64 bg-gradient-to-br from-sky-100 to-sky-200 overflow-hidden">
//                   <div className="absolute inset-0 flex items-center justify-center">
                    
//                     {/* Uncomment and use this when you add actual images */}
//                     <Image
//                       src={machine.image}
//                       alt={machine.name}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>

//                 {/* Machine Info */}
//                 <div className="p-6 bg-white">
//                   <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
//                     {machine.name}
//                   </h3>
//                   <div className="mt-3 flex items-center text-sky-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {/* View Details */}
                    
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default Achievements;



































// 'use client';

// import Image from 'next/image';
// import { type FC, useRef, useState, useEffect } from 'react';
// import {
//   motion,
//   useInView,
//   useAnimationFrame,
//   useMotionValue,
//   useSpring,
//   type MotionValue,
// } from 'framer-motion';

// /* ═══════════════════════════════════════════════════════════
//    BRAND TOKENS
// ═══════════════════════════════════════════════════════════ */
// const C = {
//   cyan:      '#06b6d4',
//   cyanLight: '#22d3ee',
//   blue:      '#1e3a8a',
//   blueMid:   '#2563eb',
//   text:      '#111827',
//   textSub:   '#4b5563',
//   cardBg:    '#f9fafb',
//   grid:      'rgba(30,58,138,0.03)',
// } as const;

// /* ═══════════════════════════════════════════════════════════
//    TYPES
// ═══════════════════════════════════════════════════════════ */
// interface MachineSpecs {
//   power:     string;
//   precision: string;
//   cycle:     string;
// }

// interface Machine {
//   id:         number;
//   name:       string;
//   category:   string;
//   specs:      MachineSpecs;
//   tag:        string;
//   accent:     string;
//   accentDark: string;
//   img:        string;
// }

// interface MarqueeRowProps {
//   items:   Machine[];
//   speed:   number;
//   dir:     1 | -1;
//   rotateX: number;
//   opacity?: number;
// }

// interface CounterProps {
//   to:      number;
//   suffix?: string;
// }

// /* ═══════════════════════════════════════════════════════════
//    DATA  — same images as provided in the original code
// ═══════════════════════════════════════════════════════════ */
// const machines: Machine[] = [
//   {
//     id:         1,
//     name:       'Titan X-9000',
//     category:   'Heavy Industrial Press',
//     specs:      { power: '9,000 kN', precision: '±0.002mm', cycle: '120/hr' },
//     tag:        'FLAGSHIP',
//     accent:     C.cyan,
//     accentDark: C.blue,
//     img:        '/roland_sg3.jpg',
//   },
//   {
//     id:         2,
//     name:       'Vortex CNC-7',
//     category:   '5-Axis Machining Center',
//     specs:      { power: '45 kW', precision: '±0.001mm', cycle: '240/hr' },
//     tag:        'PRECISION',
//     accent:     C.blueMid,
//     accentDark: C.blue,
//     img:        '/roland-sg2.jpg',
//   },
//   {
//     id:         3,
//     name:       'Atlas Forge-3',
//     category:   'Hydraulic Stamping System',
//     specs:      { power: '6,200 kN', precision: '±0.005mm', cycle: '360/hr' },
//     tag:        'HIGH SPEED',
//     accent:     C.cyan,
//     accentDark: C.blueMid,
//     img:        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
//   },
//   {
//     id:         4,
//     name:       'Nexus Laser-Z',
//     category:   'Fiber Laser Cutting System',
//     specs:      { power: '30 kW', precision: '±0.0005mm', cycle: '500/hr' },
//     tag:        'ULTRA-PRECISE',
//     accent:     C.cyanLight,
//     accentDark: C.blue,
//     img:        'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80',
//   },
//   {
//     id:         5,
//     name:       'Colossus Bend-R',
//     category:   'CNC Press Brake',
//     specs:      { power: '4,000 kN', precision: '±0.01mm', cycle: '180/hr' },
//     tag:        'HEAVY DUTY',
//     accent:     C.blue,
//     accentDark: C.blueMid,
//     img:        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
//   },
//   {
//     id:         6,
//     name:       'Omega Weld-5X',
//     category:   'Robotic Welding Cell',
//     specs:      { power: '500 A', precision: '±0.1mm', cycle: '720/hr' },
//     tag:        'AUTOMATED',
//     accent:     C.blueMid,
//     accentDark: C.blue,
//     img:        'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80',
//   },
// ];

// const tripled: Machine[] = [...machines, ...machines, ...machines];

// /* ═══════════════════════════════════════════════════════════
//    MAGNETIC CURSOR
// ═══════════════════════════════════════════════════════════ */
// const MagneticCursor: FC = () => {
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);
//   const springX: MotionValue<number> = useSpring(cursorX, { stiffness: 500, damping: 50 });
//   const springY: MotionValue<number> = useSpring(cursorY, { stiffness: 500, damping: 50 });
//   const [active, setActive] = useState<boolean>(false);

//   useEffect(() => {
//     const move  = (e: MouseEvent): void => { cursorX.set(e.clientX - 10); cursorY.set(e.clientY - 10); };
//     const down  = (): void => setActive(true);
//     const up    = (): void => setActive(false);
//     window.addEventListener('mousemove', move);
//     window.addEventListener('mousedown', down);
//     window.addEventListener('mouseup',   up);
//     return () => {
//       window.removeEventListener('mousemove', move);
//       window.removeEventListener('mousedown', down);
//       window.removeEventListener('mouseup',   up);
//     };
//   }, [cursorX, cursorY]);

//   return (
//     <motion.div
//       animate={{ scale: active ? 0.55 : 1 }}
//       transition={{ type: 'spring', stiffness: 600, damping: 35 }}
//       className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
//       style={{
//         x:            springX,
//         y:            springY,
//         background:   `linear-gradient(135deg, ${C.cyan}, ${C.blue})`,
//         boxShadow:    `0 0 18px ${C.cyan}88`,
//         mixBlendMode: 'multiply' as const,
//       }}
//     />
//   );
// };

// /* ═══════════════════════════════════════════════════════════
//    ANIMATED COUNTER
// ═══════════════════════════════════════════════════════════ */
// const Counter: FC<CounterProps> = ({ to, suffix = '' }) => {
//   const [val, setVal]  = useState<number>(0);
//   const ref            = useRef<HTMLSpanElement>(null);
//   const inView         = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const step = (ts: number): void => {
//       if (!start) start = ts;
//       const p    = Math.min((ts - start) / 1800, 1);
//       const ease = 1 - Math.pow(1 - p, 4);
//       setVal(Math.round(ease * to));
//       if (p < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [inView, to]);

//   return <span ref={ref}>{val}{suffix}</span>;
// };

// /* ═══════════════════════════════════════════════════════════
//    MACHINE CARD
// ═══════════════════════════════════════════════════════════ */
// const MachineCard: FC<{ machine: Machine }> = ({ machine }) => {
//   const [hovered,  setHovered]  = useState<boolean>(false);
//   const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
//   const cardRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     setMousePos({
//       x: ((e.clientX - rect.left) / rect.width  - 0.5) * 2,
//       y: ((e.clientY - rect.top)  / rect.height - 0.5) * 2,
//     });
//   };

//   const rotateY: MotionValue<number> = useSpring(hovered ? mousePos.x * 16  : 0, { stiffness: 200, damping: 20 });
//   const rotateX: MotionValue<number> = useSpring(hovered ? -mousePos.y * 10 : 0, { stiffness: 200, damping: 20 });

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
//       onMouseMove={handleMouseMove}
//       animate={{ scale: hovered ? 1.04 : 1 }}
//       transition={{ type: 'spring', stiffness: 280, damping: 22 }}
//       style={{
//         rotateY,
//         rotateX,
//         transformStyle: 'preserve-3d' as const,
//         width:           300,
//         flexShrink:      0,
//         cursor:          'pointer',
//         position:        'relative',
//       }}
//       className="select-none"
//     >
//       {/* Outer glow ring */}
//       <motion.div
//         className="absolute pointer-events-none"
//         animate={{
//           opacity:   hovered ? 1 : 0,
//           boxShadow: hovered
//             ? `0 0 50px ${machine.accent}30, 0 0 100px ${machine.accent}12`
//             : 'none',
//         }}
//         transition={{ duration: 0.38 }}
//         style={{
//           inset:        '-2px',
//           borderRadius: 22,
//           background:   `linear-gradient(135deg, ${machine.accent}18, ${machine.accentDark}10)`,
//         }}
//       />

//       {/* Card body */}
//       <div
//         className="relative overflow-hidden rounded-[20px]"
//         style={{
//           background: hovered ? 'rgba(255,255,255,0.98)' : C.cardBg,
//           border:     `1px solid ${hovered ? machine.accent + '40' : C.cyan + '20'}`,
//           boxShadow:  hovered
//             ? `0 20px 60px rgba(6,182,212,0.12), 0 4px 16px rgba(30,58,138,0.08), inset 0 1px 0 rgba(255,255,255,0.9)`
//             : `0 2px 12px rgba(6,182,212,0.06), 0 1px 3px rgba(30,58,138,0.05), inset 0 1px 0 rgba(255,255,255,0.7)`,
//           transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
//         }}
//       >
//         {/* Image */}
//         <div className="relative h-44 overflow-hidden">
//           {/* next/image with fill — same pattern as original ClientsSection */}
//           <motion.div
//             className="absolute inset-0"
//             animate={{ scale: hovered ? 1.07 : 1 }}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <Image
//               src={machine.img}
//               alt={machine.name}
//               fill
//               className="object-cover"
//               style={{
//                 filter:     hovered
//                   ? 'brightness(0.9) saturate(1.1)'
//                   : 'brightness(0.72) saturate(0.45)',
//                 transition: 'filter 0.4s',
//               }}
//               sizes="300px"
//               quality={90}
//               unoptimized
//             />
//           </motion.div>

//           {/* Cyan tint on hover */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background: hovered
//                 ? `linear-gradient(160deg, ${machine.accent}18 0%, transparent 60%)`
//                 : 'transparent',
//               transition: 'background 0.4s',
//             }}
//           />

//           {/* Scanline texture */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background: `repeating-linear-gradient(
//                 0deg,
//                 transparent      0px,
//                 transparent      3px,
//                 rgba(0,0,0,0.04) 3px,
//                 rgba(0,0,0,0.04) 4px
//               )`,
//             }}
//           />

//           {/* Tag pill */}
//           <div
//             className="absolute top-3 left-3 px-3 py-0.5 rounded-full text-[8px] font-black tracking-[0.28em] text-white"
//             style={{
//               background: `linear-gradient(135deg, ${machine.accent}, ${machine.accentDark})`,
//               boxShadow:  `0 2px 8px ${machine.accent}55`,
//             }}
//           >
//             {machine.tag}
//           </div>

//           {/* ID badge */}
//           <div
//             className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black"
//             style={{
//               border:          `1.5px solid ${machine.accent}60`,
//               color:            machine.accent,
//               background:      'rgba(255,255,255,0.9)',
//               backdropFilter:  'blur(8px)',
//             }}
//           >
//             {String(machine.id).padStart(2, '0')}
//           </div>

//           {/* Bottom fade */}
//           <div
//             className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
//             style={{
//               background: `linear-gradient(to top, ${hovered ? '#ffffff' : C.cardBg}, transparent)`,
//               transition: 'background 0.3s',
//             }}
//           />

//           {/* Top shimmer line */}
//           <div
//             className="absolute inset-x-0 top-0 h-px"
//             style={{ background: `linear-gradient(90deg, transparent, ${machine.accent}80, transparent)` }}
//           />
//         </div>

//         {/* Text content */}
//         <div className="px-5 pt-3 pb-5">
//           <div
//             className="text-[9px] tracking-[0.35em] uppercase font-semibold mb-1"
//             style={{ color: machine.accent }}
//           >
//             {machine.category}
//           </div>

//           <div
//             className="text-[1.1rem] font-bold tracking-tight mb-4"
//             style={{
//               fontFamily: "'Playfair Display', Georgia, serif",
//               color:       C.text,
//             }}
//           >
//             {machine.name}
//           </div>

//           {/* Specs grid */}
//           <div className="grid grid-cols-3 gap-2">
//             {(Object.entries(machine.specs) as [keyof MachineSpecs, string][]).map(([k, v]) => (
//               <div
//                 key={k}
//                 className="rounded-xl px-2 py-2.5 text-center"
//                 style={{
//                   background: hovered
//                     ? `linear-gradient(135deg, ${machine.accent}08, ${machine.accentDark}05)`
//                     : `${C.cyan}06`,
//                   border:     `1px solid ${hovered ? machine.accent + '25' : C.cyan + '15'}`,
//                   transition: 'background 0.3s, border-color 0.3s',
//                 }}
//               >
//                 <div className="text-[11px] font-bold"    style={{ color: C.text    }}>{v}</div>
//                 <div className="text-[7.5px] tracking-[0.2em] uppercase mt-0.5" style={{ color: C.textSub }}>{k}</div>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <motion.div
//             animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
//             transition={{ duration: 0.22 }}
//             className="mt-4 flex items-center justify-between"
//           >
//             <span
//               className="text-[8.5px] tracking-[0.3em] uppercase font-semibold"
//               style={{ color: machine.accent }}
//             >
//               View Specifications
//             </span>
//             <div
//               className="w-6 h-6 rounded-full flex items-center justify-center"
//               style={{
//                 background: `${machine.accent}15`,
//                 border:     `1px solid ${machine.accent}50`,
//               }}
//             >
//               <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//                 <path
//                   d="M1 4h6M4 1l3 3-3 3"
//                   stroke={machine.accent}
//                   strokeWidth="1.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom accent bar */}
//         <motion.div
//           className="absolute inset-x-0 bottom-0 h-[2px]"
//           animate={{ scaleX: hovered ? 1 : 0 }}
//           transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             background:      `linear-gradient(90deg, transparent, ${machine.accent}, ${machine.accentDark}, transparent)`,
//             transformOrigin: 'center',
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// /* ═══════════════════════════════════════════════════════════
//    MARQUEE ROW
// ═══════════════════════════════════════════════════════════ */
// const CARD_W  = 300;
// const GAP     = 20;
// const STRIDE  = CARD_W + GAP;
// const RESET_W = machines.length * STRIDE;

// const MarqueeRow: FC<MarqueeRowProps> = ({ items, speed, dir, rotateX, opacity = 1 }) => {
//   const x      = useMotionValue<number>(dir === 1 ? 0 : -RESET_W);
//   const paused = useRef<boolean>(false);

//   useAnimationFrame((): void => {
//     if (paused.current) return;
//     const next = x.get() - dir * speed;
//     if (dir === 1  && next <= -RESET_W) { x.set(0);       return; }
//     if (dir === -1 && next >= 0)        { x.set(-RESET_W); return; }
//     x.set(next);
//   });

//   return (
//     <div
//       className="w-full overflow-hidden"
//       style={{ perspective: '2400px' }}
//       onMouseEnter={() => { paused.current = true;  }}
//       onMouseLeave={() => { paused.current = false; }}
//     >
//       <motion.div
//         style={{
//           x,
//           rotateX,
//           opacity,
//           display:        'flex',
//           gap:            GAP,
//           width:          'max-content',
//           willChange:     'transform',
//           transformStyle: 'preserve-3d' as const,
//         }}
//       >
//         {items.map((m, i) => (
//           <MachineCard key={`${m.id}-${i}`} machine={m} />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════════════════════
//    MAIN SECTION
// ═══════════════════════════════════════════════════════════ */
// const MachineShowcase: FC = () => {
//   const ref    = useRef<HTMLElement>(null);
//   const inView = useInView(ref, { once: true, margin: '-80px' });

//   const row1: Machine[] = tripled;
//   const row2: Machine[] = [...tripled].reverse();

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,400;1,700&family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500&display=swap');
//       `}</style>

//       <MagneticCursor />

//       <section
//         ref={ref}
//         className="relative overflow-hidden bg-white"
//         style={{ paddingTop: '6rem', paddingBottom: '7rem' }}
//       >
//         {/* ── Technical grid ───────────────────────────────── */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(${C.grid} 1px, transparent 1px),
//               linear-gradient(90deg, ${C.grid} 1px, transparent 1px)
//             `,
//             backgroundSize: '52px 52px',
//           }}
//         />

//         {/* ── Atmospheric orbs ─────────────────────────────── */}
//         <motion.div
//           aria-hidden
//           className="pointer-events-none absolute rounded-full"
//           style={{
//             width:      700,
//             height:     700,
//             top:        '-180px',
//             left:       '-180px',
//             background: `radial-gradient(circle, ${C.cyan}10 0%, transparent 68%)`,
//           }}
//           animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
//           transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           aria-hidden
//           className="pointer-events-none absolute rounded-full"
//           style={{
//             width:      650,
//             height:     650,
//             bottom:     '-160px',
//             right:      '-120px',
//             background: `radial-gradient(circle, ${C.blue}08 0%, transparent 68%)`,
//           }}
//           animate={{ x: [0, -28, 0], y: [0, 22, 0] }}
//           transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
//         />
//         <motion.div
//           aria-hidden
//           className="pointer-events-none absolute rounded-full"
//           style={{
//             width:      460,
//             height:     280,
//             top:        '40%',
//             left:       '38%',
//             background: `radial-gradient(ellipse, ${C.cyanLight}07 0%, transparent 70%)`,
//           }}
//           animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//         />

//         {/* ── Edge fades ───────────────────────────────────── */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-y-0 left-0 z-20"
//           style={{ width: '16rem', background: 'linear-gradient(to right, #ffffff, transparent)' }}
//         />
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-y-0 right-0 z-20"
//           style={{ width: '16rem', background: 'linear-gradient(to left, #ffffff, transparent)' }}
//         />

//         {/* ── Watermark ────────────────────────────────────── */}
//         <motion.div
//           aria-hidden
//           className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 1.8, delay: 0.2 }}
//         >
//           <span
//             className="font-black uppercase leading-none tracking-[-0.04em]"
//             style={{
//               fontSize:            'clamp(5rem, 22vw, 22rem)',
//               whiteSpace:          'nowrap',
//               fontFamily:          "'Barlow Condensed', sans-serif",
//               background:          `linear-gradient(135deg, ${C.cyan}09 0%, ${C.blue}07 100%)`,
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor:  'transparent',
//               backgroundClip:       'text',
//             }}
//           >
//             MACHINES
//           </span>
//         </motion.div>

//         {/* ── HEADING ──────────────────────────────────────── */}
//         <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mb-20">

//           {/* Eyebrow pill */}
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//             className="inline-flex items-center gap-2 mb-8"
//           >
//             <span
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] tracking-[0.4em] uppercase font-semibold"
//               style={{
//                 background: `linear-gradient(135deg, ${C.cyan}12 0%, ${C.blue}08 100%)`,
//                 border:     `1px solid ${C.cyan}28`,
//                 color:      '#0891b2',
//               }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.cyan }} />
//               Industrial Machinery
//             </span>
//           </motion.div>

//           {/* Title line 1 */}
//           <div className="overflow-hidden mb-2">
//             <motion.div
//               initial={{ y: '100%' }}
//               animate={inView ? { y: 0 } : {}}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
//             >
//               <h2
//                 className="font-bold leading-[0.95] tracking-tight"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize:   'clamp(3rem, 8vw, 5.5rem)',
//                   color:       C.text,
//                 }}
//               >
//                 Built to
//               </h2>
//             </motion.div>
//           </div>

//           {/* Title line 2 */}
//           <div className="overflow-hidden mb-8">
//             <motion.div
//               initial={{ y: '100%' }}
//               animate={inView ? { y: 0 } : {}}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
//             >
//               <h2
//                 className="font-bold italic leading-[0.95] tracking-tight"
//                 style={{
//                   fontFamily:          "'Playfair Display', Georgia, serif",
//                   fontSize:            'clamp(3rem, 8vw, 5.5rem)',
//                   background:          `linear-gradient(135deg, ${C.cyan} 0%, ${C.blueMid} 50%, ${C.blue} 100%)`,
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor:  'transparent',
//                   backgroundClip:       'text',
//                 }}
//               >
//                 Dominate.
//               </h2>
//             </motion.div>
//           </div>

//           {/* Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
//             className="text-base md:text-lg max-w-md mx-auto leading-relaxed font-light"
//             style={{ color: C.textSub }}
//           >
//             Engineering precision for the world&#39;s most demanding operations.
//             Where raw power meets surgical accuracy.
//           </motion.p>

//           {/* Decorative divider */}
//           <motion.div
//             initial={{ scaleX: 0, opacity: 0 }}
//             animate={inView ? { scaleX: 1, opacity: 1 } : {}}
//             transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
//             className="mx-auto mt-8 flex items-center justify-center gap-3 origin-center"
//           >
//             <div className="h-px w-14" style={{ background: `linear-gradient(to right, transparent, ${C.cyan})` }} />
//             <div className="w-2 h-2 rounded-full" style={{ background: `linear-gradient(135deg, ${C.cyan}, ${C.blue})` }} />
//             <div className="h-px w-14" style={{ background: `linear-gradient(to left, transparent, ${C.blue})` }} />
//           </motion.div>

//           {/* Stats strip */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
//             className="mt-10 inline-flex items-stretch rounded-2xl overflow-hidden"
//             style={{
//               background: `linear-gradient(135deg, ${C.cyan}06 0%, ${C.blue}04 100%)`,
//               border:     `1px solid ${C.cyan}18`,
//             }}
//           >
//             {([
//               { val: 6,  suf: '+',   label: 'Machine Lines'    },
//               { val: 99, suf: '.8%', label: 'Uptime Rate'      },
//               { val: 47, suf: '+',   label: 'Countries Served'  },
//             ] as const).map((s, i) => (
//               <div
//                 key={i}
//                 className="px-8 py-5 text-center"
//                 style={{ borderRight: i < 2 ? `1px solid ${C.cyan}15` : 'none' }}
//               >
//                 <div
//                   className="text-2xl md:text-3xl font-bold tracking-tight"
//                   style={{
//                     fontFamily:          "'Barlow Condensed', sans-serif",
//                     background:          `linear-gradient(135deg, ${C.cyan} 0%, ${C.blue} 100%)`,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor:  'transparent',
//                     backgroundClip:       'text',
//                   }}
//                 >
//                   <Counter to={s.val} suffix={s.suf} />
//                 </div>
//                 <div
//                   className="text-[8.5px] tracking-[0.3em] uppercase font-semibold mt-1"
//                   style={{ color: C.textSub }}
//                 >
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* ── 3D MARQUEE ROWS ──────────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 36 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
//           className="relative z-10 flex flex-col gap-5"
//           style={{ perspective: '1800px', transformStyle: 'preserve-3d' as const }}
//         >
//           <MarqueeRow items={row1} speed={0.52} dir={1}  rotateX={9}   opacity={0.78} />
//           <MarqueeRow items={row2} speed={0.68} dir={-1} rotateX={0}   opacity={1}    />
//           <MarqueeRow items={row1} speed={0.38} dir={1}  rotateX={-9}  opacity={0.68} />
//         </motion.div>

//         {/* ── BOTTOM STATS STRIP ───────────────────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
//           className="relative z-10 mx-auto mt-24 max-w-4xl px-6"
//         >
//           <div
//             className="flex items-stretch justify-center divide-x rounded-2xl overflow-hidden"
//             style={{
//               background:   `linear-gradient(135deg, ${C.cyan}07 0%, ${C.blue}04 100%)`,
//               border:       `1px solid ${C.cyan}18`,
//               /* override Tailwind divide color */
//               '--tw-divide-opacity': '1',
//             } as React.CSSProperties}
//           >
//             {([
//               { value: '9,000 kN',  label: 'Max Press Force'    },
//               { value: '±0.0005mm', label: 'Best Precision'     },
//               { value: '720/hr',    label: 'Highest Throughput' },
//               { value: 'ISO 9001',  label: 'Certified Quality'  },
//             ] as const).map((item, i) => (
//               <div
//                 key={i}
//                 className="flex-1 text-center py-6 px-4"
//                 style={{ borderColor: `${C.cyan}12` }}
//               >
//                 <div
//                   className="text-xl sm:text-2xl font-bold tracking-tight"
//                   style={{
//                     fontFamily:          "'Barlow Condensed', sans-serif",
//                     background:          `linear-gradient(135deg, ${C.cyan} 0%, ${C.blue} 100%)`,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor:  'transparent',
//                     backgroundClip:       'text',
//                   }}
//                 >
//                   {item.value}
//                 </div>
//                 <div
//                   className="mt-1.5 text-[8.5px] tracking-[0.3em] uppercase font-semibold"
//                   style={{ color: C.textSub }}
//                 >
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </section>
//     </>
//   );
// };

// export default MachineShowcase;










'use client';

import React from 'react';
import Image from 'next/image';

interface Machine {
  id: number;
  name: string;
  image: string;
  category?: string;
  keyFeature: string;
  application: string;
}

const machines: Machine[] = [
  {
    id: 1,
    name: 'Channel Letter Bending Machine',
    image: '/roland_sg3.jpg',
    category: 'Fabrication',
    keyFeature: 'Precision CNC bending',
    application: 'Signage & lettering production',
  },
  {
    id: 2,
    name: 'ZPG Fiber Laser',
    image: '/roland_sg3.jpg',
    category: 'Cutting',
    keyFeature: 'High-power fiber source',
    application: 'Metal & non-metal precision cutting',
  },
  {
    id: 3,
    name: 'CNC Router Machine',
    image: '/roland_sg3.jpg',
    category: 'Routing',
    keyFeature: 'Multi-axis control',
    application: 'Wood, acrylic, composite milling',
  },
  {
    id: 4,
    name: 'GZ UV Flatbed Printer',
    image: '/uv.jpg',
    category: 'Printing',
    keyFeature: 'Direct-to-substrate UV',
    application: 'Rigid & flexible media printing',
  },
  {
    id: 5,
    name: 'Handtop UV Hybrid Printer',
    image: '/handtop.jpg',
    category: 'Printing',
    keyFeature: 'Hybrid flatbed & roll-to-roll',
    application: 'Versatile high-volume output',
  },
  {
    id: 6,
    name: 'Industrial Laminator',
    image: '/laminater.jpg',
    category: 'Finishing',
    keyFeature: 'Hot & cold lamination',
    application: 'Protective film application',
  },
  {
    id: 7,
    name: 'Laser Cutting Machine',
    image: '/laminater.jpg',
    category: 'Cutting',
    keyFeature: 'CO₂ / fiber options',
    application: 'Detailed contour cutting',
  },
  {
    id: 8,
    name: 'Laser Welding Machine',
    image: '/laminater.jpg',
    category: 'Welding',
    keyFeature: 'Precision beam control',
    application: 'Metal joining & repair',
  },
  {
    id: 9,
    name: 'Roland VersaCAMM 640',
    image: '/roland-sg2.jpg',
    category: 'Printing & Cutting',
    keyFeature: 'Eco-solvent integrated',
    application: 'Large-format graphics production',
  },  
  {
    id: 10,
    name: 'Roland VersaCAMM 540',
    image: '/roland_sg3.jpg',
    category: 'Printing & Cutting',
    keyFeature: 'Compact wide-format',
    application: 'Mid-size signage & vehicle wraps',
  },
];

const MachinesShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header – like Caterpillar / Siemens style */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase text-sky-700 bg-sky-50 rounded-full">
            Advanced Equipment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Precision Machinery Powering Quality Fabrication
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art technology enabling high-precision signage, metalwork, printing, and finishing — delivering consistent results for demanding projects.
          </p>
        </div>

        {/* Grid – responsive, 2–4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-400 flex flex-col h-full"
            >
              {/* Image – high aspect, object-cover */}
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                {/* Subtle overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-sky-700 bg-sky-50 px-3 py-1 rounded-full">
                    {machine.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">
                  {machine.name}
                </h3>

                <div className="space-y-2.5 text-gray-600 text-sm flex-grow">
                  <p className="flex items-start">
                    <span className="font-semibold text-gray-800 mr-2">Key Feature:</span>
                    {machine.keyFeature}
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold text-gray-800 mr-2">Applications:</span>
                    {machine.application}
                  </p>
                </div>

                {/* CTA – subtle, enterprise feel */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-sm font-medium text-sky-700 hover:text-sky-800 flex items-center gap-2 transition-colors">
                    View Technical Specs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default MachinesShowcase;







