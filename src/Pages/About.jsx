function About() {
  return (
    <section>
      <h2>About Me</h2>
      
      {/* Personal Introduction */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Who I Am</h3>
        <p>
          Full Stack Developer with 7+ months of professional experience building production-ready applications using the MERN stack (MongoDB, Express.js, React, Node.js). I've delivered a live client project end-to-end — from architecture to deployment — and I specialize in backend development, REST API design, and scalable application logic. Currently open to full-time roles and freelance projects.
        </p>
      </div>

      {/* Education Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Education</h3>
        <div className="education-item">
          <h4>B.E. Computer Science & Engineering</h4>
          <p className="institution">Mahendra Engineering College, Namakkal</p>
          <p className="duration">2021 – 2025</p>
          <p className="gpa">Percentage: 76.90%</p>
        </div>

                <div className="experience-item" style={{ marginTop: "20px" }}>
          <h4>Trainee – MEAN Full Stack Developer</h4>
          <p className="company">Dr. Reddy's Foundation – GROW Tech Program</p>
          <p className="duration">June 2025 – Present</p>
          <ul className="achievements">
            <li>Intensive training in MongoDB, Express.js, Angular, Node.js</li>
            <li>Building production-ready full-stack apps with modular architecture</li>
            <li>Developing project features in Angular + TypeScript with team sprints</li>
            <li>Hands-on experience in backend integration & responsive UI design</li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Work Experience</h3>
        <div className="experience-item">
          <h4>Full Stack / Back End Developer (Intern)</h4>
          <p className="company">BKEEP Inc. — Canada-based Company</p>
          <p className="duration">November 2025 – May 2026</p>
          <ul className="achievements">
            <li>Built and maintained backend REST APIs using Node.js, Express.js, and MongoDB for a production SaaS platform</li>
            <li>Handled bug fixes and ongoing maintenance on an existing production codebase</li>
            <li>Worked across the full stack, integrating frontend components with backend services</li>
            <li>Collaborated with a distributed, Canada-based team in a remote work environment</li>
          </ul>
        </div>

      </div>

      {/* Skills Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming</h4>
            <p>Java, JavaScript, TypeScript, React.js, Node.js, Angular</p>
          </div>
          <div className="skill-category">
            <h4>Web Technologies</h4>
            <p>HTML, CSS, Bootstrap, Spring Boot, PostgreSQL, MongoDB, OOP, CRUD Operations</p>
          </div>
          <div className="skill-category">
            <h4>Tools & IDEs</h4>
            <p>Git, GitHub, VS Code, Eclipse, NetBeans</p>
          </div>
          <div className="skill-category">
            <h4>Soft Skills</h4>
            <p>Problem-solving, Clear Communication, Teamwork, Continuous Learning</p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Certifications</h3>
        <div className="certification-item">
          <h4>IoT – NPTEL</h4>
          <p className="issuer">National Programme on Technology Enhanced Learning</p>
          <p className="date">Top 25%, Score: 76%</p>
        </div>
        <div className="certification-item">
          <h4>Cloud Computing – NPTEL</h4>
          <p className="issuer">National Programme on Technology Enhanced Learning</p>
          <p className="date">Score: 71%</p>
        </div>
        <div className="certification-item">
          <h4>Java Full Stack Certification</h4>
          <p className="issuer">Wipro Tele Next</p>
          <p className="date">Completed</p>
        </div>
      </div>

      {/* Interests Section */}
      <div className="card">
        <h3>Interests & Focus Areas</h3>
        <p>Backend development, scalable logic, REST APIs, real-time data integration, 
           clean code architecture, user experience design, continuous learning and skill development</p>
      </div>
    </section>
  );
}

export default About;
