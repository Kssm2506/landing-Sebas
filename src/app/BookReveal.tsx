'use client'

import { useEffect, useRef } from 'react'

export default function BookReveal({ src }: { src: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    if (!section || !img) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.classList.remove('hidden-left')
          img.classList.add('visible')
        } else {
          if (entry.boundingClientRect.top > 0) {
            // scrolling back up — reset to right
            img.classList.remove('visible')
            img.classList.remove('hidden-left')
          } else {
            // scrolled past
            img.classList.remove('visible')
            img.classList.add('hidden-left')
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="book-reveal" ref={sectionRef}>
      <div className="book-scroll-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          id="bookImg"
          className="book-scroll-img"
          src={src}
          alt="Los 10 Pasos Secretos del Éxito — portada del libro"
        />
      </div>
    </section>
  )
}
