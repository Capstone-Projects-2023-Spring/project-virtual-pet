import PetDisplay from "./PetDisplay/PetDisplay.js";
import PageDisplay from "./PageDisplay/PageDisplay.js";
//import useAuth from '../hooks/useAuth.js'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";
import "./Main.css";

import PopulateInv from "./Inventory/PopulateInv";
import LockedInv from "./Inventory/LockedInv.js";
import AvatarContext from "../context/AvatarContext";
import MobileMain from "../components/MainMobile.js";
import GlobalContext from "../context/GlobalContext.js";
import UserContext from "../context/UserContext";
import CalculateXP from "../algos/assignXP.js";
import CalculatePetLevel from "../algos/calculatePetLevel.js";
import expGain from '../audio/expgain.mp3';


const Main = () => {
  const axiosPrivate = useAxiosPrivate();
  const [avatarInfo, setAvatar] = useState({});
  const height = useWindowHeight();
  const width = useWindowWidth();
  const nav = useNavigate();

  const [ready, setReady] = useState(false);
  const populateInventory = LockedInv();
  const [inventory, setInventory] = useState(populateInventory);
  // Moved from PetDisplay
  const [level_info, setLevelInfo] = useState(
    CalculatePetLevel(avatarInfo.total_xp)
  );
  const [prev_level_info, setPrevLevelInfo] = useState({})

  const gainExpAudio = new Audio(expGain)
  gainExpAudio.volume = 0.05
  const [leveledUp, setLeveledUp] = useState(false)
  const [spritesheetInstance, setSpritesheetInstance] = useState(null);
  const [taskList, setTaskList] = useState([])
  const userContext = useContext(UserContext)

  const baseURL = `/tasks/`

  let spriteSheetRef = useRef(null);
  useEffect(() => {
    axiosPrivate
      .get("/avatar/")
      .then((response) => {
        setAvatar(response.data[0]);
        if (!response.data[0]) nav("/pet_selection");
        else setReady(true);
      })
      .catch((error) => {
        console.log(error);
        nav("/");
      });
  }, []);

  // useEffect, GET call to retrieve inventory item and set the state of inv
  useEffect(() => {
    axiosPrivate
      .get("/inventory/")
      .then((r) => {
        r.data.map((it) => {
          let candy = inventory.find(
            (c) =>
              c.candy_base_type === it.candy_base_type &&
              c.candy_level === it.candy_level
          );

          candy.inventory_id = it.inventory_id;
          candy.quantity = it.quantity;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    axiosPrivate.get(baseURL)
      .then(r => {
        setTaskList(r.data)
      })
  }, [])

  const updateTask = (id, newTask) => {
    const taskItem = taskList.find(t => t.task_id === id)



    const taskItemChanged = newTask == null ?
      { ...taskItem, completed: !taskItem.completed, completed_date: (taskItem.completed_date === null ? new Date().toISOString().split('T')[0] : null) } :
      { ...taskItem, title: newTask.title, due_date: newTask.due_date === '' ? null : newTask.due_date, task_type: newTask.size, description: newTask.description, task_level: newTask.level }


    // Has the user recieved a candy for this task already?
    if (taskItemChanged.completed === true && taskItemChanged.received === false) {
      determineReward(taskItemChanged)
    }

    axiosPrivate.put(`${baseURL}${id}/`, taskItemChanged)
      .then(r => {
        setTaskList(taskList.map(t => t.task_id === id ? r.data : t))
      })
  }

  // Task mark as completed and user has never recieved a candy for this task. Give corresponding candy.
  let determineReward = (task) => {
    // Look for candy coresponding to task in inventory that is not locked
    let candy = inventory.find(candy => candy.candy_base_type === task.task_type && candy.candy_level === task.task_level && candy.quantity !== "L")
    // Does candy exist in inventory
    if (candy !== undefined) {
      // Give a candy, update backend, and set state
      candy.quantity += 1
      axiosPrivate.put(`/inventory/${candy.inventory_id}/`, candy)
        .then(r => {
          setInventory(inventory.map(c => c.inventory_id === candy.inventory_id ? r.data : c))
        })

      task.received = true
      axiosPrivate.put(`/tasks/${task.task_id}/`, task)
        .then(r => {
          setTaskList(taskList.map(t => t.task_id === task.task_id ? r.data : t))
        })

    }
    else {
      // Create candy, post to backend, and set state
      let newCandy = {
        candy_base_type: task.task_type,
        candy_level: task.task_level,
        quantity: 1,
      }

      // Update locked candy in inventory
      createInventoryItem(newCandy)
        .then(r => {
          let candy = inventory.find((c) => c.candy_base_type === r.candy_base_type && c.candy_level === r.candy_level);
          // console.log(candy);
          // console.log(r);
          candy.inventory_id = r.inventory_id;
          candy.quantity = r.quantity;
          // candyList.push(r)
          // setInventory([...inventory, ...candyList])
        })

      task.received = true
      axiosPrivate.put(`/tasks/${task.task_id}/`, task)
        .then(r => {
          setTaskList(taskList.map(t => t.task_id === task.task_id ? r.data : t))
        })
    }
  }


  const determineTaskLevel = (date) => {

    const today_date = new Date()
    const join_date = new Date(date)


    // const join_date = new Date('April 17, 2020 03:24:00')

    const year_diff = (today_date.getFullYear() - join_date.getFullYear()) * 12;
    const mon_diff = (today_date.getMonth() - join_date.getMonth()) + year_diff

    // console.log(`MONTHS USER HAS BEEN WITH SITE: ${mon_diff}`)


    // t <= 3 months
    if (mon_diff < 3) {
      return 1
    }

    // 3 months <= t < 1 year
    if (mon_diff >= 3 && mon_diff < 12) {
      return 2
    }

    // 1 year <= t < 2 years
    if (mon_diff >= 12 && mon_diff < 24) {
      return 3
    }

    // 2 years <= t < 3 years
    if (mon_diff >= 24 && mon_diff < 36) {
      return 4
    }

    // t > 3 years
    if (mon_diff >= 36) {
      return 5
    }

    return -1

  }

  const addTask = (formValues) => {

    const taskLevelD = determineTaskLevel(userContext.userInfo.join_date)

    const newTask = {
      title: formValues.title,
      due_date: formValues.due_date === "" ? null : formValues.due_date,
      created_date: new Date().toISOString(),
      completed_date: null,
      completed: false,
      active: true,
      task_type: formValues.size,
      task_level: taskLevelD,
      recurring: false,
      recurring_time_delta: 0,
      description: formValues.description,
      course_id: 0,
      assignment_id: 0
    }

    // console.log("NEW TASK", newTask)

    axiosPrivate.post(baseURL, newTask)
      .then(r => {
        setTaskList(taskList.concat(r.data))
      })
  }

  const deleteTask = (id) => {

    axiosPrivate.delete(`${baseURL}${id}/`)
      .then(r => {
        setTaskList(taskList.filter(t => t.task_id !== id))
      })
  }

  const deleteAllTasks = (completedTasks) => {
    // delete all completed tasks
    if (completedTasks.length) {
      completedTasks.forEach(t => {
        axiosPrivate.delete(`${baseURL}${t.task_id}/`)
          .catch(e => {
            console.log("ERROR TASKS", e)
          })
      })
    }

    // keep non completed tasks 
    const keepTasks = taskList.filter(task => !task.completed)
    setTaskList(keepTasks)
  }

  // const handlers = {
    
  // }



  const isMobile = width <= 1130;

  // Inventory Handlers
  // Perform a put to the backend to update inventory
  const putInventory = (item) => {
    let request = axiosPrivate.put(`/inventory/${item.inventory_id}/`, item);
    return request.then((response) => response.data);
  };
  // Performs update on candy quantity when candy is fed(drag and dropped)
  const updateInventory = (id) => {
    // console.log("ID OF CANDY", id)
    let yourDate = new Date();
    console.log("DATE???----->", yourDate.toISOString().split("T")[0]);

    const candyD = inventory.find((candy) => candy.inventory_id === id);
    if (candyD.quantity !== 0) {
      // console.log("CANDY", candyD)
      const updateCandy = {
        ...candyD,
        quantity: candyD.quantity !== 0 ? candyD.quantity - 1 : 0,
      };
      // console.log("ID", updateCandy.inventory_id)
      putInventory(updateCandy).then((r) => {
        setInventory(
          inventory.map((it) => (it.inventory_id === id ? updateCandy : it))
        );
      });
    }
  };

  // Performs a get request for the users inventory
  const getInventory = () => {
    let request = axiosPrivate.get("/inventory/");
    return request.then((response) => response.data);
  };

  // Performs a POST request to add items
  const createInventoryItem = (candy) => {
    const request = axiosPrivate.post("/inventory/", candy);
    return request.then((response) => response.data);
  };

  // Performs a DELETE request to remove items
  const deleteInventoryItem = (candyID) => {
    const request = axiosPrivate.delete(`/inventory/${candyID}/`);
    return request.then((response) => response.data);
  };

  const animateSpriteSheet = () => {
    // if (spriteSheetRef.current) {
    spriteSheetRef.current.goToAndPlay(1);
    spriteSheetRef.current.pause();
    //  }
  };

  // Create a bunch of items in the backend and change the state of inv
  const postFullInventory = () => {
    if (inventory.length === 0) {
      let fullInventoryData = PopulateInv();
      let populatedItems = [];
      fullInventoryData.forEach((importItem) => {
        createInventoryItem(importItem).then((r) => {
          populatedItems.push(r);
          setInventory([...inventory, ...populatedItems]);
        });
      });
    }
  };

  // Delete all the items in the backend and set the state of inv to []
  const deleteAll = () => {
    if (inventory.length) {
      inventory.forEach((i) => {
        deleteInventoryItem(i.inventory_id);
      });
    }

    setInventory([]);
  };
  // Moved from PetDisplay - passed base type and level when called in Candy
  const getExp = (candy_base_type, candy_level) => {
    console.log("HELLOOOERONKEJRNGEKJRG")
  
    const received_xp = CalculateXP(candy_base_type, candy_level);


    const total_xp = received_xp + avatarInfo.total_xp;

    const today = new Date();
    const todayString = today.toISOString().split("T")[0];
    
    const prevLevel = CalculatePetLevel(avatarInfo.total_xp)
    setPrevLevelInfo(prevLevel)
   
    const updatedAvatar = {
      ...avatarInfo,
      total_xp: total_xp,
      last_feed: todayString,
    };

    console.log("PREV LEVEL", prevLevel)
  
    axiosPrivate
      .patch(`/avatar/${avatarInfo.avatar_id}/`, updatedAvatar)
      .then((response) => { 
        
        const nextLevel = CalculatePetLevel(response.data.total_xp)
        if (prevLevel.LEVEL < nextLevel.LEVEL){
          setLeveledUp(true)
        }
      
        setAvatar(response.data); //change this to add to previous state instead of replacing completely (in case of >1 avatar for 1 user)
        gainExpAudio.play()
        getLevel(avatarInfo.total_xp);

        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Moved from PetDisplay
  const getLevel = (xp) => {
    setLevelInfo(CalculatePetLevel(xp));
    // Heart animation. Need to talk to Mary and Alex about this.
    spritesheetInstance.goToAndPlay(1);
    spritesheetInstance.pause();
  };

  const handlers = {
    inventory,
    setInventory,
    createInventoryItem,
    updateInventory,
    deleteInventoryItem,
    postFullInventory,
    deleteAll,
    avatarInfo,
    setAvatar,
    animateSpriteSheet,
    setSpritesheetInstance,
    getExp,
    leveledUp, 
    setLeveledUp,
    prev_level_info,
    height,
    width,
    taskList,
    addTask,
    deleteTask,
    deleteAllTasks,
    updateTask,
  };

  const animate = {
    animateSpriteSheet,
  };

  if (!ready) {
    return <div>LOADING...</div>;
  }

  else if (!isMobile) {
    return (
      <GlobalContext.Provider value={handlers}>
        <div className="flex-pages">
          <PetDisplay value={handlers} />
          <PageDisplay />
        </div>
      </GlobalContext.Provider>
    );
  } else {
    return (
      <GlobalContext.Provider value={handlers}>
        <div>
          <MobileMain />
        </div>
      </GlobalContext.Provider>
    );
  }
};
export default Main;
