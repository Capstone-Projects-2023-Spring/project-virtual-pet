import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AvatarContext from "../../context/AvatarContext";

function PetProfPage() {
  const handlers = useContext(AvatarContext);
  const axiosPrivate = useAxiosPrivate();

  const [petName, setPetName] = useState("");
  const [flavourText, setFlavourText] = useState("");

  const handlePetNameChange = (event) => {
    const changedPetName = event.target.value;
    setPetName(changedPetName);
  };

  const handleFlavourTextChange = (event) => {
    const changedFlavourText = event.target.value;
    setFlavourText(changedFlavourText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("PET BEFORE UPDATE", handlers.avatarInfo);
    const updatedAvatar = {
      ...handlers?.avatarInfo,
      pet_name: petName.trim() === "" ? handlers.avatarInfo.pet_name : petName,
      flavour_text:
        flavourText.trim() === ""
          ? handlers.avatarInfo.flavour_text
          : flavourText,
    };
    axiosPrivate
      .patch(`/avatar/${handlers?.avatarInfo.avatar_id}/`, updatedAvatar)
      .then((response) => {
        console.log("response.data:", response.data);
        handlers?.setAvatar(response.data); //change this to add to previous state instead of replacing completely (in case of >1 avatar for 1 user)
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h1 className="h2 mb-0">Pet Profile</h1>
        </div>
        <Form.Group className="mb-2">
          <Form.Label className="col-sm-2 col-form-label">Pet Name:</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={petName}
              placeholder={handlers.avatarInfo.pet_name}
              onChange={handlePetNameChange}
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="col-sm-2 col-form-label">
            What's your pet up to?
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              as="textarea"
              rows={3}
              value={flavourText}
              placeholder={handlers.avatarInfo.flavour_text}
              onChange={handleFlavourTextChange}
            />
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

export default PetProfPage;
