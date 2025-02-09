import {fetchAPI} from '../../utils/fetch-api'
import {getLocale} from 'next-intl/server'
import Travels from './travelsHack'
import {City} from '../../types/City'
import {StrapiRoute} from '../../types/routes/StrapiRoute'

export default async function Page() {
    const locale = await getLocale()
    const cities = await fetchAPI<City[]>({resource:StrapiRoute.City, locale})
    return (<Travels cities={cities}/>)
}
