export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application with WebSocket support',
      tags: ['React', 'TypeScript', 'Firebase'],
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with rich text editor and markdown support',
      tags: ['React', 'GraphQL', 'PostgreSQL'],
    },
  ]

  return (
    <div className="min-h-[calc(100vh-56px)] px-4 sm:px-6 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-gray-100">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs px-2.5 py-1 rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
