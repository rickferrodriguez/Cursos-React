import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form.js'

const Title = (props) => {
    const {course} = props
    return <h1>{course}</h1>
}

const Parra = ({part, exercise1, exercise2, exercise3}) => {
    return (
        <p>
            {part} {exercise1}{exercise2}{exercise3}
        </p>
    )
}

const Number = ({exercise1, exercise2, exercise3}) => {
    return (
        <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    )
}

const Recorrido = () => {
    const lista = [1, 2, 3]
    return (lista.map((l) => {
        return (
            <ul>
                <li>{l}</li>
            </ul>
        )
    })
    )
}

function Otro () {
    const miNombre = 'Hola khe hace'
    return (
        <Form nombre={miNombre} />
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parte1 = 'part1'

    const opciones = {
        course : 'Half Stack application development',
        part1 : 'Fundamentals of React',
        exercises1 : 10,
        part2 : 'Using props to pass data',
        exercises2 : 7,
        part3 : 'State of a component',
        exercises3 : 14,
    }

    return (
        <div>
            <Title course={course}/>
            <Parra part={opciones[parte1]} exercise1={exercises1} />
            <Parra part={part2} exercise1={exercises2} />
            <Parra part={part3} exercise1={exercises3} />

            <Number exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
            <Recorrido />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Otro />, document.getElementById('form'))

