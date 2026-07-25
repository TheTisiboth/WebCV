import React, {ReactNode} from 'react'
import {Metadata} from 'next/types'
import {notFound} from 'next/navigation'
import {NextIntlClientProvider} from 'next-intl'
import {routing} from '../../i18n/routing'
import {getMessages, setRequestLocale} from 'next-intl/server'
import {Locale} from '../../schemas/translations'
import HtmlWrapper from './HTMLWrapper'

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
    const {locale} = await props.params

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale)) {
        notFound()
    }

    setRequestLocale(locale)

    const messages = await getMessages()

    const children = props.children

    return (
        <HtmlWrapper locale={locale}>
            <NextIntlClientProvider messages={messages}>
                <div id="root">{children}</div>
            </NextIntlClientProvider>
        </HtmlWrapper>
    )
}
