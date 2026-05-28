import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Highly Recommended! The team was so respectful and quiet. They changed my old bathtub into a beautiful walk-in shower in just 3 days. Now I feel completely safe using my bathroom again.",
      author: "Margaret T.",
      title: "Homeowner",
      icon: "👩‍🦱"
    },
    {
      quote: "I was nervous about having workers in my home, but the 3-Day Bath team was professional, courteous, and finished exactly on schedule. My new grab bars and non-slip floor give me so much confidence!",
      author: "Robert H.",
      title: "Retired Teacher",
      icon: "👨‍🦳"
    },
    {
      quote: "My daughter insisted I upgrade my bathroom for safety. I'm so glad she did! The team made the whole process easy and stress-free. It feels like a spa now!",
      author: "Dorothy P.",
      title: "Homeowner",
      icon: "👵"
    },
    {
      quote: "Excellent work and fantastic customer service. They explained everything and answered all my questions. The new walk-in tub is luxurious and so practical. Worth every penny!",
      author: "James M.",
      title: "Homeowner",
      icon: "👨"
    },
    {
      quote: "I have mobility issues and was looking for accessible bathroom solutions. 3-Day Bath not only delivered a beautiful space but also made me feel confident and independent again.",
      author: "Sandra L.",
      title: "Homeowner",
      icon: "♿"
    },
    {
      quote: "The quality is outstanding! Everything is durable, modern, and designed with seniors in mind. No regrets. I recommend them to all my friends!",
      author: "Charles W.",
      title: "Homeowner",
      icon: "⭐"
    }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
            What Our Customers Say
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Real experiences from real homeowners who trusted us with their bathroom transformations.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-blue">
                {/* Avatar Emoji */}
                <div className="text-5xl mb-4">{testimonial.icon}</div>
                
                {/* Stars */}
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                
                {/* Quote */}
                <blockquote className="text-lg text-text-dark font-semibold mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <p className="text-primary-blue font-bold text-lg">— {testimonial.author}</p>
                <p className="text-gray-600 text-lg">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-blue to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">By The Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-4">500+</div>
              <p className="text-xl">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-4">4.9★</div>
              <p className="text-xl">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-4">15+</div>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-4">100%</div>
              <p className="text-xl">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Why Choose 3-Day Bath?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="feature-card">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Expert Team</h3>
              <p className="text-lg text-gray-700">Licensed, insured, and experienced bathroom renovation specialists.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Speed & Efficiency</h3>
              <p className="text-lg text-gray-700">Just 3 days from demolition to your beautiful new bathroom.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Quality Guarantee</h3>
              <p className="text-lg text-gray-700">Premium materials and 1-year warranty on all work.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Customer Support</h3>
              <p className="text-lg text-gray-700">Responsive, friendly support before, during, and after your project.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">🧼</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Clean Process</h3>
              <p className="text-lg text-gray-700">Zero mess guarantee with complete daily cleanup.</p>
            </div>
            <div className="feature-card">
              <div className="text-5xl mb-4">♿</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-3">Accessibility First</h3>
              <p className="text-lg text-gray-700">Every design prioritizes senior safety and ease of use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-blue to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl mb-8">
            Experience the 3-Day Bath difference. Schedule your free consultation today.
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
