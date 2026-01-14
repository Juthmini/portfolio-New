import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-background">
              Juthmini<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-background/70 mt-1">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Juthmini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-background/10 hover:bg-background/20 transition-colors hover:-translate-y-1 duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="http://www.linkedin.com/in/juthmini-abeysirigunawardhana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-background/10 hover:bg-background/20 transition-colors hover:-translate-y-1 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:juthmini2001@gmail.com"
              className="p-3 rounded-xl bg-background/10 hover:bg-background/20 transition-colors hover:-translate-y-1 duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-background/70 flex items-center justify-center gap-1">
            © {currentYear} Juthmini Gunawardhana. Made with
            <Heart size={14} className="text-secondary fill-secondary" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
