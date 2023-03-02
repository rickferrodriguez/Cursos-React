function Curso ({curso, parte, suma}) {
  return (
  <div>
      <h3>{curso}</h3>
      {parte}
      {suma}
  </div>
  )
}

const course = {
  id: 1,
  name: 'Half Stack application development',
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
  ],
}

export const Ejercicio1 = () => {
  const mappedParts = course.parts.map(p => {
    return (
        <p key={p.id}>{p.name}: <span>{p.exercises}</span> </p>
    )
  })

  const mappedSuma = () => {
    let suma = 0
    course.parts.map( p => {
      suma += p.exercises
    })
    return (
    <p>{suma}</p>
    )
  }


  return (
    <Curso curso={course.name} parte={mappedParts} suma={mappedSuma()}/>
  )

}

export default Ejercicio1
