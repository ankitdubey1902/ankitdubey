export default function About() {
  return (
    <div className="min-h-[calc(100vh-56px)] px-4 sm:px-6 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">About Me</h1>
        
        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <p className="text-sm sm:text-base leading-relaxed">
            Passionate Senior Full-Stack Developer with 6+ years of experience building scalable applications that serve millions of users. Proven track record of leading the development of mission-critical financial applications, optimizing high-performance systems, and mentoring junior developers.
          </p>
          
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Docker'].map((skill) => (
                <div key={skill} className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-center text-xs sm:text-sm font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Experience</h2>
            <div className="space-y-3">
              <div className="border-l-2 border-blue-600 pl-4">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">Senior Software Engineer</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Shriram Finance Ltd. | AUGUST 2022 - Present</p>
                <p className="text-xs sm:text-sm mt-1">Senior Software Engineer with over 6 years of experience in the fintech sector. Proven track record of leading the development of mission-critical applications, optimizing high-frequency transactional data pipelines, and mentoring junior developers. Adept at collaborating with cross-functional teams to build secure, scalable cloud architecture and drive engineering excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
