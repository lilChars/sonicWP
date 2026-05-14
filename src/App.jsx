import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const chaosSkills = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "SQL", "Bash"],
    accent: "gem-blue"
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Express", "Spring Boot"],
    accent: "gem-cyan"
  },
  {
    title: "Backend",
    skills: ["REST APIs", "Auth", "Validation", "Microservices"],
    accent: "gem-amber"
  },
  {
    title: "Cloud",
    skills: ["AWS", "GCP", "Docker", "Serverless"],
    accent: "gem-violet"
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "Data Modeling"],
    accent: "gem-emerald"
  },
  {
    title: "CI/CD",
    skills: ["GitHub Actions", "Pipelines", "Testing", "Releases"],
    accent: "gem-ruby"
  },
  {
    title: "Architecture",
    skills: ["System Design", "Scalability", "Observability", "Performance"],
    accent: "gem-silver"
  }
];

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-extrabold tracking-[0.22em] text-skyPulse">{eyebrow}</p>
      <h2 className="max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoMissing, setPhotoMissing] = useState(false);
  const [activeGem, setActiveGem] = useState(6);

  const photoSources = [
    "/images/carlos-photo.jpg",
    "/images/carlos-photo.jpeg",
    "/images/carlos-photo.png",
    "/images/carlos-photo.webp"
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="greenhill-sky" />
        <div className="greenhill-cloud greenhill-cloud-a" />
        <div className="greenhill-cloud greenhill-cloud-b" />
        <div className="greenhill-hill greenhill-hill-far" />
        <div className="greenhill-hill greenhill-hill-near" />
        <div className="greenhill-ground" />
        <div className="absolute -left-28 top-20 h-72 w-72 ring-outline animate-ringSpin opacity-35" />
        <div className="absolute -right-36 bottom-16 h-96 w-96 ring-outline animate-ringSpin opacity-25 [animation-duration:26s]" />
        <div className="absolute left-1/2 top-32 h-24 w-[34rem] -translate-x-1/2 rounded-full bg-speedline opacity-25 blur-md" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-abyss/70 backdrop-blur-md">
        <nav className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="ring-outline h-5 w-5" />
            <span className="font-display text-sm tracking-wide">BuiltForSpeed.dev</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm font-bold text-slate-200 md:flex">
            <li><a className="hover:text-white" href="#about" onClick={closeMenu}>About</a></li>
            <li><a className="hover:text-white" href="#dna" onClick={closeMenu}>Sonic DNA</a></li>
            <li><a className="hover:text-white" href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a className="hover:text-white" href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-xs font-extrabold tracking-wide text-white hover:border-skyPulse md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg border border-white/20 px-3 py-2 text-xs font-extrabold tracking-wide text-white hover:border-skyPulse md:inline-flex"
          >
            Let's Talk
          </a>
        </nav>
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0
          }}
          className="mx-auto w-[92%] max-w-6xl overflow-hidden md:hidden"
        >
          <ul className="mb-3 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-bold text-slate-100">
            <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#about" onClick={closeMenu}>About</a></li>
            <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#dna" onClick={closeMenu}>Sonic DNA</a></li>
            <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </motion.div>
      </header>

      <main id="main" className="mx-auto w-[92%] max-w-6xl">
        <section id="home" className="grid min-h-[85vh] gap-8 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="mb-4 text-xs font-extrabold tracking-[0.22em] text-skyPulse">SUPER SOFTWARE DEVELOPER</p>
            <h1 className="max-w-[14ch] font-display text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              Backend, cloud, apps, and scalable software.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
              I design and ship complete software systems, from architecture to production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="speed-sheen rounded-xl bg-gradient-to-r from-cobalt to-skyPulse px-5 py-3 text-sm font-extrabold text-white shadow-neon"
              >
                Explore Experience
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-extrabold text-white hover:border-ringGold"
              >
                Direct Contact
              </a>
            </div>
          </motion.div>

          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass rounded-3xl p-6 shadow-neon"
          >
            <div className="hero-ring-stage mb-5">
              <div className="hero-power-ring">
                <div className="hero-profile-avatar">
                  {!photoMissing ? (
                    <img
                      src={photoSources[photoIndex]}
                      alt="Profile"
                      className="hero-profile-image"
                      onError={() => {
                        if (photoIndex < photoSources.length - 1) {
                          setPhotoIndex((prev) => prev + 1);
                        } else {
                          setPhotoMissing(true);
                        }
                      }}
                    />
                  ) : (
                    <span className="hero-photo-fallback">ADD PHOTO</span>
                  )}
                </div>
              </div>
              <div className="hero-speed-lines" />
            </div>

            <div className="rounded-2xl border border-ringGold/45 bg-gradient-to-br from-cobalt/25 via-cobalt/10 to-transparent p-5">
              <p className="text-xs font-extrabold tracking-[0.2em] text-ringGold">BOOST MODE</p>
              <p className="mt-2 text-xl font-extrabold text-white">Fast delivery without cutting quality</p>
              <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white/15">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-ringGold to-emerald"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Scope", "Apps + Platforms"],
                ["Cloud", "Deploy and Operate"],
                ["Architecture", "Scalable by design"],
                ["Delivery", "From idea to production"]
              ].map(([k, v]) => (
                <article key={k} className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <h3 className="font-display text-sm text-white">{k}</h3>
                  <p className="mt-1 text-xs text-slate-300">{v}</p>
                </article>
              ))}
            </div>
          </motion.aside>
        </section>

        <motion.section
          id="about"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-14"
        >
          <SectionTitle eyebrow="ABOUT ME" title="Software thinking, product execution, real outcomes." />
          <div className="grid gap-4 md:grid-cols-2">
            <p className="glass rounded-2xl p-5 text-slate-300">
              I build end-to-end software: architecture, backend, frontend apps, and production delivery.
            </p>
            <p className="glass rounded-2xl p-5 text-slate-300">
              My focus is speed with engineering quality, so systems stay reliable, scalable, and maintainable.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="dna"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-14"
        >
          <SectionTitle eyebrow="SONIC DNA" title="How I build: speed, precision, and relentless momentum." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Speed with focus",
                text: "I ship fast while protecting architecture quality, so products can evolve without rewrites."
              },
              {
                title: "Technical precision",
                text: "From API contracts to data modeling and cloud deployment, details are handled with engineering discipline."
              },
              {
                title: "Constant momentum",
                text: "I keep teams moving with practical decisions, direct communication, and iterative delivery."
              }
            ].map((item) => (
              <article
                key={item.title}
                className="speed-sheen rounded-2xl border border-white/15 bg-gradient-to-b from-cobalt/10 via-white/5 to-white/5 p-5"
              >
                <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-14"
        >
          <SectionTitle eyebrow="SKILLS" title="Core stack." />
          <div className="chaos-grid">
            {chaosSkills.map((gem, index) => (
              <button
                key={gem.title}
                type="button"
                onClick={() => setActiveGem((prev) => (prev === index ? -1 : index))}
                aria-pressed={activeGem === index}
                className={`chaos-gem chaos-gem-${index + 1} ${gem.accent} ${activeGem === index ? "is-active" : ""}`}
              >
                <div className="chaos-gem-crystal">
                  <div className="chaos-gem-inner">
                    <h3 className="chaos-gem-title">{gem.title}</h3>
                    {activeGem === index ? (
                      <ul className="chaos-skill-list">
                        {gem.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="chaos-gem-hint">Click to expand</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-14"
        >
          <SectionTitle eyebrow="CONTACT" title="Direct lines to connect and build something great." />
          <div className="grid gap-4">
            <div className="glass rounded-3xl p-6">
              <p className="max-w-3xl text-slate-300">
                Need backend, cloud, system design, or full product execution? Let's build it.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:carlosluzumbero@gmail.com" className="rounded-xl bg-gradient-to-r from-cobalt to-skyPulse px-5 py-3 text-sm font-extrabold text-white shadow-neon">
                  Send Email
                </a>
                <a href="https://github.com/lilChars" target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-extrabold text-white">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/cbrojas777/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-extrabold text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto w-[92%] max-w-6xl border-t border-white/10 py-8 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Built for speed.</p>
      </footer>
    </>
  );
}
