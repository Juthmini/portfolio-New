import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectCountries from "@/assets/project-countries.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectMedication from "@/assets/project-medication.jpg";

const projects = [
  {
    title: "Cloud-Native Restaurant Management System",
    description:
      "Developed a full-stack Cloud-Native Food Ordering & Delivery System using Microservices architecture. Features real-time order management, scalable infrastructure, and efficient deployment.",
    image: projectRestaurant,
    tech: ["MERN Stack", "Docker", "Kubernetes", "Microservices"],
    github: "https://github.com/Juthmini",
    color: "primary",
  },
  {
    title: "REST Countries API Frontend",
    description:
      "Interactive web application integrating REST Countries API with search, filter, and detailed country information display. Built with modern React patterns and comprehensive testing.",
    image: projectCountries,
    tech: ["React", "REST API", "Cypress", "CSS"],
    github: "https://github.com/Juthmini",
    color: "secondary",
  },
  {
    title: "Personal Finance Tracker API",
    description:
      "Developed a RESTful API for personal finance management, enabling users to track expenses, income, and budgets. Includes comprehensive test coverage with unit and integration tests.",
    image: projectFinance,
    tech: ["Node.js", "Express.js", "MongoDB", "Jest"],
    github: "https://github.com/Juthmini",
    color: "accent",
  },
  {
    title: "Mobile Medication Delivery App",
    description:
      "Mobile app to track and deliver medications to rural areas in Sri Lanka. Features secure authentication, real-time order tracking, and role-based dashboards for accessible UX.",
    image: projectMedication,
    tech: ["React Native", "Node.js", "MongoDB", "Expo"],
    github: "https://github.com/Juthmini",
    color: "tertiary",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Featured Projects
          </span>
          <h2 className="section-title">
            Showcasing My{" "}
            <span className="gradient-text-primary">Best Work</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-card text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-card text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Juthmini"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
