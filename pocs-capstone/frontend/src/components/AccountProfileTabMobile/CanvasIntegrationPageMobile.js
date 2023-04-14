import "../textbox.css";
import { Card, Modal, Stack, Form, Button, Col } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import canvas_sidebar from "../canvas_sidebar.png";
import new_access_token from "../new_access_token.png";
import "../CanvasIntegrationPage.css";
import "../AnimateChoice.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
//currently theres some repeat stuff in the two files canvas integration and animate choice.
import cat from "../../images/orangecat.png";
import { CardBody } from "reactstrap";
import GlobalContext from "../../context/GlobalContext";

//not right
const USER_URL = "/user-data/";
const COURSES_URL = "/canvas/";

const CanvasIntegrationPageMobile= ({ showCanvasPage, handleCloseCanvasPage}) => {

  const { shareData } = useContext(UserContext);
  const axiosPrivate = useAxiosPrivate();
  const nav = useNavigate();
  const [canvas_token, setEnteredText] = useState("");
  const [nameError, setNameError] = useState("");
  const [tokenReady, setTokenReady] = useState(false);
  const [retrievingAssignments, setRetrievingAssignments] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");

  const setSubmittingTokenState = (text) => {
    setRetrievingAssignments(true);
    setSubmitText("Loading...");
    setNameError(text);
  };

  const resetSubmitTokenState = (text) => {
    setRetrievingAssignments(false);
    setSubmitText("Submit");
    setNameError(text);
    setTokenReady(false);
  };

  useEffect(() => {
    if (tokenReady) {
      nav(0);
      //console.log("TOKEN READY????---------->", tokenReady);
      /* //Don't need to do this here anymore
      axiosPrivate
        .get(COURSES_URL)
        .then((response) => {
          //console.log("CREATED!!!?????");
          //we were successful
          //return state and navigate to main
          resetSubmitTokenState("");
          nav("/");
        })
        .catch((err) => {
          console.log(err);
          resetSubmitTokenState(
            "Error getting assignments. Please check your token and try again."
          );
        });
    */
    }
  }, [tokenReady, axiosPrivate, nav]); // there was an error here if axiosPrivate and nav were not present

  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
    //console.log(i.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setRetrievingAssignments(true)
    //setSubmitText("LOADING...")
    //ready to start attempting to get assignmemnts
    setSubmittingTokenState("Retrieving assignments. Please wait...");

    if (canvas_token !== "") {
      //setSubmittedText(canvas_token);

      axiosPrivate
        .get(USER_URL)
        .then((response) => {
          const id = response?.data[0].id;
          console.log("ID---->", response.data[0].id);

          const url = USER_URL + id + "/";
          console.log("-----> ", url);
          const data = JSON.stringify({ canvas_token });
          axiosPrivate
            .patch(url, data)
            .then((response) => {
              console.log(response.data);
              setTokenReady(true);
            })
            .then((response) => {
              axiosPrivate.get(USER_URL).then((response) => {
                shareData.setUserInfo(response.data[0]);
              });
            })
            .catch((err) => {
              console.log(err);
              //setRetrievingAssignments(false)
              //setSubmitText("Submit")
              resetSubmitTokenState(
                "Error getting assignments. Please check your token and try again."
              );
            });
        })
        .catch((err) => {
          console.log(err);
          resetSubmitTokenState(
            "Error getting assignments. Please check your token and try again."
          );
        });
    } else {
      console.log("NO TOKEN ENTERED");
      //setNameError('You must enter a token!')
      //setSubmitText("Submit")
      //setRetrievingAssignments(false)
      resetSubmitTokenState("You must enter a token!");
    }
  };

  const loadingImage = (
    <div className="loading-container">
      <img className="loading-image" src={cat} alt="Loading..." />
    </div>
  );

  const closeModal = () => {
    setNameError("");
    handleCloseCanvasPage();
  }

  return (
    <Modal className="createtask-modal-mobile" backdrop="static" show={showCanvasPage} onHide={closeModal}>
      <Modal.Header closeButton>        
      </Modal.Header>
        <Modal.Body>  

        <div className="body-canvas-mobile">
          {retrievingAssignments ? (
            <div className="loading-parent">{loadingImage}</div>
          ) : (
            <>           
              <div className="mini-page">
                <Card className='pet-profile-position'>
                  <Card.Header>
                    <Stack direction="horizontal" gap={3}>
                      <div className='pet-profile-header'>Follow these steps to link your Canvas account with Study Buddy!</div>
                    </Stack>
                  </Card.Header>
                  <CardBody>
                    1. Access your Canvas account, and select your profile on the
                    sidebar: <br></br>
                    <center><img src={canvas_sidebar} alt="Canvas Sidebar"></img></center>
                    <br></br>
                    2. Select settings.
                    <br></br><br></br>
                    3. Under approved integrations, scroll all the way to the bottom!
                    <br></br><br></br>
                    4. Enter a purpose and expiration date (ex. study buddy, and
                    the end of your semester date).
                    <br></br><br></br>
                    5. Select "Generate token", and copy and paste it below!
                    <br></br><br></br>
                    Once your token is submitted, you will be redirected to the Main
                    Page. A new 'Canvas' button will appear in your tabs.
                    Click that button any time to retrieve or update your
                    Canvas Tasks!!<br></br><br></br>
                    <Form
                      id="canvas_form"
                      className="submit_canvas"
                      onSubmit={(event) => handleSubmit(event)}
                    >
                      <Form.Group className="mb-2">
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            value={canvas_token}
                            disabled={retrievingAssignments ? true : false}
                            onChange={textChangeHandler}
                            placeholder={"Enter canvas token here!"}
                          />
                        </Col>
                      </Form.Group>
                        {nameError !== "" ? <p style={{fontSize: "20px"}}>{nameError}</p> : <></>}
                    
                        <Button
                          style={{ marginTop: "10px", marginBottom: "0px" }}
                          type="submit"
                          disabled={retrievingAssignments ? true : false}
                        >
                        {submitText}
                      </Button>
                    </Form>
                  </CardBody>   
                </Card>
              </div>
            </>
          )}
        </div>
        </Modal.Body>
    </Modal>
  );
};
export default CanvasIntegrationPageMobile;
