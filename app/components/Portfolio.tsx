"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Custom Business Card Design for Nigerian Store",
    category: "branding",
    image: "/placeholder.jpg?height=400&width=600",
    description: "Complete brand identity redesign for a local Nigerian retail store",
    client: "Lagos Retail Store",
    outcome: "40% increase in brand recognition",
  },
  {
    id: 2,
    title: "Virtu Brand Environment Project",
    category: "architecture",
    image: "/placeholder.jpg?height=400&width=600",
    description: "Modern office space design with integrated brand elements",
    client: "Tech Startup Lagos",
    outcome: "Enhanced workplace productivity by 25%",
  },
  {
    id: 3,
    title: "FotoPool Content Creation Campaign",
    category: "content",
    image: "/placeholder.jpg?height=400&width=600",
    description: "Multi-platform content strategy and visual design",
    client: "E-commerce Brand",
    outcome: "300% increase in social engagement",
  },
  {
    id: 4,
    title: "Church Brand Identity System",
    category: "branding",
    image: "/placeholder.jpg?height=400&width=600",
    description: "Complete visual identity for growing church community",
    client: "Faith Community Church",
    outcome: "Unified brand presence across all touchpoints",
  },
  {
    id: 5,
    title: "Residential Architecture Project",
    category: "architecture",
    image: "/placeholder.jpg?height=400&width=600",
    description: "Modern Nigerian home design with cultural elements",
    client: "Private Client",
    outcome: "Award-winning sustainable design",
  },
  {
    id: 6,
    title: "Digital Marketing Graphics Suite",
    category: "graphic-design",
    image: "/placeholder.jpg?height=400&width=600",
    description: "Comprehensive digital asset library for SME",
    client: "Nigerian Fintech",
    outcome: "Streamlined marketing operations",
  },
]

const categories = [
  { id: "all", label: "All Work" },
  { id: "branding", label: "Branding" },
  { id: "architecture", label: "Architecture" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "content", label: "Content Creation" },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-softblack mb-6">
            Featured <span className="font-serif text-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            A curated selection of projects spanning architecture, branding, and content creation. Each project tells a
            unique story of transformation and growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id ? "bg-softblack text-bone" : "bg-beige text-charcoal hover:bg-taupe"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg card-hover"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-softblack/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-xs bg-gold text-softblack px-3 py-1 rounded-full">{item.client}</span>
                      <ExternalLink size={20} className="cursor-pointer hover:text-gold transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-softblack mb-2">{item.title}</h3>
                <p className="text-charcoal text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-gray uppercase tracking-wide">
                    {categories.find((cat) => cat.id === item.category)?.label}
                  </span>
                  <span className="text-xs text-gold font-medium">{item.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">View Complete Portfolio</button>
        </div>
      </div>
    </section>
  )
}
