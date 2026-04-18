import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, CheckCircle2, Trophy } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(rgba(168,85,247,0.6) 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-6 border-l-2 border-primary/30"
              >
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 border-2 border-background" />
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Full-Stack Developer</h4>
                      <p className="text-primary font-semibold text-sm mt-0.5">Sanamdesign Wallah Private Ltd</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        Aug 2025 – Oct 2025
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        Remote · 3 months
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Worked as a Full-Stack Developer building and maintaining dynamic web applications. Collaborated closely with the design and backend teams to deliver pixel-perfect, performant solutions using the MERN stack.
                  </p>

                  <div className="space-y-2">
                    {[
                      "Built responsive UIs using React.js and Tailwind CSS",
                      "Integrated REST APIs and managed state with Redux",
                      "Collaborated with designers to implement Figma mockups",
                      "Worked in an Agile remote-first environment"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    {["React.js", "Tailwind CSS", "Redux", "Node.js", "REST API", "Figma", "Git"].map((t) => (
                      <span key={t} className="text-xs bg-background border border-border px-2.5 py-1 rounded-md font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-6 border-l-2 border-blue-400/30 space-y-6"
              >
                {/* BCA */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-400 shadow-lg shadow-blue-400/40 border-2 border-background" />
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-400/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Bachelor of Computer Application (BCA)</h4>
                        <p className="text-blue-400 font-semibold text-sm">Uttaranchal University, Dehradun</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          July 2023 – July 2026
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          GPA: 9.20 / 10
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Pursuing a comprehensive degree in Computer Applications with focus on software development, data structures, databases, and web technologies.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Data Structures", "DBMS", "Web Technologies", "Operating Systems", "Networking"].map((s) => (
                        <span key={s} className="text-xs bg-background border border-border px-2.5 py-1 rounded-md text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* PW Skills */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-400/60 border-2 border-background" />
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-400/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Full Stack Web Developer Certification</h4>
                        <p className="text-blue-400 font-semibold text-sm">PW Skills</p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        January 2023
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      Completed an intensive Full Stack Web Development program covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and deployment workflows.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Achievements column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 border border-yellow-500/20">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: "Code Soft Internship",
                  icon: Briefcase,
                  color: "text-yellow-400",
                  bg: "bg-yellow-400/10",
                  border: "border-yellow-400/20",
                  desc: "Completed a software development internship at Code Soft, gaining hands-on experience in building real-world applications.",
                  badge: "Internship"
                },
                {
                  title: "PW Skills Certificate",
                  icon: Award,
                  color: "text-green-400",
                  bg: "bg-green-400/10",
                  border: "border-green-400/20",
                  desc: "Earned a Full-stack Web Development certificate from PW Skills, demonstrating proficiency across the modern web stack.",
                  badge: "Certification"
                },
                {
                  title: "9.20 GPA",
                  icon: GraduationCap,
                  color: "text-primary",
                  bg: "bg-primary/10",
                  border: "border-primary/20",
                  desc: "Maintaining excellent academic performance with a 9.20/10 GPA at Uttaranchal University.",
                  badge: "Academic"
                }
              ].map((ach, i) => (
                <motion.div
                  key={ach.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.1 } } }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-card border ${ach.border} rounded-2xl p-5 hover:shadow-sm transition-all`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${ach.bg} shrink-0`}>
                      <ach.icon className={`w-5 h-5 ${ach.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-foreground">{ach.title}</h4>
                      </div>
                      <span className={`text-xs font-semibold uppercase tracking-wide ${ach.color} mb-2 block`}>{ach.badge}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{ach.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20 rounded-2xl p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Currently Exploring</p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js 15", "Docker", "AWS", "GraphQL"].map((t) => (
                  <motion.span
                    key={t}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                    className="text-xs bg-background border border-primary/30 text-primary px-2.5 py-1 rounded-full font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
