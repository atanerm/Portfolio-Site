const schools = [
  {
    school: 'University of Maryland, Baltimore County',
    dates: 'Spring 2026',
    degree: 'B.S. in Computer Science',
    honors: 'GPA 3.77 / 4.00 · Magna Cum Laude',
    coursework:
      'Operating Systems, Computer Architecture, Computer Organization & Assembly, Data Structures, Algorithms, Discrete Mathematics, Automata Theory, Probability & Statistics',
  },
  {
    school: 'Community College of Baltimore County',
    dates: 'August 2024',
    degree: 'A.A.S. in Computer Science',
    honors: 'GPA 3.60 / 4.00',
    coursework:
      'C++ Programming, OO Design, Statistics, Calculus I & II, Linear Algebra',
  },
];

// Reuses the .job-* styles from Experience so both sections match.
function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <ul className="job-list">
        {schools.map((s) => (
          <li key={s.school} className="job">
            <h3 className="job-title">{s.school}</h3>
            <p className="job-meta">
              {s.degree} &middot; {s.dates}
            </p>
            <p className="edu-honors">{s.honors}</p>
            <p className="coursework">
              <strong>Relevant coursework:</strong> {s.coursework}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education