import PetDisplay from "./PetDisplay/PetDisplay.js";
import PageDisplay from "./PageDisplay/PageDisplay.js";
//import useAuth from '../hooks/useAuth.js'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";
import "./Main.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PopulateInv from "./Inventory/PopulateInv";
import LockedInv from "./Inventory/LockedInv.js";
import SpriteSheetContext from "../context/SpriteSheetContext.js";
import AvatarContext from "../context/AvatarContext";
import GlobalContext from "../context/GlobalContext.js";
import CalculateXP from "../algos/assignXP.js";
import CalculatePetLevel from "../algos/calculatePetLevel.js";
import { setIn } from "formik";

const Main = () => {
  const axiosPrivate = useAxiosPrivate();
  const [avatarInfo, setAvatar] = useState({});
  const width = useWindowWidth();
  const nav = useNavigate();

  const [ready, setReady] = useState(false);
  const populateInventory = LockedInv()
  const [inventory, setInventory] = useState(populateInventory);
  // Moved from PetDisplay
  const [level_info, setLevelInfo] = useState(CalculatePetLevel(avatarInfo.total_xp))
  const [spritesheetInstance, setSpritesheetInstance] = useState(null);


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
        nav("/pet_selection");
      });
  }, []);

  // useEffect, GET call to retrieve inventory item and set the state of inv
  useEffect(() => {
    
    axiosPrivate
      .get("/inventory/")
      .then((r) => {
        
        r.data.map((it) => {
          
          let candy = inventory.find((c) => c.candy_base_type === it.candy_base_type && c.candy_level === it.candy_level);

          candy.inventory_id = it.inventory_id;
          candy.quantity = it.quantity;


        })        
      })
      .catch((error) => {
        console.log(error);
      });
      
    // axiosPrivate
    //   .get("/inventory/")
    //   .then((response) => {
    //     setInventory(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const isMobile = width <= 850;

  // Inventory Handlers
  // Perform a put to the backend to update inventory
  const putInventory = (item) => {
    let request = axiosPrivate.put(`/inventory/${item.inventory_id}/`, item);
    return request.then((response) => response.data);
  };
  // Performs update on candy quantity when candy is fed(drag and dropped)
  const updateInventory = (id) => {
    // console.log("ID OF CANDY", id)

    const candyD = inventory.find((candy) => candy.inventory_id === id);
    if (candyD.quantity !== 0) {
      // console.log("CANDY", candyD)
      const updateCandy = {
        ...candyD,
        quantity: candyD.quantity !== 0 ? candyD.quantity - 1 : 0,
      };
      // console.log("ID", updateCandy.inventory_id)
      putInventory(updateCandy).then((r) => {
        setInventory(inventory.map((it) => (it.inventory_id === id ? updateCandy : it)));
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
    const received_xp = CalculateXP(candy_base_type, candy_level)
    console.log("XP", avatarInfo.total_xp)

    const total_xp = received_xp + avatarInfo.total_xp
    
    console.log("TOTAL XP----------->", total_xp)
    const updatedAvatar = {
        ...avatarInfo,
        total_xp:total_xp
      };
      console.log("UPDATED AVATAR",updatedAvatar)
      axiosPrivate
        .patch(`/avatar/${avatarInfo.avatar_id}/`, updatedAvatar)
        .then((response) => {
          console.log("response.data:", response.data);
          setAvatar(response.data); //change this to add to previous state instead of replacing completely (in case of >1 avatar for 1 user)
          getLevel(avatarInfo.total_xp)
            
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
    

}

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
  };

  const animate = {
    animateSpriteSheet,
  };

  if (!ready) {
    return <div>LOADING...</div>;
  }

  // Need to wrap mobile view in Dnd and Inventory Context - Want to talk to Harrsion prior
  else if (!isMobile) {
    return (
      <GlobalContext.Provider value={handlers}>
      {/*<AvatarContext.Provider value={shareData}>*/}
          {/*<InventoryContext.Provider value={handlers}>*/}
            {/*<SpriteSheetContext.Provider value={animate}>*/}
              <div className="flex-pages">
                <PetDisplay />
                <PageDisplay />
              </div>
           {/* </SpriteSheetContext.Provider>*/}
         {/* </InventoryContext.Provider>*/} 
      {/*</AvatarContext.Provider>*/}
      </GlobalContext.Provider>

    );
  } else {
    return (
      <GlobalContext.Provider value={handlers}>
      {/*<AvatarContext.Provider value={shareData}>*/}
          {/*<InventoryContext.Provider value={handlers}>*/}
            {/*<SpriteSheetContext.Provider value={animate}>*/}
              <div>
                <div className="flex-pages">
                  <PetDisplay />
                </div>
                <div>
                  <PageDisplay />
                </div>
              </div>
           {/* </SpriteSheetContext.Provider>*/}
         {/* </InventoryContext.Provider>*/} 
      {/*</AvatarContext.Provider>*/}
      </GlobalContext.Provider>
    );
  }
};
export default Main;
