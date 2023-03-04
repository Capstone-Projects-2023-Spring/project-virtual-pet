import kittycat from '../../images/kittytrans.png';
import bgimage from '../../images/bg.gif'
import "./PetDisplay"
import { useState } from 'react'

const PetSprite = ({avatarInfo, setAvatarInfo, inventory, setInventory}) => {
    const [sprite, setSprite] = useState("")

    const handleItemRelease = () => {
        // setSprite("PATH TO IMAGE")
    }

    return (
        <div className='p-sprite-display'>
            <img src={bgimage} alt="background" className="bg-sprite"/>
            <img src={kittycat} alt="background" className="p-sprite"/>
        </div>
    )
}

export default PetSprite