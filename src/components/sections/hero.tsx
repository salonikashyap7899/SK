import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React.js Specialist",
  "UI/UX Enthusiast",
  "Next.js Developer",
];

function TypewriterText({ words }: { words: string[] }) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIdx];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.slice(0, currentText.length + 1));
        if (currentText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(word.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIdx, words]);

  return (
    <span className="text-gradient">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

const stats = [
  { value: "9.20", label: "GPA Score", suffix: "/10" },
  { value: "4", label: "Projects Built", suffix: "+" },
  { value: "6", label: "Tech Stack", suffix: "+" },
  { value: "1", label: "Internship", suffix: "" },
];

function AnimatedCounter({ target, suffix }: { target: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const isFloat = target.includes(".");

  useEffect(() => {
    const num = parseFloat(target);
    const duration = 1500;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const current = num * progress;
      setDisplay(isFloat ? current.toFixed(2) : Math.floor(current).toString());
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, isFloat]);

  return <span>{display}{suffix}</span>;
}

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function Hero() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background pointer-events-none -z-10">
        <FloatingOrb className="top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[128px] opacity-60" />
        <FloatingOrb className="bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/15 blur-[100px] opacity-50" />
        <FloatingOrb className="top-1/2 right-1/3 w-64 h-64 bg-violet-500/20 blur-[80px] opacity-40" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit mx-auto lg:mx-0"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Open to new opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span className="text-gradient">Saloni</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mt-2 min-h-[50px]">
                <TypewriterText words={ROLES} />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transforming ideas into powerful, dynamic web applications—one line of code at a time. I bridge the gap between creative design and robust backend functionality.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Rampur, Uttar Pradesh, India
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-primary" />
                BCA @ Uttaranchal University
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-primary" />
                MERN Stack Dev
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2 group shadow-lg shadow-primary/25" onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}>
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                <a href="mailto:isalonikashyap@gmail.com">
                  Let's Talk
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { href: "https://github.com/salonikashyap7899", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/saloni-kashyap-819b86261", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:isalonikashyap@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors p-2.5 bg-card rounded-full border border-border hover:border-primary/50 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: image + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-center gap-8"
          >
            {/* Avatar */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-pink-500 opacity-20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1 rounded-full border-2 border-dashed border-primary/30"
              />
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/40 bg-card shadow-2xl shadow-primary/20">
                <img
                  src="/avatar.png"
                  alt="Saloni Kashyap"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 bg-card border border-primary/30 rounded-xl px-3 py-1.5 shadow-lg text-xs font-semibold text-primary"
              >
                MERN Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-2 -left-2 bg-card border border-primary/30 rounded-xl px-3 py-1.5 shadow-lg text-xs font-semibold text-primary"
              >
                BCA 9.20 GPA
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors"
                >
                  <p className="text-2xl font-bold text-primary font-mono">
                    {inView ? <AnimatedCounter target={stat.value} suffix={stat.suffix} /> : "—"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
