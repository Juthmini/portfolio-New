import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

const contributions = [
  {
    name: "Open Source Contributor",
    description: "Active contributor to open-source projects and collaborative development.",
    icon: Code2,
  },
  {
    name: "GitHub Active",
    description: "Regularly maintaining and updating personal and collaborative repositories.",
    icon: Github,
  },
];

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Open Source
          </span>
          <h2 className="section-title">
            GitHub &{" "}
            <span className="gradient-text-primary">Contributions</span>
          </h2>
          <p className="section-subtitle">
            Contributing to the developer community through open-source projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* GitHub Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                    <Github size={56} className="text-primary-foreground" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-tertiary flex items-center justify-center"
                  >
                    <Star size={18} className="text-tertiary-foreground fill-tertiary-foreground" />
                  </motion.div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Juthmini</h3>
                  <p className="text-muted-foreground mb-4">
                    Software Developer passionate about building innovative solutions and contributing to the open-source community.
                  </p>

                  <a
                    href="https://github.com/Juthmini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    <Github size={18} />
                    View GitHub Profile
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Contribution Highlights */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {contributions.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
