import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import techBg from "./bg.jpg"; 

const Portfolio = () => {
  return (
    <div className="portfolio-container" style={{ 
      backgroundImage: `url(${techBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh"
    }}>
      
      <header className="header">Deepak's Portfolio</header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I'm a final-year Computer Science Engineering student at AKT Memorial College of Engineering and Technology, passionate about networking, software development, and graphic design.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skill-list">
          {['Networking', 'Software Dev', 'Data Science', 'Graphic Design'].map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="project-card">
          <p className="project-title">AI-Driven Web Accessibility Enhancer</p>
          <p>A final-year project focused on improving web accessibility for disabled users using AI.</p>
        </div>
      </section>

      <section className="section">
        <h2>Internships</h2>
        {[{ company: "Code Bind Technologies (Aug 2024)", desc: "Worked on software development and gained hands-on experience." }, 
          { company: "Data Science Internship (15 Days)", desc: "Worked on data visualization and analysis." }].map((internship, i) => (
          <div key={i} className="internship-card">
            <p className="internship-title">{internship.company}</p>
            <p>{internship.desc}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: dpak8055@gmail.com</p>
        <p>Phone: 9943706378</p>
        <div className="contact-icons">
          {[{ href: "linkedin.com/in/deepak2603", icon: <FaLinkedin /> },
            { href: "https://github.com/Deepak-dev46/Deepak-dev46.git", icon: <FaGithub /> },
            { href: "mailto:dpak8055@gmail.com", icon: <FaEnvelope /> }].map((social, i) => (
            <a key={i} href={social.href} className="icon">{social.icon}</a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
