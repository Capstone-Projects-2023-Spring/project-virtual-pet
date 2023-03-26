import "./textbox.css";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import canvas_sidebar from "./canvas_sidebar.png";
import new_access_token from "./new_access_token.png";
import "./CanvasIntegrationPage.css";
import "./AnimateChoice.css";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
//currently theres some repeat stuff in the two files canvas integration and animate choice.
import cat from "../images/orangecat.png";

//not right
const CANVAS_URL = "/user-data/";
const COURSES_URL = "/canvas/";

const CanvasIntegrationPage = () => {
  const axiosPrivate = useAxiosPrivate();
  //  const [submittedText, setSubmittedText] = useState(null);
  const [canvas_token, setEnteredText] = useState("");
  const [nameError, setNameError] = useState("");

  const [tokenReady, setTokenReady] = useState(false);
  const [retrievingAssignments, setRetrievingAssignments] = useState(false);

  const [submitText, setSubmitText] = useState("Submit");

  const nav = useNavigate();

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
      console.log("TOKEN READY????---------->", tokenReady);

      axiosPrivate
        .get(COURSES_URL)
        .then((response) => {
          console.log("CREATED!!!?????");
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
        .get(CANVAS_URL)
        .then((response) => {
          const id = response?.data[0].id;
          console.log("ID---->", response.data[0].id);

          const url = CANVAS_URL + id + "/";
          console.log("-----> ", url);
          const data = JSON.stringify({ canvas_token });
          axiosPrivate
            .patch(url, data)
            .then((response) => {
              console.log(response.data);
              setTokenReady(true);
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

  return (
    <div className="body">
      {retrievingAssignments ? (
        <div className="loading-parent">{loadingImage}</div>
      ) : (
        <>
          <Card style={{ width: "130rem" }}>
            <Card.Header className="pet-choice">
              <center>
                <h1>ADD YOUR CANVAS ACCOUNT!</h1>
              </center>
            </Card.Header>{" "}
          </Card>
          <hr />
          <Card.Header className="header">
            So you want your pet to help you track your Canvas assignments...{" "}
          </Card.Header>
          <Card.Title className="text">
            It's easy! Just follow these steps:{" "}
          </Card.Title>
          <Card.Body className="text">
            <p>
              {" "}
              1. Access your Canvas account, and select your profile on the
              sidebar:{" "}
            </p>
            <p></p>
            <img src={canvas_sidebar} alt="Canvas Sidebar"></img>
            <p></p> 2. Select settings.
            <p></p> 3. Under approved integrations, scroll all the way to the
            bottom!
            <p></p> Select "New access token".
            <p></p> <img src={new_access_token} alt="+ New access token"></img>
            <p></p> 4. Enter a purpose and expiration date (ex. study buddy, and
            the end of your semester date).
            <p></p> Select "Generate token", and copy and paste it here!{" "}
          </Card.Body>

          <form
            className="submit_canvas"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              className="input"
              type="text"
              placeholder="Enter token here!"
              value={canvas_token}
              disabled={retrievingAssignments ? true : false}
              onChange={textChangeHandler}
            />
            <button
              className="button"
              type="submit"
              disabled={retrievingAssignments ? true : false}
            >
              {submitText}
            </button>
            
          </form>
        </>
      )}
      <form 
        className="submit_canvas"
      >
        {nameError !== "" ? <p>{nameError}</p> : <></>}
      </form>
    </div>
  );
};
export default CanvasIntegrationPage;
