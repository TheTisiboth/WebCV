'use client'

import { useEffect } from 'react'

// Ugly fix, to sync the locale with the <html lang> attribute.
// For some reason, the lang attribute was not updated when the locale was changed.
export default function HtmlWrapper({ locale, children }: { locale: string; children: React.ReactNode }) {
    useEffect(() => {
        document.documentElement.lang = locale // Dynamically update <html lang>
    }, [locale])

    return <>{children}</>
}
