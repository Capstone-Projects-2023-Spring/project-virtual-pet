import "./Header.css";
import logo from "../images/orangecat.png";
import usericon from "../images/user_icon.png";
import canvas_bug from "../images/canvas_bug.png";
import { useState, useEffect, useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Stack, Image, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const COURSES_URL = "/canvas/";

const Header = ({ }) => {
  const axiosPrivate = useAxiosPrivate();
  const nav = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext)
  //  const [submittedText, setSubmittedText] = useState(null);
  const [nameError, setNameError] = useState("");

  const [tokenReady, setTokenReady] = useState(false);
  const [retrievingAssignments, setRetrievingAssignments] = useState(false);

  const resetSubmitTokenState = (text) => {
    setRetrievingAssignments(false);
    setNameError(text);
    setTokenReady(false);
  };

  function getCourses() {
    setRetrievingAssignments(true);
    setNameError("Loading...");
    axiosPrivate
      .get(COURSES_URL)
      .then((response) => {
        //we were successful
        // console.log("RESPONSE", response)
        //return state and navigate to main

        // fetch unique list of courses
        const uniqueCourses = [...new Set(response.data.map(item => item.course_title))] //.map(cT => { return {'canvasTag': cT}})

        // // combine with global tag list - make sure it's unique
        const updateGlobalTags = userInfo.tags.concat(uniqueCourses.filter((item) => userInfo.tags.indexOf(item) < 0))
        // console.log("GLOBAL TAGSSs", updateGlobalTags, "UNIQUE COURSES", uniqueCourses)

        // setUpdateTag(updateGlobalTags)
        const updatedUser = {
          ...userInfo,
          tags: updateGlobalTags,
          canvas_tags: uniqueCourses
        }
        // console.log("UPDATED USER", updatedUser)
        axiosPrivate.put(`/user-data/${userInfo.id}/`, updatedUser)
          .then((response) => {
            console.log("WHY AINT THIS HAPPENING?", response)
            setUserInfo(updatedUser);
            resetSubmitTokenState("Please reload tasks!");
            nav(0)
          })
          .catch((err) => {
            console.log("NAH?", err);
          });



      })
      .catch((err) => {
        console.log("?", err);
        resetSubmitTokenState(
          "Error getting assignments. Please check your token and try again."
        );
        alert("There is problem with your canvas token!\nPlease resubmit your token!\nThe header button will now disappear!")
        const url = "/user-data/" + userInfo.id + "/";
        const tok = {
          canvas_token: "BADTOKEN"
        }

        axiosPrivate.patch(url, tok)
          .then((response) => {
            console.log(response.data);
            setUserInfo(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });


    // const uniqueCourses = [...new Set(response.data.map(item => item.course_title))]

    // // combine with global tag list - make sure it's unique
    // const updateGlobalTags = userInfo.tags.concat(uniqueCourses.filter((item) => userInfo.tags.indexOf(item) < 0))
    // console.log("GLOBAL TAGS", updateGlobalTags, "UNIQUE COURSES", uniqueCourses)

    // const updatedUser = {
    //   ...userInfo,
    //   tags: updateGlobalTags
    // }
    // console.log("UPDATED USER", updatedUser)
    // axiosPrivate.patch(`/user-data/${userInfo.id}/`, updatedUser)
    //   .then((response) => {
    //     console.log("WHY AINT THIS HAPPENING?", response)
    //     setUserInfo(updatedUser);
    //   })
    //   .catch((err) => {
    //     console.log("NAH?", err);
    //   });
  }

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

        {userInfo.canvas_token !== "" && userInfo.canvas_token !== "BADTOKEN" ? (
          <div style={{ display: "grid", gridAutoFlow: "column" }}>
            <button type="button" className="container-canvas-logo" onClick={getCourses}>
              <img
                className={
                  retrievingAssignments ? "canvas-loading" : "logo-canvas"
                }
                alt="CanvasBug"
                src={canvas_bug}
              //style={{gridRow:'2'}}
              ></img>
            </button>
            <span style={{ color: "white" }}>{nameError}</span>
          </div>
        ) : (
          <div></div>
        )}

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
