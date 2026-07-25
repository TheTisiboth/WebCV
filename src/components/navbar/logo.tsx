import logo from '../../../public/logo.png'
import Image from 'next/image'

const Logo = () => (
    <Image src={logo} alt='logo' className="h-15 w-auto"/>
)

export default Logo
