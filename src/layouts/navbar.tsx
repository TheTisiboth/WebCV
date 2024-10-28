import { FC, useEffect, useRef } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../components/navbar/logo'
import NavItem from '../components/navbar/navItem'
import CvButton from '../components/navbar/CvButton'
import TranslationButton from '../components/navbar/TranslationButton'

/**
 * The Navbar, containing the different section of the website, and the translate button
 */
export const MyNavbar: FC = () => {
  const toggle = useRef<HTMLButtonElement>(null)
  const collapse = useRef<HTMLDivElement>(null)
  const nav = useRef<HTMLElement>(null)

  // Triger toggle navbar on collapse
  const collapseNavbar = (): void => {
    if (collapse.current?.className.includes('show')) {
      toggle.current?.click()
    }
  }

  // If we click outside of the navbar, we close it
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
  })

  return (
    <Navbar id="nav" ref={nav} collapseOnSelect={true} expand="md" bg="dark" variant="dark" className="pt-0 pb-0"
      fixed="top">
      <Logo/>
      <Navbar.Toggle ref={toggle} aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse ref={collapse} id="responsive-navbar-nav" className="pb-3 pb-md-0 justify-content-between">
        <Nav className="mr-auto">
          <NavItem scrollAnchor='Skills' element='navbar.skill'/>
          <NavItem scrollAnchor='Projects' element='navbar.projects'/>
          <NavItem scrollAnchor='History' element={'navbar.history'}/>
          <NavItem scrollAnchor='Travels' element={'navbar.travel'}/>
        </Nav>
        <Nav className='me-5'>
          <CvButton/>
          <TranslationButton collapseNavbar={collapseNavbar}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


