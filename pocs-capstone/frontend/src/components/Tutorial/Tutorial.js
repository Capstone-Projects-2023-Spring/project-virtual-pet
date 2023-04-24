import "./Tutorial.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import active_tasks from "./Tutorial-screenshots/active-tasks.png";
import completed_tasks from "./Tutorial-screenshots/completed-tasks.png";
import inventory from "./Tutorial-screenshots/inventory.png";
import calendar from "./Tutorial-screenshots/calendar.png";
import click_to_complete from "./Tutorial-screenshots/click-to-complete-tasks.png";

import kittycat from "../../images/orangecat.png";

//import Card from "react-bootstrap/Card";
import { useState, useRef, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import { Card } from "react-bootstrap";

var YESTERDAY = new Date(Date.now() - 86400000);

var TODAY = new Date();
//TODAY.setDate(TODAY.toISOString().split('T')[0])

console.log(
  "YESTERDAY as string------>",
  YESTERDAY.toLocaleString("en-US", { timeZone: "America/New_York" }).split(
    ","
  )[0]
);
console.log(
  "TODAY as localestring------>",
  TODAY.toLocaleString("en-US", { timeZone: "America/New_York" }).split(",")[0]
);
YESTERDAY = new Date(
  YESTERDAY.toLocaleString("en-US", { timeZone: "America/New_York" }).split(
    ","
  )[0]
);
TODAY = new Date(
  TODAY.toLocaleString("en-US", { timeZone: "America/New_York" }).split(",")[0]
);
console.log(
  "YESTERDAY as localestring------>",
  YESTERDAY.toLocaleString("en-US", { timeZone: "America/New_York" })
); //.split(',')[0])
console.log(
  "TODAY as localestring------>",
  TODAY.toLocaleString("en-US", { timeZone: "America/New_York" })
); //.split(',')[0])
const TUT_TEXT = [
  "This is your homescreen! You can view your pets status and create tasks here!",
  "If you created the task, you can click the box on the left of the task to complete it!",
  "Completed tasks go to the completed tab.",
  "When a task completes, you and your pet will be rewarded with candy! New candies will unlock overtime.",
  "You can use the calendar to check if you have a task due on a particular day!",
];

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
      due_date: YESTERDAY.toISOString().split("T")[0],
      created_date: new Date().toISOString(),

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
      due_date: TODAY.toISOString().split("T")[0],
      created_date: new Date().toISOString(),

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
    console.log(tutTask1, tutTask2);

    // console.log("NEW TASK", newTask)

    axiosPrivate.post(TASK_URL, tutTask1).then((r) => {
      axiosPrivate.post(TASK_URL, tutTask2);
    });
  };

  const spriteRefs = [useRef(null), useRef(null)];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tutText, setTutText] = useState(TUT_TEXT[0]);
  const [nameError, setNameError] = useState("");

  const nav = useNavigate();
  const width = useWindowWidth();
  const height = useWindowHeight();

  useEffect(() => {
    addTutorialTasks();
  }, []);

  if (height > 600) {
    let items = [
      <div className="alice-box">
        {" "}
        <div className="header-tut">
          <div className="header-text-tut">How To Use Study Buddy!</div>
        </div>
        <img className="tut-image" src={active_tasks}></img>
        <div className="tut-textbox">
          <span className="tut-text">{TUT_TEXT[0]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <div className="header-tut">
          <div className="header-text-tut">Completing Tasks!</div>
        </div>
        <img className="tut-image" src={click_to_complete}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[1]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <div className="header-tut">
          <div className="header-text-tut">View Completed Tasks!</div>
        </div>
        <img className="tut-image" src={completed_tasks}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[2]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <div className="header-tut">
          <div className="header-text-tut">Feed Your Pet!</div>
        </div>
        <img className="tut-image" src={inventory}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[3]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <div className="header-tut">
          <div className="header-text-tut">View Your Calendar!</div>
        </div>
        <img className="tut-image" src={calendar}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[4]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <h1 style={{ fontSize: 24 }}>
          <center>WELCOME TO STUDY BUDDY!</center>
        </h1>
        <img src={kittycat} alt="cat" className="image-kitty-mobile" />
        <center>
          <Card className="card-about-mobile">
            <Card.Title className="card-title-mobile">Thank you!</Card.Title>
            <Card.Body className="card-body-mobile">
              Study buddy allows you to take care of a virtual pet to achieve
              your study goals! Choose from a variety of pets and colors of pets
              to find the buddy you like best. By completing tasks, you can
              receive candies of various sizes to feed your pet and watch it
              grow. Integrate your institution Canvas account to have your pet
              keep track of your school assignments. With Study Buddy, you get a
              cute way to make keeping up with your schoolwork and personal
              study goals fun! Click on the buttons below to register or log in
              to see your buddy.
            </Card.Body>
          </Card>
        </center>
        <div>
          <center>
            <button
              className="landingbutton-register-mobile"
              id="to-homescreen"
              type="submit"
              onClick={() => {
                nav("/");
              }}
            >
              Go To Home Screen!
            </button>
          </center>
        </div>
      </div>,
    ];
    if (width < 1128) {
      return (
        /*
        <html>
          <body>
          */
        <div className="alice-container">
          <AliceCarousel
            mouseTracking
            disableButtonsControls={true}
            items={items}
          />
          <div className="padding-container"></div>
        </div>
        /*
          </body>
        </html>
        */
      );
    }

    return (
      <div className="alice-container">
        <AliceCarousel mouseTracking items={items} />
      </div>
    );
  } else {
    let items = [
      <div className="alice-box">
        {" "}
        <div className="tut-imagebox">
          <img className="tut-image" src={active_tasks}></img>
        </div>{" "}
        <div className="tut-textbox">
          <span className="tut-text">{TUT_TEXT[0]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <img className="tut-image" src={click_to_complete}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[1]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <img className="tut-image" src={completed_tasks}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[2]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <img className="tut-image" src={inventory}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[3]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <img className="tut-image" src={calendar}></img>
        <div className="tut-textbox">
          {" "}
          <span className="tut-text">{TUT_TEXT[4]} </span>
        </div>{" "}
      </div>,

      <div className="alice-box">
        <h1 style={{ fontSize: 24 }}>
          <center>WELCOME TO STUDY BUDDY!</center>
        </h1>
        <img src={kittycat} alt="cat" className="image-kitty-mobile" />
        <center>
          <Card className="card-about">
            <Card.Title className="card-title-mobile">Tahnk you!</Card.Title>
            <Card.Body className="card-body-mobile">
              Study buddy allows you to take care of a virtual pet to achieve
              your study goals! Choose from a variety of pets and colors of pets
              to find the buddy you like best. By completing tasks, you can
              receive candies of various sizes to feed your pet and watch it
              grow. Integrate your institution Canvas account to have your pet
              keep track of your school assignments. With Study Buddy, you get a
              cute way to make keeping up with your schoolwork and personal
              study goals fun! Click on the buttons below to register or log in
              to see your buddy.
            </Card.Body>
          </Card>
        </center>
        <div>
          <center>
            <button
              className="landingbutton-register-mobile"
              id="to-homescreen"
              type="submit"
              onClick={() => {
                nav("/");
              }}
            >
              Go To Home Screen!
            </button>
          </center>
        </div>
      </div>,
    ];
    return (
      /*
      <html>
        <body>
        */
      <div className="alice-container">
        <AliceCarousel
          mouseTracking
          disableButtonsControls={true}
          items={items}
        />
        <div className="padding-container"></div>
      </div>
      /*
        </body>
      </html>
      */
    );
  }
};
/*
  //contains sprite sheets
  return (
    <div className="grid-tut">
      <div className="header-tut">
        <div className="header-text-tut">How To Use Study Buddy!</div>
      </div>

    
      <Carousel
        activeIndex={selectedIndex}
        onSelect={handleSelect}
        variant="dark"
        interval={null}
        className="carousel-tut"
      >
        <Carousel.Item>
          <div className="carousel-item-box">
            <img
              src={active_tasks}
              alt="active tasks"
              className="tut-image"
              index={0}
              ref={spriteRefs[0]}
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-box">
            <img
              src={click_to_complete}
              alt="click to compare"
              className="tut-image"
              index={1}
              ref={spriteRefs[1]}
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-box">
            <img
              src={completed_tasks}
              alt="completed tasks"
              className="tut-image"
              index={3}
              ref={spriteRefs[3]}
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-box">
            <img
              src={inventory}
              alt="inventory"
              className="tut-image"
              index={2}
              ref={spriteRefs[2]}
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-box">
            <img
              src={calendar}
              alt="calendar-tut"
              className="tut-image"
              index={3}
              ref={spriteRefs[3]}
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-box">
            <button onClick={() => nav("/")}>BUTTON</button>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="tut-box">
        <span className="tut-text">{tutText} </span>
      </div>
    </div>
  );
};
*/
export default Tutorial;
