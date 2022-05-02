import React from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Split from "react-split";
import { nanoid } from 'nanoid'

export default function App() {

    const [notes, setNotes] = React.useState([])

    function addNewNote() {
        const newNote = {
            content: '# Type a title here',
            id: nanoid()
        }
        setNotes(prevState => {
            return [newNote, ...prevState]
        })
    }

    console.log(notes)

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
                        />

                        <Editor />
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