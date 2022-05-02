import React from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Split from "react-split";

export default function App() {



    return(
        <main className="App">
            <Split
                sizes={[30, 70]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
            >
                <Sidebar />
                <Editor />
            </Split>

        </main>
    )
}