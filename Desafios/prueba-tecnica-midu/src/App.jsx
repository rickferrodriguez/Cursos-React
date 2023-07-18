import './App.css'
import { Books } from './components/Books'
import { library } from './mocks/books.json'

function App () {
  return (
    <div>

      <h1 className='text-sky-600 font-bold'>reset prueba tecnica</h1>
      {
        Object.entries(library).map(([key, value]) => {
          console.log(key, value.book.title)
        })
      }
    </div>
  )
}

export default App
