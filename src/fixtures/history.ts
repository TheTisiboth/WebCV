import greendelta from '../../public/greendelta.png'
import enovacom from '../../public/enovacom.png'
import mpaa from '../../public/mpaa.png'
import polytech from '../../public/polytech.png'
import mcdonalds from '../../public/mcdonalds.png'
import deliveroo from '../../public/deliveroo.png'
import peip from '../../public/peip.png'
import sebben from '../../public/sebben.png'
import {HistoryItem, type HistoryPicture} from '../types'
// TODO: remove this whole file, it's not used anymore

/*
* @Deprecated
*/
export const pictures: HistoryPicture[] =
    [
        {
            historyItemId: 1,
            icon: greendelta,
            url: 'https://www.greendelta.com/',
            height: 120,
            width: 120,
            name: 'Greendelta'
        },
        {
            historyItemId: 2,
            icon: enovacom,
            url: 'https://www.enovacom.fr/',
            height: 120,
            width: 120,
            name: 'Enovacom'
        },
        {
            historyItemId: 3,
            icon: mpaa,
            url: 'https://www.motionpictures.org/',
            height: 80,
            width: 80,
            name: 'MPAA'
        },
        {
            historyItemId: 4,
            icon: polytech,
            url: 'https://www.polytech-grenoble.fr/',
            height: 160,
            width: 160,
            name: 'Polytech Grenoble'
        },
        {
            historyItemId: 5,
            icon: mcdonalds,
            url: 'https://www.mcdonalds.fr/',
            height: 80,
            width: 80,
            name: 'McDonald\'s'
        },
        {
            historyItemId: 6,
            icon: deliveroo,
            url: 'https://deliveroo.fr',
            height: 80,
            width: 80,
            name: 'Deliveroo'
        },
        {
            historyItemId: 7,
            icon: peip,
            url: 'https://polytech.univ-amu.fr/formations/cycle-preparatoire',
            height: 80,
            width: 80,
            name: 'PEIP'
        },
        {
            historyItemId: 8,
            icon: sebben,
            height: 80,
            width: 80,
            name: 'Sebben'
        },
    ]

export const historyItems: HistoryItem[] = [
    {
        id: 0,
        job: true
    },
    {
        id: 1,
        job: true
    },
    {
        id: 2,
        job: true
    },
    {
        id: 3,
        job: false
    },
    {
        id: 4,
        job: true
    },
    {
        id: 5,
        job: true
    },
    {
        id: 6,
        job: false
    },
    {
        id: 7,
        job: true
    },
    {
        id: 8,
        job: false
    }
]
