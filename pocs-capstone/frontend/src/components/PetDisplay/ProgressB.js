import './PetDisplay.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

const ProgressB = () => {
    const now = 10;
    return (
        <div className="pbar-exp">
            <div className='pbar-text'>EXP </div>
            <ProgressBar now={now} variant='success' style={{ width: '18rem' }}/>
        </div>    
    )
}

export default ProgressB