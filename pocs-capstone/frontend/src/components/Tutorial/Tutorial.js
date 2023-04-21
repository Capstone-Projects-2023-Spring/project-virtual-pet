import active_tasks from "./Tutorial-screenshots/active-tasks.png";
import completed_tasks from "./Tutorial-screenshots/completed-tasks.png";
import inventory from "./Tutorial-screenshots/inventory.png";
import calendar from "./Tutorial-screenshots/calendar.png";
import click_to_complete from "./Tutorial-screenshots/click-to-complete-tasks.png";

import Card from "react-bootstrap/Card";
import { useState, useRef, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import Carousel from "react-bootstrap/Carousel";

const YESTERDAY = new Date();
YESTERDAY.setDate(YESTERDAY.getDate() - 1);
const TODAY = new Date();
TODAY.setDate(TODAY.getDate() - 1);

const TUT_TEXT = [
  'This is your homescreen! You can view your pets status and create tasks here!',
  'If you created the task, you can click the box on the left of the task to complete it!',
  'Completed tasks go to the completed tab.',
  'When a task completes, you and your pet will be rewarded with candy! New candies will unlock overtime.',
  'You can use the calendar to check if you have a task due on a particular day!',
  ''

]

const TASK_URL = "/tasks/";

const TITLE1 = "Adopt your pet!";
const TITLE2 = "Feed your pet!";
const TASK1 =
  "You are ready to adopt your pet. Complete this task to make it official and recieve your first candy reward. This will make them content!";
const TASK2 =
  "Make sure pet is well fed! After you adopt, navigate to the inventory page and feed your pet a candy. This will make them very happy!";

const Tutorial = () => {
  const axiosPrivate = useAxiosPrivate();

  const addTutorialTasks = () => {
    const tutTask1 = {
      title: TITLE1,
      due_date: null,
      created_date: new Date().toISOString(),
      completed_date: YESTERDAY.toISOString,
      completed: false,
      active: true,
      task_type: "S",
      task_level: 1,
      recurring: false,
      recurring_time_delta: 0,
      description: TASK1,
      course_id: 0,
      assignment_id: 0,
    };

    const tutTask2 = {
      title: TITLE2,
      due_date: null,
      created_date: new Date().toISOString(),
      completed_date: TODAY.toISOString,
      completed: false,
      active: true,
      task_type: "S",
      task_level: 1,
      recurring: false,
      recurring_time_delta: 0,
      description: TASK2,
      course_id: 0,
      assignment_id: 0,
    };

    // console.log("NEW TASK", newTask)

    axiosPrivate.post(TASK_URL, tutTask1).then((r) => {
      axiosPrivate.post(TASK_URL, tutTask2);
    });
  };

  const spriteRefs = [useRef(null), useRef(null)];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tutText, setTutText] = useState(TUT_TEXT[0])
  const [nameError, setNameError] = useState("");

  const nav = useNavigate();
  const width = useWindowWidth();

  useEffect(() => {
    addTutorialTasks();
  }, []);

  const handleSelect = (selectedPet) => {
    setSelectedIndex(selectedPet);
    setTutText(TUT_TEXT[selectedPet])
  };

  //contains sprite sheets
  return (
    <div className="flex">
      <div className="Header">
        <Card style={{ width: width }}>
          <Card.Header className="pet-choice">
            <center>
              <h1>How To Use Study Buddy!</h1>
            </center>
          </Card.Header>{" "}
        </Card>
      </div>

      <div className="backg">
        {/* <div className='sprite-container'> */}
        <Carousel
          activeIndex={selectedIndex}
          onSelect={handleSelect}
          variant="dark"
          interval={null}
          className="carousel"
        >
          <Carousel.Item>
            <img
              src={active_tasks}
              // alt="orange"
              className="sprite-container"
              index={0}
              ref={spriteRefs[0]}
            ></img>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={click_to_complete}
              alt="gray"
              className="sprite-container"
              index={1}
              ref={spriteRefs[1]}
            ></img>

          </Carousel.Item>
          <Carousel.Item>
            <img
              src={completed_tasks}
              alt="tux"
              className="sprite-container"
              index={3}
              ref={spriteRefs[3]}
            ></img>
  
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={inventory}
              alt="white"
              className="sprite-container"
              index={2}
              ref={spriteRefs[2]}
            ></img>

          </Carousel.Item>
          <Carousel.Item>
            <img
              src={calendar}
              alt="tux"
              className="sprite-container"
              index={3}
              ref={spriteRefs[3]}
            ></img>

          </Carousel.Item>
          <Carousel.Item>
            <button onClick={() => nav("/")}>BUTTON</button>
          </Carousel.Item>
        </Carousel>
        
        <div>

            <span className="para">{tutText} </span>
    
      </div>
      </div>
        
    </div>
  );
};

export default Tutorial;
