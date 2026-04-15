'use client'

export default function AuthorImage() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/author.jpg"
      alt="Sebastián Jara Krasinski"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top center',
        display: 'block',
      }}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement
        target.style.display = 'none'
        if (target.parentElement) {
          target.parentElement.style.background =
            'linear-gradient(135deg, #161616 0%, #2a1f0a 100%)'
        }
      }}
    />
  )
}
