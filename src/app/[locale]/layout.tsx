import React, {ReactNode} from 'react'
import {Metadata} from 'next/types'
import {notFound} from 'next/navigation'
import {NextIntlClientProvider} from 'next-intl'
import {routing} from '../../i18n/routing'
import {getMessages, setRequestLocale} from 'next-intl/server'
import {Locale} from '../../schemas/translations'

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

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(params.locale)) {
        notFound()
    }

    setRequestLocale(params.locale)

    const messages = await getMessages()

    const children = props.children

    return (
        <html lang={params.locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <div id="root">{children}</div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
