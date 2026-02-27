
// components/HeroSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import Link from "next/link";

// ────────────────────────────────────────────────
// Variants
// ────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.25 },
  },
};

const buttonsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.6 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
      duration: 0.7,
    },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 1 },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// ────────────────────────────────────────────────
// Number Counter Component
// ────────────────────────────────────────────────
type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

function CountUp({ end, duration = 2.6, suffix = "+" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4); // stronger ease-out

      setCount(Math.floor(end * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

// ────────────────────────────────────────────────
// Main Hero Component
// ────────────────────────────────────────────────
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 0.88]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background with subtle parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/imagecopy1.jpg')",
          // ↑ Replace with your real high-res night building image (preferably with blue lighting)
          y: bgY,
        }}
      />

      {/* Dynamic overlay */} 
      <motion.div
        className="absolute  inset-0 bg-gradient-to-br from-slate-950/85 via-indigo-950/75 to-blue-950/65"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          className="max-w-4xl space-y-10 lg:space-y-14"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Headline */}
          <motion.h1
            variants={titleVariants}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-5xl xl:text-5xl "
          >
            Complete Signage
            <br />
            Solutions{" "}
            <span className="bg-[#04acec] bg-clip-text text-transparent">
              Since 2005
            </span>
          </motion.h1>

          {/* Trust line */}
          <motion.p
            variants={subtitleVariants}
            className="max-w-3xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl"
          >
            Trusted by Leading Corporate Brands Worldwide
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={buttonsVariants}
            className="flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <motion.div variants={buttonVariants}>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-indigo-900/40 transition-all duration-300 hover:scale-[1.04] hover:shadow-indigo-700/50 active:scale-[0.98]"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/8 px-10 py-5 text-lg font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:border-white/45 hover:bg-white/12 hover:shadow-xl active:scale-[0.98]"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-24 grid grid-cols-1 gap-12 text-center sm:mt-32 sm:grid-cols-3 lg:mt-40"
          variants={statsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={statVariants} className="space-y-4">
            <div className="text-5xl font-black text-cyan-400 sm:text-6xl lg:text-7xl">
              <CountUp end={18} />
            </div>
            <p className="text-lg font-medium text-slate-400">Years of Experience</p>
          </motion.div>

          <motion.div variants={statVariants} className="space-y-4">
            <div className="text-5xl font-black text-cyan-400 sm:text-6xl lg:text-7xl">
              <CountUp end={5000} />
            </div>
            <p className="text-lg font-medium text-slate-400">Successful Projects</p>
          </motion.div>

          <motion.div variants={statVariants} className="space-y-4">
            <div className="text-5xl font-black text-cyan-400 sm:text-6xl lg:text-7xl">
              <CountUp end={500000} />
            </div>
            <p className="text-lg font-medium text-slate-400">LEDs Installed</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}