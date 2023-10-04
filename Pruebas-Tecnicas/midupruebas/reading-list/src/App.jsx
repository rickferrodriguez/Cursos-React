import { useState } from 'react'
import './App.css'
import { library } from './mocks/books.json'
import { Header } from './components/Header'
import { ListOfBooks } from './components/ListOfBooks'

function App() {
  const [books, setBooks] = useState(library)

  return (
    <>
      <Header />
      <ListOfBooks books={books} />
    </>
  )
}

export default App
