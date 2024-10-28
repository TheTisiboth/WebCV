import { ReactNode } from 'react'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Léo Jan',
  description: 'This is the Web CV of Léo Jan.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="This is the Web CV of Léo Jan."/>
        <meta name="keywords"
          content="leo web,cv,jan,jan cv,léo jan cv,leo,leo web cv,léo web,leo jan cv,web cv,leo cv,jan web cv,léo jan web cv,leo jan,web,jan web,léo jan web,léo cv,léo,léo jan,léo web cv,leo jan web,leo jan web cv"/>
        <meta name="geo.position" content="52.52005040392529, 13.404648245302424"/>
        <meta name="geo.placename" content="Berlin"/>
        <meta name="geo.region" content="Brandenburg"/>
        <link rel="canonical" href="https://janleo.fr"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""></script>
        <title>Léo Jan</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
