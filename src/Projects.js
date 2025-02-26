import React from "react";
 // Import icons

const projects = [
  {
    title: "KR Institutes",
    description:
      "Developed a comprehensive web application for KR Institutes to manage course enrollments, schedules, and student information. Built using Java with Spring Boot for backend development and React.js for the frontend, ensuring a robust and responsive interface.",
    technologies: ["Java", "Spring Boot", "React.js","MySql"],
    features: [
      "Course enrollment management",
      "Schedules and student tracking",
      "Role-based access control (RBAC) for security"
    ]
  },
  {
    title: "Employee Management System",
    description:
      "Designed and implemented an Employee Management System that streamlines various HR processes like employee onboarding, attendance tracking, and performance evaluations. Uses Java and Hibernate for efficient data management and seamless reporting.",
    technologies: ["Java", "Spring Boot","Oracle","React js"],
    features: [
      "Employee onboarding & management",
      "Attendance tracking",
      "Performance evaluations",
      "Integrated reporting & analytics"
    ]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="page-title">🚀 My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <h4>💻 Technologies Used:</h4>
            <ul className="tech-list">
              {project.technologies.map((tech, i) => (
                <li key={i}> {tech}</li>
              ))}
            </ul>

            <h4>✅ Features:</h4>
            <ul className="features-list">
              {project.features.map((feature, i) => (
                <li key={i}> {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
