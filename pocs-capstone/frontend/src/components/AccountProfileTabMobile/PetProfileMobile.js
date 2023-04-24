import { Modal, Form} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button, Card, Stack} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AvatarContext from "../../context/AvatarContext";
import GlobalContext from "../../context/GlobalContext";
import { useContext } from 'react'
import { CardBody } from 'reactstrap';

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
  const [mood,setMood]=useState(NEUTRAL); //H = happy, S = Sad, N = Neutral


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

    function dateDelta(date1,date2){
      return Math.floor((date1-date2)/(1000*60*60*24))
   }

    useEffect (()=>
        {
            
            var tasks;
            var user;
            var feed_flag = false;
            
    
            axiosPrivate.get(USER_URL).then(response=>{
                user=response?.data
                const birthday = new Date(user?.birthday)
                        //if it's your birthday, your pet is happy
            const birthday_delta = dateDelta(birthday,TODAY)
            if (birthday_delta<1 && birthday_delta>=0){
                setMood(HAPPY)
                console.log("BIRTHDAY HAPPY:",birthday_delta)
                return
            }
            })
            
            const last_interaction = contextHandler.avatarInfo.last_interaction
            const last_feed = new Date(contextHandler.avatarInfo.last_feed)
            
            const feed_delta = dateDelta(TODAY,last_feed) //elapsed time since last feed
            console.log("FEED DELTA",feed_delta,TODAY,last_feed)
            if (feed_delta<=3 && feed_delta>1){
                setMood(NEUTRAL)
                console.log("FEED NEUTRAL",feed_delta)
            }
            else if (feed_delta<=1){
                setMood(HAPPY)
                console.log("FEED HAPPY",feed_delta)
             }
            else {
                setMood(SAD)
                console.log("FEED SAD",feed_delta)
                feed_flag=true
            }
    
            var pass_task_check = false
            //if overdue assignments, pet is sad
            axiosPrivate.get(TASK_URL).then(response=>{
                tasks = response?.data
                tasks.forEach(item => {
                    if (!item.completed){
                        const due = new Date(item.due_date)
                        const task_delta = dateDelta(due, TODAY)
                        console.log("TASK DELTA----->",task_delta,item.due_date,TODAY,item.completed)
                        if (task_delta<0){
                            setMood(SAD)
                            console.log("TASK SAD")
                            return
                        }
                        
                    }
                    
                }
                )
    
              
            pass_task_check = true
            })       
              if(pass_task_check){ // guard because axios call is async
                    if(feed_flag){
                        setMood(NEUTRAL)
                        console.log("TASK NEUTRAL")
                        return
                    }
                    setMood(HAPPY) //TODO we'll check grades here as well
                    console.log("TASK HAPPY")
                    return
                }
    
        }
        ,[contextHandler]);


  return (
    <Modal className="createtask-modal-mobile" style={{ overflow: "hidden" }} backdrop="static" show={props.showPetProf} onHide={props.handleClosePet}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Pet Profile</Modal.Title> */}
        
      </Modal.Header>
      <Modal.Body>
      <div className="mini-page">

      <Card className='pet-profile-position'>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <div className='pet-profile-header'>Pet Profile</div>
          </Stack>
        </Card.Header>
          <CardBody>
          Pet Mood: {mood}
          </CardBody>

          <Form
            onSubmit={handleSubmit}
            style={{ padding: "20px",}}
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
              style={{ marginTop: "20px", marginBottom: "20px" }}
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






