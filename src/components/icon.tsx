import {FC, ReactElement, ReactNode} from 'react'
import {Figure, OverlayTrigger, Tooltip as BTooltip} from 'react-bootstrap'
import {type Placement} from 'react-bootstrap/types'
import Image from 'next/image'
import NextLink from 'next/link'
import {getImageUrl} from '../utils/image'
import {env} from '../utils/env'
import {IconSocial} from './IconSocial'
import { CldImage } from 'next-cloudinary'

type LinkProps = {
    href?: string
    className?: string
    children: ReactNode
}

type LinkComposition = {
    IconSocial: typeof IconSocial
    Image: typeof StyledImage
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

type TooltipProps = {
    placement?: Placement
    tooltipLabel: string
    children: ReactElement
}

export const Tooltip: FC<TooltipProps> = ({placement = 'bottom', tooltipLabel, children}) => {
    return (
        <OverlayTrigger
            placement={placement}
            delay={{show: 0, hide: 0}}
            overlay={<BTooltip>{tooltipLabel}</BTooltip>}
        >
            {children}
        </OverlayTrigger>
    )
}

// Make url or name optional

type ImageBaseProps = {
    size?: number
    roundedCircle?: boolean
    alt: string
    margin?: string
    className?: string
    width?: number
    height?: number
}

type ImageProps = ImageBaseProps & (
    | { name: string; url?: never } // We use the name to get the image from the public folder
    | { name?: never; url: string } // We use the url to get the image from an external source
    )

export const StyledImage: FC<ImageProps> = ({size = 32, roundedCircle = false, name, url, alt, margin, className, width, height}) => {
    isValidImageProps({name, url, alt} as ImageProps)

    const isProduction = env.IS_PRODUCTION
    const imageUrl = getImageUrl(name, url, isProduction)
    const style = {
        borderRadius: roundedCircle ? '50%' : '0',
        height: 'auto'
    }

    return (
        <Figure className={margin}>
            {isProduction && url ?
                <CldImage src={imageUrl} width={width ?? size}
                    height={height ?? size} alt={alt} className={className}/> :
                <Image src={imageUrl} alt={alt} style={style} width={width ?? size} height={height ?? size}
                    className={className}/>}
        </Figure>
    )
}

const isValidImageProps = (props: ImageProps): props is ImageProps => {
    if (props.name && props.url ) {
        throw new Error('ImageProps cannot have both "name" and "url" properties.')
    }
    return true
}

/*
* Using the composition pattern, we can export the Link component with its children, for instance:
*
* <Link href={skill.href} className='m-2'>
*    <Link.Tooltip tooltipLabel={skill.tooltip}>
*      <Link.Image src={skill.image} size={skill.size} alt={skill.tooltip} className={skill.class} />
*    </Link.Tooltip>
* </Link>
*/

Link.IconSocial = IconSocial
Link.Image = StyledImage
Link.Tooltip = Tooltip

export default Link
