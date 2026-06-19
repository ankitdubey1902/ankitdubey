export default function Home() {
  return (
    <div className="min-h-[calc(100vh-56px)] px-4 sm:px-6 py-8 md:py-12">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Ankit
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 px-2 leading-relaxed">
          Full-stack developer crafting beautiful and functional web applications
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors text-sm">
            View My Work
          </button>
          <button className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 rounded font-medium transition-colors text-sm">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
