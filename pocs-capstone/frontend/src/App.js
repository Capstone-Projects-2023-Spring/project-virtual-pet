import AddNote from './components/AddNote';
import Notes from './components/Notes';
import noteService from './services/notes.js'
import './App.css';
import React, { useState, useEffect } from 'react'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const hooks = () => {
    noteService
      .getAll()
      .then(r => {
        setNotes(r)
      })
  }
  useEffect(hooks, [])

  const addNote = (e) => {
    e.preventDefault()

    const noteObj = {
      note_text: newNote,
      note_id: notes.length+1
    }

    noteService
      .createNote(noteObj)
      .then(r => {
        setNotes(notes.concat(r))
        setNewNote('')
      })
  }


  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const handlers = { newNote, addNote, handleNoteChange }

  

  return (
    <div>
      <h1>Different ing</h1>
      <AddNote {...handlers} />
      <Notes notesShow={notes} /> 
    </div>
  )
}



export default App;
