const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({partes}) => {
    return (
            partes.map((part, index) => (
            <p key={index}>{part.name} {part.exercises}</p>
        ))
    )
}

const Total = ({partes}) => {
    let suma = 0
    partes.forEach((part) => (
        suma += part.exercises
    ))
    return <p>Number of exercises: {suma}</p>
}


const Ejercicio3 = () => {
    const course = 'Half Stack application development'
    const parts = [
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
    return (
        <div>
            <Header course={course}/>
            <Content partes={parts} />
            <Total partes={parts}/>
        </div>
    )
}

export default Ejercicio3
