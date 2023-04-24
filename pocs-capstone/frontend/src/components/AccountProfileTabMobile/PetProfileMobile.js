import { Modal, Form} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button, Card, Stack} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AvatarContext from "../../context/AvatarContext";
import GlobalContext from "../../context/GlobalContext";
import MobilePetMoodContext from '../../context/MobilePetMoodContext';
import { useContext } from 'react'
import { CardBody } from 'reactstrap';
import "./PetProfileMobile.css";

const SAD = 'S'
const NEUTRAL = 'N'
const HAPPY = 'H'

const TASK_URL = "/tasks/"
const USER_URL = "/user-data/"
const TODAY = new Date()

function PetProfileMobile(props) {
  const contextHandler = useContext(GlobalContext)
  const axiosPrivate = useAxiosPrivate();
  const nav = useNavigate();

  const [petName, setPetName] = useState("");
  const [flavourText, setFlavourText] = useState("");
  const moodHandler = useContext(MobilePetMoodContext);


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
    console.log("PET BEFORE UPDATE", contextHandler.avatarInfo);
    const updatedAvatar = {
      ...contextHandler?.avatarInfo,
      pet_name: petName.trim() === "" ? contextHandler.avatarInfo.pet_name : petName,
      flavour_text:
        flavourText.trim() === ""
          ? contextHandler.avatarInfo.flavour_text
          : flavourText,
    };
    axiosPrivate
      .patch(`/avatar/${contextHandler?.avatarInfo.avatar_id}/`, updatedAvatar)
      .then((response) => {
        console.log("response.data:", response.data);
        contextHandler?.setAvatar(response.data); //change this to add to previous state instead of replacing completely (in case of >1 avatar for 1 user)
      })
      .catch((err) => {
        console.log(err);
      });
      props.handleClosePet();
      
    };

//style={{ overflow: "hidden" }}
  return (
    <Modal className="petprofile-modal-mobile"  backdrop="static" show={props.showPetProf} onHide={props.handleClosePet}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Pet Profile</Modal.Title> */}
        
      </Modal.Header>
      <Modal.Body>
      <div className="mini-page" style={{paddingTop: "0px"}}>

      <Card className='pet-profile-position'>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <div className='pet-profile-header'>Pet Profile</div>
          </Stack>
        </Card.Header>
          <CardBody style={{fontSize: "14px", paddingLeft: "20px", paddingRight:"20px"}}>
          <strong>Pet Mood:</strong> {moodHandler?.petMoodDesc}<br></br><br></br>
          <strong>Pet Weight:</strong> Unknown
          </CardBody>
          <Form
            onSubmit={handleSubmit}
            style={{ paddingLeft: "20px", paddingRight: "20px"}}
            variant="flush"
          >
            <Form.Group className="mb-2">
              <Form.Label>Pet Name:</Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={petName}
                  placeholder={contextHandler.avatarInfo.pet_name}
                  onChange={handlePetNameChange}
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label> What's your pet up to? </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={flavourText}
                  placeholder={contextHandler.avatarInfo.flavour_text}
                  onChange={handleFlavourTextChange}
                />
              </Col>
            </Form.Group>

            <Button
              type="submit"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Submit
            </Button>

          </Form>
        
      </Card>
    </div>

      </Modal.Body>
    </Modal >
  );
}

export default PetProfileMobile