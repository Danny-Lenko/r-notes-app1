import React from 'react'

export default function Sidebar(props) {

    const allNotes = props.notes.map(note => (
        <section key={note.id}
                 className={
                    `title ${note.id === props.currentNote.id 
                                ? 'selected-note' : ''}
                    `
                }
                onClick={() => props.assignCurrentNote(note.id)}
        >
            <p className="text-snippet">
                {note.body.split('\n')[0].match(/[\w0-9\s]/g)}
            </p>
            <button className="delete-btn"
                onClick={(event) => props.deleteNote(event, note.id)}
            >
                <i className="gg-trash trash-icon"></i>
            </button>
        </section>
    ))

    return(

        <aside className="sidebar">

            <header className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note"
                    onClick={props.addNewNote}
                >+</button>
            </header>

            {allNotes}
        </aside>

    )
}