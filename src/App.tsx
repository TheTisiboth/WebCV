import './index.css'
import './App.css'

import {FC, ReactElement, Suspense} from 'react'
import Footer from './layouts/footer'
// import 'animate.css/animate.compat.css'
import {MyNavbar} from './layouts/navbar'
import AppHeader from './layouts/header/main'
import {Projects} from './layouts/projects/projects'
import {Hobbies} from './layouts/hobbies'
import Travels from './layouts/travels/travelsServer'
// import { History } from './layouts/history'


const Page: FC = () => {
    return (
        <div id="App" className="App">
            <MyNavbar/>

            <AppHeader/>
            <section className="grey">
                <Projects/>
            </section>
            {/*    <section>*/}
            {/*        <History/>*/}
            {/*    </section>*/}
            <section className="grey">
                <Hobbies/>
            </section>
            <section>
                <Travels/>
            </section>
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
