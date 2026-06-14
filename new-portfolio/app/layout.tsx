import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Righteous Nwariwe | Full-Stack Developer & Data Professional",
  description: "Portfolio of Righteous Nwariwe - Full-Stack Developer, Data Scientist, and Data Analyst",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " bg-black text-white"}>{children}</body>
    </html>
  )
}
