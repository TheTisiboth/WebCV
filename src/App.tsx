'use client'
import './index.css'

import {FC, ReactElement, Suspense} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from './layouts/footer'
import 'animate.css/animate.compat.css'
import './App.css'
import {MyNavbar} from './layouts/navbar'
import AppHeader from './layouts/header/main'
import {Projects} from './layouts/projects'
import {Hobbies} from './layouts/hobbies'
import dynamic from 'next/dynamic'
// import { History } from './layouts/history'
const Travels = dynamic(() => import('./layouts/travels').then(mod => mod.Travels), {ssr: false})


const Page: FC = () => {
    return (
        <div id="App" className="App">
            <MyNavbar/>

            <AppHeader/>
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true} animatePreScroll={false}>
                <section className="grey">
                    <Projects/>
                </section>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <section>
                    {/*<History/>*/}
                </section>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <section className="grey">
                    <Hobbies/>
                </section>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <section>
                    <Travels/>
                </section>
            </ScrollAnimation>
            <section className="App-footer">
                <Footer/>
            </section>
        </div>
    )
}

// loading component for suspense fallback
const Loader = (): ReactElement => (
    <div className="App"/>
)

// here app catches the suspense from page in case translations are not yet loaded
const App: FC = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Page/>
        </Suspense>
    )
}
export default App
