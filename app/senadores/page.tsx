import type { Metadata } from "next"
import SenadoresContent from "./SenadoresContent"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Senadores",
  description: "Explora el listado completo de senadores, sus bloques políticos y su historial de votaciones en el Senado de la Nación Argentina.",
  openGraph: {
    title: "Senadores | Senado Argentino",
    description: "Explora el listado completo de senadores, sus bloques políticos y su historial de votaciones en el Senado de la Nación Argentina.",
    images: [{
      url: '/meta-image.png',
      width: 1200,
      height: 630,
      alt: 'Senadores del Senado Argentino'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Senadores | Senado Argentino",
    description: "Explora el listado completo de senadores, sus bloques políticos y su historial de votaciones en el Senado de la Nación Argentina.",
    images: ['/meta-image.png']
  },
  metadataBase: new URL('https://senadores.argentinadatos.com'),
}

export default function Senadores() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Suspense fallback={<div>Loading...</div>}>
        <SenadoresContent />
      </Suspense>
    </div>
  )
}

