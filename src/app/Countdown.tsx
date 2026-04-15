'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 })

  useEffect(() => {
    let total = 23 * 3600 + 59 * 60 + 59
    const id = setInterval(() => {
      if (total <= 0) { clearInterval(id); return }
      total--
      setTime({
        h: Math.floor(total / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60,
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const fmt = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="countdown">
      <div className="countdown-box">
        <span className="countdown-num">{fmt(time.h)}</span>
        <span className="countdown-label">Horas</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-num">{fmt(time.m)}</span>
        <span className="countdown-label">Min</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-num">{fmt(time.s)}</span>
        <span className="countdown-label">Seg</span>
      </div>
    </div>
  )
}
