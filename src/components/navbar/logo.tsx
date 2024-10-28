import logo from '../../assets/logo.png'
import NavItem from './navItem'

const Logo = () => (
  <NavItem scrollAnchor='App' element={
    <img
      alt=""
      src={logo}
      width="40%"
      height="40%"
      className="d-inline-block align-top"/>
  }
  />
)

export default Logo
