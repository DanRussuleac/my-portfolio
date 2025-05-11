import React, { useState, useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaDatabase, FaPython, FaDocker, FaLinux, FaReact, FaJsSquare, FaJava, FaGitAlt } from "react-icons/fa";
import { SiHtml5, SiCss3 } from "react-icons/si";

const name = "Dan Russuleac";
const tagLine =
  "Results-driven Computer Science graduate & Azure-certified professional ready to turn complex performance challenges into measurable wins.";
const resumeFile = `${import.meta.env.BASE_URL}cv.pdf`;

const socials = [
  { label: "GitHub", url: "https://github.com/DanRussuleac", icon: <FaGithub /> },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/dan-r-2589662b0/", icon: <FaLinkedin /> },
];

const skills = [
  { label: "Python", detail: "Advanced", icon: <FaPython /> },
  { label: "SQL", detail: "Intermediate", icon: <FaDatabase /> },
  { label: "Linux / Bash", detail: "Systemd & scripting", icon: <FaLinux /> },
  { label: "JavaScript", detail: "Intermediate", icon: <FaJsSquare /> },
  { label: "React 18", detail: "Hooks & Router", icon: <FaReact /> },
  { label: "Node / Express", detail: "REST APIs", icon: <FaGitAlt /> },
  { label: "Java", detail: "OOP, Intermediate", icon: <FaJava /> },
  { label: "Docker", detail: "Compose", icon: <FaDocker /> },
  { label: "HTML", detail: "Semantic", icon: <SiHtml5 /> },
  { label: "CSS", detail: "Responsive", icon: <SiCss3 /> },
];

const projects = [
  {
    title: "MindCare – AI Mental-Health Companion",
    description:
      "Full-stack mental-health platform with GPT-powered chatbot, self-care tools and analytics (React + Node). Video demo coming soon.",
    image: `${import.meta.env.BASE_URL}mindcare.png`,
    link: "https://github.com/DanRussuleac/MindCare_Test",
    aos: "zoom-in-up",
  },
  {
    title: "Music Visualizer – Real-time Audio Spectra",
    description: "WebGL canvas that turns music into dynamic visualisations in real time.",
    image: `${import.meta.env.BASE_URL}music.png`,
    link: "https://github.com/DanRussuleac/MusicVisuals",
    aos: "zoom-in-up",
  },
  {
    title: "FitTrack – Android Fitness Coach (Java)",
    description: "Android app for workout & calorie tracking, push notifications via FCM, Room DB sync to Firebase.",
    image: `${import.meta.env.BASE_URL}fitness.jpg`,
    link: "https://github.com/DanRussuleac/MobileProject",
    aos: "zoom-in-up",
  },
];

function Card({ children, className = "", aos }) {
  return (
    <div className={`card ${className}`} data-aos={aos}>
      {children}
    </div>
  );
}

function SocialButton({ url, icon, label }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={label}>
      {icon}
    </a>
  );
}

function Button({ href, children, download = false, external = false }) {
  const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href, download };
  return (
    <a className="btn" {...props}>
      {children}
    </a>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <div className="site-wrapper">
      <header className="header shadow-lg" data-aos="fade-down">
        <div className="container header__inner">
          <a href="#home" className="logo gradient-text">{name}</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#connect">Connect</a>
            <a href={resumeFile} download>
              CV
            </a>
          </nav>
          <button aria-label="Toggle dark mode" className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <section id="home" className="hero" data-aos="fade">
        <img src={`${import.meta.env.BASE_URL}back.jpg`} alt="Background" className="hero__bg parallax" />
        <div className="hero__content container glass">
          <h1>
            Hi, I'm <span className="accent gradient-text-2">{name}</span>
          </h1>
          <p className="lead">{tagLine}</p>
          <div className="hero-cta">
            <Button href="#projects">View Projects</Button>
            <Button href={resumeFile} download>
              Download CV
            </Button>
          </div>
          <div className="social-row" data-aos="zoom-in">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section alt about-bg" data-aos="fade-right">
        <div className="container about-card">
          <h2 className="underline-title">About Me</h2>
          <p>
            Results-driven Computer Science graduate and Microsoft-certified Azure Fundamentals (AZ-900) professional who has sharpened enterprise database performance in a SAP Centre-of-Excellence internship. Deep Python knowledge—core data structures, comprehensions, generator pipelines, pytest coverage—paired with advanced SQL tuning across PostgreSQL, MySQL, Azure SQL and Oracle, routinely slashing multi-terabyte query runtimes by up to 300 %. Translating CPU, memory and I/O telemetry into client-ready insights, I author optimisation reports, host client briefings and support production go-lives. I thrive where code quality, data insights and consultative communication intersect.
          </p>
        </div>
      </section>

      <section id="skills" className="section gradient-bg" data-aos="fade-left">
        <div className="container">
          <h2 className="underline-title">Skill Highlights</h2>
          <div className="grid skills-grid">
            {skills.map(({ label, detail, icon }) => (
              <Card key={label} aos="flip-up" className="skill-card">
                <span className="skill-icon">{icon}</span>
                <h3>{label}</h3>
                <p className="skill-detail">{detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section" data-aos="fade-up">
        <div className="container">
          <h2 className="underline-title">Projects</h2>
          <div className="grid projects-grid">
            {projects.map(({ title, description, image, link, aos }) => (
              <Card key={title} className="project-card" aos={aos}>
                <img src={image} alt={`${title} screenshot`} />
                <div className="project-card__body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="section alt" data-aos="fade-up">
        <div className="container connect-section">
          <h2 className="underline-title">Let's Connect</h2>
          <p>I'm always open to opportunities and collaboration.</p>
          <div className="social-row">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" data-aos="fade-up">
        <div className="container">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}