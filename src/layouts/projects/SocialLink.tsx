import {FC} from 'react'
import Link from '../../components/link'

type SocialLinkProps = {
    link: string
    name: string
}
const SocialLink: FC<SocialLinkProps> = ({link, name}) => (
    <Link href={link} ariaLabel={name}>
        <Link.IconSocial name={name} size='small'/>
    </Link>
)

export default SocialLink
