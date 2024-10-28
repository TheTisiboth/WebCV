import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { NavDropdown } from 'react-bootstrap'
import { MdTranslate } from 'react-icons/md'
import { LinkTooltip } from '../icon'

/**
 * Translation button, that translate the whole page. It switches between english (by default), french and german
 */
type TranslationButtonProps = {
  collapseNavbar: () => void
}
const TranslationButton: FC<TranslationButtonProps> = ({ collapseNavbar }) => {
  const { t, i18n } = useTranslation()

  const getLanguageCode = (language: string): string => {
    if (language.includes('fr'))
      return 'fr'
    if (language.includes('de'))
      return 'de'
    return 'en'
  }

  const changeLanguage = useCallback(
    (lng: string): void => {
      if (!i18n) {
        return
      }
      void i18n.changeLanguage(lng)
    },
    [ i18n ]
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

  const languageCode = getLanguageCode(i18n.language)
  const languageLabel = getLanguageLabel(languageCode)

  const navDropdownTitle = (
    <LinkTooltip tooltipLabel='translationTooltip'>
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
