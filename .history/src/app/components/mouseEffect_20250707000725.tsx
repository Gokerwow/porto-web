'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Mouse = (e : React.MouseEvent) => {
  const MouseX = e.clientX
  const MouseY = e.clientY

  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const updateMousePosition = (e) => {
    setMousePosition({
      x: MouseX,
      y: MouseY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  })
  
  const Variants = {
    default: {
      x: MousePosition.x,
      y: MousePosition.y
    }
  }
  return <motion.div 
  variants={Variants}
  animate="default"
  className="w-20 h-20 bg-purple-400 rounded-full absolute"
  />
}