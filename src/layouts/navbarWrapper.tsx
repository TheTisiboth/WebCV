import {FC} from 'react'
import {fetchAPI} from '../utils/fetch-api'
import {Cv} from '../types/generated/Cv'
import {StrapiRoute} from '../types/generated/routes/StrapiRoute'
import CVButton from '../components/navbar/CvButton'
import MyNavbar from './navbar2'
import TranslationButton from '../components/navbar/TranslationButton'

const NavbarWrapper: FC = async () => {
    const cvs = await fetchAPI<Cv[]>({resource: StrapiRoute.Cv})

    return (
        <MyNavbar cvButton={<CVButton cvs={cvs}/>} translationButton={<TranslationButton/>}/>
    )
}

export default NavbarWrapper
