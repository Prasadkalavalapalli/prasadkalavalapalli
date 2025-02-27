import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <div className="dammyheader">
      </div>
    <div className='abouts'>
      <div className='aboute'>
      <p>
        <strong>Hello! I’m <span class="name">Kalavalapalli Appala Durga Prasad</span></strong>, a passionate 
        <span class="role">Full Stack Java Developer</span> with expertise in building scalable and dynamic 
        web applications. I specialize in <strong>Java, Spring Boot, React, and database management</strong>, 
        ensuring seamless integration between frontend and backend systems.
    </p>
    <p>
        I have completed my <strong>Full Stack Java Developer</strong> training at 
        <span class="institute">Quality Thought</span>, learned <strong>web designing</strong> at 
        <span class="institute">Anudeep Foundation</span>, and honed my skills in 
        <strong>responsive web development</strong> through <span class="institute">Skill India</span>. 
        With hands-on experience in <strong>Spring Boot, React, and deployment platforms like 
        Netlify and Vercel</strong>, I enjoy crafting efficient and user-friendly applications.
    </p>
</div>
     <button className="  btn btn-outline-primary ms-5 px-4"><b><Link to="/details">More Details</Link></b></button>
    </div>
    </>
  )
}

export default About
