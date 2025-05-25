"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Adebayo",
    role: "CEO, Lagos Tech Hub",
    company: "Lagos Tech Hub",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Oladimeji transformed our office space into a true reflection of our brand. His architectural approach to branding is revolutionary. The space now tells our story and inspires our team daily.",
    rating: 5,
    project: "Brand Environment Design",
  },
  {
    id: 2,
    name: "Pastor Michael Okafor",
    role: "Senior Pastor",
    company: "Faith Community Church",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with The Christian Creative was a blessing. Oladimeji understood our vision and created a brand identity that perfectly captures our church's heart and mission. Truly exceptional work.",
    rating: 5,
    project: "Brand Identity Design",
  },
  {
    id: 3,
    name: "Kemi Adeyemi",
    role: "Founder",
    company: "Afro Beauty Co.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The content creation strategy from FotoPool increased our social media engagement by 300%. Oladimeji's team understands the Nigerian market and global trends perfectly.",
    rating: 5,
    project: "Content Creation",
  },
]

const clientLogos = [
  { name: "Lagos Tech Hub", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Faith Community", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Afro Beauty Co", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Nigerian Fintech", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Retail Store", logo: "/placeholder.svg?height=60&width=120" },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-beige/20">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-softblack mb-6">
            Client <span className="font-serif text-gold">Stories</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Hear from the amazing clients who have trusted me with their creative visions. Their success stories inspire
            everything I do.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 text-gold opacity-20" size={48} />

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={20} />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-charcoal font-serif italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-bold text-softblack">{testimonials[currentTestimonial].name}</div>
                  <div className="text-charcoal">{testimonials[currentTestimonial].role}</div>
                  <div className="text-muted-gray text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4">
                <span className="bg-gold text-softblack px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].project}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-beige hover:bg-taupe transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-gold" : "bg-taupe"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-beige hover:bg-taupe transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Quote */}
        <div className="bg-softblack rounded-lg p-8 text-center mb-16">
          <blockquote className="text-xl md:text-2xl text-bone font-serif italic mb-4">
            "Featured in Selar Creator Stories for innovative approach to creative entrepreneurship in Nigeria"
          </blockquote>
          <cite className="text-gold font-medium">Selar Creator Stories</cite>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-softblack mb-8">Trusted by Amazing Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
