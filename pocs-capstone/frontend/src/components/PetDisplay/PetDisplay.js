import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'

const PetDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {


    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                <PetSprite {...{ avatarInfo, setAvatar, inventory, setInventory }} />
                <ProgressB avatarInfo={avatarInfo} />
                    <Card.Body className='pd-bg'>

                        <Card.Text className='pet-desc-text'>
                            THIS CAT LOVES IAN TYLER APPLEBAUM SO MUCH!!!!!!!!!!!!!!!!!!!!!!!!!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='pd-position'>
                            <div className='pet-label'>MOOD: </div>
                            <div>Yippee!!!</div>
                        </ListGroup.Item>
                        <ListGroup.Item className='pd-position'>
                            <div className='pet-label'>WEIGHT: </div>
                            <div>5 Paper Clips</div>
                        </ListGroup.Item>
                    </ListGroup>
            </Card>
        </div>
    )
}

export default PetDisplay