import React, { useState, useEffect } from "react";
import "./index.css"; // global styles (defined in src/index.css)

// -----------------------------
// Data
// -----------------------------
const skills = ["HTML & CSS", "JavaScript", "React", "Node.js"];

const projects = [
  {
    title: "Project Title",
    description:
      "Brief description of the project, technologies used, and what you accomplished.",
    image: "https://source.unsplash.com/800x600?app",
    link: "#",
  },
  // Add more projects as needed
];

// -----------------------------
// Presentational helpers
// -----------------------------
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Button({ href, children, ...props }) {
  return (
    <a href={href} className="btn" {...props}>
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
            Your Name
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
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
          src="https://source.unsplash.com/1600x900?technology"
          alt="Background"
          className="hero__bg"
        />
        <div className="hero__content container">
          <h1>
            Hi, I'm <span className="accent">Your Name</span>
          </h1>
          <p>I build performant web experiences.</p>
          <Button href="#projects">View My Work</Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            {/* Replace this with a short professional bio. Mention your background, passions, and what sets you apart. */}
          </p>
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
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
