import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
            Our Specialized Services
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Expert bathroom solutions designed for senior safety, accessibility, and elegance.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service 1: Walk-In Bathtubs */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-lg p-8 h-96 flex items-center justify-center text-center shadow-lg">
                <div className="text-white">
                  <div className="text-6xl mb-4">🛁</div>
                  <p className="text-2xl font-semibold">Walk-In Bathtubs</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary-blue mb-6">Walk-In Bathtubs & Showers</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Safe, low-threshold entry showers designed for easy access, maximum comfort, and independence. Our walk-in tubs feature:
                </p>
                <ul className="space-y-4 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Low-step entry for safe, easy access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Built-in grab bars and handholds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Non-slip flooring and seating</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Premium, waterproof materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Modern designs that complement any bathroom</span>
                  </li>
                </ul>
                <a href="tel:1-800-555-1234" className="btn-primary">
                  Get Your Free Quote
                </a>
              </div>
            </div>
          </div>

          {/* Service 2: Full Bath Renovations */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary-blue mb-6">Full Bath Renovations</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Complete transformation from floor to ceiling using premium, durable, and easy-to-clean materials. We handle:
                </p>
                <ul className="space-y-4 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Waterproofing and moisture protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Accessible fixtures and ergonomic design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Slip-resistant flooring solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Proper lighting and ventilation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Finished in just 3 days with no mess</span>
                  </li>
                </ul>
                <a href="tel:1-800-555-1234" className="btn-primary">
                  Schedule Your Consultation
                </a>
              </div>
              <div className="bg-gradient-to-br from-accent-warm to-orange-400 rounded-lg p-8 h-96 flex items-center justify-center text-center shadow-lg order-first lg:order-last">
                <div className="text-white">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-2xl font-semibold">Full Renovations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Safety Upgrades */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-8 h-96 flex items-center justify-center text-center shadow-lg">
                <div className="text-white">
                  <div className="text-6xl mb-4">✅</div>
                  <p className="text-2xl font-semibold">Safety Upgrades</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary-blue mb-6">Safety Upgrades</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Seamless installation of high-quality grab bars, built-in shower seating, and handheld showerheads. Perfect for:
                </p>
                <ul className="space-y-4 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Aging in place solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Accessibility for mobility challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Fall prevention features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Professional installation by certified technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">✓</span>
                    <span>Quality materials backed by warranties</span>
                  </li>
                </ul>
                <a href="tel:1-800-555-1234" className="btn-primary">
                  Request a Free Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Why Choose 3-Day Bath?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="feature-card">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Fast Completion</h3>
              <p className="text-lg text-gray-700">Your new bathroom ready in just 3 days, not weeks or months.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">🧹</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Zero Mess Guarantee</h3>
              <p className="text-lg text-gray-700">We clean up completely each day. Your home stays pristine.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">👴</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Senior-Focused Design</h3>
              <p className="text-lg text-gray-700">Every feature designed with safety, accessibility, and comfort in mind.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Premium Quality</h3>
              <p className="text-lg text-gray-700">Only the highest quality materials and expert craftmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-blue to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Upgrade Your Bathroom?</h2>
          <p className="text-xl mb-8">
            Schedule your free consultation today and discover how we can transform your bathroom.
          </p>
          <a href="tel:1-800-555-1234" className="inline-block px-8 py-4 bg-white text-primary-blue font-bold rounded-lg hover:bg-primary-light transition-all duration-300 text-lg">
            Call: 1-800-555-1234
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
