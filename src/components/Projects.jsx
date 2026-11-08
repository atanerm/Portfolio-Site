const projects = [
  {
    title: 'Vending Machine Inventory System',
    description:
      'A full-stack inventory management app for vending machine stock, built with a team for a software engineering course at UMBC. It tracks stock levels and flags low-inventory items for restocking, backed by a relational PostgreSQL schema. We coordinated tasks through Jira.',
    tags: ['React', 'PostgreSQL', 'Jira'],
    image: '../projects/vending-machine.png',
    alt: 'Screenshot of the Vending Machine Inventory System',
    links: [{ label: 'See Code', url: 'https://github.com/atanerm/Vending-Machine-Inventory' }],
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.title} className="project">
            <h3 className="project-title">{project.title}</h3>
            {project.image && (
              <img
                className="project-image"
                src={project.image}
                alt={project.alt || `Screenshot of ${project.title}`}
                loading="lazy"
              />
            )}
            <p className="project-description">{project.description}</p>
            <p className="project-tags">{project.tags.join(', ')}</p>
            {project.links.length > 0 && (
              <p className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects