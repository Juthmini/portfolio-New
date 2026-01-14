import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Lightbulb, Users, Rocket, Heart, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable solutions",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring cutting-edge technologies",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Thriving in team environments",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "High-quality results under pressure",
    color: "tertiary",
  },
];

const stats = [
  { value: "1+", label: "Years Experience", isAnimated: true },
  { value: "10+", label: "Projects Completed", isAnimated: false },
  { value: "4+", label: "Technologies", isAnimated: false },
  { value: "100%", label: "Dedication", isAnimated: false },
];

interface AnimatedCounterProps {
  value: string;
  isInView: boolean;
}

function AnimatedCounter({ value, isInView }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      const target = parseInt(numericPart);
      const duration = 1500;
      const steps = 30;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setDisplayValue(`${target}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayValue(`${Math.floor(current)}${suffix}`);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, numericPart, suffix]);

  return <span>{displayValue}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full" />

      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            About Me
          </span>
          <h2 className="section-title">
            Passionate About{" "}
            <span className="gradient-text-primary">Technology</span>
          </h2>
          <p className="section-subtitle">
            Transforming ideas into reality through code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground">
                  <Heart size={24} />
                </div>

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mb-4 mt-4"
                >
                  My Journey
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-4 leading-relaxed"
                >
                  As a Software Engineering undergraduate at Sri Lanka Institute of Information Technology (SLIIT) and an Associate Software Engineer at INORA Sri Lanka, I've had the privilege of working on real-world projects that challenge me to grow every day.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground mb-4 leading-relaxed"
                >
                  My passion lies in designing and developing <span className="text-primary font-medium">innovative software solutions</span> that make a real difference. From cloud-native microservices to mobile applications, I love exploring the full spectrum of software development.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  I believe in the power of <span className="text-secondary font-medium">collaboration</span> and continuous learning. Every project is an opportunity to grow, and every challenge is a chance to innovate.
                </motion.p>

                {/* Decorative Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <p className="italic text-foreground/80 flex items-start gap-2">
                    <Target className="text-primary mt-1 flex-shrink-0" size={18} />
                    "Striving to build technology that empowers and inspires."
                  </p>
                </motion.div>
              </div>

              {/* Floating Decoration */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-${item.color}-foreground`}
                  style={{
                    background: `var(--gradient-${item.color === 'primary' ? 'primary' : item.color === 'secondary' ? 'secondary' : item.color === 'tertiary' ? 'primary' : 'accent'})`,
                  }}
                >
                  <item.icon size={24} />
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-1">
                {stat.isAnimated ? (
                  <AnimatedCounter value={stat.value} isInView={isInView} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
