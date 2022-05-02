import React from 'react'

export default function Sidebar(props) {

    const allNotes = props.notes.map(note => (
        <section className="title">
            <h5 className="text-snippet">
                {note.content}
            </h5>
        </section>
    ))

    return(

        <aside className="sidebar">

            <header className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note">+</button>
            </header>

            {allNotes}
        </aside>

    )
}