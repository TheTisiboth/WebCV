import {Nav} from 'react-bootstrap'
import {scroller} from 'react-scroll'
import {FC, ReactElement} from 'react'
// TODO: remove this deprecated import
import {scrollOptions} from '../../constant'

type NavItemProps = {
    scrollAnchor: string
    element: string | ReactElement
}
const NavItem: FC<NavItemProps> = ({scrollAnchor, element}) => {
    return (
        <Nav.Link className="" href={`#${scrollAnchor}`}
            onSelect={() => scroller.scrollTo(scrollAnchor, scrollOptions)}>
            {element}
        </Nav.Link>
    )
}

export default NavItem
