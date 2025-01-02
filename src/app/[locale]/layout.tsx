/* eslint-disable react-refresh/only-export-components */
import React, {ReactNode} from 'react'
import {Metadata} from 'next/types'
import {notFound} from 'next/navigation'
import {NextIntlClientProvider} from 'next-intl'
import {routing} from '../../i18n/routing'
// eslint-disable-next-line import/no-unresolved
import {getMessages, setRequestLocale} from 'next-intl/server'

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
        params: Promise<{ locale: 'en' | 'fr' | 'de' }>
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
        <NextIntlClientProvider messages={messages}>
            <div id="root2">{children}</div>
        </NextIntlClientProvider>
    )
}