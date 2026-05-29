import "./App.css";
import profile from "./assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Kshitij.</div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">What I Do</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
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
          My goal is to build a career in a professional organization where I
          can apply my theoretical, logical and technical skills in real-world
          projects.
        </p>
      </section>

      <section id="services" className="section">
        <h2>What I Do</h2>

        <div className="projects">
          <div className="card">
            <h3>Frontend Development</h3>
            <p>
              I create responsive and modern websites using HTML, CSS,
              JavaScript and React JS.
            </p>
          </div>

          <div className="card">
            <h3>Java Development</h3>
            <p>
              I build logic-based applications using Java, OOP concepts, JSP
              and Servlets.
            </p>
          </div>

          <div className="card">
            <h3>Database Management</h3>
            <p>
              I work with SQL and MySQL for storing, managing and retrieving
              data.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skill-bar">
          <p>HTML / CSS</p>
          <div className="progress">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>

        <div className="skill-bar">
          <p>JavaScript</p>
          <div className="progress">
            <span style={{ width: "85%" }}></span>
          </div>
        </div>

        <div className="skill-bar">
          <p>React JS</p>
          <div className="progress">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>

        <div className="skill-bar">
          <p>Java</p>
          <div className="progress">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>

        <div className="skill-bar">
          <p>SQL / MySQL</p>
          <div className="progress">
            <span style={{ width: "75%" }}></span>
          </div>
        </div>
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

      <section className="section">
        <h2>Education & Training</h2>

        <div className="timeline-item">
          <h3>B.E. Computer Engineering</h3>
          <p>A. C. Patil College of Engineering - Third Year</p>
        </div>

        <div className="timeline-item">
          <h3>Software Development Training</h3>
          <p>Rkdemy Techskill, Thane</p>
        </div>

        <div className="timeline-item">
          <h3>HSC - Computer Science</h3>
          <p>Lakshya Prep Jr. College</p>
        </div>

        <div className="timeline-item">
          <h3>SSC</h3>
          <p>St. Xavier High School</p>
        </div>
      </section>

      <section className="section">
        <h2>Resume Highlights</h2>

        <div className="timeline-item">
          <h3>Programming Languages</h3>
          <p>Java, C, JavaScript, Python, SQL</p>
        </div>

        <div className="timeline-item">
          <h3>Web Technologies</h3>
          <p>HTML, CSS, Bootstrap, React JS, JSP, Servlets</p>
        </div>

        <div className="timeline-item">
          <h3>Career Objective</h3>
          <p>
            To work in a challenging and creative environment where I can
            implement my technical skills and grow professionally.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <p>Email: deshmukhkshitijpandurang@gmail.com</p>
        <p>Mobile: +91 7039886061</p>

        <form>
          <input type="text" placeholder="Name" />

          <input type="email" placeholder="Email" />

          <textarea placeholder="Message"></textarea>

          <button>Send Message</button>
        </form>
      </section>

      <footer>
        © 2026 Kshitij Pandurang Deshmukh | Professional Portfolio
      </footer>
    </>
  );
}

export default App;