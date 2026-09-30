// Optional: link to your Credly / CompTIA verification page.
const CERT_VERIFY_URL = '';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About me</h2>
      <p>
        I graduated from UMBC in May 2026 with a B.S. in Computer Science
        (magna cum laude). I like finding the root cause of a problem, fixing
        it, and explaining the fix clearly to whoever needs to understand it.
      </p>
      <p>
        As a teaching assistant in UMBC's Computer Science department, I helped
        students debug C++ programs and fix development environment issues, and
        I advised them on Git and structured problem-solving. For a software
        engineering course, I built a full-stack inventory system with React
        and PostgreSQL.
      </p>
      <p>
        I'm available for full-time work now and willing to relocate.
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