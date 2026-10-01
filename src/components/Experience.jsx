const jobs = [
  {
    role: 'Teaching Assistant, Computer Science Department',
    org: 'UMBC',
    dates: 'Aug 2025 – Dec 2025',
    points: [
      'Gave one-on-one and group support to students troubleshooting C++ programs, debugging errors, and fixing development environment issues.',
      'Diagnosed root causes of coding and logic errors and walked students through fixes step by step in clear, non-technical terms.',
      'Advised students on version control (Git), coding best practices, and structured problem-solving.',
    ],
  },
  {
    role: 'Warehouse Associate',
    org: 'Amazon',
    dates: 'Apr 2023 – Jul 2025',
    points: [
      'Used computerized tracking systems, barcode scanners, and handheld printers to keep inventory data accurate in a high-volume operation.',
      'Found fulfillment discrepancies through root-cause analysis and recommended process improvements to supervisors.',
    ],
  },
  {
    role: 'Administrative Assistant Intern',
    org: 'Chesapeake Gateway Chamber of Commerce',
    dates: 'Jun 2022 – Aug 2023',
    points: [
      'Analyzed marketing campaign performance data and summarized findings in written and oral reports for leadership.',
      'Produced video and graphic assets with Adobe Creative Suite and coordinated schedules and resources across multiple events.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.role + job.org} className="job">
            <h3 className="job-title">{job.role}</h3>
            <p className="job-meta">
              {job.org} &middot; {job.dates}
            </p>
            <ul className="job-points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience