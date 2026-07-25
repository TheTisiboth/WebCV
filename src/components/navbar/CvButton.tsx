'use client'

import {Cv} from '../../types/generated/Cv'
import React, {FC, MouseEvent} from 'react'
import {handleDownload} from '../../utils/pdf'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'

type CVButtonProps = {
    cvs: Cv[]
}

const CVButton: FC<CVButtonProps> = ({cvs}) => {
    const handleOnClick = async (e: MouseEvent<HTMLElement>, url: string) => {
        e.preventDefault()
        void handleDownload(url)
    }
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5"/>
                    <ArrowDownTrayIcon className=" text-gray-300 size-6" aria-hidden="true"/>
                    <span className="sr-only">Download CV</span>
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                {cvs.map((cv) => (
                    <MenuItem key={cv.id} as={'div'}>
                        <a
                            href={cv.cv.url}
                            download
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            onClick={(e) => handleOnClick(e, cv.cv.url)}
                        >
                            {`CV ${cv.cv_locale.toUpperCase()}`}
                        </a>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}

export default CVButton
