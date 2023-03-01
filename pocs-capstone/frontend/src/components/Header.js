import "./Header.css"
import logo from '../images/gabagoo.jpg';
import usericon from '../images/user_icon.png'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

const Header = (props) => {

    const headerStyle = {
        // https://stackoverflow.com/questions/7415872/change-color-of-png-image-via-css
        filter: "invert(100%)",
        width: '40px'
    }
    const UserMenu = (
        <Image
          src={usericon}
          alt="UserName profile image"
        //   roundedCircle
          style={headerStyle}
        />
    )
    return (
        <div className="header-whole">
            <Stack direction="horizontal" gap={3}>
                <div className="header-position">
                    <img className="gab" src={logo} alt="gabagoologo" />
                    <Navbar.Brand className="App-link ml-5 header-text">My Study Buddy</Navbar.Brand>

                </div>
                <div className="ms-auto dropdown-position">
                    <NavDropdown title={UserMenu} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Canvas Integration</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>

                </div>
                {/* <div className="vr" /> */}
                {/* <div className="bg-light border">Third item</div> */}
            </Stack >



        </div >






    )
}

export default Header