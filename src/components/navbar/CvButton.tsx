import {MdFileDownload} from 'react-icons/md'
import {NavDropdown} from 'react-bootstrap'
import CV_FR from '../../assets/CV_FR_Leo_Jan.pdf'
import {FaRegFilePdf} from 'react-icons/fa'
import CV_DE from '../../assets/CV_DE_Leo_Jan.pdf'
import CV_EN from '../../assets/CV_EN_Leo_Jan.pdf'
import {useTranslation} from 'react-i18next'
import {FC} from 'react'
import {LinkTooltip} from '../icon'

type CVButtonItemProps = {
    href: string
    tooltip: string
    text: string
}
const CVButtonItem: FC<CVButtonItemProps> = ({href, tooltip, text}) => {
  return (
    <NavDropdown.Item href={href} download={true} className="text-center">
      <LinkTooltip tooltipLabel={tooltip}>
        <div>
          <FaRegFilePdf className="mr-2"/>
          {text}
        </div>
      </LinkTooltip>
    </NavDropdown.Item>
  )
}
    

const CVButton = () => {
  const {t} = useTranslation()
  const title = <span className="m-auto">
    <MdFileDownload className=" mr-2 myIcon"/>{t('navbar.cv')}
  </span>

  return (
    <NavDropdown title={title} id="basic-nav-dropdown" className="m-auto mr-md-5">
      <CVButtonItem href={CV_FR} tooltip='cvFrTooltip' text='CV FR'/>
      <CVButtonItem href={CV_DE} tooltip='cvDeTooltip' text='CV DE'/>
      <CVButtonItem href={CV_EN} tooltip='cvEnTooltip' text='CV EN'/>
    </NavDropdown>
  )
}

export default CVButton
