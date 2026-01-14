import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "INORA Sri Lanka",
    location: "Sri Lanka",
    period: "Oct 2024 – Present",
    description:
      "Full-stack development on real-world projects across the SDLC. Working with modern technologies to deliver scalable and efficient software solutions.",
    skills: ["MERN Stack", "Next.js", "Docker", "Kubernetes"],
    type: "Full-time",
    current: true,
  },
  {
    title: "Full Stack Developer Intern",
    company: "INORA Sri Lanka",
    location: "Sri Lanka",
    period: "Mar 2024 – Sep 2024",
    description:
      "Contributed to industry projects using agile development practices. Gained hands-on experience in building production-ready applications.",
    skills: ["React", "Node.js", "MongoDB", "Agile"],
    type: "Internship",
    current: false,
  },
  {
    title: "Trainee",
    company: "People's Bank",
    location: "Kiribathgoda",
    period: "Apr 2022 – Oct 2022",
    description:
      "Gained hands-on experience in core banking operations and customer service. Developed strong communication and problem-solving skills.",
    skills: ["Banking Operations", "Customer Service", "Communication"],
    type: "Training",
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-8 md:py-12 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container px-4 mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide">
            Work Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building expertise through real-world challenges and continuous learning in the tech landscape.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-5xl mx-auto"
        >
          {/* Central Timeline Gradient Line (Desktop) */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 block" />

          {experiences.map((exp, index) => (
            <motion.div
              variants={itemVariants}
              key={exp.title + exp.company}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-8 last:mb-0 box-border ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-primary bg-background md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">
                {exp.current && (
                  <div className="absolute inset-[-4px] rounded-full bg-primary/30 animate-ping" />
                )}
              </div>

              {/* Spacer for layout balance */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className={`md:w-1/2 relative ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8`}>
                <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute -top-3 right-6">
                     <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm ${
                        exp.current
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/10 text-secondary border border-secondary/20"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                             <Briefcase size={20} />
                        </div>
                        <div>
                             <h3 className="text-xl font-bold leading-tight">{exp.title}</h3>
                             <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary/70" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary/70" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
