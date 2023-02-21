import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form.js'

const Title = (props) => {
    const {course} = props
    return <h1>{course}</h1>
}

const Parra = ({parte}) => {
    const {name: part, exercises : exercise} = parte
    return (
        <p>
            {part} {exercise}
        </p>
    )
}

const Total = ({exer1, exer2, exer3}) => {
    // const exercise1 = exer1.exercises
    const { exercises: exercise1} = exer1
    const exercise2 = exer2.exercises
    const exercise3 = exer3.exercises
    return (
        <p>Total of exercises {exercise1 + exercise2 + exercise3}</p>
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
    console.log('Helo form component')
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Title course={course.name}/>
            <Parra parte={course.parts[0]} />
            <Parra parte={course.parts[1]}  />
            <Parra parte={course.parts[2]}  />

            <Total exer1={course.parts[0]} exer2={course.parts[1]} exer3={course.parts[2]}/>
            <Recorrido />
        </div>
    )
}

// usando objetos
// const App = () => {
//     const course = 'Half Stack application development'
//     const parts = [
//         {
//             name: 'Fundamentals of React',
//             exercises: 10
//         },
//         {
//             name: 'Using props to pass data',
//             exercises: 7
//         },
//         {
//             name: 'State of a component',
//             exercises: 14
//         }
//     ]
//
//     return (
//         <div>
//             <Title course={course}/>
//             <Parra parte={parts[0]} />
//             <Parra parte={parts[1]}  />
//             <Parra parte={parts[2]}  />
//
//             <Total exer1={parts[0]} exer2={parts[1]} exer3={parts[2]}/>
//             <Recorrido />
//         </div>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Otro />, document.getElementById('form'))

