'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className = '', fill = 'white' }: SpotlightProps) {
  const parentRef = useRef<HTMLDivElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const controls = useAnimation()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !parentRef.current) return

    const divRect = divRef.current.getBoundingClientRect()
    const parentRect = parentRef.current.getBoundingClientRect()

    setPosition({
      x: e.clientX - parentRect.left,
      y: e.clientY - parentRect.top,
    })

    x.set(e.clientX - parentRect.left)
    y.set(e.clientY - parentRect.top)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    controls.start({
      opacity,
    })
  }, [opacity, controls])

  return (
    <motion.div
      ref={parentRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <motion.div
        ref={divRef}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
          opacity,
        }}
        className="absolute inset-0 pointer-events-none"
        animate={controls}
      />
    </motion.div>
  )
}
