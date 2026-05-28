import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission would be handled by a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', service: 'general' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
            Get Your Free Consultation
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            No obligation. No pressure. Just friendly experts ready to help you create your dream bathroom.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-primary-blue mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="bg-primary-light p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-blue mb-3">📞 Phone</h3>
                  <a href="tel:1-800-555-1234" className="text-xl text-text-dark hover:text-primary-blue transition-colors font-semibold">
                    1-800-555-1234
                  </a>
                  <p className="text-lg text-gray-700 mt-2">Available Monday - Saturday, 8am - 6pm</p>
                </div>

                {/* Email */}
                <div className="bg-primary-light p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-blue mb-3">✉️ Email</h3>
                  <a href="mailto:info@3daybath.com" className="text-xl text-text-dark hover:text-primary-blue transition-colors font-semibold">
                    info@3daybath.com
                  </a>
                  <p className="text-lg text-gray-700 mt-2">We'll respond within 24 hours</p>
                </div>

                {/* Service Hours */}
                <div className="bg-primary-light p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-blue mb-4">🕐 Service Hours</h3>
                  <ul className="space-y-2 text-lg text-text-dark">
                    <li><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
                    <li><strong>Saturday:</strong> 9:00 AM - 5:00 PM</li>
                    <li><strong>Sunday:</strong> By Appointment Only</li>
                  </ul>
                </div>

                {/* Why Contact Us */}
                <div className="bg-primary-light p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary-blue mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3 text-lg text-text-dark">
                    <li className="flex items-start">
                      <span className="text-primary-blue font-bold mr-3">✓</span>
                      <span>Free, no-obligation consultation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue font-bold mr-3">✓</span>
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue font-bold mr-3">✓</span>
                      <span>Expert guidance on accessibility options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue font-bold mr-3">✓</span>
                      <span>Answer all your questions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-light p-8 lg:p-12 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold text-primary-blue mb-8">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 p-8 rounded-lg text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-lg">We received your message and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-primary-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-primary-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-lg font-semibold text-text-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-primary-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-lg font-semibold text-text-dark mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-lg border-2 border-primary-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="walk-in-tubs">Walk-In Bathtubs & Showers</option>
                      <option value="full-renovation">Full Bath Renovations</option>
                      <option value="safety-upgrades">Safety Upgrades</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-text-dark mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 text-lg border-2 border-primary-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Tell us about your bathroom and what you're looking for..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary text-center text-lg"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-center text-gray-600 text-sm">
                    We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Is the consultation really free?</h3>
              <p className="text-lg text-gray-700">
                Yes! There's absolutely no charge for our initial consultation. We'll visit your home (or connect virtually), assess your needs, and provide a detailed quote—all at no cost.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-3">How long does the entire process take?</h3>
              <p className="text-lg text-gray-700">
                From consultation to completion: typically 1-2 weeks. The actual bathroom renovation takes just 3 days, with consultation and design taking about 5-7 days.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-3">What areas do you serve?</h3>
              <p className="text-lg text-gray-700">
                Contact us to confirm we service your area. We work throughout the region and can discuss your specific location.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Do you offer financing options?</h3>
              <p className="text-lg text-gray-700">
                Yes! We offer several flexible financing options to make your bathroom renovation affordable. Our team will discuss all available plans during your consultation.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-3">What warranty do you provide?</h3>
              <p className="text-lg text-gray-700">
                All materials and workmanship are backed by a 1-year warranty. We also provide free support and maintenance guidance during that time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-blue to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
          <p className="text-xl mb-8">
            Contact us today for your free consultation. We're here to help!
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
