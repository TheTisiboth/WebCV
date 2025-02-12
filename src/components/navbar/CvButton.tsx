import {MdFileDownload} from 'react-icons/md'
import {NavDropdown} from 'react-bootstrap'
import {CVButtonItem} from './CVButtonItem'
import {Cv} from '../../types/generated/Cv'
import {FC} from 'react'
import {getTranslations} from 'next-intl/server'
import {getPDFTooltip} from '../../utils/pdf'

type CVButtonProps = {
    cvs: Cv[]
}

const CVButton: FC<CVButtonProps> = async({cvs}) => {
    const t = await getTranslations()
    const title = <span className="m-auto">
        <MdFileDownload className=" mr-2 myIcon"/>{t('navbar.cv')}
    </span>

    return (
        <NavDropdown title={title} id="basic-nav-dropdown" className="m-auto mr-md-5">
            {cvs.map(({cv_locale, cv: {url}, id}) => (
                <CVButtonItem href={url} tooltip={t(getPDFTooltip(cv_locale))}
                    text={`CV ${cv_locale.toUpperCase()}`} key={id}/>
            ))}
        </NavDropdown>
    )
}

export default CVButton
