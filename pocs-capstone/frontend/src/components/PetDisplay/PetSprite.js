import kittycat from '../../images/orangecat.png';
import Spritesheet from 'react-responsive-spritesheet'
import bgimage from '../../images/bg.gif'
import orangesheet from '../../../src/images/orange_happy_sheet.png'
import graysheet from '../../../src/images/gray_happy_sheet.png' 
import "./PetDisplay"
import { useState, useContext } from 'react'
import '../../../src/components/AnimateChoice.css'
import SpriteSheetContext from '../../context/SpriteSheetContext';


// import { useDrop } from "react-dnd";

const PetSprite = ({ avatarInfo, setAvatar, inventory, setInventory }) => {
    const spriteData = useContext(SpriteSheetContext);
    const [spriteplay, setSprite] = useState('');
    //const [spritesheetState, setSpritesheetState] = useState(spriteData);
    //const [sprite, setSprite] = useState("")

    const handleItemRelease = () => {
        // setSprite("PATH TO IMAGE")
    }

    // Can handle drop here maybe too but wasn't working with background so will ask group

    const avatarImage = (pet) => {
        switch (pet.avatar_type) {
            case 'CT':
                switch (pet.palette) {
                    case 0:
                        //return require('../../images/orangecat.png')
                        return orangesheet;
                    case 1:
                        // CHANGE TO IMAGE OF OTHER CAT (black palette)
                       // return require('../../images/graycat.png')
                       return graysheet;
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

            <Spritesheet
                image={avatarImage(avatarInfo)}
                {...spriteData}
                onClick={spritesheet => {spritesheet.play()}}
                getInstance={spritesheet => {
                    this.spritesheetInstance = spritesheet; }}
               // onClick = {setSprite('run')}
               // isPlaying={spriteplay === 'run'}
            />
        </div>
    )
}

export default PetSprite

//<img src={avatarImage(avatarInfo)} alt="background" className="p-sprite" />