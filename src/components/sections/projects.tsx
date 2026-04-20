import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2, Layers, ShoppingCart, Globe, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "All Countries Info App",
    subtitle: "World Atlas at your fingertips",
    description: "A comprehensive web application providing detailed information about every country — population, capital, region, languages, currencies, and flag. Features a live search, filter by region, and a beautiful responsive card layout.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Parcel", "REST API"],
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
    iconColor: "text-blue-400",
    accentColor: "bg-blue-500",
    outcomes: ["API integration & async data fetching", "Responsive UI/UX design", "Search & filter functionality", "App deployment on Netlify"],
    highlights: ["180+ countries", "Live Search", "Flag Gallery", "Region Filter"],
    liveUrl: "https://all-countries-data-fetch.netlify.app/",
  },
  {
    id: 2,
    title: "GitHub Users Explorer",
    subtitle: "Search public GitHub repositories & PRs",
    description: "A React-based app that lets you search any public GitHub user or repository and view detailed pull request history using the GitHub REST API. Clean interface with real-time results and loading states.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub API", "React"],
    icon: Github,
    color: "from-gray-500/20 to-slate-500/20",
    borderColor: "hover:border-gray-400/50",
    iconColor: "text-gray-300",
    accentColor: "bg-gray-500",
    outcomes: ["GitHub API integration", "Async data handling", "User input management", "Responsive deployment on Netlify"],
    highlights: ["GitHub API", "PR History", "Real-time Search", "Responsive"],
    liveUrl: "https://github-pr.netlify.app/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    subtitle: "Personal finance made simple",
    description: "A clean, intuitive expense tracking app built with React and Tailwind CSS. Add, categorize, and monitor daily expenses with a live balance overview. Handles random expense simulation and persistent UI state.",
    tech: ["React", "Tailwind CSS", "useState", "React Hooks"],
    icon: Layers,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/50",
    iconColor: "text-green-400",
    accentColor: "bg-green-500",
    outcomes: ["React state management", "Controlled form handling", "Dynamic expense logic", "Clean functional UI"],
    highlights: ["Live Balance", "Add & Remove", "Category Tags", "Responsive"],
    liveUrl: "https://expenses-tracker-10.netlify.app/",
  },
  {
    id: 4,
    title: "Shopping Cart",
    subtitle: "Full Redux-powered cart experience",
    description: "An e-commerce shopping cart that fetches live product data from an external API, stores state in Redux Toolkit, and provides full cart control — add, remove, increase or decrease quantities with real-time total calculation.",
    tech: ["Redux Toolkit", "React Router", "React", "REST API", "Redux Store"],
    icon: ShoppingCart,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-purple-400",
    accentColor: "bg-purple-500",
    outcomes: ["Redux Toolkit state management", "API data fetching", "Cart CRUD operations", "Multi-page routing with React Router"],
    highlights: ["Redux Store", "API Data", "Cart Control", "Multi-page"],
    liveUrl: "https://shooping-cart-redux.netlify.app/",
  },
];

function ProjectCard({ project, idx, hoveredId, setHoveredId }: { project: any, idx: number, hoveredId: number | null, setHoveredId: (id: number | null) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = (y - centerY) / 15;
    const rotY = (centerX - x) / 15;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHoveredId(null);
  };

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setHoveredId(project.id)}
      style={{
        perspective: 1000,
        rotateX: rotateX,
        rotateY: rotateY,
        transition: "all 0.1s ease-out"
      }}
      className={`group relative bg-card border border-border rounded-2xl overflow-hidden ${project.borderColor} hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color} ${project.accentColor} opacity-100`}
        style={{ background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
      >
        <div className={`h-full w-full ${project.accentColor} opacity-60`} />
      </div>

      {/* Card glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="relative p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-background border border-border">
              <project.icon className={`w-5 h-5 ${project.iconColor}`} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground leading-tight">{project.title}</h3>
              <p className={`text-xs font-medium ${project.iconColor}`}>{project.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs font-mono opacity-60">0{project.id}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.highlights.map((h: string) => (
            <div key={h} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background border border-border rounded-lg px-2.5 py-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${project.accentColor}`} />
              {h}
            </div>
          ))}
        </div>

        {/* Learning outcomes */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Learnings</p>
          <ul className="space-y-1">
            {project.outcomes.map((outcome: string) => (
              <li key={outcome} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Code2 className={`w-3 h-3 mt-0.5 shrink-0 ${project.iconColor}`} />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t: string) => (
            <Badge
              key={t}
              variant="secondary"
              className="bg-background border border-border text-xs font-mono hover:border-primary/40 transition-colors"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="projects" className="py-28 relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A curated selection of real-world projects that demonstrate my skills in building complete, functional web applications.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div style={{ scale, opacity }} className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              idx={idx} 
              hoveredId={hoveredId} 
              setHoveredId={setHoveredId} 
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/salonikashyap7899"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
