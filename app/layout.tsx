import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { Toast } from "./components/ui/toast"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Oladimeji Ajegbile - The Christian Creative | Brand Designer & Architect Nigeria",
  description:
    "Nigerian creative entrepreneur, architect, and brand designer. CEO of Virtu brand environment design agency and co-founder of FotoPool. Creating from Vision to Victory.",
  keywords:
    "Christian Creative Nigeria, brand designer Nigeria, Virtu agency, architect Nigeria, graphic designer Lagos, FotoPool, Oladimeji Ajegbile",
  authors: [{ name: "Oladimeji Ajegbile" }],
  openGraph: {
    title: "Oladimeji Ajegbile - The Christian Creative",
    description: "Nigerian creative entrepreneur, architect, and brand designer. Creating from Vision to Victory.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oladimeji Ajegbile - The Christian Creative",
    description: "Nigerian creative entrepreneur, architect, and brand designer. Creating from Vision to Victory.",
    creator: "@hellodimeji",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans bg-bone text-charcoal antialiased">
        {children}
        <Toast />
      </body>
    </html>
  )
}
