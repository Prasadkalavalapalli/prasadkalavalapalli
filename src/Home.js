import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [skills, setSkills] = useState([
    "Fullstack Developer",
    "Java/Spring Boot",
    "React",
    "Frontend Technologies",
    "Oracle Database",
    "Git/GitHub",
  ]);
   return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Durga Prasad</h1>
        <p>Full Stack Developer | Java | Spring Boot | React.js</p>
        <div className="social-links">
          <a  target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
{/* Skills Section*/}
<h2 className="  p-3 text-danger">Skills</h2>
<section className="skill">
        {skills.map((element, index) => (
    <span  className="skil" key={index}>{element}</span> ))}
      </section>
     

      

      {/* Contact Section */}
      {/* <section className="contact">
        <h2>Contact Me</h2>
        <p>📧 Email: prasadkalavapalli70@gmail.com</p>
      </section> */}
    </div>
  );
};

export default Home;
