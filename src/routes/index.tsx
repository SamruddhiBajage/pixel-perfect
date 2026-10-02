import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import desk from "@/assets/desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samruddhi Bajage — Computer Engineering Student" },
      { name: "description", content: "Portfolio of Samruddhi Bajage, Computer Engineering student building software, AI and web projects." },
      { property: "og:title", content: "Samruddhi Bajage — Portfolio" },
      { property: "og:description", content: "Projects, skills and experience of Computer Engineering student Samruddhi Bajage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const nav = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Certifications", "Achievements", "Resume", "Contact"];

const education = [
  { years: "Currently pursuing", title: "B.Tech in Computer Engineering", place: "Vidyalankar Institute of Technology", note: "2024 – 2027", dot: "bg-terracotta" },
  { years: "Diploma", title: "Diploma in Computer Engineering", place: "Vidyalankar Polytechnic", note: "Percentage: 92.46%", dot: "bg-sage" },
  { years: "SSC", title: "Secondary School Certificate", note: "Percentage: 93%", dot: "bg-ink" },
];

const skills = [
  { cat: "Programming", items: ["Java", "Python", "C", "C++"] },
  { cat: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "MERN basics"] },
  { cat: "Database", items: ["SQL", "DBMS"] },
  { cat: "Core Computer Science", items: ["Data Structures", "OOP", "Operating Systems"] },
  { cat: "Tools", items: ["Git", "GitHub"] },
];

const projects = [
  { n: "01", tag: "AI · Desktop", title: "AI File Organizer", desc: "A GUI-based file organization system that categorizes and organizes files based on their usage and helps maintain a structured file system.", tech: ["AI", "GUI", "File Management"] },
  { n: "02", tag: "IoT · Cloud", title: "AirGuard – Smart Classroom Air Quality Monitoring", desc: "An IoT-based classroom air-quality monitoring project using ESP32 and sensors to monitor environmental conditions such as air quality, temperature and humidity, with cloud-based data visualization.", tech: ["ESP32", "IoT", "Sensors", "ThingSpeak", "Power BI"] },
  { n: "03", tag: "Web · Full-stack", title: "Civil Site Management System", desc: "A web-based construction site management system with role-based access for Admin, Civil Engineer and Project Manager to manage site activities efficiently.", tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "XAMPP"] },
  { n: "04", tag: "Hackathon · EdTech", title: "Gamified Learning Platform for Rural Education", desc: "Makes STEM learning engaging and accessible for rural students through gamification, multilingual content and offline-friendly functionality.", tech: ["React", "Node.js", "PWA"] },
  { n: "05", tag: "AI · Concept", title: "Indian Railways Train Traffic Optimization", desc: "An AI-based project concept focused on optimizing train traffic management and improving railway scheduling efficiency.", tech: ["AI", "Optimization"] },
];

const certs = ["CSS", "Advanced Java Programming", "Software Testing", "Python", "C++", "Data Structures", "Object-Oriented Programming", "DBMS", "Operating Systems"];

const achievements = [
  "Core member of the Technical Team",
  "NSS Core Team Member",
  "Participated in hackathons",
  "Selected for Smart India Hackathon internal team",
  "Technical workshops and events",
  "Fashion Show Team Member",
  "Basketball",
  "Volunteering and social activities",
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" /></svg>
);

const chip = "px-3 py-1.5 rounded-full bg-panel ring-1 ring-ink/5 text-sm transition-colors hover:ring-terracotta/40";
const card = "bg-panel ring-1 ring-ink/5 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_var(--color-ink)]";
const h2 = "font-display font-medium text-3xl md:text-4xl leading-tight text-balance";
const eyebrow = "text-sm text-terracotta tracking-wide mb-3";

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-paper text-ink">
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#home" className="font-display font-medium text-lg tracking-tight">Samruddhi Bajage<span className="text-terracotta">.</span></a>
          <div className="hidden lg:flex items-center gap-5 text-sm text-ink-soft">
            {nav.slice(1, -1).map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-ink transition-colors">{n}</a>)}
          </div>
          <a href="#contact" className="hidden lg:inline-block bg-ink text-paper text-sm px-4 py-2 rounded-full hover:bg-terracotta transition-colors">Contact</a>
          <button className="lg:hidden text-sm px-3 py-1.5 rounded-full ring-1 ring-ink/15" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "Close" : "Menu"}</button>
        </nav>
        {open && (
          <div className="lg:hidden border-t border-line px-6 py-4 grid grid-cols-2 gap-3 text-sm">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="text-ink-soft hover:text-ink">{n}</a>)}
          </div>
        )}
      </header>

      <section id="home" className="max-w-6xl mx-auto px-6 pt-20 pb-24 reveal">
        <p className={eyebrow + " mb-6"}>B.Tech Computer Engineering · Vidyalankar Institute of Technology</p>
        <h1 className="font-display font-medium text-5xl md:text-7xl leading-[1.05] tracking-tight">Samruddhi Bajage<span className="text-terracotta">.</span></h1>
        <p className="mt-6 max-w-[56ch] text-pretty text-ink-soft text-base md:text-lg">Computer Engineering student passionate about software development, artificial intelligence, web technologies, and building practical technology solutions.</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="bg-terracotta text-primary-foreground text-sm px-5 py-2.5 rounded-full hover:bg-ink transition-colors">View My Projects</a>
          <button type="button" disabled title="Resume coming soon" className="bg-panel text-ink-soft text-sm px-5 py-2.5 rounded-full ring-1 ring-ink/10 cursor-not-allowed opacity-70">Download Resume</button>
          <span className="mx-1 h-6 w-px bg-line" />
          <span title="Add your GitHub profile" aria-label="GitHub profile not added yet" className="size-10 grid place-items-center rounded-full ring-1 ring-ink/10 text-ink-soft opacity-60 cursor-not-allowed"><GitHubIcon /></span>
          <span title="Add your LinkedIn profile" aria-label="LinkedIn profile not added yet" className="size-10 grid place-items-center rounded-full ring-1 ring-ink/10 text-ink-soft opacity-60 cursor-not-allowed"><LinkedInIcon /></span>
        </div>
      </section>

      <section id="about" className="bg-panel border-y border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center reveal">
          <div className="order-2 md:order-1">
            <p className={eyebrow}>About me</p>
            <h2 className={h2 + " max-w-[22ch]"}>Curious by default, practical by habit.</h2>
            <p className="mt-5 max-w-[56ch] text-pretty text-ink-soft">I'm a Computer Engineering student who enjoys turning classroom ideas into things people can actually use. Most of my time goes into programming, software development and exploring how AI and the web can solve everyday problems.</p>
            <p className="mt-4 max-w-[56ch] text-pretty text-ink-soft">I like hands-on work — wiring up an ESP32, building a small web app, or untangling a tricky bug — and I learn best by building, breaking and rebuilding.</p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div><span className="block font-display font-medium text-3xl">92.46%</span><span className="text-ink-soft">Diploma</span></div>
              <div className="w-full"><span className="block font-display font-medium text-3xl leading-snug">Projects • Development • Technology</span></div>
              <div><span className="block font-display font-medium text-3xl">9</span><span className="text-ink-soft">Certifications</span></div>
            </div>
          </div>
          <img src={desk} alt="Illustrative image of an engineering workspace with a laptop and microcontroller board" width={896} height={1120} loading="lazy" className="order-1 md:order-2 w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-ink/5" />
        </div>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 reveal">
        <div><p className={eyebrow}>Education</p><h2 className={h2}>Where I've learned</h2></div>
        <div className="md:col-span-2 space-y-5">
          {education.map((e) => (
            <div key={e.title} className={card + " flex gap-4"}>
              <span className={`mt-2 size-2.5 rounded-full shrink-0 ${e.dot}`} />
              <div>
                <p className="text-sm text-ink-soft">{e.years}</p>
                <h3 className="font-display font-medium text-xl">{e.title}</h3>
                {"place" in e && <p className="text-ink-soft text-sm mt-1">{e.place}</p>}
                <p className="text-sm mt-2 text-terracotta">{e.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-panel border-y border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 reveal">
          <p className={eyebrow}>Technical skills</p>
          <h2 className={h2}>Tools I reach for</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s) => (
              <div key={s.cat} className="bg-paper ring-1 ring-ink/5 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-display font-medium text-lg mb-4">{s.cat}</h3>
                <div className="flex flex-wrap gap-2">{s.items.map((i) => <span key={i} className={chip}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 reveal">
        <p className={eyebrow}>Projects</p>
        <h2 className={h2 + " mb-10"}>Selected work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={p.title} className={card + " flex flex-col gap-4" + (i === 0 ? " md:col-span-2" : "")}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-terracotta">{p.tag}</span>
                <span className="font-display text-ink-soft">{p.n}</span>
              </div>
              <h3 className="font-display font-medium text-2xl leading-snug">{p.title}</h3>
              <p className="text-pretty text-ink-soft text-sm max-w-[60ch]">{p.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-ink-soft">
                {p.tech.map((t) => <span key={t} className="px-2.5 py-1 rounded-full bg-paper ring-1 ring-ink/5">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-panel border-y border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 reveal">
          <div><p className={eyebrow}>Experience</p><h2 className={h2}>Work so far</h2></div>
          <div className="md:col-span-2 flex gap-4">
            <span className="mt-2 size-2.5 rounded-full bg-terracotta shrink-0" />
            <div>
              <p className="text-sm text-ink-soft">Internship</p>
              <h3 className="font-display font-medium text-xl">Web &amp; App Development Intern · VocalsLocals</h3>
              <ul className="mt-3 space-y-2 text-ink-soft text-sm max-w-[60ch] list-disc pl-4">
                <li>Experience in web and application development.</li>
                <li>Exposure to MERN-related technologies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="max-w-6xl mx-auto px-6 py-20 reveal">
        <p className={eyebrow}>Certifications</p>
        <h2 className={h2 + " mb-10"}>Courses completed</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <div key={c} className={card + " !p-5 flex items-center gap-4"}>
              <span className="font-display text-terracotta text-lg w-7">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="bg-panel border-y border-line">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 reveal">
          <div><p className={eyebrow}>Achievements &amp; activities</p><h2 className={h2}>Beyond the classroom</h2></div>
          <ul className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {achievements.map((a, i) => (
              <li key={a} className="flex gap-3 border-b border-line pb-4">
                <span className={`mt-2 size-2 rounded-full shrink-0 ${i % 2 ? "bg-sage" : "bg-terracotta"}`} />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="resume" className="max-w-6xl mx-auto px-6 py-20 reveal">
        <div className="bg-panel ring-1 ring-ink/5 rounded-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className={eyebrow}>Resume</p>
            <h2 className={h2}>The one-page version.</h2>
            <p className="mt-3 text-ink-soft max-w-[48ch]">Education, skills, projects and experience in a single PDF.</p>
          </div>
          <div className="self-start md:self-auto flex flex-col items-start md:items-end gap-2">
            <button type="button" disabled className="bg-terracotta/50 text-primary-foreground text-sm px-6 py-3 rounded-full cursor-not-allowed">Download Resume</button>
            <span className="text-xs text-ink-soft">Resume PDF coming soon</span>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 reveal">
          <div>
            <h2 className="font-display font-medium text-4xl leading-tight max-w-[20ch] text-balance">Let's build something worth keeping.</h2>
            <p className="mt-4 max-w-[48ch] text-paper/70">Open to internships, collaborations and interesting projects.</p>
            <div className="mt-8 space-y-3 text-sm">
              <p className="text-paper/80"><span className="text-paper">Email</span> — Add your email</p>
              <p className="flex items-center gap-2 text-paper/80"><GitHubIcon /> <span className="text-paper">GitHub</span> — Add your GitHub profile</p>
              <p className="flex items-center gap-2 text-paper/80"><LinkedInIcon /> <span className="text-paper">LinkedIn</span> — Add your LinkedIn profile</p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block"><span className="text-xs text-paper/70">Name</span>
                <input required type="text" placeholder="Your name" className="mt-1 w-full bg-paper/5 ring-1 ring-paper/10 rounded-full px-4 py-2.5 text-sm placeholder:text-paper/40 focus:outline-none focus:ring-terracotta" /></label>
              <label className="block"><span className="text-xs text-paper/70">Email</span>
                <input required type="email" placeholder="you@email.com" className="mt-1 w-full bg-paper/5 ring-1 ring-paper/10 rounded-full px-4 py-2.5 text-sm placeholder:text-paper/40 focus:outline-none focus:ring-terracotta" /></label>
            </div>
            <label className="block"><span className="text-xs text-paper/70">Message</span>
              <textarea required rows={4} placeholder="Tell me a little about what you have in mind" className="mt-1 w-full bg-paper/5 ring-1 ring-paper/10 rounded-xl px-4 py-3 text-sm placeholder:text-paper/40 focus:outline-none focus:ring-terracotta" /></label>
            <button type="submit" className="bg-terracotta text-primary-foreground text-sm px-5 py-2.5 rounded-full hover:bg-paper hover:text-ink transition-colors">Send Message</button>
            {sent && <p className="text-sm text-paper/70">Thanks! Your message has been noted.</p>}
          </form>
        </div>
      </section>

      <footer className="bg-ink text-paper/50 border-t border-paper/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Samruddhi Bajage. All rights reserved.</p>
          <div className="flex gap-4">
            <span title="Add your GitHub profile" aria-label="GitHub profile not added yet"><GitHubIcon /></span>
            <span title="Add your LinkedIn profile" aria-label="LinkedIn profile not added yet"><LinkedInIcon /></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
