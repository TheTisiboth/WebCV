'use client'
import {FC} from 'react'
import Link from '../../components/icon'

type SocialLinkProps = {
    link: string
    name: string
}
const SocialLink: FC<SocialLinkProps> = ({link, name}) => (
    <Link href={link}>
        <Link.IconSocial name={name} size='small'/>
    </Link>
)

export default SocialLink
