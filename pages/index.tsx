import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Droplet, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-4">
                  Beautiful, Safe, and Modern Baths — In Just 3 Days!
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  We transform your old bathrooms into safer, luxurious, and accessible spaces without the weeks of mess and stress.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="btn-primary text-center">
                  Get Your Free Quote
                </Link>
                <a href="tel:1-800-555-1234" className="btn-secondary text-center">
                  Call Us Today
                </a>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative h-96 lg:h-full min-h-96 bg-gradient-to-br from-primary-blue to-primary-dark rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🛁</div>
                <p className="text-2xl font-semibold">Modern Bathroom</p>
                <p className="text-lg mt-2">Safe & Luxurious</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Designed for Comfort, Built for Safety</h2>
            <p className="section-subheading">
              Your safety and comfort are our top priorities. We specialize in senior-friendly bathroom solutions with zero construction mess.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="text-6xl mb-6 text-center">🧤</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Slip-Resistant Flooring</h3>
              <p className="text-lg text-gray-700 text-center">
                Maximum grip to prevent accidents and ensure peace of mind.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="text-6xl mb-6 text-center">🚪</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Grab Bars & Low-Step Showers</h3>
              <p className="text-lg text-gray-700 text-center">
                Easy access designs that blend beautifully with modern aesthetics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Zero Stress, 3-Day Completion</h3>
              <p className="text-lg text-gray-700 text-center">
                Our team works fast and cleans up completely, so your routine isn't disrupted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 lg:py-32 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Specialized Services</h2>
            <p className="section-subheading">
              Expert bathroom solutions tailored for senior safety and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="service-card">
              <div className="text-6xl mb-6 text-center">🛁</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Walk-In Bathtubs & Showers</h3>
              <p className="text-lg text-gray-700 text-center">
                Safe, low-threshold entry showers designed for easy access, maximum comfort, and independence.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="text-6xl mb-6 text-center">🏠</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Full Bath Renovations</h3>
              <p className="text-lg text-gray-700 text-center">
                Complete transformation from floor to ceiling using premium, durable, and easy-to-clean materials.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="text-6xl mb-6 text-center">✅</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Safety Upgrades</h3>
              <p className="text-lg text-gray-700 text-center">
                Seamless installation of high-quality grab bars, built-in shower seating, and handheld showerheads.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">What Our Customers Say</h2>
          
          <div className="bg-primary-light p-12 rounded-xl shadow-lg mt-12 border-l-4 border-primary-blue">
            <blockquote className="text-2xl text-text-dark font-semibold mb-6 leading-relaxed">
              "Highly Recommended! The team was so respectful and quiet. They changed my old bathtub into a beautiful walk-in shower in just 3 days. Now I feel completely safe using my bathroom again."
            </blockquote>
            <p className="text-xl text-primary-blue font-bold">— Margaret T., Homeowner</p>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-secondary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-blue to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Your New Bathroom in 3 Simple Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-primary-blue mb-4">1</div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Free Consultation</h3>
              <p className="text-lg text-gray-700">
                We visit your home (or chat virtually) to understand your needs and measure your space.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-primary-blue mb-4">2</div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Custom Design & Approval</h3>
              <p className="text-lg text-gray-700">
                You pick the styles, safety features, and colors that match your home.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-primary-blue mb-4">3</div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">3-Day Transformation</h3>
              <p className="text-lg text-gray-700">
                Our expert team installs your new bathroom safely, cleanly, and finishes in just 3 days!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="px-8 py-4 bg-white text-primary-blue font-bold rounded-lg hover:bg-primary-light transition-all duration-300 inline-block text-lg">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
