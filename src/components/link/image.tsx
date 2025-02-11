import Image, {StaticImageData} from 'next/image'
import {FC} from 'react'
import {Figure} from 'react-bootstrap'
import {env} from '../../utils/env'
import {getImageUrlByName, resolveImageUrl} from '../../utils/image'
import CldImage from '../CldImage'

type ImageBaseProps = {
    size?: number;
    roundedCircle?: boolean;
    alt: string;
    margin?: string;
    className?: string;
    width?: number;
    height?: number;
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
        : resolveImageUrl(url, isProduction)

    return <BaseImage {...rest} src={src} useCld={isProduction && !!url} />
}

export default ImageComponent
