import greendelta from '../assets/greendelta.png'
import enovacom from '../assets/enovacom.png'
import mpaa from '../assets/mpaa.png'
import polytech from '../assets/polytech.png'
import mcdonalds from '../assets/mcdonalds.png'
import deliveroo from '../assets/deliveroo.png'
import peip from '../assets/peip.png'
import sebben from '../assets/sebben.png'
import {type HistoryPicture} from '../types'

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
