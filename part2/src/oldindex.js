import './index.css';
import {useState} from 'react'
import React from 'react';
// import App from './App';


function OldIndex () {
    const [countValue, countUpdate] = useState(0)
    // const contador = useState(13)
    // const countValue = contador[0]
    // const countUpdate = contador[1]
    return (
        <div>
        <p>El valor del contador es:</p>
        <p>{countValue}</p>
        </div>
    )
}

export default OldIndex
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
