'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface NavbarProps {
  buyUrl: string
}

export default function Navbar({ buyUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo-link">
          <Image
            src="/logo.webp"
            alt="Logo Sebastián Jara Krasinski"
            width={200}
            height={48}
            className="navbar-logo"
            priority
          />
        </a>
        <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="navbar-btn">
          Comprar ahora
        </a>
      </div>
    </nav>
  )
}
