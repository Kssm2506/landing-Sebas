import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Los 10 Pasos Secretos del Éxito — Sebastián Jara Krasinski',
  description:
    'Este libro no te motiva. Te confronta. 10 pasos que nadie te cuenta, escritos por Sebastián Jara Krasinski, empresario costarricense con 17 años de experiencia construyendo negocios de alto impacto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
