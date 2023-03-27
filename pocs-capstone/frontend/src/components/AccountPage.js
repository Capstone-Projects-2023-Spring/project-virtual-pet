import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          width: "100%",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
        }}
      >
        <div className="text-center mt-3 mb-4">
          <h1 className="h2 mb-0">Account Profile</h1>
        </div>

        <Form.Group className="mb-2">
          <Form.Label className="col-sm-2 col-form-label">Username:</Form.Label>
          <Col sm={4}>
            <Form.Control type="text" value={username} disabled />
          </Col>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="col-sm-2 col-form-label">Email:</Form.Label>
          <Col sm={4}>
            <Form.Control type="email" value={email} disabled />
          </Col>
        </Form.Group>

        <Form.Group className="mb-2" controlId="validationCustom03">
          <Form.Label className="col-sm-2 col-form-label">Birthday:</Form.Label>
          <Col sm={4}>
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
          <Form.Label className="col-sm-2 col-form-label">Name:</Form.Label>
          <Col sm={4}>
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
          <Form.Label className="col-sm-2 col-form-label">Bio:</Form.Label>
          <Col sm={8}>
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
          <Form.Label className="col-sm-2 col-form-label">
            Studying Since:
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="date" value={joinDate} disabled />
          </Col>
        </Form.Group>

        <Button
          type="submit"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AccountPage;
