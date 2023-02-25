import {useState} from 'react'

let updatedValue = {
    suma: 0,
    total: 0,
    porcentajePositivos: 0
}

function Statistics ({valor}) {
    return (
        <table>
            <td>Suma: {valor.suma} </td>
            <td>Promedio: {valor.total} </td>
            <td>porcentaje: {valor.porcentajePositivos} </td>
        </table>
    )
}

function SingleFeedback ({g,n,b}) {
    return (
        <>
            <p>Good: {g} </p>
            <p>Neutral: {n} </p>
            <p>Bad: {b}</p>
        </>
    )
}

function ButtonFeedback ({handler, btnName}) {
    return (
        <>
            <button onClick={handler}>{btnName}</button>
        </>
    )
}

function Ejercicio1 () {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const total = () => {
        let sum = (good * 1) + (neutral * 0) + (bad * -1)
        let sumado = good + neutral + bad
        let division = 3 / sum
        let porcentaje = good / sumado
        updatedValue.total = division 
        updatedValue.suma = sumado 
        updatedValue.porcentajePositivos = porcentaje 
    }

    const handleGood = () => {
        updatedValue = {
            ...updatedValue,
            good: good + 1
        }
        setGood(updatedValue.good)
        total()
    }

    const handleNeutral = () => {
        updatedValue = {
            ...updatedValue,
            neutral: neutral + 1
        }
        setNeutral(updatedValue.neutral)
        total()
    }

    const handleBad = () => {
        updatedValue = {
            ...updatedValue,
            bad: bad + 1
        }
        setBad(updatedValue.bad)
        total()
    }

    return (
        <>
            <h3>Give Feedback</h3>
            <ButtonFeedback handler={handleGood} btnName={'Good'} />
            <ButtonFeedback handler={handleNeutral} btnName={'Neutral'} />
            <ButtonFeedback handler={handleBad} btnName={'Bad'} />
            {updatedValue.suma > 0 
                ? <SingleFeedback g={good} b={bad} n={neutral} />
                : ''
            }
            <h3>Statistics</h3>
            {good > 0 && neutral > 0 && bad > 0 
                ? <Statistics valor={updatedValue} /> 
                : 'No feedback given'}
        </>
    )
}

export default Ejercicio1
