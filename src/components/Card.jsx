import ProfilePic from '../assets/profile-pic.jpg';

const RESUME_URL = '/Renata-Maliyetu-Resume.pdf';

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={ProfilePic}
        alt="Portrait of Renata Maliyetu"
      />
      <h1 className="card-title">Renata Maliyetu</h1>
      <h2 className="card-subtitle">Software &amp; Security | CS Graduate</h2>
      <p className="card-description">
        Computer Science graduate with a CompTIA Security+ certification.
        Passionate about software development, system defense, and building
        secure, practical tech solutions.
      </p>

      <div className="cta-buttons">
        <a href="#about" className="btn btn-primary">About Me</a>
        <a href="#projects" className="btn btn-secondary">Projects</a>
         <a href="#experience" className="btn btn-secondary">Experience</a>
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">Résumé</a>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/renata-maliyetu" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/atanerm" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:maliyeturenata@gmail.com">Email</a>
      </div>
    </div>
  );
}

export default Card