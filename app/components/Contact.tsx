"use client"

import { Mail, MapPin, Twitter, Linkedin, Calendar } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmittingBrief, setIsSubmittingBrief] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      })
      
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleProjectBrief = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsSubmittingBrief(true)

    try {
      // Simulate sending project brief
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Project brief sent successfully!", {
        duration: 5000,
      })
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmittingBrief(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-softblack mb-6">
            Let's Create <span className="font-serif text-gold">Together</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Ready to transform your vision into victory? I'd love to hear about your project and explore how we can
            bring your creative dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-beige/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-softblack mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Project Type</label>
                <select className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack bg-white">
                  <option>Select a service</option>
                  <option>Brand Environment Design</option>
                  <option>Brand Identity Design</option>
                  <option>Content Creation</option>
                  <option>Creative Consulting</option>
                  <option>Architecture Project</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Project Budget</label>
                <select className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack bg-white">
                  <option>Select budget range</option>
                  <option>₦500,000 - ₦1,000,000</option>
                  <option>₦1,000,000 - ₦2,500,000</option>
                  <option>₦2,500,000 - ₦5,000,000</option>
                  <option>₦5,000,000+</option>
                  <option>Let's discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Tell me about your project *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your vision, goals, and any specific requirements..."
                  className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack bg-white"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary disabled:opacity-50" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-softblack mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-softblack p-3 rounded-lg">
                    <Mail className="text-bone" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-softblack">Email</div>
                    <div className="text-charcoal">hello@oladimejiajegbile.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-softblack p-3 rounded-lg">
                    <Twitter className="text-bone" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-softblack">Twitter</div>
                    <div className="text-charcoal">@hellodimeji</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-softblack p-3 rounded-lg">
                    <Linkedin className="text-bone" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-softblack">LinkedIn</div>
                    <div className="text-charcoal">Oladimeji Ajegbile</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-softblack p-3 rounded-lg">
                    <MapPin className="text-bone" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-softblack">Location</div>
                    <div className="text-charcoal">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Brief Card */}
            <div className="bg-gold rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-softblack" size={24} />
                <h4 className="text-xl font-bold text-softblack">Ready to Start Your Project?</h4>
              </div>
              <p className="text-softblack mb-4">
                Let's discuss your project over a 30-minute call. I'll share insights and help you understand how we can
                bring your vision to life.
              </p>
              <button 
                type="button"
                onClick={handleProjectBrief}
                disabled={isSubmittingBrief}
                className="w-full bg-softblack text-bone px-6 py-3 rounded-lg font-medium hover:bg-charcoal transition-colors disabled:opacity-50"
              >
                {isSubmittingBrief ? "Sending..." : "Send Project Brief"}
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-beige/50 rounded-lg p-6 text-center">
              <MapPin className="mx-auto text-charcoal mb-4" size={48} />
              <h4 className="text-lg font-bold text-softblack mb-2">Based in Lagos, Nigeria</h4>
              <p className="text-charcoal">
                Serving clients across Nigeria and internationally through remote collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
