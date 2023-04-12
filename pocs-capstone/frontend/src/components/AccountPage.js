import React, { useState, useEffect } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import './AccountPage.css'
import { getFirebaseToken } from "../firebase.js"
import axios from "axios"

function AccountPage() {
  const axiosPrivate = useAxiosPrivate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [joinDate, setjoinDate] = useState("");
  const [birthday, setBirthday] = useState("");
  const [permission, setPermission] = useState(Notification.permission);
  const [firebaseTokens, setFirebaseTokens] = useState("")

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    axiosPrivate.get("/user-data/").then((response) => {
      setUsername(response.data[0].username);
      setEmail(response.data[0].email);
      setName(response.data[0].first_name);
      setBio(response.data[0].bio);
      setjoinDate(response.data[0].join_date.substring(0, 10));
      setBirthday(response.data[0].birthday);
      setFirebaseTokens(response.data[0].firebase_tokens);
    });
  }, []);

  function handleSendTestNotification() {
    console.log("In the handleSendTestNotification function")
    let counter = 0;
    const maxCount = 5;
    const intervalId = setInterval(() => {
      if (counter === maxCount) {
        clearInterval(intervalId);
      } else {
        sendTestNotification();
        counter++;
      }
    }, 1 * 30 * 1000);

  }

  function sendTestNotification() {
    axiosPrivate
      .get("/user-data/")
      .then((response) => {
        const token = response.data[0].firebase_tokens;

        console.log("sending notification to ", token)
        const data = {
          'token': token,
          'title': 'A new notification!',
          'body': 'This is a test notification that should send 5 times, 30 seconds apart.'
        };

        axiosPrivate
          .post('/send-notification/', data)
          .then((response) => {
            console.log("Notif sent:", response.data)
          })
          .catch((err) => {
            console.log('Failed to send notif');
          });
      }).catch((err) => {
        console.log('Fail');
      });
  }

  const handleGetFirebaseToken = () => {
    //setPermission(Notification.permission)
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log('Firebase token: ', firebaseToken);
        // Send the token to Django backend using a HTTP request
        axiosPrivate
          .get("/user-data/")
          .then((response) => {
            //add new device token to list of user tokens

            const currentUserInfo = response.data[0];
            console.log("Old firebase token:", currentUserInfo.firebase_tokens)
            //console.log("Type:", typeof (currentUserInfo.firebase_tokens))
            //const updatedTokens = [...currentUserInfo.firebase_tokens, firebaseToken];
            //const updated = response.data[0].firebase_tokens.concat(firebaseToken);
            const id = response.data[0].id;
            const url = "/user-data/" + id + "/";
            axiosPrivate
              .patch(url, { firebase_tokens: firebaseToken })
              .then((response) => {
                console.log("New firebase token / response.data:", response.data)
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.error('An error occured while retrieving firebase token. ', err))

  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const update = () => {
    console.log("DATA TEST BEFORE: ", name, bio, birthday);
    axiosPrivate
      .get("/user-data/")
      .then((response) => {
        const updatedUserInfo = {
          first_name: name.trim() === "" ? response.data[0].first_name : name,
          bio: bio.trim() === "" ? response.data[0].bio : bio,
          birthday:
            birthday.trim() === "" ? response.data[0].birthday : birthday,
        };
        const id = response.data[0].id;
        const url = "/user-data/" + id + "/";
        axiosPrivate
          .patch(url, updatedUserInfo)
          .then((response) => {
            console.log("response.data:", response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      update();
    }
    setValidated(true);
  };

  return (
    <div className="account-page-display">
      <Card className='account-profile-card'>
        <Card.Header>
          <div className='account-profile-header'>Account Profile</div>
        </Card.Header>
        <div className="mx-auto">
          <Form
            className="form-content"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >

            <Form.Group className="mb-2">
              <Form.Label>Username:</Form.Label>
              <Col>
                <Form.Control type="text" value={username} disabled />
              </Col>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email:</Form.Label>
              <Col>
                <Form.Control type="email" value={email} disabled />
              </Col>
            </Form.Group>

            <Form.Group className="mb-2" controlId="validationCustom03">
              <Form.Label>Birthday:</Form.Label>
              <Col>
                <Form.Control
                  required
                  type="date"
                  value={birthday}
                  onChange={handleBirthdayChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your birthday.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Label>Name:</Form.Label>
              <Col>
                <Form.Control
                  required
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group className="mb-2" controlId="validationCustom02">
              <Form.Label>Bio:</Form.Label>
              <Col>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  value={bio}
                  onChange={handleBioChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a bio.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>
                Studying Since:
              </Form.Label>
              <Col>
                <Form.Control type="date" value={joinDate} disabled />
              </Col>
            </Form.Group>

            <div className="submit-button">
              <Button
                style={{ marginTop: '20px', marginBottom: '20px' }}
                type="submit">Submit</Button>
            </div>

          </Form>
        </div>

      </Card>

      <Card className='notification-settings-card'>
        <Card.Header>
          <div className='notification-settings-header'>Notification Settings</div>
        </Card.Header>
        <div className="mx-auto">
          <Form className="form-content">
            <Form.Group className="mb-2">
              <Form.Label>Enable push notifications:</Form.Label>
            </Form.Group>
            <div className="button-enable-notifications-account">
              <p>Click "Turn on" to receive a popup to enable push notifications. If your token expires/refreshes, you'll need to click it again (working on fixing this!).</p>
              <Button
                style={{ marginTop: '20px', marginBottom: '20px' }}
                onClick={handleGetFirebaseToken}
              /*disabled={permission === 'granted' || permission === 'denied'}*/
              > Turn on
              </Button>
              <p>Click "Test" to send a background test notification 5 times, 30 seconds apart. You'll need to have the app running in the background (i.e. switch to another tab) to see the notifications.</p>
              <Button
                style={{ marginTop: '20px', marginBottom: '20px' }}
                onClick={handleSendTestNotification}
              /*disabled={permission === 'granted' || permission === 'denied'}*/
              > Test
              </Button>

            </div>
          </Form>
        </div>
      </Card>

    </div>
  );
}

export default AccountPage;
