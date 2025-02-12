import Image, {StaticImageData} from 'next/image'
import {FC} from 'react'
import {Figure} from 'react-bootstrap'
import {env} from '../../utils/env'
import {getImageUrlByName} from '../../utils/image'
import CldImage from '../CldImage'
import clsx from 'clsx'
import './image.css'

type ImageBaseProps = {
    size?: number;
    roundedCircle?: boolean;
    alt: string;
    margin?: string;
    className?: string;
    width?: number;
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
    useCld = false
}) => {
    const effectiveWidth = width ?? size
    const isBigImage = effectiveWidth > 100
    const style = {borderRadius:  '50%' }
    const combinedClassName = clsx(className,'responsive-image',{'responsive-big-image': isBigImage})

    return (
        <Figure className={margin}>
            {useCld ? (
                <CldImage
                    src={src as string}
                    width={effectiveWidth}
                    alt={alt}
                    style={roundedCircle ? style: undefined}
                    className={combinedClassName}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={effectiveWidth}
                    height={size} // Forced to put a height, but it is not used
                    style={roundedCircle ? style: undefined}
                    className={combinedClassName}
                />
            )}
        </Figure>
    )
}

// Runtime check: Type Guard Function to Validate Props
const validateImageProps = (props: ImageProps): props is
    (ImageBaseProps & { name: string; url?: undefined }) |
    (ImageBaseProps & { url: string; name?: undefined }) => {

    if ('name' in props && 'url' in props) {
        throw new Error('ImageComponent cannot have both "name" and "url" props at the same time.')
    }
    if (!('name' in props) && !('url' in props)) {
        throw new Error('ImageComponent must have either "name" or "url" defined.')
    }
    return true
}

// Compile time check: Enforce either "name" OR "url", but not both
type ImageProps =
    | (ImageBaseProps & { name: string; url?: never })
    | (ImageBaseProps & { url: string; name?: never });

const ImageComponent: FC<ImageProps> = (props) => {
    if (!validateImageProps(props)) return null

    const { name, url, ...rest } = props
    const isProduction = env.IS_PRODUCTION

    // I use this syntax for type narrowing
    const src = name !== undefined
        ? getImageUrlByName(name)
        : url

    return <BaseImage {...rest} src={src} useCld={isProduction && !!url} />
}

export default ImageComponent
