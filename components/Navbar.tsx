import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-bold text-primary-blue hover:text-primary-dark transition-colors">
              3-Day Bath
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-dark hover:text-primary-blue font-semibold transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-text-dark hover:text-primary-blue font-semibold transition-colors">
              Services
            </Link>
            <Link href="/how-it-works" className="text-text-dark hover:text-primary-blue font-semibold transition-colors">
              How It Works
            </Link>
            <Link href="/testimonials" className="text-text-dark hover:text-primary-blue font-semibold transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-text-dark hover:text-primary-blue font-semibold transition-colors">
              Contact
            </Link>
          </div>

          {/* Phone Button (Desktop) */}
          <a
            href="tel:1-800-555-1234"
            className="hidden md:flex btn-phone"
          >
            📞 1-800-555-1234
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-primary-blue" />
            ) : (
              <Menu size={28} className="text-primary-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="/"
                className="text-text-dark hover:text-primary-blue font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-text-dark hover:text-primary-blue font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/how-it-works"
                className="text-text-dark hover:text-primary-blue font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/testimonials"
                className="text-text-dark hover:text-primary-blue font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-text-dark hover:text-primary-blue font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:1-800-555-1234"
                className="btn-phone text-center"
              >
                📞 1-800-555-1234
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
