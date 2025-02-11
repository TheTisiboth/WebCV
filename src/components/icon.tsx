import {FC, ReactElement, ReactNode} from 'react'
import {Figure, OverlayTrigger, Tooltip as BTooltip} from 'react-bootstrap'
import {type Placement} from 'react-bootstrap/types'
import Image, {StaticImageData} from 'next/image'
import NextLink from 'next/link'
import {getImageUrlByName, getImageUrlByUrl} from '../utils/image'
import {env} from '../utils/env'
import {IconSocial} from './IconSocial'
import CldImage from './CldImage'

type LinkProps = {
    href?: string
    className?: string
    children: ReactNode
}

type LinkComposition = {
    IconSocial: typeof IconSocial
    URLImage: typeof UrlImage
    NamedImage: typeof NamedImage
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

type ImageBaseProps = {
    size?: number;
    roundedCircle?: boolean;
    alt: string;
    margin?: string;
    className?: string;
    width?: number;
    height?: number;
};

type NamedImageProps = ImageBaseProps & {
    name: string;
};

type UrlImageProps = ImageBaseProps & {
    url: string;
};

type BaseImageProps = ImageBaseProps & { src: string | StaticImageData; useCld?: boolean }

const BaseImage: FC<BaseImageProps> = ({
    size = 32,
    roundedCircle = false,
    src,
    alt,
    margin,
    className,
    width,
    height,
    useCld = false
}) => {
    const style = {borderRadius: roundedCircle ? '50%' : '0', height: 'auto'}

    return (
        <Figure className={margin}>
            {useCld ? (
                <CldImage
                    src={src as string}
                    width={width ?? size}
                    height={height ?? size}
                    alt={alt}
                    style={style}
                    className={className}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width ?? size}
                    height={height ?? size}
                    style={style}
                    className={className}
                />
            )}
        </Figure>
    )
}

export const NamedImage: FC<NamedImageProps> = (props) => (
    <BaseImage {...props} src={getImageUrlByName(props.name)}/>
)

export const UrlImage: FC<UrlImageProps> = (props) => {
    const imageUrl = getImageUrlByUrl(props.url, env.IS_PRODUCTION)
    return <BaseImage {...props} src={imageUrl} useCld={env.IS_PRODUCTION}/>
}


/*
* Using the composition pattern, we can export the Link component with its children, for instance:
*
* <Link href={skill.href} className='m-2'>
*    <Link.Tooltip tooltipLabel={skill.tooltip}>
*      <Link.URLImage url={skill.image.url} size={skill.size} alt={skill.tooltip} className={skill.class} />
*    </Link.Tooltip>
* </Link>
*/

Link.IconSocial = IconSocial
Link.NamedImage = NamedImage
Link.URLImage = UrlImage
Link.Tooltip = Tooltip

export default Link
