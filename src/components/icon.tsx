'use client'
import {FC, ReactElement, ReactNode} from 'react'
import {IconContext} from 'react-icons'
import {Figure, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {type Placement} from 'react-bootstrap/types'
import Image from 'next/image'
import NextLink from 'next/link'
import {getIcon, getImage} from '../utils/iconMapping'
import cloudinaryLoader, {getRelativePath} from '../utils/cloudinary'

type LinkProps = {
    href?: string
    className?: string
    children: ReactNode
}

type LinkComposition = {
    IconSocial: typeof IconSocial
    Image: typeof StyledImage
    LinkTooltip: typeof LinkTooltip
}

const Link: FC<LinkProps> & LinkComposition = ({href, className, children}) => {
    return (
        <NextLink
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </NextLink>
    )
}

type LinkTooltipProps = {
    placement?: Placement
    tooltipLabel: string
    children: ReactElement
}

export const LinkTooltip: FC<LinkTooltipProps> = ({placement = 'bottom', tooltipLabel, children}) => {
    return (
        <OverlayTrigger
            placement={placement}
            delay={{show: 0, hide: 0}}
            overlay={<Tooltip>{tooltipLabel}</Tooltip>}
        >
            {children}
        </OverlayTrigger>
    )
}

type IconRepositoryProps = {
    name: string
    size?: 'small' | 'medium'
}
export const IconSocial: FC<IconRepositoryProps> = ({name, size = 'medium'}) => {
    const Icon = getIcon(name)
    return (
        <IconContext.Provider value={{size: `${size === 'medium' ? 3 : 2}em`}}>
            <div>
                <Icon/>
            </div>
        </IconContext.Provider>
    )
}

// Make url or name optional

type ImageProps = {
    size?: number
    roundedCircle?: boolean
    name?: string
    url?: string
    alt: string
    margin?: string
    className?: string
    width?: number
    height?: number
}
export const StyledImage: FC<ImageProps> = ({size = 32, roundedCircle = false, name, url, alt, margin, className, width, height}) => {
    const image = name !== undefined ? getImage(name) : getRelativePath(url)
    const w = width ?? size
    const h = url ? size/(16/9) : height || size
    const style = {
        borderRadius: roundedCircle ? '50%' : '0',
        height: 'auto'
    }
    return (
        <Figure className={margin}>
            <Image loader={cloudinaryLoader} src={image} alt={alt} style={style} width={w} height={h} className={className}/>
        </Figure>
    )
}

/*
* Using the composition pattern, we can export the Link component with its children, for instance:
*
* <Link href={skill.href} className='m-2'>
*    <Link.LinkTooltip tooltipLabel={skill.tooltip}>
*      <Link.Image src={skill.image} size={skill.size} alt={skill.tooltip} className={skill.class} />
*    </Link.LinkTooltip>
* </Link>
*/

// TODO: compound component pattern not working in nextjs
Link.IconSocial = IconSocial
Link.Image = StyledImage
Link.LinkTooltip = LinkTooltip

export default Link
