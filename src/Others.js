import React from 'react'

function Others() {
    const Education=[
          {
            "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
            "image":"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
          "description": "Graduated with a Bachelor of Science in Computer Science from TSR & TBK Degree College, located in Visakhapatnam, Andhra Pradesh, in March 2024. Achieved a commendable CGPA of 7.2, demonstrating a solid understanding of computer science principles and practices."
          },
          {
            "name": "INTERMEDIATE EDUCATION",
            "image":"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
            "description": "Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC) at Vagdevi Junior College in Yellamanchilli, Andhra Pradesh, graduating in March 2021. Achieved a percentage of 71%, showcasing strong analytical skills and a foundation in the sciences."
          },
          {
            "name": "SECONDARY SCHOOLING",
            "image":"https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8=",
             "description": "Achieved academic success in Secondary School Certificate (SSC) from Grace English Medium High School, Yellamanchilli, Andhra Pradesh, in March 2019. Scored an impressive grading point of 9.3, reflecting dedication and hard work during formative educational years."
          }
      ]
      const Hobbies=[
          {
            "name": "WEB DESIGNING",
            "description": "Passionate about creating and optimizing user-friendly websites. This involves understanding user experience (UX) principles and utilizing design tools to build aesthetically pleasing and functional websites.",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNXmbFF_BkUr-K_--2TKJlqoc937lw9DRxA&s"
          },
          {
            "name": "TV SHOWS",
            "description": "Exploring a variety of genres for entertainment and cultural insights. Watching TV shows can broaden perspectives and foster discussions about different societal themes.",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKxld6vO0fOKM5aOv_tTDJK-QdRQeoKl8bA&s"
          },
          {
            "name": "PROGRAMMING",
            "description": "Continuously learning new frontend frameworks and technologies through personal projects. This hobby allows for creativity in coding and problem-solving, as well as staying updated with the latest industry trends.",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERSPeeMCOF4_mYdbly09WFEGXhCwy_ARVxw&s"
          },
          {
            "name": "BROWSING THE INTERNET",
            "description": "Keeping up-to-date with the latest trends and technologies in web development. This hobby serves as an essential tool for personal growth and professional development.",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZK7Cc0jv2A_SwUo-SgzfG3hjpe15wenIbg&s"
          },
          {
            "name": "FARMING",
            "description": "Practicing sustainable agriculture and spending time in nature. This hobby not only contributes to environmental sustainability but also provides a therapeutic escape from urban life.",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2r50-7ARMwlhX8QVLe0V8yypsy0vPiCZdg&s"
          }
      ]
      const Strengths=[
          {
            "name": "LOYALTY",
            "description": "Demonstrates a strong commitment to the organization, fostering trust and stability within the team."
          },
          {
            "name": "DEDICATION AND MOTIVATION",
            "description": "Exhibits a relentless work ethic that drives goals forward and inspires peers to strive for excellence."
          },
          {
            "name": "QUICK LEARNER",
            "description": "Ability to absorb new information rapidly, which enhances adaptability and efficiency in dynamic work environments."
          },
          {
            "name": "STRONG COMMUNICATION SKILLS",
            "description": "Facilitates effective collaboration and understanding among team members, ensuring clarity in all interactions."
          }
        ]
      const Certificate=[
          {
            "name": "FULL STACK WEB DEVELOPMENT - QUALITY THOUGHT",
            "description": "This certification focuses on both front-end and back-end development, equipping learners with the skills necessary to build complete web applications from scratch. Participants learn various programming languages and frameworks, ensuring a comprehensive understanding of the web development landscape."
          },
          {
            "name": "RESPONSIVE WEB DESIGN - FREECODECAMP",
            "description": "This certification emphasizes the principles of responsive design, teaching participants how to create websites that function seamlessly across various devices. It covers essential topics like CSS, media queries, and mobile-first design strategies."
          },
          {
            "name": "WEB DESIGN & DEVELOPMENT - SKILL INDIA DIGITAL HUB",
            "description": "This certification provides a holistic approach to web design and development, covering both aesthetic design principles and technical development skills. It aims to empower learners with the ability to create user-friendly websites that are visually appealing and functionally robust."
          },
          {
            "name": "WEB DESIGNING - ANUDIP FOUNDATION",
            "description": "Focusing on the fundamentals of web design, this certification equips participants with the tools to create engaging and interactive websites. It covers topics such as graphic design, user experience, and the importance of web accessibility."
          }
      ]  
      const Skills=[
        {
          "name": "Frontend Technologies",
          "technologies": ["HTML5", "CSS3", "JavaScript","React.js", "Bootstrap"]
        },
        {
          "name": "Backend Technologies",
          "technologies": ["Java", "JDBC", "Servlets", "JSP","Spring Boot"]
        },
        {
          "name": "Database Technologies",
          "technologies": ["Oracle", "MySQL", "SQL", "MongoDB"]
        },
        {
          "name": "Version Control",
          "technologies": ["Git", "GitHub"],
        },
        {
          "name": "Development Tools",
          "technologies": ["Visual Studio Code", "Eclipse", "Sublime Text", "Spring Tool Suite (STS)"]
        }
      ]
  return (
    <div>
    <div className='education'>
      <h3 className='text-success  ms-5'>EDUCATIONAL BACKGROUND </h3>
        <div className='education-main'>
            {
        Education.map((Element,index)=>
            <div key={index} className='education-sub'>
                {/* <img src={Element.image} alt="Sorry img is Deleted....!"/> */}
            <h4 >{Element.name}</h4>
            <p>{Element.description}</p>
            </div>
        )}
       </div>  
    </div>
   
     {/* CERTIFICATIONS */}
   
     <div className='certificate'>
    <h3 className='text-success  ms-5'>CERTIFICATIONS</h3>
        <div className='certificate-sub'>
       { Certificate.map((Element,index)=>
          <div key={index} className='certificates'>
              {/* <img src={Element.image_url} alt="Sorry img is Deleted....!"/> */}
          <h5>{Element.name}</h5>
          <p>{Element.description}</p>
          </div>)}
          </div>
    </div>

     {/* skills */}
     <div className='skills'>
      <h3 className='skills-main'>SKILLS</h3>
      {
        Skills.map((Element,index)=>
          <div key={index} className='ms-5 text-primary'>
            {/* <h5>{Element.name}</h5> */}<br/>
            <div>{Element.technologies.map((tech)=><span className='sb'>{tech}</span>) }</div>
          </div>)
      }
     </div>
     
     {/* Strengths */}
     <div >
    <h3 className='text-success  ms-5'>STRENGTHS</h3>
        <div className='strength'>
       {Strengths.map((Element,index)=>
          <div key={index} className='strength-sub'>
          <h5>{Element.name}</h5>
          <p>{Element.description}</p>
          </div>)}
          </div>
    </div>
    {/* Hobbies */}
    <div>
    <h3 className='text-success  ms-5'>HOBBIES</h3>
      
        <div className='hobbies-card'>
       { Hobbies.map((Element,index)=>
          <div key={index} className='hobbies-main'>
              <img src={Element.image_url} alt="Sorry img is Deleted....!"/>
          <h5>{Element.name}</h5>
          <p>{Element.description}</p>
          </div>)}
          </div>
    </div>
     
    </div>
  )
}

export default Others
