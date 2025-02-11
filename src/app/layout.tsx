import React, {ReactNode} from 'react'
import {Metadata} from 'next/types'
import {routing} from '../i18n/routing'
import {Locale} from '../schemas/translations'

export const metadata: Metadata = {
    title: 'Léo Jan',
    description: 'This is the Web CV of Léo Jan.',
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}))
}

export default async function RootLayout(
    props: {
        children: ReactNode,
        params: Promise<{ locale: Locale }>
    }
) {
    const params = await props.params
    const {
        children
    } = props

    return (
        <html lang={params.locale}>
            <head>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="This is the Web CV of Léo Jan."/>
                <meta name="keywords"
                    content="leo web,cv,jan,jan cv,léo jan cv,leo,leo web cv,léo web,leo jan cv,web cv,leo cv,jan web cv,léo jan web cv,leo jan,web,jan web,léo jan web,léo cv,léo,léo jan,léo web cv,leo jan web,leo jan web cv"/>
                <meta name="geo.position" content="52.52005040392529, 13.404648245302424"/>
                <meta name="geo.placename" content="Berlin"/>
                <meta name="geo.region" content="Brandenburg"/>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
                <link rel="canonical" href="https://janleo.fr"/>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin=""/>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossOrigin="anonymous"
                />
                <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                    crossOrigin="" async></script>
                <title>Léo Jan</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
