const cloudinaryLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/c_scale,w_${width},q_${quality || 75}/${src}`
}

export default cloudinaryLoader
