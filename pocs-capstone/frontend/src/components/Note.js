
import React from 'react'
const Note = ({note}) =>{
    return(
        <div>
            <li className="note">
                {note}
            </li>
        </div>
    )   
}

export default Note