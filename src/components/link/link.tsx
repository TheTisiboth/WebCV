import {FC, ReactNode} from 'react'
import NextLink from 'next/link'
import IconSocial from './iconSocial'
import Image from './image'  
import Tooltip from './tooltip'

type LinkProps = {
    href?: string
    className?: string
    children: ReactNode
}

type LinkComposition = {
    IconSocial: typeof IconSocial
    Image: typeof Image
    Tooltip: typeof Tooltip
}

const Link: FC<LinkProps> & LinkComposition = ({href, className, children}) => {
    return (
        <NextLink
            href={href || ''}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </NextLink>
    )
}

/*
* Using the composition pattern, we can export the Link component with its children, for instance:
*
* <Link href={skill.href} className='m-2'>
*    <Link.Tooltip tooltipLabel={skill.tooltip}>
*      <Link.Image url={skill.image.url} size={skill.size} alt={skill.tooltip} className={skill.class} />
*    </Link.Tooltip>
* </Link>
*/

Link.IconSocial = IconSocial
Link.Image = Image
Link.Tooltip = Tooltip

export default Link
