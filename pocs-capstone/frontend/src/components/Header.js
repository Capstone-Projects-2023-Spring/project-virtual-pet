import "./Header.css";
import logo from "../images/orangecat.png";
import usericon from "../images/user_icon.png";
import canvas_bug from "../images/canvas_bug.png";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Stack, Image, Navbar, NavDropdown } from "react-bootstrap";

const CANVAS_URL = "/user-data/";
const COURSES_URL = "/canvas/";

const Header = ({ userInfo }) => {
  const axiosPrivate = useAxiosPrivate();
  //  const [submittedText, setSubmittedText] = useState(null);
  const [canvas_token, setEnteredText] = useState("");
  const [nameError, setNameError] = useState("");

  const [tokenReady, setTokenReady] = useState(false);
  const [retrievingAssignments, setRetrievingAssignments] = useState(false);

  const [submitText, setSubmitText] = useState("Submit");

  const resetSubmitTokenState = (text) => {
    setRetrievingAssignments(false);
    setSubmitText("Submit");
    setNameError(text);
    setTokenReady(false);
  };
  console.log("canvas token-------->", userInfo.canvas_token);
  useEffect(() => {
    if (tokenReady) {
      console.log("TOKEN READY????---------->", tokenReady);

      axiosPrivate
        .get(COURSES_URL)
        .then((response) => {
          console.log("CREATED!!!?????");
          //we were successful
          //return state and navigate to main
          resetSubmitTokenState("");
          //TODO set show pop-up
        })
        .catch((err) => {
          console.log(err);
          resetSubmitTokenState(
            "Error getting assignments. Please check your token and try again."
          );
        });
    }
  }, [retrievingAssignments]); // there was an error here if axiosPrivate and nav were not present

  const headerStyle = {
    // https://stackoverflow.com/questions/7415872/change-color-of-png-image-via-css
    filter: "invert(100%)",
    width: "40px",
  };
  const UserMenu = (
    <div className="user-menu">
      <Navbar.Text
        className="App-link header-text"
        style={{ fontSize: "0.8rem" }}
      >
        {userInfo.username}
      </Navbar.Text>
      <Image
        src={usericon}
        alt="UserName profile image"
        //   roundedCircle
        style={headerStyle}
      />
    </div>
  );
  return (
    <div className="header-whole">
      <Stack direction="horizontal" gap={3}>
        <div className="header-position">
          <a href="/">
            <img className="logo-sb" src={logo} alt="study buddy logo" />
          </a>
          <Navbar.Brand href="/" className="App-link ml-5 header-text">
            My Study Buddy
          </Navbar.Brand>
        </div>
        <div className="logo-sb">
          <Image className="logo-sb"
            alt="CanvasBug"
            src={canvas_bug}
            style={{ visibility: userInfo.canvas_token ? "visible" : "hidden" }}
          ></Image>
        </div>
        <div className="ms-auto dropdown-position">
          <NavDropdown title={UserMenu} id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
            <NavDropdown.Item href="/canvas_integration">
              Canvas Integration
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Stack>
    </div>
  );
};

export default Header;
