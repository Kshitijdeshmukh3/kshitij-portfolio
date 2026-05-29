import "./App.css";
import profile from "./assets/profile.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Kshitij.</div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="background-animation"></div>

        <div className="hero-content">
          <span className="welcome">Welcome To My Portfolio</span>

          <h1>Kshitij Pandurang Deshmukh</h1>

          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "React Developer",
              2000,
              "Java Developer",
              2000,
              "Computer Engineering Student",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">
            I build modern, responsive and professional websites using HTML,
            CSS, JavaScript, React, Java, SQL and Python.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn">
              <FaDownload /> Resume
            </a>

            <a href="#projects" className="btn outline">
              Projects
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/Kshitijdeshmukh3"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kshitij-deshmukh-7891b2273"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Kshitij Profile" />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a hardworking, adaptable and self-motivated Computer Engineering
          student. I am interested in Web Development, Java Development and
          Software Development.
        </p>

        <p>
          I want to work in a challenging and creative environment where I can
          apply my technical, logical and programming skills in real-world
          projects.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        {[
          ["HTML / CSS", "90%"],
          ["JavaScript", "85%"],
          ["React JS", "80%"],
          ["Java", "80%"],
          ["SQL / MySQL", "75%"],
          ["Python", "70%"],
        ].map((skill) => (
          <div className="skill-bar" key={skill[0]}>
            <p>{skill[0]}</p>
            <div className="progress">
              <span style={{ width: skill[1] }}></span>
            </div>
          </div>
        ))}
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>Book Store Website</h3>
            <p>
              Online book store website made using HTML, CSS, Bootstrap, Java
              and MySQL.
            </p>
            <a
              href="https://github.com/Kshitijdeshmukh3/book-shop-store"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>

          <div className="card">
            <h3>Tourism Website</h3>
            <p>
              Responsive tourism website created using HTML, CSS, Bootstrap and
              Java.
            </p>
            <a
              href="https://tourismkshitij.ccbp.tech"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>
          </div>

          <div className="card">
            <h3>Food Website</h3>
            <p>
              Modern responsive food website with clean UI and attractive
              layout.
            </p>
            <a
              href="https://kshitijfood.ccbp.tech"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>3+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Skills</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Dedication</p>
        </div>
      </section>

      <section id="github" className="section">
        <h2>GitHub Stats</h2>

        <div className="github-stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Kshitijdeshmukh3&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
          />

          <img
            src="https://streak-stats.demolab.com?user=Kshitijdeshmukh3&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
          />
        </div>
      </section>

      <section className="section">
        <h2>Achievements</h2>

        <div className="timeline-item">
          <h3>Software Development Training</h3>
          <p>Completed training at Rkdemy Techskill, Thane.</p>
        </div>

        <div className="timeline-item">
          <h3>Projects</h3>
          <p>Built Book Store, Tourism and Food Website projects.</p>
        </div>

        <div className="timeline-item">
          <h3>Learning</h3>
          <p>
            Currently improving React JS, Java and Full Stack Development
            skills.
          </p>
        </div>
      </section>

      <section id="resume" className="section">
        <h2>Resume Preview</h2>

        <iframe
          src="/resume.pdf"
          title="Resume"
          className="resume-frame"
        ></iframe>

        <a href="/resume.pdf" download className="btn resume-btn">
          <FaDownload /> Download Resume
        </a>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <p>Email: deshmukhkshitijpandurang@gmail.com</p>
        <p>Mobile: +91 7039886061</p>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <div className="footer-links">
          <a
            href="https://github.com/Kshitijdeshmukh3"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kshitij-deshmukh-7891b2273"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:deshmukhkshitijpandurang@gmail.com">Email</a>
        </div>

        <p>© 2026 Kshitij Pandurang Deshmukh | Professional Portfolio</p>
      </footer>
    </>
  );
}

export default App;