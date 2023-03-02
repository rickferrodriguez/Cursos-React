function Curso ({curso, parte}) {
  return (
  <div>
      <h3>{curso}</h3>
      {parte}
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

  const mappedParts = course.parts.map(p => <p key={p.id} >{p.name} <span>p.exercises</span> </p>)
  return (
    <Curso curso={course.name} parte={mappedParts}/>
  )

}

export default Ejercicio1
