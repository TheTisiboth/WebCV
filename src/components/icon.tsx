import {FC, ReactElement, ReactNode} from 'react'
import {IconContext, type IconType} from 'react-icons'
import {Figure, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {type Placement} from 'react-bootstrap/types'
import {type StaticImageData} from 'next/image'
import Image from 'next/image'

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
        <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
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
    Icon: IconType
    size?: 'small' | 'medium'
}
const IconSocial: FC<IconRepositoryProps> = ({Icon, size = 'medium'}) => {
    return (
        <IconContext.Provider value={{size: `${size === 'medium' ? 3 : 2}em`}}>
            <div>
                <Icon/>
            </div>
        </IconContext.Provider>
    )
}

type ImageProps = {
    size?: number
    roundedCircle?: boolean
    image: StaticImageData | string
    alt: string
    margin?: string
    className?: string
}
export const StyledImage: FC<ImageProps> = ({size = 32, roundedCircle = false, image, alt, margin, className}) => {
    const style = {
        borderRadius: roundedCircle ? '50%' : '0',
    }
    return (
        <Figure className={margin}>
            <Image src={image} alt={alt} style={style} height={size} width={size} className={className}/>
            {/*<Figure.Image*/}
            {/*  src={src}*/}
            {/*  height={`${size}px`}*/}
            {/*  width={`${size}px`}*/}
            {/*  className={className}*/}
            {/*  alt={alt}*/}
            {/*  roundedCircle={roundedCircle}*/}
            {/*/>*/}
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


Link.IconSocial = IconSocial
Link.Image = StyledImage
Link.LinkTooltip = LinkTooltip

export default Link
