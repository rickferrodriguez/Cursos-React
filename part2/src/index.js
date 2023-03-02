import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
// import OldIndex from './oldindex.js';
// import Repaso1 from './repasoClase1.js'
// import Ejercicio1 from './ejercicio1.js'
import Anectdotas from './anecdotas.js'
// import RenderLista from './renderlista.js'


const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
    },
]

function WarningNotUsed () {
    return <h3>Todavía no se ha usado el contador</h3>
}

function ListOfClicks ({clicks}) {
    return (
        <div>
            <p> Clicks totales: {clicks.length}</p>
            <p> Clicks del array : {clicks}</p>
        </div>
    )
}

const INITIAL_STATE = {
    left: 2,
    right: 1,
    mensaje: 'mensaje constante inicial'
}

function App () {
    // const [left, updateLeft] = useState(0)
    // const [right, updateRight] = useState(0)

    const [counters, updateCounters] = useState(INITIAL_STATE)

    const [clicks, updateClicks] = useState([])

    const handleLeft = () => {
        const newCounterState = {
            ...counters,
            left: counters.left + 1,
        }
        updateCounters(newCounterState)
        updateClicks((prevClicks) => {
            return [...prevClicks ,'L']
        })
    }

    const handleRight = () => {
        const newCounterState = {
            ...counters,
            right: counters.right + 1,
        }
        updateCounters(newCounterState)
        updateClicks((prevClicks) => {
            return [...prevClicks ,'R']
        })
    }

    const handleReset = () => {
        updateCounters(INITIAL_STATE)
        updateClicks([])
    }

    return (
        // <div>
        //     {counters.left}
        //     <button onClick={handleLeft}> Left</button>
        //     <button onClick={handleRight}> Right</button>
        //     {counters.right} <br />
        //     {counters.mensaje}
        //     {clicks.length === 0
        //         ? <WarningNotUsed />
        //         : <ListOfClicks clicks={clicks}/>
        //     }
        //     <button onClick={handleReset}> Reset</button>
        //     <div>
        //         <h1>Old Index</h1>
        //         <OldIndex />
        //     </div>
        //     <div>
        //         <h1>Repaso con ejercicio 1 </h1>
        //         <Repaso1 />
        //     </div>
        //     <div>
        //         <h2> Ejercicio 2 </h2>
        //         <Ejercicio1 />
        //     </div>
            <div className="anecdotes">
                <h2> Anectdotas Exercise </h2>
                <Anectdotas  />
            </div>
        // </div>
// <RenderLista notes={notes}/>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
