"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const blogPosts = [
  {
    id: 1,
    title: "How Architecture Inspires Brand Design",
    excerpt:
      "Exploring the intersection between spatial design and visual identity, and how architectural principles can elevate your brand.",
    image: "/placeholder1.jpg?height=300&width=400",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Design Insights",
  },
  {
    id: 2,
    title: "The Christian Creative's Guide to Business",
    excerpt:
      "Balancing faith and entrepreneurship while building a successful creative business in Nigeria's growing economy.",
    image: "/placeholder2.png?height=300&width=400",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Business",
  },
  {
    id: 3,
    title: "Branding for Nigerian Entrepreneurs",
    excerpt: "Essential branding strategies for Nigerian businesses looking to compete in the global marketplace.",
    image: "/placeholder3.png?height=300&width=400",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Branding",
  },
]

export default function Blog() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    try {
      // Here you would typically send the email to your backend
      // For now, we'll just simulate a successful subscription
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Successfully subscribed to the newsletter!", {
        duration: 5000,
      })
      setEmail("")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-softblack mb-6">
            Creative <span className="font-serif text-gold">Insights</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Thoughts on design, architecture, faith, and entrepreneurship. Join me on this journey of creative
            exploration and business growth.
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-softblack mb-8">Latest Articles</h3>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-48 md:h-32 overflow-hidden rounded-lg">
                      <Image
                        src={post.image || "/placeholder1.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-gray">
                        <span className="bg-gold text-softblack px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-softblack group-hover:text-gold transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-charcoal">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-softblack font-medium group-hover:text-gold transition-colors"
                      >
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Podcast */}
            <div className="bg-beige/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-softblack mb-4">Featured Podcast</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-softblack mb-2">Being Freelance Episode</h4>
                  <p className="text-sm text-charcoal mb-4">
                    Listen to my conversation about the freelance journey and building creative businesses in Nigeria.
                  </p>
                  <div className="bg-softblack rounded-lg p-4 text-center">
                    <div className="text-bone text-sm">🎧 Podcast Player</div>
                    <button className="mt-2 text-gold text-sm hover:underline">Play Episode</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Feed */}
            <div className="bg-beige/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-softblack mb-4">Latest from X</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-charcoal mb-2">
                    "Just finished an amazing brand environment project. The intersection of architecture and branding
                    never ceases to amaze me! 🏗️✨"
                  </p>
                  <div className="text-xs text-muted-gray">@hellodimeji • 2 hours ago</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-charcoal mb-2">
                    "Nigerian creatives are changing the game globally. Proud to be part of this movement! 🇳🇬"
                  </p>
                  <div className="text-xs text-muted-gray">@hellodimeji • 1 day ago</div>
                </div>
              </div>
              <Link
                href="https://twitter.com/hellodimeji"
                className="inline-flex items-center gap-2 text-softblack font-medium mt-4 hover:text-gold transition-colors"
              >
                Follow @hellodimeji <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-softblack rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-bone mb-4">Stay Inspired</h3>
          <p className="text-bone/80 mb-6 max-w-2xl mx-auto">
            Get weekly insights on design, architecture, and creative entrepreneurship delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 rounded-lg border-0 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-gold text-softblack px-6 py-3 rounded-lg font-medium hover:bg-gold/90 transition-colors disabled:opacity-50"
              disabled={isSubscribing}
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
