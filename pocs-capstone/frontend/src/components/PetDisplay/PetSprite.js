import kittycat from '../../images/kittytrans.png';
import bgimage from '../../images/bg.gif'
import "./PetDisplay"

const PetSprite = () => {
    return (
        <div className='p-sprite-display'>
            <img src={bgimage} alt="background" className="bg-sprite"/>
            <img src={kittycat} alt="background" className="p-sprite"/>
        </div>
    )
}

export default PetSprite