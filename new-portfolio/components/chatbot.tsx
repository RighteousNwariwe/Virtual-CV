'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Righteous's portfolio assistant. Ask me anything about his skills, projects, or experience!" }
  ])
  const [input, setInput] = useState('')

  const responses: { [key: string]: string } = {
    skills: "Righteous is skilled in Python, SQL, JavaScript, React, Firebase, Power BI, Pandas, Excel, C#, HTML/CSS, Tailwind CSS, Node.js, Java, MySQL, MongoDB, Git, Oracle, and Apache Kafka. He specializes in full-stack development and data analytics.",
    experience: "Righteous has worked as a Full Stack Developer at SneakyFinds Pty Ltd, Data Analytics & Engineering at ClearVue Business Intelligence System, and as a Freelance Web Developer. He's also been a Recruitment Officer at Geekulcha.",
    education: "Righteous holds a BSc in Information Technology from North-West University. He also has certifications in Quantum Computing, Full Stack Development from FNB App Academy, and SQL from Sololearn.",
    projects: "Righteous has built several major projects including SneakyFinds (e-commerce platform), Wow Foods (food delivery app), Lord's Driving School (driving school management), ClearVue Sales Report System (BI dashboard), and more!",
    contact: "You can reach Righteous via email at righteousonyedi@gmail.com, LinkedIn at linkedin.com/in/righteous-nwariwe-01023727a, or phone at 068 002 2727.",
    default: "I can help you learn about Righteous's skills, experience, education, projects, or contact information. What would you like to know?"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.toLowerCase()
    setMessages(prev => [...prev, { role: 'user', text: input }])

    let response = responses.default
    if (userMessage.includes('skill') || userMessage.includes('tech') || userMessage.includes('stack')) {
      response = responses.skills
    } else if (userMessage.includes('experience') || userMessage.includes('work') || userMessage.includes('job')) {
      response = responses.experience
    } else if (userMessage.includes('education') || userMessage.includes('degree') || userMessage.includes('certif')) {
      response = responses.education
    } else if (userMessage.includes('project') || userMessage.includes('portfolio') || userMessage.includes('app')) {
      response = responses.projects
    } else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('reach')) {
      response = responses.contact
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: response }])
    }, 500)

    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-black rounded-full shadow-lg hover:bg-green-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h4 className="font-bold">Portfolio Assistant</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 rounded-full p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-green-500 text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-green-500 text-black rounded-full hover:bg-green-400 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
