'use client'

import { useEffect, useRef } from 'react'

export default function BookReveal({ src }: { src: string }) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('hidden-left')
          el.classList.add('visible')
        } else {
          if (entry.boundingClientRect.top > 0) {
            // scrolling back up — reset to right
            el.classList.remove('visible')
            el.classList.remove('hidden-left')
          } else {
            // scrolled past
            el.classList.remove('visible')
            el.classList.add('hidden-left')
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="book-reveal">
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
