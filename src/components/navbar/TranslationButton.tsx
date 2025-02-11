import {FC, startTransition, useCallback} from 'react'
import {NavDropdown} from 'react-bootstrap'
import {MdTranslate} from 'react-icons/md'
import Tooltip from '../link/tooltip'
import {useTranslations, useLocale} from 'next-intl'
import {usePathname, useRouter} from '../../i18n/routing'
import {Locale} from '../../types/translations'

/**
 * Translation button, that translate the whole page. It switches between english (by default), french and german
 */
type TranslationButtonProps = {
    collapseNavbar: () => void
}
const TranslationButton: FC<TranslationButtonProps> = ({collapseNavbar}) => {
    const locale = useLocale() as Locale
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

    const handleClick = (locale: Locale) => {
        changeLanguage(locale)
        collapseNavbar()
    }

    const getLanguageLabel = (locale?: Locale) => {
        switch (locale) {
        case 'fr':
            return t('languages.french')
        case 'de':
            return t('languages.german')
        default:
            return t('languages.english')
        }
    }

    const languageLabel = getLanguageLabel(locale)

    return (
        <NavDropdown title={<NavDropdownTitle languageLabel={languageLabel} />} id="basic-nav-dropdown" className="m-auto mr-md-5">
            <NavDropdown.Item className="text-center" onClick={() => handleClick('fr')}>
                <div>
                    {t('languages.french')}
                </div>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" onClick={() => handleClick('en')}>
                <div>
                    {t('languages.english')}
                </div>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" onClick={() => handleClick('de')}>
                <div>
                    {t('languages.german')}
                </div>
            </NavDropdown.Item>
        </NavDropdown>
    )
}

type NavDropdownTitleProps = {
    languageLabel: string;
}

const NavDropdownTitle: FC<NavDropdownTitleProps> = ({ languageLabel }) => {
    const t = useTranslations()

    return (
        <Tooltip tooltipLabel={t('translationTooltip')}>
            <span className="m-auto">
                <MdTranslate className="mr-2 myIcon" />
                {languageLabel}
            </span>
        </Tooltip>
    )
}

export default TranslationButton
