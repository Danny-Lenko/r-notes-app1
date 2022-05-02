import React from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Split from "react-split";
import { nanoid } from 'nanoid'

export default function App() {

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem('notes')) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function addNewNote() {
        const newNote = {
            body: '# Type a title here',
            id: nanoid(),
        }
        setNotes(prevState => [newNote, ...prevState])
        setCurrentNoteId(newNote.id)
    }

    function findCurrentNote() {
        const notesFound = notes.find(note => note.id === currentNoteId)
        return notesFound ? notesFound : notes[0]
    }

    function assignCurrentNote(id) {
        setCurrentNoteId(id)
    }

    function updateNote(text) {
        let currentNote = notes.find(note => note.id === currentNoteId)
        currentNote = {...currentNote, body: text}
        const oldNotes = notes.filter(note => note.id !== currentNoteId)

        setNotes([currentNote, ...oldNotes])
    }

    function deleteNote(event, id) {
        event.stopPropagation()
        setNotes(prevState => prevState.filter(note => note.id !== id))
    }

    return(
        <main className="App">
            {
                notes[0]

                ? <Split
                        className="split"
                        sizes={[30, 70]}
                        direction="horizontal"
                    >

                        <Sidebar
                            notes={notes}
                            addNewNote={addNewNote}
                            currentNote={findCurrentNote()}
                            assignCurrentNote={assignCurrentNote}
                            deleteNote={deleteNote}
                        />

                        <Editor
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />
                    </Split>

                : <section className="no-notes">

                    <h1>You have no notes</h1>

                    <button className="first-note"
                        onClick={addNewNote}
                    >
                        Add a note
                    </button>
                </section>

            }

        </main>
    )
}