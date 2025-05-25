import Image from "next/image"
import { Play } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-bone">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-softblack">
              Meet <span className="font-serif text-gold">The Christian Creative</span>
            </h2>
            <div className="space-y-4 text-lg text-charcoal leading-relaxed">
              <p>
                I'm Oladimeji Ajegbile, a Nigerian creative entrepreneur who believes that creativity knows no bounds.
                My journey began in architecture, where I learned to see spaces not just as structures, but as
                environments that tell stories and shape experiences.
              </p>
              <p>
                Today, I wear multiple hats: architect, freelance graphic designer, brand designer, content creator, CEO
                of Virtu (a brand environment design agency), and co-founder of FotoPool. Each role feeds into the
                others, creating a unique perspective that bridges the physical and digital worlds.
              </p>
              <p>
                As "The Christian Creative," I'm passionate about helping brands and individuals express their authentic
                selves without limits. I believe that when we create from a place of purpose and faith, we can truly
                transform visions into victories.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-6 italic text-xl text-charcoal font-serif">
              "I believe creators should express themselves in multiple ways, without limits."
            </blockquote>
          </div>

          {/* Image/Video */}
          <div className="space-y-6">
            <div className="relative group">
              <Image
                src="/placeholder-user.jpg?height=600&width=500"
                alt="Oladimeji Ajegbile - The Christian Creative"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-softblack/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="bg-white rounded-full p-4">
                  <Play className="text-softblack" size={32} />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-beige p-4 rounded-lg">
                <div className="text-2xl font-bold text-softblack">10+</div>
                <div className="text-sm text-charcoal">Years Experience</div>
              </div>
              <div className="bg-beige p-4 rounded-lg">
                <div className="text-2xl font-bold text-softblack">100+</div>
                <div className="text-sm text-charcoal">Projects Completed</div>
              </div>
              <div className="bg-beige p-4 rounded-lg">
                <div className="text-2xl font-bold text-softblack">2</div>
                <div className="text-sm text-charcoal">Companies Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
