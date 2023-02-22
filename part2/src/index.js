import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './App';

function App () {
    // const [left, updateLeft] = useState(0)
    // const [right, updateRight] = useState(0)

    const [counters, updateCounters] = useState({
        left: 0,
        right: 0
    })

    const handleClickLeft = () => {
        updateCounters({
            left: counters.left + 1,
            right: counters.right
        })
    }

    const handleClickRight = () => {
        updateCounters({
            left: counters.left,
            right: counters.right + 1
        })
    }

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
            {counters.right}
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
