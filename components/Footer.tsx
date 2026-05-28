import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="bg-primary-blue rounded-lg p-12 text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Bathroom?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation home assessment.
          </p>
          <a
            href="tel:1-800-555-1234"
            className="inline-block px-8 py-4 bg-white text-primary-blue font-bold rounded-lg hover:bg-primary-light transition-all duration-300 text-lg"
          >
            Call Us: 1-800-555-1234
          </a>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">3-Day Bath</h4>
            <p className="text-gray-300 text-lg">
              Transforming bathrooms into safe, luxurious spaces in just 3 days.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors text-lg">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <a
              href="tel:1-800-555-1234"
              className="text-gray-300 hover:text-white transition-colors text-lg block mb-4"
            >
              📞 1-800-555-1234
            </a>
            <a
              href="mailto:info@3daybath.com"
              className="text-gray-300 hover:text-white transition-colors text-lg"
            >
              ✉️ info@3daybath.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-lg">
            © 2026 3DayBath. Powered by Upriodge.
          </p>
        </div>
      </div>
    </footer>
  )
}
