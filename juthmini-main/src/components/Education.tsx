import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    shortName: "SLIIT",
    degree: "BSc (Hons) in Information Technology",
    specialization: "Software Engineering",
    period: "Oct 2022 – Present",
    location: "Malabe, Sri Lanka",
    current: true,
    highlights: [
      "Software Engineering Specialization",
      "Industry-focused curriculum",
      "Practical project experience",
    ],
  },
  {
    institution: "Viharamahadevi Balika Vidyalaya",
    shortName: null,
    degree: "Advanced Level",
    specialization: "Bio Science Stream",
    period: "Completed 2020",
    location: "Kiribathgoda, Sri Lanka",
    current: false,
    highlights: [
      "Bio Science Stream",
      "Strong academic foundation",
      "Extracurricular activities",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-tertiary/10 text-tertiary text-sm font-medium">
            Education
          </span>
          <h2 className="section-title">
            Academic{" "}
            <span className="gradient-text-primary">Background</span>
          </h2>
          <p className="section-subtitle">
            Building a strong foundation for innovation
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                {/* Current Badge */}
                {edu.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      Current
                    </span>
                  </div>
                )}

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                      <GraduationCap size={32} className="text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-muted-foreground mb-3">
                      Specialization: {edu.specialization}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} className="text-primary" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} className="text-primary" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
