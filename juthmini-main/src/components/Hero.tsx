import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import TypewriterText from "./TypewriterText";
import profilePhoto from "@/assets/profile-photo.jpeg";

export default function Hero() {
  const roles = [
    "Software Engineering Undergraduate",
    "Full Stack Developer",
    "Innovation Enthusiast",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image - At the Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl scale-110" />
              
              {/* Profile Image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Juthmini Gunawardhana"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 px-4 py-2 rounded-xl bg-card border border-border shadow-lg"
              >
                <span className="text-sm font-semibold text-primary">
                  Available for Work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-sm font-medium text-primary">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text-primary">Juthmini</span>
            <br />
            <span className="text-foreground">Gunawardhana</span>
          </motion.h1>

          {/* Typewriter Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium mb-6 h-8 md:h-10"
          >
            <TypewriterText texts={roles} speed={80} deleteSpeed={40} pauseTime={2500} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Building scalable, reliable, and user-focused software solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/Juthmini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={22} />
            </a>
            <a
              href="http://www.linkedin.com/in/juthmini-abeysirigunawardhana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:juthmini2001@gmail.com"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
