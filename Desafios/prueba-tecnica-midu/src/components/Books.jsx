export function Books ({ library }) {
  return (
    <div>
      <ul>
        {
          library.foreach(book => (
            <li>{book.title}</li>
          ))
        }
      </ul>
    </div>
  )
}
