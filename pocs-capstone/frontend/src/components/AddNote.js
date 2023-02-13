




const AddNote = ({ newNote, addNote, handleNoteChange }) => {
    return (
        <form onSubmit={addNote}>
            <input
                value={newNote}
                onChange={handleNoteChange}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

export default AddNote