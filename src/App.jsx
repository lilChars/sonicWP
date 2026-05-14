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

const skillBlocks = [
  {
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "CSS Architecture", "Motion UI"]
  },
  {
    title: "Backend",
    items: ["Node.js / Express", "REST APIs", "Authentication", "Validation"]
  },
  {
    title: "Data",
    items: ["PostgreSQL / MySQL", "Data Modeling", "Optimized Queries", "Migrations"]
  },
  {
    title: "Quality",
    items: ["Performance Budget", "Technical SEO", "Accessibility", "Continuous Deploy"]
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
            <span className="font-display text-sm tracking-wide">Carlos.dev</span>
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
            <p className="mb-4 text-xs font-extrabold tracking-[0.22em] text-skyPulse">FULL STACK DEVELOPER</p>
            <h1 className="max-w-[14ch] font-display text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              I'm Carlos Rojas, a full stack developer built for speed.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
              My workflow is Sonic-inspired: move fast, stay precise, and keep momentum alive.
              I build clean, responsive web experiences designed for real people and real outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="speed-sheen rounded-xl bg-gradient-to-r from-cobalt to-skyPulse px-5 py-3 text-sm font-extrabold text-white shadow-neon"
              >
                Explore My Profile
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
                <div className="hero-profile-avatar" style={{ backgroundImage: "url('/images/carlos-photo.jpg')" }} />
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
                ["Full Stack", "Frontend + Backend"],
                ["Remote", "LATAM / Global"],
                ["Clean Code", "Scalable and maintainable"],
                ["UX First", "Clarity and usability"]
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
          <SectionTitle eyebrow="ABOUT ME" title="Code with rhythm, products with real impact." />
          <div className="grid gap-4 md:grid-cols-2">
            <p className="glass rounded-2xl p-5 text-slate-300">
              I'm a Full Stack Developer building web solutions focused on user experience, performance,
              and measurable business results. I work from concept to production with technical structure
              and visual clarity in every detail.
            </p>
            <p className="glass rounded-2xl p-5 text-slate-300">
              My approach blends rapid execution with sustainable quality: reusable components,
              technical SEO, accessibility, and product decisions grounded in clear objectives.
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
                text: "I iterate fast, ship functional blocks early, and keep technical direction sharp in every sprint."
              },
              {
                title: "Technical precision",
                text: "I write clean, semantic code with maintainability, accessibility, and performance as non-negotiables."
              },
              {
                title: "Constant momentum",
                text: "I remove unnecessary friction through simple decisions, direct communication, and continuous improvement."
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
          <SectionTitle eyebrow="SKILLS" title="A stack tuned for modern and scalable products." />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {skillBlocks.map((block) => (
              <article
                key={block.title}
                className="speed-sheen rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-neon"
              >
                <h3 className="text-base font-extrabold text-white">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {block.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Tailwind",
              "Framer Motion",
              "Technical SEO",
              "Accessibility"
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-bold text-sky-100">
                {tag}
              </span>
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
                If you need a full stack developer who combines speed with quality, let's talk.
                You'll get clear direction, concrete next steps, and strong technical communication.
                As I like to say: "Gotta go fast, but never break the user experience."
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
        <p>© {new Date().getFullYear()} Carlos. Built for speed.</p>
      </footer>
    </>
  );
}
