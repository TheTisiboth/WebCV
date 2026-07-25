'use client'

import React, {FC, MouseEvent, startTransition, useCallback} from 'react'
import {useTranslations, useLocale} from 'next-intl'
import {usePathname, useRouter} from '../../i18n/routing'
import {Locale} from '../../schemas/translations'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {GlobeAltIcon} from '@heroicons/react/24/outline'

type Language = { translationKey: string, locale: Locale }
const languages: Language[] = [
    {translationKey: 'languages.english', locale: 'en'},
    {translationKey: 'languages.french', locale: 'fr'},
    {translationKey: 'languages.german', locale: 'de'},
]

/**
 * Translation button, that translate the whole page. It switches between english (by default), french and german
 */
const TranslationButton: FC = () => {
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()

    const changeLanguage = useCallback(
        (locale: Locale) => {
            startTransition(() => {
                router.replace(
                    {pathname},
                    {locale}
                )
            })
        }, [pathname, router]
    )

    const handleClick = (e: MouseEvent<HTMLElement>, locale: Locale) => {
        e.preventDefault()
        changeLanguage(locale)
    }


    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5"/>
                    <GlobeAltIcon className=" text-gray-300 size-6" aria-hidden="true"/>
                    <span className="sr-only">Select language</span>
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                {languages.map((language) => (
                    <MenuItem key={language.locale}>
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, language.locale)}
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                            {t(language.translationKey)}
                        </a>
                    </MenuItem>
                ))}

            </MenuItems>
        </Menu>
    )
}


export default TranslationButton
