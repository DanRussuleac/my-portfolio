import React, { useState, useEffect } from "react";
import "./index.css";

// -----------------------------
// PERSONAL DATA (easy to tweak)
// -----------------------------
const name = "Dan Russuleac";
const tagLine = "Graduate software engineer who turns multi‑terabyte data puzzles into blazing‑fast code.";
const resumeFile = "/cv.pdf"; // place 7fe2dc43-fe73-4b56-b2ed-c0bbc9157cf0.pdf into the project /public folder and rename to cv.pdf

// Core + complementary skills
const skills = [
  "Python (advanced)",
  "SQL & RDBMS tuning (PostgreSQL, MySQL, Azure SQL, Oracle)",
  "JavaScript (ES2023)",
  "React 18",
  "Node.js / Express",
  "Java",
  "C & low‑level fundamentals",
  "Azure (AZ‑900)",
  "Git & CI/CD",
  "Docker / Compose",
  "Linux CLI & scripting",
];

// Project showcase cards
const projects = [
  {
    title: "MindCare – AI Mental‑Health Companion",
    description:
      "GPT‑powered chatbot delivering empathetic conversation, sleep‑pattern analysis and personalised wellness tasks. React SPA front‑end, Node/Express API, containerised PostgreSQL, full JWT auth & Docker‑Compose dev‑ops.",
    image: "https://source.unsplash.com/800x600?mental-health", // swap with real screenshot
    link: "https://github.com/DanRussuleac/MindCare_Test",
  },
  {
    title: "Music Visualizer – Real‑time Audio Spectra",
    description:
      "Interactive WebGL canvas that transforms live microphone input or MP3 files into dynamic frequency bars and particle fields. Vanilla JS, Web Audio API, and custom GLSL shaders.",
    image: "https://source.unsplash.com/800x600?music", // update later
    link: "https://github.com/DanRussuleac/MusicVisuals", // adjust if different
  },
  {
    title: "Mobile Project – Habit Tracker PWA",
    description:
      "Cross‑platform React‑Native / Expo app that records habits, pushes daily reminder notifications, and syncs to a Supabase backend. Implemented optimistic UI, secure storage and offline caching.",
    image: "https://source.unsplash.com/800x600?mobile-app", // placeholder
    link: "https://github.com/DanRussuleac/MobileProject", // adjust repo name
  },
];

// -----------------------------
// Helper components
// -----------------------------
function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function Button({ href, children, download = false, external = false }) {
  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href, download };
  return (
    <a className="btn" {...props}>
      {children}
    </a>
  );
}

// -----------------------------
// Main component
// -----------------------------
export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container header__inner">
          <a href="#home" className="logo">
            {name}
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href={resumeFile} download>
              CV
            </a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            aria-label="Toggle dark mode"
            className="theme-toggle"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img
          src="https://source.unsplash.com/1600x900?code"
          alt="Background"
          className="hero__bg"
        />
        <div className="hero__content container">
          <h1>
            Hi, I'm <span className="accent">{name}</span>
          </h1>
          <p>{tagLine}</p>
          <Button href="#projects">View My Work</Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Results‑driven Computer Science graduate and Microsoft‑certified Azure
            Fundamentals professional. In my SAP Center‑of‑Excellence internship I
            slashed multi‑terabyte query runtimes by up to 300 % through index
            design and SQL refactoring, and delivered weekly optimisation
            briefings to both engineers and clients. I thrive where clean code
            meets data‑driven performance, and I'm actively seeking a graduate
            software‑engineering role where Python mastery, database tuning and
            consultative communication create measurable wins.
          </p>
          <Button href={resumeFile} download>
            Download CV
          </Button>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section alt">
        <div className="container">
          <h2>Skills</h2>
          <div className="grid skills-grid">
            {skills.map((skill) => (
              <Card key={skill}>{skill}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="grid projects-grid">
            {projects.map(({ title, description, image, link }) => (
              <Card key={title} className="project-card">
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

      {/* Contact */}
      <section id="contact" className="section alt">
        <div className="container contact-form">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit" className="btn" disabled>
              Send Message (coming soon)
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
