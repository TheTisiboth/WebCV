import {FC, startTransition, useCallback} from 'react'
import {NavDropdown} from 'react-bootstrap'
import {MdTranslate} from 'react-icons/md'
import {LinkTooltip} from '../icon'
import {useTranslations, useLocale} from 'next-intl'
import {usePathname, useRouter} from '../../i18n/routing'
import {useParams} from 'next/navigation'

/**
 * Translation button, that translate the whole page. It switches between english (by default), french and german
 */
type TranslationButtonProps = {
    collapseNavbar: () => void
}
const TranslationButton: FC<TranslationButtonProps> = ({collapseNavbar}) => {
    const locale = useLocale()
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()


    const getLanguageCode = (language: string): string => {
        if (!language) return

        if (language.includes('fr'))
            return 'fr'
        if (language.includes('de'))
            return 'de'
        return 'en'
    }

    const changeLanguage = useCallback(
        (lng: string): void => {
            startTransition(() => {
                router.replace(
                    // @ts-expect-error -- TypeScript will validate that only known `params`
                    // are used in combination with a given `pathname`. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    {pathname, params},
                    {locale: lng}
                )
            })
        }, [params, pathname, router]
    )

    const handleClick = (language: string): void => {
        changeLanguage(language)
        collapseNavbar()
    }

    const getLanguageLabel = (lang: string): string => {
        switch (lang) {
        case 'fr':
            return t('languages.french')
        case 'de':
            return t('languages.german')
        default:
            return t('languages.english')
        }
    }

    const languageCode = getLanguageCode(locale)
    const languageLabel = getLanguageLabel(languageCode)

    const navDropdownTitle = (
        <LinkTooltip tooltipLabel={t('translationTooltip')}>
            <span className="m-auto">
                <MdTranslate
                    className=" mr-2 myIcon"/>
                {languageLabel}
            </span>
        </LinkTooltip>
    )

    return (
        <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown" className="m-auto mr-md-5">
            <NavDropdown.Item className="text-center" onClick={() => {
                handleClick('fr')
            }}>
                <div>
                    {t('languages.french')}
                </div>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" onClick={() => {
                handleClick('en')
            }}>
                <div>
                    {t('languages.english')}
                </div>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" onClick={() => {
                handleClick('de')
            }}>
                <div>
                    {t('languages.german')}
                </div>
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default TranslationButton
