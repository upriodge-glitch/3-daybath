import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
            Your New Bathroom in 3 Simple Steps
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            A straightforward, transparent process from consultation to completion.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-100 to-primary-light rounded-lg p-8 h-80 flex items-center justify-center text-center shadow-lg">
                <div>
                  <div className="text-8xl font-bold text-primary-blue mb-4">1</div>
                  <p className="text-2xl font-semibold text-text-dark">Free Consultation</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary-blue mb-6">Step 1: Free Consultation</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Our team will visit your home (or we can chat virtually if you prefer) to:
                </p>
                <ul className="space-y-4 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Understand your specific needs and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Assess your current bathroom layout and condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Take precise measurements and photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Discuss safety features and accessibility options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Provide a transparent, no-obligation quote</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 bg-primary-light p-6 rounded-lg">
                  <strong>Timeline:</strong> 1-2 hours | <strong>Cost:</strong> FREE
                </p>
              </div>
            </div>
          </div>

          {/* Arrow/Divider */}
          <div className="flex justify-center my-12">
            <div className="text-4xl text-primary-blue animate-bounce">↓</div>
          </div>

          {/* Step 2 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary-blue mb-6">Step 2: Custom Design & Approval</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  We create a personalized design plan just for you:
                </p>
                <ul className="space-y-4 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Choose from multiple design options and layouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Select colors, fixtures, and materials that match your style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Customize safety features based on your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Review and approve all details before work begins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Finalize the project timeline and schedule</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 bg-primary-light p-6 rounded-lg">
                  <strong>Timeline:</strong> 3-5 business days | <strong>Cost:</strong> Included in quote
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-8 h-80 flex items-center justify-center text-center shadow-lg">
                <div>
                  <div className="text-8xl font-bold text-green-600 mb-4">2</div>
                  <p className="text-2xl font-semibold text-text-dark">Custom Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow/Divider */}
          <div className="flex justify-center my-12">
            <div className="text-4xl text-primary-blue animate-bounce">↓</div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-100 to-accent-warm rounded-lg p-8 h-80 flex items-center justify-center text-center shadow-lg">
                <div>
                  <div className="text-8xl font-bold text-orange-600 mb-4">3</div>
                  <p className="text-2xl font-semibold text-text-dark">Transformation</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary-blue mb-6">Step 3: 3-Day Transformation</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Our expert team works efficiently to complete your bathroom in just 3 days:
                </p>
                <ul className="space-y-4 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span><strong>Day 1:</strong> Demolition and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span><strong>Day 2:</strong> Installation of fixtures, flooring, and safety features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span><strong>Day 3:</strong> Finishing touches, cleaning, and final inspection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Complete cleanup at the end of each day—zero mess</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue font-bold mr-4">•</span>
                    <span>Your new, beautiful bathroom is ready to use immediately</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 bg-primary-light p-6 rounded-lg">
                  <strong>Timeline:</strong> Exactly 3 days | <strong>Follow-up:</strong> Free support for 1 year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Breakdown */}
      <section className="py-20 lg:py-32 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">What Happens Each Day</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Day 1 */}
            <div className="step-card">
              <div className="text-6xl mb-4 text-primary-blue">🔨</div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Day 1: Prep & Demo</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>✓ Protect your home with dust barriers</li>
                <li>✓ Remove old fixtures and tiles</li>
                <li>✓ Prepare the space for new installation</li>
                <li>✓ Complete daily cleanup</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="step-card">
              <div className="text-6xl mb-4 text-primary-blue">🛠️</div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Day 2: Installation</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>✓ Install new flooring and fixtures</li>
                <li>✓ Add grab bars and safety features</li>
                <li>✓ Connect plumbing and electrical</li>
                <li>✓ Complete daily cleanup</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="step-card">
              <div className="text-6xl mb-4 text-primary-blue">✨</div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Day 3: Finish & Review</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>✓ Final tile work and caulking</li>
                <li>✓ Install mirrors, hardware, and accessories</li>
                <li>✓ Final inspection and walkthrough</li>
                <li>✓ Complete deep cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Guarantee */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Our Guarantees</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="feature-card">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">3-Day Completion Guarantee</h3>
              <p className="text-lg text-gray-700">Your bathroom will be completely finished in exactly 3 days, or we work until it's done at no extra cost.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">🧹</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Zero-Mess Promise</h3>
              <p className="text-lg text-gray-700">We clean up completely every day. Your home remains pristine, and you can use your kitchen and other facilities normally.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Quality Warranty</h3>
              <p className="text-lg text-gray-700">All materials and workmanship are backed by a 1-year warranty, and we're available for free support anytime.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Price Protection</h3>
              <p className="text-lg text-gray-700">No hidden fees. The price quoted is the price you pay, and you can finance your project with flexible payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-blue to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Schedule your free consultation today and start your bathroom transformation journey.
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
