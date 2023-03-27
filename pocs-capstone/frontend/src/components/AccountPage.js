import React, { useState, useEffect } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "./AccountPage.css";

function AccountPage() {
  const axiosPrivate = useAxiosPrivate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [joinDate, setjoinDate] = useState("");
  const [birthday, setBirthday] = useState("");

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    axiosPrivate.get("/user-data/").then((response) => {
      setUsername(response.data[0].username);
      setEmail(response.data[0].email);
      setName(response.data[0].first_name);
      setBio(response.data[0].bio);
      setjoinDate(response.data[0].join_date.substring(0, 10));
      setBirthday(response.data[0].birthday);
    });
  }, []);

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
      <Card className="account-profile-card">
        <Card.Header>
          <div className="account-profile-header">Account Profile</div>
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
              <Form.Label>Studying Since:</Form.Label>
              <Col>
                <Form.Control type="date" value={joinDate} disabled />
              </Col>
            </Form.Group>

            <div className="submit-button">
              <Button
                style={{ marginTop: "20px", marginBottom: "20px" }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default AccountPage;
