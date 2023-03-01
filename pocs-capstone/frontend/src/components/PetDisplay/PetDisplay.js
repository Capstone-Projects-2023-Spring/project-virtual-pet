import PetSprite from './PetSprite.js'
import PetDesc from './PetDesc.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'

const PetDisplay = () => {
    return (
        // <div className="pet-display">
        //     <PetSprite/>
        //     <ProgressB/>
        //     <PetDesc/>
        // </div>

        <div className='petDis'>
            <Card style={{ width: '24rem' }}>
                <Card.Header className='pet-name'>HAMILTON</Card.Header>
                <PetSprite />
                <ProgressB />
                <Card.Body className='pd-bg'>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    
                    <Card.Text className='pet-desc-text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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
                    {/* <ListGroup.Item><div className='pet-label'>Vestibulum at eros</div></ListGroup.Item> */}
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
        </div>
    )
}

export default PetDisplay