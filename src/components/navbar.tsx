import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Nav, Navbar, NavDropdown, OverlayTrigger } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRegFilePdf } from 'react-icons/fa';
import { MdFileDownload, MdTranslate } from 'react-icons/md';
import CV_DE from '../assets/CV_DE_Leo_Jan.pdf';
import CV_EN from '../assets/CV_EN_Leo_Jan.pdf';
import CV_FR from '../assets/CV_FR_Leo_Jan.pdf';
import logo from '../assets/logo.png';
import { renderTooltip, scrollTo } from '../utils';

/**
* The Navbar, containing the different section of the website, and the translate button
*/
export const MyNavbar: FC = () => {
    const { t } = useTranslation();
    // Toggle component
    const toggle: MutableRefObject<any> = useRef();
    // Collapse component
    const collapse: MutableRefObject<any> = useRef();
    // Navbar component
    const nav: MutableRefObject<any> = useRef();

    // Triger toggle navbar if collapsed
    const onClick = (): void => {
        if (collapse.current.className.includes('show')) {
            toggle.current.click();
        }
    };

    // If we click outside the navbar, we close it
    const handleClick = (e: MouseEvent): void => {
        if (!nav.current.contains(e.target)) {
            onClick();
        }
    };

    useEffect((): (() => void) => {
        // add when mounted
        document.addEventListener('mousedown', handleClick);
        // return function to be called when unmounted
        return (): void => {
            document.removeEventListener('mousedown', handleClick);
        };
    });

    const scrollOptions = {
        smooth: true,
        offset: -50,
        duration: 500,
    };

    return (
        <Navbar id="nav" ref={nav} collapseOnSelect={true} expand="md" bg="dark" variant="dark" className="pt-0 pb-0" fixed="top">
            <Nav.Link href="#App" onSelect={scrollTo('App', scrollOptions)} className='nav-link'>
                <img
                    alt=""
                    src={logo}
                    width="40%"
                    height="40%"
                    className="d-inline-block align-top"
                />{' '}
            </Nav.Link>
            <Navbar.Toggle ref={toggle} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse ref={collapse} id="responsive-navbar-nav" className="pb-3 pb-md-0">
                <Nav className="mr-auto">
                    <Nav.Link className="" href="#Skills" onSelect={scrollTo('Skills', scrollOptions)}>
                        {t('navbar.skill')}
                    </Nav.Link>
                    <Nav.Link className="" href="#Projects" onSelect={scrollTo('Projects', scrollOptions)}>
                        {t('navbar.projects')}
                    </Nav.Link>
                    <Nav.Link className="" href="#History" onSelect={scrollTo('History', scrollOptions)}>
                        {t('navbar.history')}
                    </Nav.Link>
                    <Nav.Link className="" href="#Travels" onSelect={scrollTo('Travels', scrollOptions)}>
                        {t('navbar.travel')}
                    </Nav.Link>
                </Nav>
                <Nav >
                    <NavDropdown title={
                        <span className="m-auto">
                            <MdFileDownload className=" mr-2 myIcon" />{t('navbar.cv')}
                        </span>}
                        id="basic-nav-dropdown" className="m-auto mr-md-5">

                        <NavDropdown.Item href={CV_FR} download={true} className="text-center">
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 0, hide: 0 }}
                                overlay={renderTooltip(t('cvFrTooltip'))}
                            >
                                <div>
                                    <FaRegFilePdf className="mr-2" />
                                    CV FR
                                </div>
                            </OverlayTrigger>
                        </NavDropdown.Item>
                        <NavDropdown.Item href={CV_DE} download={true} className="text-center">
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 0, hide: 0 }}
                                overlay={renderTooltip(t('cvDeTooltip'))}
                            >
                                <div>
                                    <FaRegFilePdf className="mr-2" />
                                    CV DE
                                </div>
                            </OverlayTrigger>
                        </NavDropdown.Item>
                        <NavDropdown.Item href={CV_EN} download={true} className="text-center">
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 0, hide: 0 }}
                                overlay={renderTooltip(t('cvEnTooltip'))}
                            >
                                <div>
                                    <FaRegFilePdf className="mr-2" />
                                    CV EN
                                </div>
                            </OverlayTrigger>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <TranslationButton onClick={onClick} />

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

/**
* Translation button, that translate the whole page. It switches between english (by default), french and german
*/
const TranslationButton: FC<{ onClick: () => void }> = ({ onClick }) => {
    const { t, i18n } = useTranslation();

    /**
    * Get a language code from the i18n current language
    */
    const getShortLanguage = (language: any): string => {
        if (language.includes('fr')) {
            return 'fr';
        } else if (language.includes('de')) {
            return 'de';
        } else {
            return 'en';
        }
    }

    const [state, setState] = useState<{ langShort: string }>({
        langShort: getShortLanguage(i18n.language),
    });


    /**
    * Switch language between en, fr and de
    */
    const changeLanguage = useCallback(
        (lng: string): void => {
            if (!i18n) {
                return;
            }
            i18n.changeLanguage(lng);
        },
        [i18n]
    );

    /**
    * When we click on the translate button, we switch the button label, and switch the language
    */
    const handleClick = (language: string): void => {
        setState({
            langShort: language,
        });
        changeLanguage(language);
        // Toggle navbar
        onClick();
    };

    /*
    * Get the full language name from the code
    */
    const getLangFull = (lang: string): string => {
        switch (lang) {
            case 'fr':
                return t('languages.french');
            case 'de':
                return t('languages.german');
            default:
                return t('languages.english');
        }
    }

    return (
        <NavDropdown title={
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(t('translationTooltip'))}
            >
                <span className="m-auto">
                    <MdTranslate className=" mr-2 myIcon" />{getLangFull(state.langShort)}
                </span>
            </OverlayTrigger>}
            id="basic-nav-dropdown" className="m-auto mr-md-5">
            <NavDropdown.Item className="text-center" onClick={() => { handleClick('fr') }}>
                <div>
                    {t('languages.french')}
                </div>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" onClick={() => { handleClick('en') }}>
                <div>
                    {t('languages.english')}
                </div>
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" onClick={() => { handleClick('de') }}>
                <div>
                    {t('languages.german')}
                </div>
            </NavDropdown.Item>
        </NavDropdown>
    );
}
