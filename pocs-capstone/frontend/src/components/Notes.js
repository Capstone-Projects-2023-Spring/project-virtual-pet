import Note from "./Note"


const Notes = ({notesShow}) => {
    return (
        <ul>
            {notesShow.map(n => {
                return <Note key={n.note_id} note={n.note_text}/>
            })}
        </ul>
    )
}



export default Notes