import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

    return (
        <div>
            <Title course={course}/>
            <Parra part={part1} exercise1={exercises1} />
            <Parra part={part2} exercise1={exercises2} />
            <Parra part={part3} exercise1={exercises3} />

            <Number exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
