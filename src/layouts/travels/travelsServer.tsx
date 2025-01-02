'use client'
import dynamic from 'next/dynamic'

const Travels = dynamic(() => import('./travels').then(mod => mod.Travels), {ssr: false})

export default function Page() {
    return (<Travels/>)
}
