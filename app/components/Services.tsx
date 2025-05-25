import { Building2, Palette, Camera, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Brand Environment Design",
    description:
      "Transform your physical spaces into powerful brand experiences through architectural design and spatial branding.",
    features: ["Interior Design", "Spatial Branding", "Retail Environments", "Office Design"],
    company: "Virtu",
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Create compelling visual identities that capture your brand's essence and resonate with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Systems", "Print Design"],
    company: "Virtu",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Develop engaging visual content and strategic campaigns that tell your brand story across all platforms.",
    features: ["Photography", "Video Production", "Social Media Content", "Campaign Strategy"],
    company: "FotoPool",
  },
  {
    icon: MessageSquare,
    title: "Creative Consulting",
    description:
      "Strategic guidance for creative projects, helping you navigate the intersection of design, architecture, and branding.",
    features: ["Creative Strategy", "Project Management", "Brand Positioning", "Design Direction"],
    company: "Personal",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-beige/30">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-softblack mb-6">
            Creative <span className="font-serif text-gold">Services</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Comprehensive creative solutions that bridge the gap between architecture, branding, and digital
            experiences. Let's bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-softblack p-3 rounded-lg">
                  <service.icon className="text-bone" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-softblack mb-2">{service.title}</h3>
                  <span className="text-sm text-gold font-medium">{service.company}</span>
                </div>
              </div>

              <p className="text-charcoal mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-charcoal">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full btn-secondary">Request Quote</button>
            </div>
          ))}
        </div>

        {/* Quote Form */}
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-softblack mb-6 text-center">Ready to Start Your Project?</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack"
              />
            </div>
            <select className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack">
              <option>Select Service</option>
              <option>Brand Environment Design</option>
              <option>Brand Identity Design</option>
              <option>Content Creation</option>
              <option>Creative Consulting</option>
            </select>
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full p-3 border border-taupe rounded-lg focus:outline-none focus:border-softblack"
            ></textarea>
            <button type="submit" className="w-full btn-primary">
              Send Project Brief
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
