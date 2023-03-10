import './PetDisplay.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressB = ({avatarInfo}) => {
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