import {FC} from 'react'
import { IconContext } from 'react-icons'

/**
 * Display an icon that links to social media
 * @param props info about the social media (href, icon)
 */
const IconSocial: FC<{ href: string | undefined, icon: React.ReactNode }> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContext.Provider value={{ size: '3em' }}>
        <div>
          {icon}
        </div>
      </IconContext.Provider>
    </a>
  )
}

export default IconSocial
