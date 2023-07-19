export function Books ({ book }) {
  return (
    <div>
      <ul>
        {console.log(book)}
        <li>{book.title}</li>
      </ul>
    </div>
  )
}
