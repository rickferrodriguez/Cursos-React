
const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({parte}) => {
    const {nombre, exercises} = parte
    return (
        <p>{nombre} {exercises}</p>
    )
}

const Total = ({ex1, ex2, ex3}) => {
    return (
        <p>Number of exercises: {ex1 + ex2 + ex3}</p>
    )
}

const Ejercicio2 = () => {
    const course = 'Half Stack application development'
    const part1 = {
        nombre: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        nombre: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        nombre: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header course={course}/>
            <Content parte={part1} />
            <Content parte={part2} />
            <Content parte={part3} />
            <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
        </div>
    )
}

export default Ejercicio2
