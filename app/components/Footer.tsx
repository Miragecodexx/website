import Link from "next/link"
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-softblack text-bone py-16">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">The Christian Creative</h3>
            <p className="text-bone/80 mb-6 max-w-md">
              Nigerian creative entrepreneur bridging architecture, branding, and digital experiences. Creating from
              Vision to Victory.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com/hellodimeji"
                className="bg-bone/10 p-2 rounded-lg hover:bg-bone/20 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link href="#" className="bg-bone/10 p-2 rounded-lg hover:bg-bone/20 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="bg-bone/10 p-2 rounded-lg hover:bg-bone/20 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link
                href="mailto:hello@oladimejiajegbile.com"
                className="bg-bone/10 p-2 rounded-lg hover:bg-bone/20 transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-bone/80">
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Brand Environment Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Brand Identity Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Creative Consulting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-bone/80">
              <li>
                <Link href="#about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Companies */}
        <div className="border-t border-bone/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2 text-gold">Virtu</h4>
              <p className="text-bone/80 text-sm">
                Brand environment design agency specializing in spatial branding and interior design.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-gold">FotoPool</h4>
              <p className="text-bone/80 text-sm">
                Content creation agency focused on visual storytelling and digital marketing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-bone/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bone/60 text-sm">© {new Date().getFullYear()} Oladimeji Ajegbile. All rights reserved.</p>
          <p className="text-bone/60 text-sm">Made with ❤️ in Benin-city, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
