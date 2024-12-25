import logo from '../../../public/logo.png'
import NavItem from './navItem'
import Image from 'next/image'

const Logo = () => (
    <NavItem scrollAnchor='App' element={
        <Image src={logo} alt='logo' />
        //   <img
        //     alt=""
        //     src={logo}
        //     width="40%"
        //     height="40%"
        //     className="d-inline-block align-top"/>
    }
    />
)

export default Logo
