"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="/placeholder.jpg?height=1080&width=1920"
          alt="Architectural design by Oladimeji Ajegbile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-softblack/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Creating from <span className="font-serif text-gold">Vision</span> to{" "}
            <span className="font-serif text-gold">Victory</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-bone/90 animate-slide-up">
            Nigerian creative entrepreneur, architect, and brand designer. Transforming spaces and brands with purpose
            and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="#portfolio" className="btn-primary">
              Discover My Work
            </Link>
            <Link
              href="#about"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-softblack"
            >
              Learn My Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  )
}
