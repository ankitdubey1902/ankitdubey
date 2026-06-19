import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) {
        return saved === 'true'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Apply the theme class on mount and when isDark changes
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => {
      const newState = !prev
      localStorage.setItem('darkMode', String(newState))
      return newState
    })
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 min-w-fit">    
          <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
            Ankit Dubey
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-xs sm:text-sm"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-xs sm:text-sm"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-xs sm:text-sm"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-xs sm:text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-1">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.41 1.41M7.05 16.95l-1.41 1.41m0-11.31l1.41 1.41M18.36 18.36l1.41 1.41M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
