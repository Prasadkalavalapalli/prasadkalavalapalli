import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Durga Prasad</h1>
        <p>Full Stack Developer | Java | Spring Boot | React.js</p>
        <div className="social-links">
          <a href="www.linkedin.com/in/prasadkalavalapalli" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:prasadkalavapalli70@gmail.com"><FaEnvelope /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate Full Stack Developer with expertise in **Java, Spring Boot, and React.js**.
          I specialize in building scalable and high-performance web applications, ensuring seamless user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java & Spring Boot</li>
          <li>React.js & Frontend Development</li>
          <li>Database Management (MySQL, Oracle)</li>
          <li>REST API Development</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>📧 Email: prasadkalavapalli70@gmail.com</p>
      </section>
    </div>
  );
};

export default Home;
