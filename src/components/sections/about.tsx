import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Code2, Palette, Database, Wrench, Star, BookOpen, Target, Zap } from "lucide-react";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiRedux, SiNodedotjs, SiMongodb, SiMysql,
  SiPhp, SiLaravel, SiGit, SiGithub, SiFigma, SiPostman, SiVscodium, SiNetlify
} from "react-icons/si";

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]", level: 95 },
      { name: "CSS3", icon: SiCss, color: "text-[#1572B6]", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", level: 85 },
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]", level: 70 },
    ]
  },
  {
    label: "Frameworks",
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    items: [
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]", level: 88 },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", level: 92 },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]", level: 78 },
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]", level: 65 },
    ]
  },
  {
    label: "Database & Backend",
    icon: Database,
    color: "text-green-400",
    bg: "bg-green-400/10",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", level: 75 },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", level: 72 },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", level: 70 },
    ]
  },
  {
    label: "Tools & Design",
    icon: Wrench,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    items: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]", level: 85 },
      { name: "GitHub", icon: SiGithub, color: "text-foreground", level: 88 },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", level: 75 },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", level: 78 },
      { name: "VS Code", icon: SiVscodium, color: "text-[#007ACC]", level: 95 },
      { name: "Netlify", icon: SiNetlify, color: "text-[#00C7B7]", level: 80 },
    ]
  }
];

const highlights = [
  { icon: Star, label: "GPA", value: "9.20/10", desc: "Academic excellence at Uttaranchal University" },
  { icon: Target, label: "Focus", value: "Full Stack", desc: "End-to-end web application development" },
  { icon: BookOpen, label: "Certified", value: "PW Skills", desc: "Full Stack Web Development certification" },
  { icon: Palette, label: "Design", value: "UI/UX", desc: "Figma proficiency & user-centered design" },
];

function SkillBar({ level, color }: { level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="h-1.5 bg-border rounded-full overflow-hidden mt-1">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-pink-500"
      />
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} id="about" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About <span className="text-gradient">Me</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate <strong className="text-foreground">Full Stack Web Developer</strong> currently pursuing my BCA at Uttaranchal University with a stellar GPA of 9.20/10. 
            I specialize in building complete web solutions — from pixel-perfect interfaces to scalable backend systems — using the MERN stack and modern tooling.
          </p>
        </motion.div>

        {/* Highlights row */}
        <motion.div
          style={{ rotate, scale }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/40 transition-all cursor-default relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-3">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xl font-bold text-foreground">{h.value}</p>
                <p className="text-xs font-semibold text-primary mt-0.5 uppercase tracking-wide">{h.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Technical Skills</p>
            <h3 className="text-3xl md:text-4xl font-bold">My <span className="text-gradient">Arsenal</span></h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, x: catIdx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.bg}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h4 className="font-bold text-foreground">{category.label}</h4>
                </div>

                {/* Skill items with progress bars */}
                <div className="space-y-4">
                  {category.items.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + sIdx * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <skill.icon className={`w-4 h-4 ${skill.color}`} />
                          </div>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} color={category.color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 via-card to-pink-500/10 border border-primary/20 rounded-2xl p-8"
        >
          <p className="text-lg text-foreground font-medium leading-relaxed">
            "I believe every project is an opportunity to learn, grow, and create something that makes a difference. 
            Whether it's a clean UI or a scalable backend, I bring the same level of dedication and attention to detail."
          </p>
          <p className="text-primary font-semibold mt-3">— Saloni Kashyap</p>
        </motion.div>
      </div>
    </section>
  );
}
