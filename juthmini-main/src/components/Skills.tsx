import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Database,
  Server,
  Smartphone,
  TestTube,
  GitBranch,
  Container,
  Globe,
} from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
  isInView: boolean;
}

function SkillBar({ name, percentage, delay, isInView }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// Web Development Skills (formerly Core Competencies)
const webDevSkills = [
  { name: "MERN Stack", percentage: 85 },
  { name: "Next.js", percentage: 70 },
  { name: "REST APIs", percentage: 80 },
  { name: "MySQL", percentage: 85 },
  { name: "PostgreSQL", percentage: 70 },
];

const skillCategories = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Kotlin"],
    percentage: 75,
    color: "secondary",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    percentage: 80,
    color: "primary",
  },
  {
    icon: Container,
    title: "DevOps",
    skills: ["Docker", "Kubernetes"],
    percentage: 65,
    color: "accent",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub"],
    percentage: 85,
    color: "tertiary",
  },
  {
    icon: TestTube,
    title: "Testing Tools",
    skills: ["Selenium", "Postman", "JUnit"],
    percentage: 70,
    color: "secondary",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    percentage: 80,
    color: "primary",
  },
];

interface CircularProgressProps {
  percentage: number;
  isInView: boolean;
  delay: number;
}

function CircularProgress({ percentage, isInView, delay }: CircularProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-12 h-12">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-muted"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        {progress}%
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Technical Expertise
          </span>
          <h2 className="section-title">
            Skills &{" "}
            <span className="gradient-text-primary">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern software solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Web Development Skills (formerly Core Competencies) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Globe size={18} className="text-primary-foreground" />
                </div>
                Web Development
              </h3>

              <div className="space-y-6">
                {webDevSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={0.3 + index * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Skill Categories Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    style={{
                      background:
                        category.color === "primary"
                          ? "var(--gradient-primary)"
                          : category.color === "secondary"
                          ? "var(--gradient-secondary)"
                          : category.color === "accent"
                          ? "var(--gradient-accent)"
                          : "var(--gradient-primary)",
                    }}
                  >
                    <category.icon size={20} className="text-white" />
                  </div>
                  <CircularProgress
                    percentage={category.percentage}
                    isInView={isInView}
                    delay={0.6 + index * 0.1}
                  />
                </div>
                <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
