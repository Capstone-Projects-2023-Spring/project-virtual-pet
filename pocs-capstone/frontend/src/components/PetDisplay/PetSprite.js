import kittycat from '../../images/orangecat.png';

import bgimage from '../../images/bg.gif'
import "./PetDisplay"
import { useState } from 'react'
// import { useDrop } from "react-dnd";

const PetSprite = ({ avatarInfo, setAvatar, inventory, setInventory }) => {
    const [sprite, setSprite] = useState("")

    const handleItemRelease = () => {
        // setSprite("PATH TO IMAGE")
    }

    // Can handle drop here maybe too but wasn't working with background so will ask group

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