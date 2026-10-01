const projects = [
  {
    title: 'Vending Machine Inventory System',
    description:
      'A full-stack inventory management app for vending machine stock, built with a team for a software engineering course at UMBC. It tracks stock levels and flags low-inventory items for restocking, backed by a relational PostgreSQL schema. We coordinated tasks through Jira.',
    tags: ['React', 'PostgreSQL', 'Jira'],
    href: '',
  },

  {
    title: 'Personal Portfolio Website',
    description:
      'Built a responsive single-page portfolio with React and Vite, deployed on Vercel with a custom domain and automatic redeploys from GitHub.',
    tags: ['React', 'Vite', 'Vercel'],
    href: '',
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
            <p className="project-description">{project.description}</p>
            <p className="project-tags">{project.tags.join(', ')}</p>
            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer">
                View project
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects