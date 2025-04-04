import './index.css'
import './App.css'
import {FC} from 'react'
import Footer from './layouts/footer'
import AppHeader from './layouts/header/main'
import {Projects} from './layouts/projects/projects'
import {Hobbies} from './layouts/hobbies'
import Travels from './layouts/travels/travelsServer'
import {Histories} from './layouts/history'
import NavBar from './layouts/navbarWrapper'

const App: FC = () => (
    <div id="App" className="App">
        <NavBar/>

        <AppHeader/>
        <section className="grey">
            <Projects/>
        </section>
        <section>
            <Histories/>
        </section>
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

export default App
