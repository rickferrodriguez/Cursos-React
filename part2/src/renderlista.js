import {useState} from 'react'

function Note ({content, date}) {
    return (
        <li>
            <p>{content}</p>
            <small>
                <time>{date}</time>
            </small>
        </li>
    )
}

export default function RenderLista (props) {
    // if(typeof notes === 'undefined' || notes.length === 0 || notes === null) {
    //     return 'No tenemos notas que mostrar'
    // }
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const handleChanges = (event) => {
        setNewNote(event.target.value) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const noteToAddToState = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        }
        setNotes((prevNote) => {
            return [...prevNote, noteToAddToState]
        })
        // limpiar el input text
        setNewNote('')
        // {
        //     id: 3,
        //     content: 'GET and POST are the most important methods of HTTP protocol',
        //     date: '2019-05-30T19:20:14.298Z',
        //     important: true,
        // },
    }
    return (
        <div>
            <h1>Notes</h1>
            <ol>
                {notes.map((note) => {
                    return   <Note key={note.id} content={note.content} date={note.date} />
                })}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChanges} value={newNote}/>
                <button > Crear Nota </button>
            </form>
        </div>
    )
}
