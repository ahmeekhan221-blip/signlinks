// "use client";

// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";

// type Phase = "intro" | "exit" | "done";

// /* ═══════════════════════════════════════════════════════════
//    PARTICLE NETWORK CANVAS
// ═══════════════════════════════════════════════════════════ */
// function ParticleCanvas({ dark = false }: { dark?: boolean }) {
//   const ref = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const c = ref.current; if (!c) return;
//     const ctx = c.getContext("2d"); if (!ctx) return;
//     let raf: number;

//     const resize = () => { c.width = c.offsetWidth * devicePixelRatio; c.height = c.offsetHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); };
//     resize();
//     window.addEventListener("resize", resize);

//     const W = () => c.offsetWidth, H = () => c.offsetHeight;
//     const N = 32;
//     const nodes = Array.from({ length: N }, () => ({
//       x: Math.random(), y: Math.random(),
//       vx: (Math.random() - 0.5) * 0.00012,
//       vy: (Math.random() - 0.5) * 0.00012,
//       r: Math.random() * 1.8 + 0.6,
//     }));

//     const draw = () => {
//       const w = W(), h = H();
//       ctx.clearRect(0, 0, w, h);
//       nodes.forEach(n => { n.x = ((n.x + n.vx) + 1) % 1; n.y = ((n.y + n.vy) + 1) % 1; });
//       const pts = nodes.map(n => ({ x: n.x * w, y: n.y * h, r: n.r }));

//       for (let i = 0; i < pts.length; i++) {
//         for (let j = i + 1; j < pts.length; j++) {
//           const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
//           const d = Math.sqrt(dx * dx + dy * dy), mx = w * 0.22;
//           if (d < mx) {
//             ctx.beginPath();
//             ctx.moveTo(pts[i].x, pts[i].y);
//             ctx.lineTo(pts[j].x, pts[j].y);
//             ctx.strokeStyle = dark
//               ? `rgba(93,211,245,${(1 - d / mx) * 0.15})`
//               : `rgba(30,64,160,${(1 - d / mx) * 0.09})`;
//             ctx.lineWidth = 0.7;
//             ctx.stroke();
//           }
//         }
//       }
//       pts.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = dark ? "rgba(93,211,245,0.55)" : "rgba(34,184,240,0.28)";
//         ctx.fill();
//       });
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
//   }, [dark]);
//   return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
// }

// /* ═══════════════════════════════════════════════════════════
//    SMOOTH ANIMATED COUNTER
// ═══════════════════════════════════════════════════════════ */
// function Counter({ delay = 2300, duration = 2100 }: { delay?: number; duration?: number }) {
//   const [n, setN] = useState(0);
//   useEffect(() => {
//     const t = setTimeout(() => {
//       const s = performance.now();
//       const f = (now: number) => {
//         const p = Math.min((now - s) / duration, 1);
//         const e = 1 - Math.pow(1 - p, 3);
//         setN(Math.round(e * 100));
//         if (p < 1) requestAnimationFrame(f);
//       };
//       requestAnimationFrame(f);
//     }, delay);
//     return () => clearTimeout(t);
//   }, [delay, duration]);
//   return <>{n}</>;
// }

// /* ═══════════════════════════════════════════════════════════
//    MAIN INTRO PAGE
// ═══════════════════════════════════════════════════════════ */
// export default function IntroPage({ children }: { children?: React.ReactNode }) {
//   const [phase, setPhase] = useState<Phase>("intro");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const t1 = setTimeout(() => setPhase("exit"), 4800);
//     const t2 = setTimeout(() => setPhase("done"), 5800);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, []);

//   const isDone = phase === "done";
//   const isExiting = phase === "exit";

//   if (!mounted) return null;
//   if (isDone) return <>{children}</>;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Mono:wght@300;400&family=Outfit:wght@200;300;400;700&display=swap');

//         *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --navy:   #07102b;
//           --navy2:  #0c1a3e;
//           --blue:   #163fa8;
//           --cyan:   #22b8f0;
//           --cyan2:  #5dd3f5;
//           --white:  #ffffff;
//           --off:    #f5f8ff;
//           --ink:    #0a1640;
//           --muted:  rgba(10,22,64,0.45);
//           --muted2: rgba(10,22,64,0.20);
//           --cmuted: rgba(93,211,245,0.50);
//         }

//         body { background: var(--navy); overflow: hidden; }

//         /* ───────────────────────────────────────
//            MASTER WRAPPER
//         ─────────────────────────────────────── */
//         .sl {
//           position: fixed; inset: 0; z-index: 9999;
//           display: flex; overflow: hidden;
//           transition: clip-path 1.1s cubic-bezier(0.87,0,0.13,1), opacity 0.4s 0.7s ease;
//         }
//         .sl.exit {
//           clip-path: inset(0 0 100% 0);
//           opacity: 0;
//         }

//         /* ───────────────────────────────────────
//            LEFT — NAVY BRAND PANEL
//         ─────────────────────────────────────── */
//         .sl-l {
//           position: relative;
//           width: 38%;
//           flex-shrink: 0;
//           background: linear-gradient(155deg, var(--navy2) 0%, var(--navy) 55%, #04091c 100%);
//           display: flex; flex-direction: column;
//           justify-content: space-between;
//           padding: 40px 44px 44px;
//           overflow: hidden;
//           clip-path: inset(0 0 0 0);
//           animation: sl-l-in 1s 0s both cubic-bezier(0.22,1,0.36,1);
//         }
//         @keyframes sl-l-in {
//           from { clip-path: inset(0 100% 0 0); }
//           to   { clip-path: inset(0 0% 0 0); }
//         }

//         /* Left accent bar */
//         .sl-l-bar {
//           position: absolute; left: 0; top: 0; bottom: 0;
//           width: 3px;
//           background: linear-gradient(180deg,
//             transparent 0%,
//             var(--cyan) 30%,
//             var(--cyan2) 55%,
//             var(--cyan) 75%,
//             transparent 100%
//           );
//           animation: bar-breathe 4s 1.8s ease-in-out infinite alternate;
//         }
//         @keyframes bar-breathe {
//           from { opacity: 0.5; box-shadow: 0 0 6px rgba(34,184,240,0.3); }
//           to   { opacity: 1;   box-shadow: 0 0 22px rgba(93,211,245,0.7); }
//         }

//         /* Diagonal light slash */
//         .sl-l-slash {
//           position: absolute; top: -10%; bottom: -10%;
//           right: -40px; width: 90px;
//           background: linear-gradient(180deg,
//             rgba(34,184,240,0.06) 0%,
//             rgba(93,211,245,0.03) 100%
//           );
//           transform: skewX(-3deg);
//         }

//         /* ── Top section: logo text ── */
//         .sl-l-top {
//           position: relative; z-index: 5;
//         }
//         .sl-l-label {
//           font-family: 'DM Mono', monospace;
//           font-size: 9px; font-weight: 300;
//           letter-spacing: 0.4em; text-transform: uppercase;
//           color: var(--cmuted);
//           opacity: 0;
//           animation: fade-in 0.8s 0.8s both ease-out;
//           display: flex; align-items: center; gap: 8px;
//           margin-bottom: 22px;
//         }
//         .sl-l-label::before {
//           content: '';
//           display: inline-block;
//           width: 20px; height: 1px;
//           background: var(--cyan);
//           flex-shrink: 0;
//         }
//         .sl-l-name {
//           overflow: hidden;
//         }
//         .sl-l-sign {
//           display: block;
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(56px, 7.5vw, 104px);
//           line-height: 0.86;
//           color: var(--white);
//           letter-spacing: 0.05em;
//           opacity: 0;
//           animation: word-up 0.9s 0.6s both cubic-bezier(0.22,1,0.36,1);
//         }
//         .sl-l-links {
//           display: block;
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(56px, 7.5vw, 104px);
//           line-height: 0.86;
//           letter-spacing: 0.05em;
//           background: linear-gradient(90deg, var(--cyan) 0%, var(--cyan2) 60%, #a8eeff 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-shadow: none;
//           filter: drop-shadow(0 0 30px rgba(34,184,240,0.4));
//           opacity: 0;
//           animation: word-up 0.9s 0.75s both cubic-bezier(0.22,1,0.36,1);
//         }
//         @keyframes word-up {
//           from { opacity:0; transform: translateY(100%); }
//           to   { opacity:1; transform: translateY(0); }
//         }

//         /* Description text */
//         .sl-l-desc {
//           margin-top: 24px;
//           opacity: 0;
//           animation: fade-up 0.8s 1.3s both ease-out;
//         }
//         .sl-l-desc p {
//           font-family: 'Cormorant Garamond', serif;
//           font-style: italic; font-weight: 300;
//           font-size: clamp(13px, 1.4vw, 16px);
//           line-height: 1.6;
//           color: rgba(200,220,255,0.45);
//           letter-spacing: 0.04em;
//         }

//         /* ── Bottom section ── */
//         .sl-l-bottom {
//           position: relative; z-index: 5;
//           opacity: 0;
//           animation: fade-up 0.8s 1.5s both ease-out;
//         }
//         .sl-l-divline {
//           width: 100%; height: 1px;
//           background: linear-gradient(90deg, rgba(34,184,240,0.35), transparent);
//           margin-bottom: 18px;
//         }
//         .sl-l-meta {
//           display: flex; justify-content: space-between; align-items: center;
//         }
//         .sl-l-status {
//           display: flex; align-items: center; gap: 8px;
//         }
//         .sl-l-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: var(--cyan);
//           animation: dot-pulse 2s 2s ease-out infinite;
//         }
//         @keyframes dot-pulse {
//           0%  { box-shadow: 0 0 0 0 rgba(34,184,240,0.6); }
//           70% { box-shadow: 0 0 0 8px rgba(34,184,240,0); }
//           100%{ box-shadow: 0 0 0 0 rgba(34,184,240,0); }
//         }
//         .sl-l-status-text {
//           font-family: 'DM Mono', monospace;
//           font-size: 8px; font-weight: 300;
//           letter-spacing: 0.3em; text-transform: uppercase;
//           color: var(--cmuted);
//         }
//         .sl-l-year {
//           font-family: 'Outfit', sans-serif;
//           font-weight: 700; font-size: 11px;
//           letter-spacing: 0.2em;
//           color: rgba(93,211,245,0.25);
//         }

//         /* BG watermark number */
//         .sl-l-wm {
//           position: absolute; z-index: 1;
//           bottom: -30px; right: -16px;
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(140px, 22vw, 240px);
//           color: rgba(34,184,240,0.03);
//           line-height: 1; user-select: none;
//           letter-spacing: -0.02em;
//           pointer-events: none;
//         }

//         /* ───────────────────────────────────────
//            CENTRE SEAM
//         ─────────────────────────────────────── */
//         .sl-seam {
//           width: 1px; flex-shrink: 0; position: relative;
//           background: linear-gradient(180deg,
//             transparent 0%,
//             rgba(34,184,240,0.5) 25%,
//             rgba(93,211,245,0.7) 50%,
//             rgba(34,184,240,0.5) 75%,
//             transparent 100%
//           );
//           transform-origin: center;
//           animation: seam-in 0.7s 0.5s both cubic-bezier(0.22,1,0.36,1);
//         }
//         @keyframes seam-in {
//           from { transform: scaleY(0); opacity: 0; }
//           to   { transform: scaleY(1); opacity: 1; }
//         }
//         .sl-seam-gem {
//           position: absolute; left: 50%; top: 0;
//           transform: translateX(-50%) rotate(45deg);
//           width: 8px; height: 8px;
//           background: var(--cyan2);
//           box-shadow: 0 0 14px 3px rgba(93,211,245,0.8);
//           animation: gem-travel 3.2s 1s ease-in-out infinite;
//         }
//         @keyframes gem-travel {
//           0%  { top: 8%; opacity: 0; }
//           8%  { opacity: 1; }
//           92% { opacity: 1; }
//           100%{ top: 92%; opacity: 0; }
//         }

//         /* ───────────────────────────────────────
//            RIGHT — WHITE LOGO PANEL
//         ─────────────────────────────────────── */
//         .sl-r {
//           flex: 1; position: relative; overflow: hidden;
//           background: var(--white);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           clip-path: inset(0 0 0 0);
//           animation: sl-r-in 1s 0.05s both cubic-bezier(0.22,1,0.36,1);
//         }
//         @keyframes sl-r-in {
//           from { clip-path: inset(0 0 0 100%); }
//           to   { clip-path: inset(0 0 0 0%); }
//         }

//         /* Right — grid */
//         .sl-r-grid {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(20,56,176,0.05) 1.2px, transparent 1.2px);
//           background-size: 28px 28px;
//         }

//         /* Right — decorative arcs */
//         .sl-r-arc {
//           position: absolute;
//           border-radius: 50%;
//           border: 1px solid rgba(34,184,240,0.10);
//           pointer-events: none;
//           animation: arc-pulse 4s ease-in-out infinite alternate;
//         }
//         .sl-r-arc-1 { width: 480px; height: 480px; bottom: -160px; left: -160px; animation-delay: 0s; }
//         .sl-r-arc-2 { width: 320px; height: 320px; top: -80px; right: -80px; animation-delay: 1.5s; }
//         @keyframes arc-pulse {
//           from { opacity: 0.5; transform: scale(0.96); }
//           to   { opacity: 1;   transform: scale(1.04); }
//         }

//         /* Corner geometry */
//         .sl-r-corner {
//           position: absolute;
//           width: 32px; height: 32px;
//           border-color: rgba(34,184,240,0.22);
//           border-style: solid;
//           z-index: 10;
//           animation: corner-in 0.5s 0.8s both cubic-bezier(0.34,1.56,0.64,1);
//         }
//         .tl { top:22px; left:22px; border-width:1.5px 0 0 1.5px; }
//         .tr { top:22px; right:22px; border-width:1.5px 1.5px 0 0; }
//         .bl { bottom:22px; left:22px; border-width:0 0 1.5px 1.5px; }
//         .br { bottom:22px; right:22px; border-width:0 1.5px 1.5px 0; }
//         @keyframes corner-in {
//           from { opacity:0; transform:scale(0.3); }
//           to   { opacity:1; transform:scale(1); }
//         }

//         /* Right — top badge */
//         .sl-r-badge {
//           position: absolute; top: 24px; left: 28px; z-index: 10;
//           display: flex; align-items: center; gap: 7px;
//           opacity: 0;
//           animation: fade-in 0.6s 1.4s both ease-out;
//         }
//         .sl-r-badge-dot {
//           width: 5px; height: 5px; border-radius: 50%;
//           background: var(--cyan);
//           animation: dot-pulse 2s 2.2s ease-out infinite;
//         }
//         .sl-r-badge-text {
//           font-family: 'DM Mono', monospace;
//           font-size: 8px; font-weight: 300;
//           letter-spacing: 0.32em; text-transform: uppercase;
//           color: var(--muted);
//         }

//         /* Right — bottom watermark */
//         .sl-r-copy {
//           position: absolute; bottom:20px; right:24px; z-index:10;
//           font-family: 'DM Mono', monospace;
//           font-size: 8px; font-weight: 300;
//           letter-spacing: 0.28em; text-transform: uppercase;
//           color: var(--muted2);
//           opacity: 0;
//           animation: fade-in 0.6s 1.8s both ease-out;
//         }

//         /* ── Centre stage ── */
//         .sl-r-stage {
//           position: relative; z-index: 5;
//           display: flex; flex-direction: column;
//           align-items: center;
//         }

//         /* Logo */
//         .sl-r-logo {
//           opacity: 0;
//           animation: logo-cinematic 1.3s 0.8s both cubic-bezier(0.22,1,0.36,1);
//           filter: drop-shadow(0 16px 48px rgba(34,184,240,0.16))
//                   drop-shadow(0 4px 16px rgba(20,56,176,0.10));
//         }
//         @keyframes logo-cinematic {
//           0%   { opacity:0; transform:scale(0.82) translateY(28px); filter:blur(12px); }
//           60%  { opacity:1; filter:blur(0); }
//           100% { opacity:1; transform:scale(1) translateY(0); filter:blur(0); }
//         }

//         /* Logo glow halo */
//         .sl-r-halo {
//           position: absolute;
//           width: 420px; height: 220px;
//           background: radial-gradient(ellipse, rgba(34,184,240,0.10) 0%, transparent 70%);
//           border-radius: 50%; top: 50%; left: 50%;
//           transform: translate(-50%,-50%);
//           animation: halo-breathe 3s 2s ease-in-out infinite alternate;
//           pointer-events: none; z-index: -1;
//         }
//         @keyframes halo-breathe {
//           from { opacity:0.6; transform:translate(-50%,-50%) scale(0.94); }
//           to   { opacity:1;   transform:translate(-50%,-50%) scale(1.08); }
//         }

//         /* ── Tagline ── */
//         .sl-r-tagline {
//           margin-top: 32px;
//           display: flex; flex-direction: column; align-items: center; gap: 12px;
//           opacity: 0;
//           animation: fade-up 0.9s 1.8s both cubic-bezier(0.22,1,0.36,1);
//         }
//         .sl-r-rule {
//           display: flex; align-items: center; gap: 10px;
//         }
//         .sl-r-rule-l { width: clamp(50px,8vw,100px); height:1px; background:linear-gradient(90deg,transparent,var(--muted2)); }
//         .sl-r-rule-r { width: clamp(50px,8vw,100px); height:1px; background:linear-gradient(90deg,var(--muted2),transparent); }
//         .sl-r-rule-gem {
//           width: 4px; height: 4px; border-radius:50%;
//           background: var(--cyan); flex-shrink:0;
//         }
//         .sl-r-tag-text {
//           font-family: 'Cormorant Garamond', serif;
//           font-style: italic; font-weight: 300;
//           font-size: clamp(14px,1.6vw,18px);
//           letter-spacing: 0.10em;
//           color: var(--muted);
//           text-align: center;
//         }

//         /* ── Progress ── */
//         .sl-r-prog {
//           margin-top: 44px;
//           width: clamp(220px, 28vw, 300px);
//           opacity: 0;
//           animation: fade-up 0.7s 2.1s both ease-out;
//         }
//         .sl-r-prog-head {
//           display: flex; justify-content: space-between; align-items: baseline;
//           margin-bottom: 9px;
//         }
//         .sl-r-prog-lbl {
//           font-family: 'DM Mono', monospace;
//           font-size: 8.5px; font-weight: 300;
//           letter-spacing: 0.38em; text-transform: uppercase;
//           color: var(--muted);
//         }
//         .sl-r-prog-num {
//           font-family: 'Outfit', sans-serif;
//           font-weight: 700; font-size: 18px;
//           color: var(--ink); letter-spacing: -0.03em;
//           line-height: 1;
//         }
//         .sl-r-prog-num sup {
//           font-size: 10px; font-weight: 300;
//           color: var(--muted); letter-spacing: 0;
//         }

//         /* Track */
//         .sl-r-track {
//           width: 100%; height: 3px;
//           background: rgba(20,56,176,0.07);
//           border-radius: 99px; overflow: hidden; position: relative;
//         }
//         .sl-r-fill {
//           position: absolute; top:0; left:0; height:100%;
//           background: linear-gradient(90deg,
//             var(--navy) 0%,
//             var(--blue) 30%,
//             var(--cyan) 72%,
//             var(--cyan2) 100%
//           );
//           border-radius: 99px;
//           animation: bar-fill 2.3s 2.15s both cubic-bezier(0.22,1,0.36,1);
//           box-shadow: 0 0 12px rgba(34,184,240,0.45);
//         }
//         .sl-r-fill::after {
//           content:'';
//           position:absolute; right:-2px; top:50%;
//           transform:translateY(-50%);
//           width:10px; height:10px; border-radius:50%;
//           background:var(--cyan2);
//           box-shadow:0 0 12px 4px rgba(93,211,245,0.75);
//         }
//         @keyframes bar-fill {
//           from { width:0% } to { width:100% }
//         }

//         /* Segment ticks */
//         .sl-r-segs {
//           display: flex; gap:5px; margin-top:9px;
//         }
//         .sl-r-seg {
//           flex:1; height:2px; border-radius:99px;
//           background:rgba(20,56,176,0.08);
//           transition: background 0.3s, box-shadow 0.3s;
//         }
//         .sl-r-seg.a1 { animation: seg-on 0.4s 2.4s both; }
//         .sl-r-seg.a2 { animation: seg-on 0.4s 2.85s both; }
//         .sl-r-seg.a3 { animation: seg-on 0.4s 3.3s both; }
//         .sl-r-seg.a4 { animation: seg-on 0.4s 3.75s both; }
//         .sl-r-seg.a5 { animation: seg-on 0.4s 4.15s both; }
//         @keyframes seg-on {
//           to {
//             background:var(--cyan);
//             box-shadow:0 0 6px rgba(34,184,240,0.5);
//           }
//         }

//         @keyframes fade-up {
//           from{opacity:0;transform:translateY(16px);}
//           to{opacity:1;transform:translateY(0);}
//         }
//         @keyframes fade-in {
//           from{opacity:0;}to{opacity:1;}
//         }
//       `}</style>

//       <div className={`sl${isExiting ? " exit" : ""}`}>

//         {/* ═══ LEFT PANEL ═══ */}
//         <div className="sl-l">
//           <ParticleCanvas dark />
//           <div className="sl-l-bar" />
//           <div className="sl-l-slash" />
//           <div className="sl-l-wm">SL</div>

//           {/* Top */}
//           <div className="sl-l-top">
//             <div className="sl-l-label">Est. 2024 · Karachi</div>
//             <div className="sl-l-name">
//               <span className="sl-l-sign">SIGN</span>
//               <span className="sl-l-links">LINKS</span>
//             </div>
//             <div className="sl-l-desc">
//               <p>Connecting brands to the world<br />through intelligent advertising.</p>
//             </div>
//           </div>

//           {/* Bottom */}
//           <div className="sl-l-bottom">
//             <div className="sl-l-divline" />
//             <div className="sl-l-meta">
//               <div className="sl-l-status">
//                 <div className="sl-l-dot" />
//                 <span className="sl-l-status-text">System live</span>
//               </div>
//               <span className="sl-l-year">© 2025</span>
//             </div>
//           </div>
//         </div>

//         {/* ═══ SEAM ═══ */}
//         <div className="sl-seam">
//           <div className="sl-seam-gem" />
//         </div>

//         {/* ═══ RIGHT PANEL ═══ */}
//         <div className="sl-r">
//           <div className="sl-r-grid" />
//           <ParticleCanvas dark={false} />
//           <div className="sl-r-arc sl-r-arc-1" />
//           <div className="sl-r-arc sl-r-arc-2" />

//           {/* Corners */}
//           <div className="sl-r-corner tl" />
//           <div className="sl-r-corner tr" />
//           <div className="sl-r-corner bl" />
//           <div className="sl-r-corner br" />

//           {/* Badge */}
//           <div className="sl-r-badge">
//             <div className="sl-r-badge-dot" />
//             <span className="sl-r-badge-text">Launching experience</span>
//           </div>

//           {/* Copyright */}
//           <span className="sl-r-copy">SignLinks · All rights reserved</span>

//           {/* ── Stage ── */}
//           <div className="sl-r-stage">
//             {/* Logo */}
//             <div style={{ position: "relative" }}>
//               <div className="sl-r-halo" />
//               <div className="sl-r-logo">
//                 <Image
//                   src="/vectorink-vectorizer-result.svg"
//                   alt="SignLinks – Advertising Solution Provider"
//                   width={420}
//                   height={220}
//                   style={{
//                     objectFit: "contain",
//                     maxWidth: "min(420px, 50vw)",
//                     height: "auto",
//                     display: "block",
//                   }}
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Tagline */}
//             <div className="sl-r-tagline">
//               <div className="sl-r-rule">
//                 <div className="sl-r-rule-l" />
//                 <div className="sl-r-rule-gem" />
//                 <div className="sl-r-rule-r" />
//               </div>
//               <p className="sl-r-tag-text">Advertising Solution Provider</p>
//             </div>

//             {/* Progress */}
//             <div className="sl-r-prog">
//               <div className="sl-r-prog-head">
//                 <span className="sl-r-prog-lbl">Initializing</span>
//                 <span className="sl-r-prog-num">
//                   <Counter delay={2150} duration={2100} />
//                   <sup>%</sup>
//                 </span>
//               </div>
//               <div className="sl-r-track">
//                 <div className="sl-r-fill" />
//               </div>
//               <div className="sl-r-segs">
//                 <div className="sl-r-seg a1" />
//                 <div className="sl-r-seg a2" />
//                 <div className="sl-r-seg a3" />
//                 <div className="sl-r-seg a4" />
//                 <div className="sl-r-seg a5" />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Hidden page content */}
//       <div style={{ visibility: "hidden", position: "absolute", inset: 0 }}>{children}</div>
//     </>
//   );
// }





























































































// simple with animaiton 

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type Phase = "intro" | "exit" | "done";

// /* ── Smooth eased counter ── */
// function Counter({ delay = 2600, duration = 2800 }: { delay?: number; duration?: number }) {
//   const [n, setN] = useState(0);
//   useEffect(() => {
//     const t = setTimeout(() => {
//       const s = performance.now();
//       const f = (now: number) => {
//         const p = Math.min((now - s) / duration, 1);
//         const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
//         setN(Math.round(e * 100));
//         if (p < 1) requestAnimationFrame(f);
//       };
//       requestAnimationFrame(f);
//     }, delay);
//     return () => clearTimeout(t);
//   }, [delay, duration]);
//   return <>{n}</>;
// }

// /* ── Main ── */
// export default function IntroPage({ children }: { children?: React.ReactNode }) {
//   const [phase, setPhase] = useState<Phase>("intro");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const t1 = setTimeout(() => setPhase("exit"), 5000);
//     const t2 = setTimeout(() => setPhase("done"), 6200);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, []);

//   const isDone = phase === "done";
//   const isExiting = phase === "exit";

//   if (!mounted) return null;
//   if (isDone) return <>{children}</>;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400&family=DM+Mono:wght@300&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --bg:       #eef2f7;
//           --bg2:      #e4eaf4;
//           --frost:    rgba(255,255,255,0.72);
//           --navy:     #0e1f52;
//           --blue:     #1a3fa0;
//           --cyan:     #22b8f0;
//           --cyan2:    #72d9f7;
//           --ink:      #0e1f52;
//           --ink2:     rgba(14,31,82,0.50);
//           --ink3:     rgba(14,31,82,0.22);
//           --ink4:     rgba(14,31,82,0.10);
//         }

//         body { background: var(--bg); overflow: hidden; }

//         /* ═══════════════════════════════
//            ROOT
//         ═══════════════════════════════ */
//         .root {
//           position: fixed; inset: 0; z-index: 9999;
//           background: linear-gradient(160deg, #eef2f7 0%, #e8eff8 40%, #dce8f5 100%);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           overflow: hidden;
//           transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1),
//                       transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .root.exit {
//           opacity: 0;
//           transform: scale(1.025);
//         }

//         /* ═══════════════════════════════
//            NOISE TEXTURE OVERLAY
//         ═══════════════════════════════ */
//         .noise {
//           position: absolute; inset: 0; z-index: 1;
//           opacity: 0.028;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//           background-size: 200px 200px;
//           pointer-events: none;
//         }

//         /* ═══════════════════════════════
//            SOFT RADIAL GLOW
//         ═══════════════════════════════ */
//         .glow {
//           position: absolute; inset: 0; z-index: 0;
//           background:
//             radial-gradient(ellipse 70% 55% at 50% 35%, rgba(34,184,240,0.08) 0%, transparent 65%),
//             radial-gradient(ellipse 50% 40% at 80% 75%, rgba(26,63,160,0.06) 0%, transparent 60%),
//             radial-gradient(ellipse 40% 50% at 15% 20%, rgba(114,217,247,0.05) 0%, transparent 55%);
//           animation: glow-drift 8s ease-in-out infinite alternate;
//         }
//         @keyframes glow-drift {
//           from { opacity: 0.7; transform: scale(1); }
//           to   { opacity: 1;   transform: scale(1.04); }
//         }

//         /* ═══════════════════════════════
//            THIN TOP LINE
//         ═══════════════════════════════ */
//         .topline {
//           position: absolute; top: 0; left: 0; right: 0;
//           height: 1px; z-index: 10;
//           background: linear-gradient(90deg,
//             transparent 0%,
//             rgba(34,184,240,0.4) 30%,
//             rgba(114,217,247,0.6) 50%,
//             rgba(34,184,240,0.4) 70%,
//             transparent 100%
//           );
//           transform-origin: left;
//           animation: line-draw 1.6s 0.2s both cubic-bezier(0.22, 1, 0.36, 1);
//         }
//         @keyframes line-draw {
//           from { transform: scaleX(0); opacity: 0; }
//           to   { transform: scaleX(1); opacity: 1; }
//         }

//         /* ═══════════════════════════════
//            CORNER MARKS
//         ═══════════════════════════════ */
//         .cm {
//           position: absolute; z-index: 10;
//           width: 22px; height: 22px;
//           border-color: var(--ink3);
//           border-style: solid;
//           animation: cm-in 0.9s 1s both cubic-bezier(0.22, 1, 0.36, 1);
//         }
//         .cm.tl { top: 28px; left: 28px; border-width: 1px 0 0 1px; }
//         .cm.tr { top: 28px; right: 28px; border-width: 1px 1px 0 0; }
//         .cm.bl { bottom: 28px; left: 28px; border-width: 0 0 1px 1px; }
//         .cm.br { bottom: 28px; right: 28px; border-width: 0 1px 1px 0; }
//         @keyframes cm-in {
//           from { opacity: 0; transform: scale(0.5); }
//           to   { opacity: 1; transform: scale(1); }
//         }

//         /* ═══════════════════════════════
//            SIDE MONO LABELS
//         ═══════════════════════════════ */
//         .side {
//           position: absolute; z-index: 10;
//           font-family: 'DM Mono', monospace;
//           font-size: 8.5px; font-weight: 300;
//           letter-spacing: 0.38em; text-transform: uppercase;
//           color: var(--ink3);
//           white-space: nowrap;
//           opacity: 0;
//           animation: fade-in 1s 1.4s both ease-out;
//         }
//         .side.l {
//           left: 28px; top: 50%;
//           transform: translateY(-50%) rotate(-90deg);
//         }
//         .side.r {
//           right: 28px; top: 50%;
//           transform: translateY(-50%) rotate(90deg);
//         }

//         /* ═══════════════════════════════
//            CENTRE CONTENT
//         ═══════════════════════════════ */
//         .centre {
//           position: relative; z-index: 5;
//           display: flex; flex-direction: column;
//           align-items: center;
//         }

//         /* ── Overline ── */
//         .overline {
//           display: flex; align-items: center; gap: 14px;
//           margin-bottom: 40px;
//           opacity: 0;
//           animation: fade-up 1.2s 0.5s both cubic-bezier(0.22, 1, 0.36, 1);
//         }
//         .overline-rule {
//           width: 40px; height: 1px;
//           background: linear-gradient(90deg, transparent, var(--cyan));
//         }
//         .overline-rule.right {
//           background: linear-gradient(90deg, var(--cyan), transparent);
//         }
//         .overline-text {
//           font-family: 'DM Mono', monospace;
//           font-size: 8px; font-weight: 300;
//           letter-spacing: 0.48em; text-transform: uppercase;
//           color: var(--ink2);
//         }

//         /* ── Logo container ── */
//         .logo-wrap {
//           position: relative;
//           opacity: 0;
//           animation: logo-enter 2s 0.9s both cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         @keyframes logo-enter {
//           0%   { opacity: 0; transform: translateY(24px) scale(0.96); filter: blur(6px); }
//           50%  { filter: blur(0); }
//           100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
//         }

//         /* Subtle soft shadow under logo */
//         .logo-shadow {
//           position: absolute;
//           bottom: -20px; left: 50%;
//           transform: translateX(-50%);
//           width: 60%; height: 20px;
//           background: radial-gradient(ellipse, rgba(14,31,82,0.10) 0%, transparent 70%);
//           filter: blur(8px);
//           pointer-events: none;
//         }

//         /* ── Tagline ── */
//         .tagline-wrap {
//           margin-top: 44px;
//           display: flex; flex-direction: column;
//           align-items: center; gap: 16px;
//           opacity: 0;
//           animation: fade-up 1.2s 2s both cubic-bezier(0.22, 1, 0.36, 1);
//         }

//         .tagline-rule {
//           width: clamp(120px, 20vw, 200px); height: 1px;
//           background: linear-gradient(90deg,
//             transparent,
//             var(--ink3) 30%,
//             var(--ink3) 70%,
//             transparent
//           );
//         }

//         .tagline {
//           font-family: 'Cormorant', serif;
//           font-weight: 300;
//           font-style: italic;
//           font-size: clamp(16px, 2vw, 22px);
//           letter-spacing: 0.18em;
//           color: var(--ink2);
//           text-align: center;
//         }

//         /* ── Progress ── */
//         .prog-wrap {
//           margin-top: 52px;
//           display: flex; flex-direction: column;
//           align-items: center; gap: 11px;
//           opacity: 0;
//           animation: fade-up 1s 2.5s both cubic-bezier(0.22, 1, 0.36, 1);
//         }

//         .prog-labels {
//           display: flex; align-items: center;
//           justify-content: space-between;
//           width: clamp(200px, 26vw, 280px);
//         }

//         .prog-lbl {
//           font-family: 'DM Mono', monospace;
//           font-size: 8px; font-weight: 300;
//           letter-spacing: 0.4em; text-transform: uppercase;
//           color: var(--ink3);
//         }

//         .prog-num {
//           font-family: 'DM Sans', sans-serif;
//           font-weight: 200; font-size: 13px;
//           letter-spacing: 0.04em;
//           color: var(--ink2);
//         }

//         .prog-track {
//           width: clamp(200px, 26vw, 280px);
//           height: 1px;
//           background: var(--ink4);
//           position: relative;
//           overflow: visible;
//         }

//         .prog-fill {
//           position: absolute; top: 0; left: 0;
//           height: 1px;
//           background: linear-gradient(90deg, var(--navy), var(--blue) 50%, var(--cyan));
//           animation: prog-anim 2.8s 2.65s both cubic-bezier(0.22, 1, 0.36, 1);
//         }
//         @keyframes prog-anim {
//           from { width: 0% }
//           to   { width: 100% }
//         }

//         /* Glowing tip on progress */
//         .prog-fill::after {
//           content: '';
//           position: absolute; right: -1px; top: 50%;
//           transform: translateY(-50%);
//           width: 5px; height: 5px; border-radius: 50%;
//           background: var(--cyan2);
//           box-shadow: 0 0 8px 2px rgba(114,217,247,0.7);
//         }

//         /* ── Status dot ── */
//         .status-row {
//           position: absolute; bottom: 28px;
//           display: flex; align-items: center; gap: 8px;
//           opacity: 0;
//           animation: fade-in 0.8s 1.6s both ease-out;
//           z-index: 10;
//         }
//         .status-dot {
//           width: 5px; height: 5px; border-radius: 50%;
//           background: var(--cyan);
//           animation: dot-pulse 2.4s 2.2s ease-out infinite;
//         }
//         @keyframes dot-pulse {
//           0%  { box-shadow: 0 0 0 0 rgba(34,184,240,0.5); }
//           60% { box-shadow: 0 0 0 7px rgba(34,184,240,0); }
//           100%{ box-shadow: 0 0 0 0 rgba(34,184,240,0); }
//         }
//         .status-text {
//           font-family: 'DM Mono', monospace;
//           font-size: 8px; font-weight: 300;
//           letter-spacing: 0.36em; text-transform: uppercase;
//           color: var(--ink3);
//         }

//         /* ── Glass card behind logo (subtle) ── */
//         .glass-card {
//           position: absolute;
//           inset: -32px -48px;
//           background: rgba(255,255,255,0.30);
//           backdrop-filter: blur(0px);
//           border-radius: 24px;
//           border: 1px solid rgba(255,255,255,0.55);
//           box-shadow:
//             0 2px 40px rgba(14,31,82,0.04),
//             0 1px 2px rgba(255,255,255,0.8) inset;
//           z-index: -1;
//           opacity: 0;
//           animation: card-in 1.4s 1.4s both cubic-bezier(0.22, 1, 0.36, 1);
//         }
//         @keyframes card-in {
//           from { opacity: 0; transform: scale(0.97); }
//           to   { opacity: 1; transform: scale(1); }
//         }

//         @keyframes fade-up {
//           from { opacity: 0; transform: translateY(18px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; } to { opacity: 1; }
//         }
//       `}</style>

//       <div className={`root${isExiting ? " exit" : ""}`}>

//         {/* Texture & glow */}
//         <div className="noise" />
//         <div className="glow" />

//         {/* Top accent line */}
//         <div className="topline" />

//         {/* Corner marks */}
//         <div className="cm tl" />
//         <div className="cm tr" />
//         <div className="cm bl" />
//         <div className="cm br" />

//         {/* Side labels */}
//         <span className="side l">Advertising · Media</span>
//         <span className="side r">Est. 2024 · Karachi</span>

//         {/* Status */}
//         <div className="status-row">
//           <div className="status-dot" />
//           <span className="status-text">Loading experience</span>
//         </div>

//         {/* Centre */}
//         <div className="centre">

//           {/* Overline */}
//           <div className="overline">
//             <div className="overline-rule" />
//             <span className="overline-text">Welcome</span>
//             <div className="overline-rule right" />
//           </div>

//           {/* Logo */}
//           <div className="logo-wrap">
//             <div className="glass-card" />
//             <div className="logo-shadow" />
//             <Image
//               src="/vectorink-vectorizer-result.svg"
//               alt="SignLinks"
//               width={440}
//               height={230}
//               style={{
//                 objectFit: "contain",
//                 maxWidth: "min(440px, 68vw)",
//                 height: "auto",
//                 display: "block",
//               }}
//               priority
//             />
//           </div>

//           {/* Tagline */}
//           <div className="tagline-wrap">
//             <div className="tagline-rule" />
//             <p className="tagline">Advertising Solution Provider</p>
//           </div>

//           {/* Progress */}
//           <div className="prog-wrap">
//             <div className="prog-labels">
//               <span className="prog-lbl">Loading</span>
//               <span className="prog-num"><Counter delay={2650} duration={2800} /> %</span>
//             </div>
//             <div className="prog-track">
//               <div className="prog-fill" />
//             </div>
//           </div>

//         </div>
//       </div>

//       <div style={{ visibility: "hidden", position: "absolute", inset: 0 }}>{children}</div>
//     </>
//   );
// }



























// simple one 


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "intro" | "exit" | "done";

export default function IntroPage({ children }: { children?: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setPhase("exit"), 3000);
    const t2 = setTimeout(() => setPhase("done"), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const isDone = phase === "done";
  const isExiting = phase === "exit";

  if (!mounted) return null;
  if (isDone) return <>{children}</>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@200;300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #edf1f7; overflow: hidden; }

        .intro {
          position: fixed; inset: 0; z-index: 9999;
          background: linear-gradient(135deg, #edf1f7 0%, #e2eaf5 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          transition: opacity 1s ease;
        }
        .intro.exit { opacity: 0; }

        .logo {
          opacity: 0;
          animation: rise 1.2s 0.3s both cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .tagline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: 13px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(14, 31, 82, 0.40);
          opacity: 0;
          animation: rise 1s 1s both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bar-track {
          width: 140px;
          height: 1px;
          background: rgba(14, 31, 82, 0.10);
          opacity: 0;
          animation: rise 0.8s 1.4s both ease-out;
        }
        .bar-fill {
          height: 1px;
          background: linear-gradient(90deg, #1a3fa0, #22b8f0);
          animation: fill 2s 1.5s both cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes fill {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      <div className={`intro${isExiting ? " exit" : ""}`}>
        <div className="logo">
          <Image
            src="/vectorink-vectorizer-result.svg"
            alt="SignLinks"
            width={320}
            height={168}
            style={{ objectFit: "contain", maxWidth: "min(320px, 65vw)", height: "auto" }}
            priority
          />
        </div>

        <p className="tagline text-center">Complete Signage Solutions Since 2005


</p>

        <div className="bar-track">
          <div className="bar-fill" />
        </div>
      </div>

      <div style={{ visibility: "hidden", position: "absolute", inset: 0 }}>{children}</div>
    </>
  );
}