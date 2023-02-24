import {useState} from 'react'

let updatedValue = {
    good:0,
    neutral:0,
    bad:0,
    suma: 0,
    total: 0,
    porcentajePositivos: 0
}
function Ejercicio1 () {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const total = () => {
        const {good, neutral, bad} = updatedValue
        console.log(good, neutral, bad)
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
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
            <p>Good: {good} </p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad}</p>
            <p>Suma: {updatedValue.suma} </p>
            <p>Promedio: {updatedValue.total} </p>
            <p>porcentaje: {updatedValue.porcentajePositivos} </p>
        </>
    )
}

export default Ejercicio1
