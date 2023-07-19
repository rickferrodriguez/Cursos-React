import { useState } from 'react'
import './App.css'
import { Books } from './components/Books'
import { library } from './mocks/books.json'

function App () {
  const [books, setBooks] = useState(library)
  return (
    <div>
      <h1 className='text-sky-600 font-bold'>reset prueba tecnica</h1>
      {
        books.map(book => {
          const myBook = book.book
          return (
            <Books key={myBook.ISBN} book={myBook} />
          )
        })
      }
    </div>
  )
}

export default App
