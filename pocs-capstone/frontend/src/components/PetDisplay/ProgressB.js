import './PetDisplay.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState} from 'react'
import CalculateXP from '../../algos/assignXP';
import CalculatePetLevel from '../../algos/calculatePetLevel';
const ProgressB = ({avatarInfo}) => {

    const [progress, setProgress] = useState(0);
    const max = 5000
    const exp = ( avatarInfo.total_xp / max ) * 100
    return (
        <div className="pbar-exp">
            <div className='pbar-text'>EXP </div>
            <ProgressBar now={exp} variant='success' style={{ width: '18rem' }}/>
        </div>    
    )
}

export default ProgressB