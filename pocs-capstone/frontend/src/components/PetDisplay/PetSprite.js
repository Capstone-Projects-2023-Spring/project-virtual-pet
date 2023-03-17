import kittycat from '../../images/orangecat.png';

import bgimage from '../../images/bg.gif'
import "./PetDisplay"
import { useState } from 'react'

import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PetSprite = ({ avatarInfo, setAvatar, inventory, setInventory }) => {
    const [sprite, setSprite] = useState("")

    const handleItemRelease = () => {
        // setSprite("PATH TO IMAGE")
    }

    const [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => changeImage(item.id),
    
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })) 

    const changeImage = (id) => {
        console.log("in change images");
        // setPetsrc(cat_happy);

        let newList = [...inventory];
        let candyD = newList.find(
            candy => candy.id === id);

            
        // // Xp would vary based on calculation of type and level
        // if (candyD.quantity > 0)
        //     switch(candyD.candy_base_type)
        //     {
        //         case 'S':
        //             setXp(currxp => currxp + 200);
        //             break;

        //         case 'M': 
        //             setXp(currxp => currxp + 600);
        //             break;

        //         case 'L':
        //             setXp(currxp => currxp + 850);
        //             break;

        //         case 'C':
        //             setXp(currxp => currxp + 1000);
        //             break

        //     }
                
        if (candyD.quantity !== 0)
            candyD.quantity -= 1;
        
        setInventory(newList);

            // setCandyList(newList);

    };

    const avatarImage = (pet) => {
        switch (pet.avatar_type) {
            case 'CT':
                switch (pet.palette) {
                    case 0:
                        return require('../../images/orangecat.png')
                    case 1:
                        // CHANGE TO IMAGE OF OTHER CAT (black palette)
                        return require('../../images/graycat.png')
                }

            case 'DG':
                return ''
            case 'CR':
                return ''
            case 'RK':
                return ''

        }
    }



    return (
        <div className='p-sprite-display'>
            <img src={bgimage} alt="background" className="bg-sprite" />
            <img src={avatarImage(avatarInfo)} alt="background" className="p-sprite" />
        </div>
    )
}

export default PetSprite