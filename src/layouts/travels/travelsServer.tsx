import {fetchAPI} from '../../utils/fetch-api'
import {getLocale} from 'next-intl/server'

import Travels from './travelsHack'
import {City} from '../../types/types'

export default async function Page() {
    const locale = await getLocale()
    const cities = await fetchAPI<City[]>({resource:'cities', locale})
    return (<Travels cities={cities}/>)
}
