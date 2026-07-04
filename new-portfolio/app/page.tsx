'use client'

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Chatbot from "@/components/chatbot"
import ContactForm from "@/components/contact-form"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Github, Mail, Phone, Menu, X, Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'certificates', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-green-400">RN</span>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Certificates', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-green-400 ${
                    activeSection === item.toLowerCase() ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Certificates', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <Card className="w-full max-w-7xl mx-4 bg-black/[0.96] relative overflow-hidden border border-white/10">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full min-h-[600px]">
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-40 h-48 md:w-52 md:h-64 rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 mb-6 flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src="/Virtual-Portfolio/grad-pic.jpeg" 
                    alt="Righteous Nwariwe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-4">
                  Righteous Nwariwe
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6">
                  Full-Stack Developer | Data Scientist | Data Analyst
                </p>
                <div className="flex gap-4 mb-8 justify-center">
                  <a
                    href="https://www.linkedin.com/in/righteous-nwariwe-01023727a"
                    target="_blank"
                    rel="noopener"
                    className="p-3 bg-white/10 rounded-full hover:bg-green-500 hover:text-black transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/RighteousNwariwe"
                    target="_blank"
                    rel="noopener"
                    className="p-3 bg-white/10 rounded-full hover:bg-green-500 hover:text-black transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:righteousonyedi@gmail.com"
                    className="p-3 bg-white/10 rounded-full hover:bg-green-500 hover:text-black transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => window.open('/Full Stack Developer CV(Righteous Nwaiwe).pdf', '_blank')}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors mx-auto"
                >
                  <Download size={20} />
                  Download CV
                </motion.button>
              </motion.div>
            </div>
            
            <div className="flex-1 relative min-h-[400px] md:min-h-[600px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          >
            I am a full-stack developer and data professional with a BSc in Information Technology and hands-on experience building production e-commerce platforms, BI dashboards, and ETL pipelines. I combine technical expertise with a passion for creating solutions that drive business growth and deliver exceptional user experiences.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            My Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C#', 'HTML/CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Java', 'SQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Database & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'MongoDB', 'Git', 'Oracle', 'Firebase', 'Vite'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Data & Analytics</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Data Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Power BI', 'Pandas', 'Excel', 'Apache Kafka', 'ETL Pipelines'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['REST APIs', 'Firebase Hosting', 'SEO Optimization', 'Responsive Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Full Stack Developer",
                company: "SneakyFinds Pty Ltd",
                period: "January 2025 – December 2025",
                points: [
                  "Built and maintained a production React/Firebase e-commerce platform with real-time inventory and order management.",
                  "Managed Firebase databases, admin dashboards, and customer/order data accuracy.",
                  "Implemented SEO practices (meta tags, semantic HTML, keyword optimisation) to improve platform visibility.",
                  "Delivered business insights from customer and order data to support retail decisions."
                ]
              },
              {
                title: "Data Analytics & Engineering",
                company: "ClearVue Business Intelligence System",
                period: "July 2025 – November 2025",
                points: [
                  "Designed Power BI dashboards for KPI tracking, sales monitoring, and business performance reporting.",
                  "Built Python/Pandas ETL workflows to cleanse, transform, and process sales data.",
                  "Integrated SQL, MongoDB Atlas, and Apache Kafka for real-time analytics and reporting.",
                  "Performed data modelling and optimised analytics workflows for reporting accuracy."
                ]
              },
              {
                title: "Freelance Web Developer",
                company: "Self-Employed",
                period: "January 2024 – Present",
                points: [
                  "Developed responsive e-commerce and data-driven web applications for startups and local businesses.",
                  "Integrated Firebase authentication, real-time databases, and REST APIs into production apps.",
                  "Deployed and managed live applications via Firebase Hosting with cross-device optimisation."
                ]
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-green-400">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Education & Certifications
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                title: "BSc in Information Technology",
                institution: "North-West University, Vanderbijlpark",
                period: "Feb 2023 - 2025",
                certificate: "/Virtual-Portfolio/Final year AcademicRecord_43511139                      .pdf"
              },
              {
                title: "Diploma in Quantum Computing & Programming",
                institution: "QSouthAfrica",
                period: "July 2023",
                certificate: "/Virtual-Portfolio/QBronze109-139.pdf"
              },
              {
                title: "FNB App Academy 2025 - Full Stack Development Certificate",
                institution: "FNB",
                period: "24 July 2025",
                certificate: "/Virtual-Portfolio/Righteous FNB App academy certificate.pdf"
              },
              {
                title: "Introduction to SQL Certificate",
                institution: "Sololearn",
                period: "07 January, 2026",
                certificate: "/Virtual-Portfolio/Introduction to SQL(Certificate).pdf"
              },
              {
                title: "Basics of Data Analysis with Excel",
                institution: "Alison",
                period: "Issued Apr 2026",
                certificate: "/Basics of Data Analysis with Excel.pdf",
                credentialId: "Credential ID 6112-55564236"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-green-400">{edu.title}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                    {edu.credentialId && (
                      <p className="text-xs text-gray-600 mt-1">{edu.credentialId}</p>
                    )}
                  </div>
                  {edu.certificate && (
                    <a
                      href={edu.certificate}
                      target="_blank"
                      rel="noopener"
                      className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition-colors text-sm font-medium"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Additional Documents
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Data Analyst CV",
                description: "Curriculum Vitae focused on data analysis roles",
                link: "/Virtual-Portfolio/Data Analyst CV(Righteous Nwariwe).pdf"
              },
              {
                title: "Data Scientist CV",
                description: "Curriculum Vitae focused on data science roles",
                link: "/Virtual-Portfolio/Data Scientist CV(Righteous Nwariwe).pdf"
              },
              {
                title: "Completion Letter",
                description: "Academic completion letter from university",
                link: "/Virtual-Portfolio/Completion letter 43511139_Nwariwe_Rightous Onyedi Nhlanhla Mpila_CompletionLetter.pdf"
              }
            ].map((doc, index) => (
              <motion.a
                key={index}
                href={doc.link}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500 group-hover:text-black transition-colors">
                    <Download size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 mb-1">{doc.title}</h3>
                    <p className="text-gray-400 text-sm">{doc.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Major Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SneakyFinds – Online Thrift Store",
                tech: "E-commerce Platform | React.js | Firebase | EmailJS",
                description: "SneakyFinds is a production-ready e-commerce platform designed specifically for thrift and pre-loved clothing stores. Built around a one-item inventory model where each listing represents a unique garment.",
                link: "https://sneakyfinds.co.za/",
                video: "https://drive.google.com/file/d/1Z_EK1k-DJOM0QcKxzrL8WC9yW8AsVdI5/preview"
              },
              {
                title: "Wow Foods – E-Commerce Platform",
                tech: "Full-Stack Application | React 18 | Firebase | Vite",
                description: "A comprehensive e-commerce solution for food delivery and online grocery shopping with real-time inventory management.",
                link: "https://wow-foods-5edc4.web.app/",
                video: null,
                image: "/Virtual-Portfolio/Wow Foods.png"
              },
              {
                title: "Lord's Driving School",
                tech: "Full-Stack Application | React.js | Tailwind CSS | Firebase",
                description: "A modern, full-stack web application for a local driving school with student registration, lesson scheduling, and instructor availability tracking.",
                link: "https://lords-driving-school.web.app/",
                video: "https://drive.google.com/file/d/1a4yMDXC3A-zfNsV62VH_CK5eSwj9b77S/preview"
              },
              {
                title: "Internship & Job Placement Hub",
                tech: "Job Portal Frontend | HTML/CSS/SCSS | JavaScript | Bootstrap 4",
                description: "A modern, responsive job portal frontend designed to connect students and employers with role-based access and advanced job search.",
                link: "https://github.com/RighteousNwariwe/Intern-Job-Portal",
                video: "https://drive.google.com/file/d/1JN4yuV-NwyPFu4Pm1aRQAvfvYPzkXr9B/preview"
              },
              {
                title: "ClearVue Sales Report System",
                tech: "Full-Stack Application | MongoDB | Power BI | Python | Apache Kafka",
                description: "A modern sales reporting and business intelligence system for ClearVue Ltd with MongoDB, Python/Pandas ETL pipelines, and Power BI analytics.",
                link: "https://github.com/RighteousNwariwe/ClearVue-Sales-Report",
                video: "https://drive.google.com/file/d/1_0gVvQ1qMjvQTIfRuAoT2LmrE-AdxLiM/preview"
              },
              {
                title: "AI Automation Internship Assignment",
                tech: "AI Automation | JavaScript | Workflow Optimization",
                description: "An AI-driven automation assignment focusing on intelligent task automation, process efficiency, and practical AI integration for business workflows.",
                link: "https://docs.google.com/spreadsheets/d/1hD698_710CCJ_qr7qVtsz3MDTm8CxAvz9PSM6CffqVs/edit?usp=sharing",
                video: "https://drive.google.com/file/d/1wREhl5bwdIhyAe9YNH_raxSR_TjTE8DH/preview"
              },
              {
                title: "RighteousDev – Freelance Developer Portfolio",
                tech: "Personal Portfolio | HTML | CSS | JavaScript",
                description: "My professional freelance developer portfolio showcasing web development services, past projects, and technical expertise.",
                link: "https://righteousdev.netlify.app/",
                video: null,
                image: "/Virtual-Portfolio/RighteousWebDev site.png"
              },
              {
                title: "MMJ Driving School",
                tech: "React 18 | Vite | Supabase | React Router | CSS",
                description: "Modern, interactive React + Vite website for MMJ Driving School in Germiston, South Africa. Features include Supabase authentication, storage for gallery images, admin dashboard, and mobile-responsive design with car-themed animations.",
                link: "#",
                video: "https://drive.google.com/file/d/1IBB6MxJeArQ888Mu62RaJLnt63RVPlV7/preview"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{project.tech}</p>
                {project.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.video && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <iframe
                        src={project.video}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay"
                        allowFullScreen
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full p-8 text-center">
                              <p class="text-gray-400 mb-4">Video unavailable due to Google Drive restrictions</p>
                              <a href="${project.video}" target="_blank" rel="noopener" class="text-green-400 hover:text-green-300 underline">
                                Click here to view video on Google Drive
                              </a>
                            </div>
                          `
                        }}
                      />
                    </div>
                  </div>
                )}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/RighteousNwariwe?tab=repositories"
              target="_blank"
              rel="noopener"
              className="inline-block px-8 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-green-500 hover:text-black transition-colors"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12"
          >
            I'm always open to opportunities and collaborations. Reach out through any channel below!
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactForm />
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  description: "Send me an email anytime. I'll respond as soon as possible.",
                  link: "mailto:righteousonyedi@gmail.com",
                  value: "righteousonyedi@gmail.com"
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  description: "Connect with me on LinkedIn for professional networking.",
                  link: "https://www.linkedin.com/in/righteous-nwariwe-01023727a",
                  value: "View Profile"
                },
                {
                  icon: Github,
                  title: "GitHub",
                  description: "Check out my projects and code contributions.",
                  link: "https://github.com/RighteousNwariwe",
                  value: "Projects"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  description: "Call me directly for urgent matters or quick chats.",
                  link: "tel:0680022727",
                  value: "068 002 2727"
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500 group-hover:text-black transition-colors">
                      <contact.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{contact.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{contact.description}</p>
                      <p className="text-green-400 font-medium">{contact.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 text-center text-gray-400">
        <p className="mb-2">© 2025 Righteous Nwariwe. All rights reserved.</p>
        <a href="mailto:righteousonyedi@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
          righteousonyedi@gmail.com
        </a>
      </footer>
    </div>
    <Chatbot />
    </>
  )
}
