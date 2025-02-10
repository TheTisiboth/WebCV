'use client'
import {FC, useEffect, useRef} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import Logo from '../components/navbar/logo'
import NavItem from '../components/navbar/navItem'
import CvButton from '../components/navbar/CvButton'
import TranslationButton from '../components/navbar/TranslationButton'
import {useTranslations} from 'next-intl'

/**
 * The Navbar, containing the different section of the website, and the translation button
 */
export const MyNavbar: FC = () => {
    const t = useTranslations('navbar')
    const toggle = useRef<HTMLButtonElement>(null)
    const collapse = useRef<HTMLDivElement>(null)
    const nav = useRef<HTMLElement>(null)

    // Trigger toggle navbar on collapse
    const collapseNavbar = (): void => {
        if (collapse.current?.className.includes('show')) {
            toggle.current?.click()
        }
    }

    // If we click outside the navbar, we close it
    const handleClick = (e: MouseEvent): void => {
        if (!nav.current?.contains(e.currentTarget as Node)) {
            collapseNavbar()
        }
    }

    useEffect((): (() => void) => {
        document.addEventListener('mousedown', handleClick)
        return (): void => {
            document.removeEventListener('mousedown', handleClick)
        }
    },[])

    return (
        <Navbar id="nav" ref={nav} collapseOnSelect={true} expand="md" bg="dark" variant="dark" className="pt-0 pb-0"
            fixed="top" style={{ height: '60px' }}>
            <Logo/>
            <Navbar.Toggle ref={toggle} aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse ref={collapse} id="responsive-navbar-nav" className="pb-3 pb-md-0 justify-content-between">
                <Nav className="mr-auto">
                    <NavItem scrollAnchor='Skills' element={t('skill')}/>
                    <NavItem scrollAnchor='Projects' element={t('projects')}/>
                    <NavItem scrollAnchor='History' element={t('history')}/>
                    <NavItem scrollAnchor='Travels' element={t('travel')}/>
                </Nav>
                <Nav className='me-5'>
                    <CvButton/>
                    <TranslationButton collapseNavbar={collapseNavbar}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


