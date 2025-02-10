import {Nav} from 'react-bootstrap'
import {FC, ReactElement} from 'react'

type NavItemProps = {
    scrollAnchor: string
    element: string | ReactElement
}

// TODO: implement scroll to anchor on click
const NavItem: FC<NavItemProps> = ({scrollAnchor, element}) => {
    return (
        <Nav.Link className="" href={`#${scrollAnchor}`}
            onSelect={() => {}}>
            {element}
        </Nav.Link>
    )
}

export default NavItem
