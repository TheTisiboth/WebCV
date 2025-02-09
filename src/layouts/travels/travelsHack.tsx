'use client'

import dynamic from 'next/dynamic'
import {FC} from 'react'
import {City} from '../../types/City'
const Travels = dynamic(() => import('./travels').then(module => module.Travels), {ssr: false})

type ComponentProps = {
    cities: City[]
}
export const Component: FC<ComponentProps> = ({cities}) =>{
    return (<Travels cities={cities}/>)
}

export default Component
