import {Nav} from 'react-bootstrap'
import {scroller} from 'react-scroll'
import {useTranslation} from 'react-i18next'
import {FC, ReactElement} from 'react'
import {scrollOptions} from '../../constant'

type NavItemProps = {
    scrollAnchor: string
    element: string | ReactElement
}
const NavItem:FC<NavItemProps> = ({ scrollAnchor, element }) => {
  const { t } = useTranslation()
  const renderedElement = typeof element === 'string' ? t(element) : element
  return (
    <Nav.Link className="" href={`#${scrollAnchor}`} onSelect={() => scroller.scrollTo(scrollAnchor, scrollOptions)}>
      {renderedElement}
    </Nav.Link>
  )
}

export default NavItem
