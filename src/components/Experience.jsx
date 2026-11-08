const jobs = [
 {
  role: 'LCRR Staff Support, Data Specialist',
  org: 'WebHawkx | Baltimore County DPWT',
  dates: 'Nov 2026 – Present',
  points: [
    'Coordinate information requests and maintain organized records by retrieving, documenting, and distributing relevant data to support departmental operations.',
    'Manage and maintain structured datasets, databases, and digital records through data entry, updates, and information processing while ensuring data accuracy and integrity.',
    'Utilize Hazen ArcGIS to navigate, review, edit, and validate geospatial datasets, including spatial features and associated attribute information, identifying and correcting data discrepancies.',
    'Leverage Microsoft Excel and data management tools to organize, track, compile, and analyze information, generate reports, and fulfill data requests.',
  ],
},
  {
    role: 'Warehouse Associate',
    org: 'Amazon',
    dates: 'Apr 2023 – Jul 2025',
    points: [
      'Operated handheld barcode scanners and warehouse technology to scan, track, and sort packages according to designated routes and destinations.',
      'Processed and handled high volumes of packages while maintaining sorting accuracy, workflow efficiency, and established safety standards.',
      'Identified package labeling, routing, and scanning discrepancies and assisted with resolving processing issues to maintain accurate shipment flow.',
    ],
  },
  {
    role: 'Administrative Assistant Intern',
    org: 'Chesapeake Gateway Chamber of Commerce',
    dates: 'Jun 2022 – Aug 2023',
    points: [
      'Assisted with front-office operations, including greeting visitors, responding to inquiries, and directing individuals to appropriate staff or resources.',
      'Managed incoming communications, organized documentation, and supported scheduling and appointment coordination.',
      'Provided administrative support for daily office operations, maintaining records, coordinating meetings, and assisting with event preparation.',
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