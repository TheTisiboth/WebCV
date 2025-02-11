'use client'
import {FC} from 'react'
import {getIcon} from '../../utils/iconMapping'
import {IconContext} from 'react-icons'

type IconRepositoryProps = {
    name: string
    size?: 'small' | 'medium'
}
const IconSocial: FC<IconRepositoryProps> = ({name, size = 'medium'}) => {
    const Icon = getIcon(name)
    return (
        <IconContext.Provider value={{size: `${size === 'medium' ? 3 : 2}em`}}>
            <div>
                <Icon />
            </div>
        </IconContext.Provider>
    )
}

export default IconSocial
