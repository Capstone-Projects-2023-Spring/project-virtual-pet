import kittycat from '../../images/kittytrans.png';

import bgimage from '../../images/bg.gif'
import "./PetDisplay"
import { useState } from 'react'

const PetSprite = ({ avatarInfo, setAvatarInfo, inventory, setInventory }) => {
    const [sprite, setSprite] = useState("")

    const handleItemRelease = () => {
        // setSprite("PATH TO IMAGE")
    }

    const avatarImage = (pet) => {
        switch (pet.avatar_type) {
            case 'CT':
                switch (pet.palette) {
                    case '0':
                        return require('../../images/kittyorange.png')
                    case '1':
                        // CHANGE TO IMAGE OF OTHER CAT (black palette)
                        return require('../../images/kittyorange.png')
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