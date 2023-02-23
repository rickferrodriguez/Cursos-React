import './index.css';
import {useState} from 'react'
import React from 'react';
// import App from './App';

// La aplicación se renderiza cuando llegan nuevas props, pero esto no 
// significa que el valor va ser el mismo, puede llegar un numero por 
// defecto pero no es el mismo del principio
function Counter ({number}) {
    return (
        <p>{number}</p>
    )
}

function OldIndex () {
    // Destructuración del use state, que devuelve un array con dos posiciones,
    // el primero es el valor actual y el segundo devuelve una función con
    // el valor que le deseamos cambiar
    const [countValue, updateValue] = useState(0)
    // const contador = useState(13)
    // const countValue = contador[0]
    // const countUpdate = contador[1]

    const handleClick = () => {
        // updateValue(countValue + 1)
        updateValue((prevValue) => {
            // con esto nos encargamos de revisar el valor anterior para 
            // actualizar el nuevo, es más seguro
            return prevValue + 1
        })
    }

    const handleClickReset = () => {
        return updateValue(0)
    }

    const isEven = countValue % 2 === 0
    // Renderizado condicional (a partir de una cosa poder mostrar una u otra cosa)
    const messageEven = isEven ? 'Es par' : 'Es impar'

    // En la medida de lo posible usar un 'onClick' para capturar eventos
    return (
        <div>
            <p>El valor del contador es:</p>
            <Counter number={countValue} />
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleClickReset}>Reset</button>
            <p>Este Valor es: {messageEven} </p>
        </div>
    )
}

export default OldIndex
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
