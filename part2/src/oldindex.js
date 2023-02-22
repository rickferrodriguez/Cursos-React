import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Counter = ({counter}) => {
    return (
            <h1>{counter}</h1>
    )
}

const App = () => {
    const [countValue, updateCount] = useState(0)

    // Esto es equivalente a lo de arriba
    // const count = useState(0)
    // const countValue = count[0]
    // const updateCount = count[1]

    // setInterval(() => {
    //     updateCount(countValue + 1)
    // }, 2000)
    //
    const handleClick = () => {
        updateCount(countValue + 1)
        // updateCount(countValue + 1)
        // updateCount(prevCount => {
        //     return prevCount + 1
        // })
    }

    const handleClickReset = () => {
        updateCount(0)
    }

    const isEven = countValue % 2 === 0
    const mensajePar = isEven ? 'es Par' : 'es Impar'

    return (
        <div>
            <p> El valor del contador es: </p>
            <Counter counter={countValue} />
            <p>{mensajePar}</p>
            <button onClick={handleClick}> 
                Magia de React 
            </button>
            <button onClick={handleClickReset}> 
                Reset
            </button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
