'use client'

import dynamic from 'next/dynamic'
import {FC} from 'react'
import {City} from '../../types/types'
const Travels = dynamic(() => import('./travels').then(mod => mod.Travels), {ssr: false})

type ComponentProps = {
    cities: City[]
}
export const Component: FC<ComponentProps> = ({cities}) =>{
    return (<Travels cities={cities}/>)
}

export default Component
