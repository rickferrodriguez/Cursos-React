import {useState} from 'react'

function RepasoClase1 () {


    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood((prevGood) => {
            setGood(prevGood + 1)
        })
    }

    const handleNeutralClick = () => {
        setNeutral((prevNeutral) => {
            setNeutral(prevNeutral + 1)
        })
    }

    const handleBadClick = () => {
        setBad((prevBad) => {
            setBad(prevBad + 1)
        })
    }

    return (
        <div>
            <h3> Give Feedback</h3>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

export default RepasoClase1
