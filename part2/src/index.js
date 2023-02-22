import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './App';

const App = () => {
    const [left, updateLeft] = useState(0)
    const [right, updateRight] = useState(0)

    return (
        <div>
            {left}
            <button onClick={() => updateLeft(left + 1)}>
            left
            </button>
            <button onClick={() => updateRight(right + 1)}>
            right
            </button>
            {right}
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
