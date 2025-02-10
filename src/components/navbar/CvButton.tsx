import {MdFileDownload} from 'react-icons/md'
import {NavDropdown} from 'react-bootstrap'
import CV_FR from '../../../public/CV_FR_Leo_Jan.pdf'
import {FaRegFilePdf} from 'react-icons/fa'
import CV_DE from '../../../public/CV_DE_Leo_Jan.pdf'
import CV_EN from '../../../public/CV_EN_Leo_Jan.pdf'
import {FC} from 'react'
import {Tooltip} from '../icon'
import {useTranslations} from 'next-intl'

type CVButtonItemProps = {
    href: string
    tooltip: string
    text: string
}
const CVButtonItem: FC<CVButtonItemProps> = ({href, tooltip, text}) => {
    return (
        <NavDropdown.Item href={href} download={true} className="text-center">
            <Tooltip tooltipLabel={tooltip}>
                <div>
                    <FaRegFilePdf className="mr-2"/>
                    {text}
                </div>
            </Tooltip>
        </NavDropdown.Item>
    )
}

const CVButton = () => {
    const t = useTranslations()
    const title = <span className="m-auto">
        <MdFileDownload className=" mr-2 myIcon"/>{t('navbar.cv')}
    </span>

    return (
        <NavDropdown title={title} id="basic-nav-dropdown" className="m-auto mr-md-5">
            <CVButtonItem href={CV_FR} tooltip={t('cvFrTooltip')} text='CV FR'/>
            <CVButtonItem href={CV_DE} tooltip={t('cvDeTooltip')} text='CV DE'/>
            <CVButtonItem href={CV_EN} tooltip={t('cvEnTooltip')} text='CV EN'/>
        </NavDropdown>
    )
}

export default CVButton
