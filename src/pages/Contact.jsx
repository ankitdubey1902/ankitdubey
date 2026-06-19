export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col sm:flex-row sm:items-center justify-center px-4 sm:px-6 py-8 md:py-12">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Get in Touch</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 mb-1.5">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 mb-1.5">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 mb-1.5">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors text-sm mt-6"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
