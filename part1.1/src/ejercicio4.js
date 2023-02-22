const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({partes}) => {
    return (
            partes.parts.map((part, index) => (
            <p key={index}>{part.name} {part.exercises}</p>
        ))
    )
}

const Total = ({partes}) => {
    let suma = 0
    partes.parts.forEach((part) => (
        suma += part.exercises
    ))
    return <p>Number of exercises: {suma}</p>
}


const Ejercicio4 = () => {
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
            <Header course={course.name}/>
            <Content partes={course} />
            <Total partes={course} />
        </div>
    )
}

export default Ejercicio4
