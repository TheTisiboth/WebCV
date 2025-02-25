'use client'

import React, {FC, ReactNode, useState} from 'react'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Logo from '../components/navbar/logo'

const navigation = [
    {name: 'Dashboard', href: '#dashboard'},
    {name: 'Team', href: '#team'},
    {name: 'Projects', href: '#projects'},
    {name: 'Calendar', href: '#calendar'},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface MyNavbarProps {
    cvButton: ReactNode
    translationButton: ReactNode
}

const Navbar: FC<MyNavbarProps> = ({cvButton, translationButton}) => {
    const [currentPath, setCurrentPath] = useState('')

    const handleClick = (href: string) => {
        setCurrentPath(href)
    }


    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0">
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center  sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Logo/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => handleClick(item.href)}
                                        className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Language dropdown */}
                        {cvButton}
                        {translationButton}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => handleClick(item.href)}
                            aria-current={currentPath === item.href ? 'page' : undefined}
                            className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Navbar
