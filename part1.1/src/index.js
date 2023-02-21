import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mensaje from './mensaje';

const Hola = () => {
    return (
        <div> Hola khe hace </div>
    )
}

const Header = ({course}) => {
    return (
    <h1>{course}</h1>
    )
}

const Content = ({part, exercise}) => {
    return (
    <p>{part} {exercise}</p>
    )
}

const Total = ({ex1, ex2, ex3}) => {
    return (
    <p>Number of exercises: {ex1 + ex2 + ex3}</p>
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
            <h1> Ejercicio 1 </h1>
            <Header course={course} />
            <Content part={part1} exercise={exercises1} />
            <Content part={part2} exercise={exercises2} />
            <Content part={part3} exercise={exercises3} />
            <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />

            <h1> Ejercicio 2 </h1>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
