import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "isalonikashyap@gmail.com",
    href: "mailto:isalonikashyap@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9568037517",
    href: "tel:+919568037517",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rampur, Uttar Pradesh, India",
    href: null,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to opportunities",
    href: null,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/saloni-kashyap-819b86261",
    desc: "Connect with me professionally",
    color: "hover:border-blue-500/50 hover:bg-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/salonikashyap7899",
    desc: "Explore my code & projects",
    color: "hover:border-primary/50 hover:bg-primary/5",
    iconColor: "text-primary",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:isalonikashyap@gmail.com",
    desc: "Reach out directly",
    color: "hover:border-green-500/50 hover:bg-green-500/5",
    iconColor: "text-green-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Whether you have a project in mind, a job opportunity, or just want to say hello — my inbox is always open. 
            I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact info */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={itemVariants}>
                  {info.href ? (
                    <a href={info.href} className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-all">
                      <div className={`p-3 rounded-xl ${info.bg} border ${info.border} group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className={`p-3 rounded-xl ${info.bg} border ${info.border}`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Find me on</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ label, icon: Icon, href, desc, color, iconColor }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-3 bg-card border border-border rounded-xl transition-all ${color}`}
                  >
                    <div className="p-2 bg-background rounded-lg border border-border">
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-card border border-border rounded-3xl p-8 overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">Ready to work together?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  I'm currently open to internships, full-time roles, and freelance projects. If you think we'd be a great fit, let's talk!
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Available for Remote Work",
                    "Open to Internships & Full-time",
                    "Can start immediately",
                    "Experienced in team collaboration",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="w-full gap-2 shadow-lg shadow-primary/25" asChild>
                      <a href="mailto:isalonikashyap@gmail.com">
                        <Send className="w-4 h-4" />
                        Send Me an Email
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" variant="outline" className="w-full gap-2" asChild>
                      <a href="https://linkedin.com/in/saloni-kashyap-819b86261" target="_blank" rel="noreferrer">
                        <Linkedin className="w-4 h-4" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <p className="text-center text-xs text-muted-foreground mt-6">
                  Average response time: within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
