import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, Mail, Linkedin, Github, Phone, ChevronDown, ChevronUp, X, ExternalLink, Cpu, Zap, Code2, Terminal } from 'lucide-react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import profile from './assets/images/karthigpic_new.webp';
import project1Image from './assets/images/project1.jpg';
import project2Image from './assets/images/project2.jpg';
import project3Image from './assets/images/project3.png';
import project4Image from './assets/images/project4.jpg';
import project5Image from './assets/images/project5.jpg';
import project6Image from './assets/images/project6.jpg';
import project7Image from './assets/images/project7.jpg';
import project8Image from './assets/images/project8.jpg';
import project9Image from './assets/images/project9.jpg';
import project10Image from './assets/images/moon.png';
import project11Image from './assets/images/elec.png';
import project12Image from './assets/images/leaf.png';
import project13Image from './assets/images/lib.png';
import project14Image from './assets/images/attend.png';
import project15Image from './assets/images/audio.png';
import project16Image from './assets/images/bank.png';
import project17Image from './assets/images/it.png';
import project18Image from './assets/images/ki.png';
import project19Image from './assets/images/auction.png';
import project20Image from './assets/images/winp.png';
import project21Image from './assets/images/robot.png';
import project22Image from './assets/images/sha.png';
import project23Image from './assets/images/invt.png';
import project24Image from './assets/images/comm.png';
import project25Image from './assets/images/pipro.jpg';

/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Oxanium:wght@300;400;600;700;800&family=Inter:wght@300;400;500&display=swap');

  :root {
    --acid:   #00ffe0;
    --volt:   #b8ff00;
    --plasma: #7b61ff;
    --dim:    #0d0d12;
    --surface:#111118;
    --card:   #15151f;
    --border: rgba(0,255,224,0.12);
    --text:   #c8cce0;
    --muted:  #5a5e72;
  }

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dim);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--dim); }
  ::-webkit-scrollbar-thumb { background: var(--acid); border-radius: 2px; }

  /* Circuit grid bg */
  .circuit-bg {
    background-image:
      linear-gradient(rgba(0,255,224,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,255,224,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  /* Scanline overlay */
  .scanlines::after {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.07) 2px,
      rgba(0,0,0,0.07) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  .mono { font-family: 'JetBrains Mono', monospace; }
  .display { font-family: 'Oxanium', sans-serif; }

  /* Glow effects */
  .glow-acid  { text-shadow: 0 0 20px rgba(0,255,224,0.6), 0 0 40px rgba(0,255,224,0.3); }
  .glow-volt  { text-shadow: 0 0 20px rgba(184,255,0,0.6), 0 0 40px rgba(184,255,0,0.3); }
  .box-glow   { box-shadow: 0 0 0 1px rgba(0,255,224,0.2), 0 0 30px rgba(0,255,224,0.08), inset 0 1px 0 rgba(0,255,224,0.1); }
  .box-glow:hover { box-shadow: 0 0 0 1px rgba(0,255,224,0.4), 0 0 40px rgba(0,255,224,0.15), inset 0 1px 0 rgba(0,255,224,0.15); }

  /* Corner brackets decoration */
  .bracket::before, .bracket::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-color: var(--acid);
    border-style: solid;
    opacity: 0.5;
  }
  .bracket::before { top: 0; left: 0; border-width: 1px 0 0 1px; }
  .bracket::after  { bottom: 0; right: 0; border-width: 0 1px 1px 0; }

  /* Tag pill */
  .tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    font-weight: 500;
    border-radius: 2px;
    background: rgba(0,255,224,0.07);
    border: 1px solid rgba(0,255,224,0.18);
    color: var(--acid);
    letter-spacing: 0.04em;
    transition: all 0.2s;
  }
  .tag:hover {
    background: rgba(0,255,224,0.14);
    border-color: rgba(0,255,224,0.35);
  }

  .tag-volt {
    background: rgba(184,255,0,0.07);
    border-color: rgba(184,255,0,0.18);
    color: var(--volt);
  }

  /* Section label */
  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: var(--acid);
    text-transform: uppercase;
    opacity: 0.7;
  }

  /* Animated underline */
  .underline-acid {
    position: relative;
    display: inline-block;
  }
  .underline-acid::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--acid), transparent);
  }

  /* Btn primary */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: linear-gradient(135deg, rgba(0,255,224,0.15), rgba(123,97,255,0.15));
    border: 1px solid rgba(0,255,224,0.35);
    color: var(--acid);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.25s;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }
  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,255,224,0.1), rgba(123,97,255,0.1));
    opacity: 0;
    transition: opacity 0.25s;
  }
  .btn-primary:hover::before { opacity: 1; }
  .btn-primary:hover {
    border-color: rgba(0,255,224,0.6);
    box-shadow: 0 0 20px rgba(0,255,224,0.2);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    border: 1px solid rgba(255,255,255,0.12);
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.25s;
    text-decoration: none;
  }
  .btn-ghost:hover {
    border-color: rgba(0,255,224,0.3);
    color: var(--acid);
  }

  /* Timeline connector */
  .timeline-dot {
    width: 10px;
    height: 10px;
    background: var(--acid);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,255,224,0.6);
    flex-shrink: 0;
  }

  /* Nav active indicator */
  .nav-link {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
    text-decoration: none;
    position: relative;
  }
  .nav-link::before {
    content: './';
    color: var(--acid);
    opacity: 0;
    transition: opacity 0.2s;
    margin-right: 2px;
  }
  .nav-link:hover { color: var(--acid); }
  .nav-link:hover::before { opacity: 1; }

  /* Typing cursor */
  .cursor-blink {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: var(--acid);
    margin-left: 2px;
    vertical-align: middle;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }

  /* Skill bar */
  .skill-fill {
    height: 2px;
    background: linear-gradient(90deg, var(--acid), var(--plasma));
    border-radius: 1px;
    position: relative;
  }
  .skill-fill::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 8px;
    height: 8px;
    background: var(--acid);
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0,255,224,0.8);
  }

  /* Floating particles canvas */
  #particles-canvas {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  /* Section container */
  .section-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Card base */
  .eng-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }
  .eng-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--acid), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .eng-card:hover::before { opacity: 0.6; }
  .eng-card:hover {
    border-color: rgba(0,255,224,0.25);
    background: #17171f;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,224,0.05);
  }

  /* Modal backdrop */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(12px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  /* Stat chip */
  .stat-chip {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 16px 24px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    .section-container { padding: 0 16px; }
  }

  /* ── Mobile nav helpers ── */
  .nav-desktop { display: none; }
  .nav-hamburger { display: flex; }

  @media (min-width: 769px) {
    .nav-desktop { display: flex; }
    .nav-hamburger { display: none; }
  }

  /* ── Hero mobile layout ── */
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: center;
  }

  .hero-image-desktop { display: block; }
  .hero-image-mobile  { display: none; }

  .hero-stats {
    display: flex;
    gap: 24px;
    margin-top: 40px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .hero-image-desktop { display: none; }
    .hero-image-mobile  { display: flex; }

    .hero-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 28px;
      width: 100%;
    }

    .hero-stat-item {
      background: rgba(0,255,224,0.04);
      border: 1px solid rgba(0,255,224,0.1);
      border-radius: 4px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Center the entire hero text column */
    .hero-grid > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
    }

    .hero-grid > div:first-child p {
      max-width: 100%;
      text-align: center;
    }

    .hero-btns {
      justify-content: center !important;
      width: 100%;
    }

    /* Mobile nav drawer full-height style */
    .mobile-nav-drawer {
      padding: 8px 0 20px;
    }
    .mobile-nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #5a5e72;
      text-decoration: none;
      transition: color 0.2s, background 0.2s;
    }
    .mobile-nav-item:hover, .mobile-nav-item:active {
      color: var(--acid);
      background: rgba(0,255,224,0.04);
    }
    .mobile-nav-index {
      font-size: 0.55rem;
      color: var(--acid);
      opacity: 0.5;
      min-width: 16px;
    }
  }
`;

/* ─────────────────────────────────────────────
   PARTICLES BACKGROUND
───────────────────────────────────────────── */
const Particles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,255,224,0.25)';
        ctx.fill();
      });
      // Connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,224,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={canvasRef} id="particles-canvas" />;
};

/* ─────────────────────────────────────────────
   TYPING ANIMATION
───────────────────────────────────────────── */
const TypingText = ({ texts, speed = 80 }) => {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setTextIdx(i => (i + 1) % texts.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed]);

  return (
    <span className="mono" style={{ color: 'var(--acid)' }}>
      {display}<span className="cursor-blink" />
    </span>
  );
};

/* ─────────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────────── */
const SectionHeading = ({ label, title, isInView }) => (
  <motion.div
    className="mb-12 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <div className="section-label mb-3">{`// ${label}`}</div>
    <h2 className="display" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
      {title}
    </h2>
    <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, var(--acid), var(--plasma))', margin: '12px auto 0', borderRadius: 1 }} />
  </motion.div>
);

/* ─────────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────────── */
const Navigation = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const unsub = scrollY.onChange(v => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  // Close drawer when a link is tapped
  const handleLinkClick = () => setMobileOpen(false);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Publications', 'Contact'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '0 24px',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: (scrolled || mobileOpen) ? 'rgba(13,13,18,0.97)' : 'transparent',
        backdropFilter: (scrolled || mobileOpen) ? 'blur(24px)' : 'none',
        borderBottom: (scrolled || mobileOpen) ? '1px solid rgba(0,255,224,0.08)' : 'none',
        transition: 'all 0.3s',
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="display"
          style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--acid)', letterSpacing: '0.1em', userSelect: 'none' }}
        >
          KG<span style={{ color: 'var(--plasma)', fontSize: '0.55rem', marginLeft: 4, verticalAlign: 'super' }}>v2.6</span>
        </motion.div>

        {/* Desktop nav */}
        <ul className="nav-desktop" style={{ gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((l, i) => (
            <motion.li key={l} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger — always visible on small screens */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            color: 'var(--acid)',
            background: 'none',
            border: '1px solid rgba(0,255,224,0.2)',
            borderRadius: 3,
            cursor: 'pointer',
            padding: '6px 10px',
            lineHeight: 1,
            fontSize: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            transition: 'border-color 0.2s',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span key="close" className="mono"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                style={{ display: 'block', fontSize: '1.1rem', lineHeight: 1 }}>✕</motion.span>
            ) : (
              <motion.span key="open" className="mono"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                style={{ display: 'block', fontSize: '1.1rem', lineHeight: 1 }}>☰</motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer — slides down from nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed', top: 60, left: 0, right: 0, zIndex: 498,
              background: 'rgba(13,13,18,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(0,255,224,0.1)',
              overflow: 'hidden',
            }}
          >
            <div className="mobile-nav-drawer">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="mobile-nav-item"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="mobile-nav-index mono">{String(i + 1).padStart(2, '0')}</span>
                  {l}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const ProfileImage = ({ size = 220, className = '' }) => (
    <div className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{
        width: size, height: size,
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid rgba(0,255,224,0.2)',
        position: 'relative',
        flexShrink: 0,
      }}>
        <img src={profile} alt="Karthigeyan Ganesan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,255,224,0.05) 0%, transparent 60%)',
        }} />
      </div>
      {/* Corner accents */}
      <div style={{ position: 'absolute', top: -8, left: -8, width: 18, height: 18, borderTop: '2px solid var(--acid)', borderLeft: '2px solid var(--acid)' }} />
      <div style={{ position: 'absolute', bottom: -8, right: -8, width: 18, height: 18, borderBottom: '2px solid var(--acid)', borderRight: '2px solid var(--acid)' }} />
    </div>
  );

  return (
    <motion.section
      style={{ y, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: 60 }}
      className="circuit-bg"
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,224,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '32px 24px' }}>

        {/* ── MOBILE: image + name side by side, whole row centered ── */}
        <motion.div
          className="hero-image-mobile"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 18, marginBottom: 28 }}
        >
          <ProfileImage size={88} />
          <div style={{ textAlign: 'left' }}>
            <div className="mono" style={{ fontSize: '0.55rem', color: 'var(--acid)', letterSpacing: '0.18em', opacity: 0.75, marginBottom: 6 }}>
              {'> ENGINEER.PROFILE'}
            </div>
            <h1 className="display" style={{
              fontSize: 'clamp(1.5rem, 7vw, 2rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#fff',
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              Karthigeyan<br />
              <span style={{ color: 'var(--acid)' }} className="glow-acid">Ganesan</span>
            </h1>
            {/* Live status */}
            <div className="mono" style={{ fontSize: '0.52rem', color: 'var(--acid)', letterSpacing: '0.08em', opacity: 0.7, marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--volt)', display: 'inline-block', boxShadow: '0 0 6px var(--volt)', flexShrink: 0 }} />
              INTERN @ embedUR
            </div>
          </div>
        </motion.div>

        {/* ── Main grid (desktop: 2-col, mobile: 1-col handled via CSS) ── */}
        <div className="hero-grid">
          {/* Text block */}
          <div>
            {/* Desktop-only header prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 16 }}
              className="hero-image-desktop"
            >
              <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--acid)', letterSpacing: '0.2em', opacity: 0.8 }}>
                {'> ENGINEER.PROFILE'}
              </span>
            </motion.div>

            {/* Desktop-only big name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="display hero-image-desktop"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: 16,
                color: '#fff',
                letterSpacing: '-0.03em',
              }}
            >
              Karthigeyan
              <br />
              <span style={{ color: 'var(--acid)' }} className="glow-acid">Ganesan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)', marginBottom: 16, fontWeight: 300 }}
            >
              <TypingText texts={['Embedded Systems Engineer', 'IoT Architect', 'Linux Developer', 'Robotics Builder']} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, marginBottom: 28, fontSize: '0.88rem' }}
            >
              Crafting intelligent embedded solutions at the intersection of hardware and software — Linux, IoT, computer vision, and robotics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hero-btns"
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <a href="https://drive.google.com/file/d/1Yab45shzRGQ7jEHE3hk9CcgQ1btvjsv5/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Terminal size={14} /> View Resume
              </a>
              <a href="#projects" className="btn-ghost">
                <Cpu size={14} /> Explore Projects
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hero-stats"
            >
              {[['25+', 'Projects'], ['3', 'Internships'], ['8.8', 'CGPA'], ['3', 'Publications']].map(([val, lbl]) => (
                <div key={lbl} className="hero-stat-item">
                  <div className="display" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--acid)', lineHeight: 1 }}>{val}</div>
                  <div className="mono" style={{ fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4, textAlign: 'center' }}>{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile image — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-image-desktop"
            style={{ position: 'relative', alignSelf: 'center' }}
          >
            <ProfileImage size={220} />
            {/* Status badge */}
            <div className="mono" style={{
              position: 'absolute', bottom: -24, left: 0, right: 0, textAlign: 'center',
              fontSize: '0.58rem', color: 'var(--acid)', letterSpacing: '0.08em', opacity: 0.7,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--volt)', display: 'inline-block', boxShadow: '0 0 8px var(--volt)', flexShrink: 0 }} />
              ACTIVE — INTERN @ embedUR systems
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { icon: <Code2 size={18} />, title: 'Expertise', body: 'Embedded C, Python, OpenCV, Robotics, IoT systems & Linux development' },
    { icon: <Zap size={18} />, title: 'Passion', body: 'Building intelligent IoT ecosystems that bridge hardware and software' },
    { icon: <Cpu size={18} />, title: 'Education', body: 'B.E. ECE 2022–2026 · Rajalakshmi Institute of Technology, Chennai' },
  ];

  return (
    <section id="about" ref={ref} style={{ padding: '100px 0' }} className="circuit-bg">
      <div className="section-container">
        <SectionHeading label="section.about" title="About Me" isInView={isInView} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--acid)', marginBottom: 16, opacity: 0.6 }}>{'/* bio */'}</div>
            <p style={{ lineHeight: 1.9, color: 'var(--text)', marginBottom: 16, fontSize: '0.9rem' }}>
              As an Embedded Systems &amp; IoT Engineer, I specialize in developing robust, scalable solutions for industrial and consumer applications. With expertise in microcontrollers, Linux systems, and computer vision, I bridge the gap between hardware and software to create innovative products.
            </p>
            <p style={{ lineHeight: 1.9, color: 'var(--muted)', fontSize: '0.85rem' }}>
              Currently interning at <span style={{ color: 'var(--acid)' }}>embedUR Systems</span> on Linux-based IIoT solutions and IEEE 802.11 protocol implementation.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className="eng-card"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{ padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}
              >
                <div style={{ color: 'var(--acid)', marginTop: 2 }}>{c.icon}</div>
                <div>
                  <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--acid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{c.title}</div>
                  <div style={{ color: 'var(--text)', fontSize: '0.82rem', lineHeight: 1.5 }}>{c.body}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SKILLS
───────────────────────────────────────────── */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const skillGroups = [
    {
      label: 'Core / Primary',
      color: 'var(--acid)',
      skills: ['Embedded C', 'Python', 'Linux', 'STM32', 'ESP32', 'Raspberry Pi', 'OpenCV', 'IoT', 'Robotics', 'Computer Vision'],
    },
    {
      label: 'Secondary',
      color: 'var(--plasma)',
      skills: ['Arduino', 'PLCs (Siemens, Mitsubishi)', 'MATLAB', 'Verilog', 'SQL', 'Git'],
    },
    {
      label: 'Tools & IDEs',
      color: 'var(--volt)',
      skills: ['STM32CubeIDE', 'Arduino IDE', 'KiCad', 'Quartus', 'Multisim', 'Fusion 360', 'Wireshark', 'Keil UVision', 'MATLAB Simulink'],
    },
  ];

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 0' }}>
      <div className="section-container">
        <SectionHeading label="section.skills" title="Tech Stack" isInView={isInView} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="eng-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
              style={{ padding: '24px 28px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <span className="mono" style={{ fontSize: '0.65rem', color: group.color, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{group.label}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="tag"
                    style={gi === 1 ? { color: 'var(--plasma)', borderColor: 'rgba(123,97,255,0.2)', background: 'rgba(123,97,255,0.07)' }
                      : gi === 2 ? { color: 'var(--volt)', borderColor: 'rgba(184,255,0,0.2)', background: 'rgba(184,255,0,0.07)' }
                      : {}}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────── */
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [showAll, setShowAll] = useState(false);

  const projectData = [
    { image: project25Image, title: '2D Contour Detection & 3D Depth Mapping', description: 'Raspberry Pi-based system for 2D contour detection and 3D depth mapping using OpenCV.', tags: ['Embedded', 'Linux', 'OpenCV', 'IoT'], url: 'https://github.com/Karthigeyan06/project9', featured: true },
    { image: project21Image, title: 'Internal Logistics Autonomous Robot', description: 'Autonomous robot using Raspberry Pi for warehouse navigation with sensors and pathfinding.', tags: ['Embedded', 'Linux', 'Robotics', 'IoT'], url: 'https://github.com/Karthigeyan06/project1', featured: true },
    { image: project22Image, title: 'AI-Based Structural Health Monitoring', description: 'AI-integrated system for structural health monitoring with sensors and ML for failure prediction.', tags: ['Embedded', 'IoT', 'AI', 'Robotics'], url: 'https://github.com/Karthigeyan06/project1', featured: true },
    { image: project5Image, title: 'Autonomous GPS-Based Delivery Robot', description: 'GPS-equipped autonomous delivery robot with sensors for secure navigation.', tags: ['Embedded', 'IoT', 'Robotics'], url: 'https://github.com/Karthigeyan06/project5', featured: true },
    { image: project1Image, title: 'Four-Axis Robotic Arm', description: 'Four-axis robotic arm controlled by joysticks and mobile for precise tasks.', tags: ['Embedded', 'Robotics', 'IoT'], url: 'https://github.com/Karthigeyan06/project2', featured: true },
    { image: project8Image, title: 'Emergency Communication & Alert System', description: 'Portable communication device for disasters with GPS and voice capabilities.', tags: ['Embedded', 'IoT', 'Networking'], url: 'https://github.com/Karthigeyan06/project8', featured: true },
    { image: project19Image, title: 'IPL Auction System Using Python', description: 'Python-based IPL auction system for bidding and team management.', tags: ['Python', 'IT'], url: 'https://github.com/Karthigeyan06/project1', featured: false },
    { image: project20Image, title: 'Cricket Match Win Predictor', description: 'Java application predicting cricket match outcomes using historical data and ML algorithms.', tags: ['Java', 'ML', 'IT'], url: 'https://github.com/Karthigeyan06/project1', featured: false },
    { image: project23Image, title: 'Inventory Management System', description: 'Python and SQLite system for inventory tracking, supplier management, and reports.', tags: ['Python', 'SQLite', 'IT'], url: 'https://github.com/Karthigeyan06/project1', featured: false },
    { image: project24Image, title: 'Simulated Network Message Communication', description: 'Linux-based simulation of message communication between machines using TCP/IP protocols.', tags: ['Linux', 'Networking', 'TCP/IP'], url: 'https://github.com/Karthigeyan06/project1', featured: false },
    { image: project6Image, title: 'Dual-Mode Wireless Rover', description: 'Arduino-based rover with real-time control and environmental sensing.', tags: ['Arduino', 'Robotics', 'IoT'], url: 'https://github.com/Karthigeyan06/project6', featured: false },
    { image: project7Image, title: 'Auto-Balance 2-Wheel Bot', description: '2-wheel robot balancing system using 3-axis gyroscope for stability.', tags: ['Embedded', 'Robotics', 'IoT'], url: 'https://github.com/Karthigeyan06/project7', featured: false },
    { image: project10Image, title: 'Moon Phase Detector', description: 'Python program detecting moon phases using OpenCV and ML.', tags: ['Python', 'OpenCV', 'ML'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project11Image, title: 'ElectroRookie Calculator', description: 'Python-based calculator for electronics calculations.', tags: ['Python', 'IT'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project12Image, title: 'Leaf Disease Detection', description: 'Python program detecting leaf diseases using OpenCV and ML.', tags: ['Python', 'OpenCV', 'ML'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project13Image, title: 'Library Management System', description: 'Python and MySQL system for library book management and reports.', tags: ['Python', 'MySQL', 'IT'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project14Image, title: 'QR Code Attendance System', description: 'Python and MySQL attendance system with QR code integration.', tags: ['Python', 'MySQL', 'QR Code'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project15Image, title: 'Audio Player (Python)', description: 'Python audio player with playback controls and user interface.', tags: ['Python', 'Audio', 'IT'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project16Image, title: 'Bank Management System', description: 'Python and MySQL system for bank account management and transactions.', tags: ['Python', 'MySQL', 'Banking'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project17Image, title: 'YouTube Channel Website', description: 'Personal website for YouTube channel using HTML and CSS.', tags: ['HTML', 'CSS'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
    { image: project18Image, title: 'Kreotix Innovations Website', description: 'Website for Kreotix Innovations using HTML, CSS, and JavaScript.', tags: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/Karthigeyan06/project9', featured: false },
  ];

  const visible = showAll ? projectData : projectData.filter(p => p.featured);

  return (
    <section id="projects" ref={ref} style={{ padding: '100px 0' }} className="circuit-bg">
      <div className="section-container">
        <SectionHeading label="section.projects" title="Projects" isInView={isInView} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              className="eng-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ overflow: 'hidden' }}
            >
              {/* Image */}
              <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                <img src={p.image} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(21,21,31,0.95) 100%)',
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '16px 18px' }}>
                <h3 className="display" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 12 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '7px 16px', fontSize: '0.65rem' }}>
                  <Github size={12} /> View Code <ArrowUpRight size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          {!showAll ? (
            <a href="https://karthigeyan06.github.io/myportfolio/projects.html" className="btn-primary" style={{ marginRight: 12 }}>
              View All Projects <ArrowUpRight size={14} />
            </a>
          ) : (
            <button onClick={() => setShowAll(false)} className="btn-ghost">
              <ChevronUp size={14} /> Show Featured Only
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────────── */
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const data = [
    { company: 'embedUR Systems', role: 'Project Intern', duration: 'Nov 2025 – Present', achievements: ['Developed Linux-based IIoT solutions', 'Implemented IEEE 802.11 protocols'], tech: ['Linux', 'IIoT', 'Networking'], active: true },
    { company: 'Kreotix Innovations', role: 'Technical Lead', duration: 'Feb 2025 – May 2025', achievements: ['Managed website development projects', 'Delivered client solutions'], tech: ['HTML', 'CSS', 'JavaScript'] },
    { company: 'Delphi-TVS Technologies', role: 'Engineering Intern', duration: 'Dec 2024 – Jan 2025', achievements: ['Troubleshot industrial machines', 'Developed QR code tracking app'], tech: ['PLCs', 'CNC', 'Web Apps'] },
    { company: 'Rook Ecom Pvt Ltd', role: 'Techie Intern', duration: 'Jan 2023 – Apr 2023', achievements: ['Optimized WordPress websites', 'Enhanced user experience'], tech: ['WordPress', 'UX'] },
  ];

  return (
    <section id="experience" ref={ref} style={{ padding: '100px 0' }}>
      <div className="section-container">
        <SectionHeading label="section.experience" title="Experience" isInView={isInView} />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 5, top: 8, bottom: 8,
            width: 1, background: 'linear-gradient(to bottom, var(--acid), var(--plasma), transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingLeft: 32 }}>
            {data.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="eng-card"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ padding: '20px 24px', position: 'relative' }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot" style={{
                  position: 'absolute', left: -28, top: 24,
                  background: exp.active ? 'var(--volt)' : 'var(--acid)',
                  boxShadow: exp.active ? '0 0 12px var(--volt)' : '0 0 8px rgba(0,255,224,0.5)',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h3 className="display" style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 2 }}>{exp.company}</h3>
                    <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--acid)' }}>{exp.role}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {exp.active && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--volt)', display: 'inline-block', boxShadow: '0 0 8px var(--volt)' }} />}
                    <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{exp.duration}</span>
                  </div>
                </div>

                <ul style={{ margin: '8px 0 12px', paddingLeft: 16 }}>
                  {exp.achievements.map(a => (
                    <li key={a} style={{ fontSize: '0.82rem', color: 'var(--text)', marginBottom: 4, lineHeight: 1.5 }}>{a}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exp.tech.map(t => <span key={t} className="tag tag-volt">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CERTIFICATIONS
───────────────────────────────────────────── */
const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(null);

  const certs = [
    { title: 'Embedded Software and Hardware Architecture', platform: 'Coursera', issuer: 'University of Colorado Boulder', year: '2025', link: 'https://drive.google.com/file/d/1Vv7kVm1sukB6hD3S-OI2CbaN4h73IIBA/view', description: 'Comprehensive course on embedded systems design and architecture.' },
    { title: 'Linux Embedded System Topics and Projects', platform: 'Coursera', issuer: 'University of Colorado Boulder', year: '2025', link: 'https://www.coursera.org/account/accomplishments/verify/IFQCV39AJN3U', description: 'Hands-on projects and topics in Linux embedded systems.' },
    { title: 'Networking and Storage Essentials', platform: 'EdX', issuer: 'IBM', year: '2025', link: 'https://courses.edx.org/certificates/30d659616d25482587ba61e388391600', description: 'Essential knowledge in networking and storage technologies.' },
    { title: 'System Design Through Verilog', platform: 'NPTEL', issuer: 'IIT Guwahati', year: '2024', link: 'https://drive.google.com/file/d/1OKvodhnFReieT9CZurJFrf5dyIrjNDGO/view', description: 'System design principles using Verilog hardware description language.' },
  ];

  return (
    <section id="certifications" ref={ref} style={{ padding: '100px 0' }} className="circuit-bg">
      <div className="section-container">
        <SectionHeading label="section.certifications" title="Certifications" isInView={isInView} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className="eng-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '20px 22px', cursor: 'pointer' }}
              onClick={() => setSelected(c)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--acid)', opacity: 0.7 }}>{c.platform}</span>
                <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>{c.year}</span>
              </div>
              <h3 className="display" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', lineHeight: 1.35, marginBottom: 8 }}>{c.title}</h3>
              <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 14 }}>{c.issuer}</div>
              <button onClick={e => { e.stopPropagation(); setSelected(c); }} className="btn-primary" style={{ padding: '6px 14px', fontSize: '0.62rem' }}>
                View Cert <ExternalLink size={11} />
              </button>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a href="https://karthigeyan06.github.io/myportfolio/certificates.html" className="btn-primary">
            View All Certifications <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div
              className="eng-card"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ padding: '28px 32px', maxWidth: 480, width: '100%', position: 'relative' }}
            >
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><X size={18} /></button>
              <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--acid)', marginBottom: 12 }}>{selected.platform} · {selected.issuer}</div>
              <h3 className="display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{selected.title}</h3>
              <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 16 }}>{selected.year}</div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: 20 }}>{selected.description}</p>
              <a href={selected.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open Certificate <ExternalLink size={13} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PUBLICATIONS
───────────────────────────────────────────── */
const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(null);

  const pubs = [
    {
      title: 'Dynamic Audio Watermarking Based Anti-Piracy Algorithm for Secure Multimedia Distribution',
      authors: 'Karthigeyan Ganesan', venue: 'Zenodo', year: '2025', type: 'Preprint',
      doi: 'https://doi.org/10.5281/zenodo.18029798',
      description: 'Proposes a dynamic audio watermarking algorithm to enhance security in multimedia distribution, focusing on robustness against common audio processing attacks.',
      tags: ['Audio Watermarking', 'Multimedia Security', 'Signal Processing', 'Python'],
    },
    {
      title: 'Vision-Based 2D-to-3D Object Reconstruction and G-code Generation Using Raspberry Pi',
      authors: 'Karthigeyan Ganesan', venue: 'Zenodo CERN', year: '2025', type: 'Technical Report',
      doi: 'https://doi.org/10.5281/zenodo.18032945',
      description: 'Presents a Raspberry Pi-based system for 2D-to-3D object reconstruction using computer vision techniques, enabling G-code generation for 3D printing applications.',
      tags: ['3D Reconstruction', 'Computer Vision', 'Raspberry Pi', 'OpenCV'],
    },
    {
      title: 'Automatic Identification of Damage Regions in Solar Panels Using Image Processing',
      authors: 'Karthigeyan Ganesan', venue: 'Zenodo CERN', year: '2025', type: 'Technical Report',
      doi: 'https://zenodo.org/records/18092348',
      description: 'Proposes an image processing-based method for automatic detection and identification of damage regions in solar panels, enhancing maintenance efficiency.',
      tags: ['Solar Panel Inspection', 'Image Processing', 'Computer Vision', 'Python'],
    },
  ];

  return (
    <section id="publications" ref={ref} style={{ padding: '100px 0' }}>
      <div className="section-container">
        <SectionHeading label="section.publications" title="Publications" isInView={isInView} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pubs.map((p, i) => (
            <motion.div
              key={p.title}
              className="eng-card"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ padding: '22px 26px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                    <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--plasma)', border: '1px solid rgba(123,97,255,0.25)', padding: '2px 8px', borderRadius: 2 }}>{p.type}</span>
                    <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>{p.venue} · {p.year}</span>
                  </div>
                  <h3 className="display" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', lineHeight: 1.4, marginBottom: 10 }}>{p.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <button onClick={() => setSelected(p)} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.65rem', whiteSpace: 'nowrap' }}>
                  Details <ArrowUpRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div
              className="eng-card"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ padding: '28px 32px', maxWidth: 560, width: '100%', position: 'relative' }}
            >
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><X size={18} /></button>
              <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--plasma)', marginBottom: 12 }}>{selected.type} · {selected.venue} · {selected.year}</div>
              <h3 className="display" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.4 }}>{selected.title}</h3>
              <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 16 }}>{selected.authors}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.75, marginBottom: 18 }}>{selected.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {selected.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={selected.doi} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Publication <ExternalLink size={13} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const links = [
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:karthigeyanganesan06@gmail.com', val: 'karthigeyanganesan06@gmail.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthigeyan-ganesan-203066257/', val: '/in/karthigeyan-ganesan' },
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/Karthigeyan06', val: 'Karthigeyan06' },
    { icon: <Phone size={20} />, label: 'Phone', href: 'tel:+918428804975', val: '+91 84288 04975' },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: '100px 0 80px' }} className="circuit-bg">
      <div className="section-container">
        <SectionHeading label="section.contact" title="Get In Touch" isInView={isInView} />

        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40, fontSize: '0.9rem' }}
          >
            Ready to collaborate on innovative embedded solutions? Open to internships, projects, and research opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="eng-card"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}
              >
                <div style={{ color: 'var(--acid)' }}>{l.icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{l.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text)' }}>{l.val}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="mailto:karthigeyanganesan06@gmail.com"
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            style={{ fontSize: '0.8rem', padding: '14px 32px' }}
          >
            <Mail size={16} /> Let's Connect
          </motion.a>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   MAIN PORTFOLIO
───────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <>
      <style>{styles}</style>
      <div className="scanlines" style={{ background: 'var(--dim)', minHeight: '100vh', position: 'relative' }}>
        <Particles />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Publications />
          <Contact />
          <footer style={{
            borderTop: '1px solid rgba(0,255,224,0.08)',
            padding: '24px 32px',
            textAlign: 'center',
          }}>
            <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
              © 2026 KARTHIGEYAN GANESAN · EMBEDDED SYSTEMS ENGINEER
              <span style={{ color: 'var(--acid)', margin: '0 8px' }}>·</span>
              BUILT WITH REACT + FRAMER MOTION
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}