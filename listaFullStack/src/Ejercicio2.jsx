import './App.css'
function Curso ({curso, parte, suma}) {
  return (
    <div>
      <h3>{curso}</h3>
      {parte}
      {suma}
    </div>
  )
}

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
]

export const Ejercicio2 = () => {

  const valor = courses.map(c => {
  let suma = 0
    const {id, name, parts} = c
    return (
      <div key={id}>
        <h3>{name}</h3>
        {
          parts.map(p => {
            suma += p.exercises
            return <p key={p.id}>{p.name}: <span>{p.exercises}</span> </p>
          })
        }
        <strong>Total of {suma} exercises</strong>
      </div>
    )
  })
  return (
    <div className="app">
      <div>{valor}</div>
    </div>
  )

}

export default Ejercicio2
