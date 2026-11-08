const CERT_VERIFY_URL = 'https://www.credly.com/badges/9557c5b2-3276-43eb-a3f5-c51495722dfc/linked_in_profile';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About me</h2>
      <p>
        I graduated from the University of Maryland, Baltimore County (UMBC) in May 2026 
        with a B.S. in Computer Science, graduating magna cum laude. I enjoy solving 
        technical problems, identifying root causes, and developing practical solutions
         that improve processes and system reliability.
      </p>
      <p>
        My experience spans software development, data management, and information systems. 
        In a software engineering course, I developed a full-stack inventory management system 
        using React and PostgreSQL. My professional experience also includes database maintenance,
        data validation, reporting, and geospatial data management using ArcGIS and Microsoft Excel.
      </p>
      <p>
        My technical interests include software engineering, systems development, database management, 
        and technology-driven problem-solving. I enjoy learning new technologies, building practical solutions, 
        and finding ways to use technology to improve processes and solve complex problems.
      </p>

      <dl className="skills">
        <dt>Languages</dt>
        <dd>Java, Python, JavaScript, C++</dd>
        <dt>Tools</dt>
        <dd>Git/GitHub, Jira, PostgreSQL</dd>
        <dt>Systems</dt>
        <dd>Windows, macOS, Linux</dd>
        <dt>Certification</dt>
        <dd>
          CompTIA Security+
          {CERT_VERIFY_URL && (
            <>
              {' '}
              (<a href={CERT_VERIFY_URL} target="_blank" rel="noreferrer">verify</a>)
            </>
          )}
        </dd>
      </dl>
    </section>
  );
}

export default About