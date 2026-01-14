import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Work Experience
          </span>
          <h2 className="section-title">
            My Professional{" "}
            <span className="gradient-text-primary">Journey</span>
          </h2>
          <p className="section-subtitle">
            Building expertise through real-world challenges and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-primary bg-background md:-translate-x-1/2 z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="group relative bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  {/* Type Badge */}
                  <div className="absolute -top-3 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.current
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>

                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
