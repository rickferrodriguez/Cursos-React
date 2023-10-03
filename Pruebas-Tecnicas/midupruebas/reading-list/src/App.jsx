import { useState } from 'react'
import './App.css'
import { library } from './mocks/books.json'
import { BookPagesInfo, YearCreatedBook } from './components/Icons'
import { Header } from './components/Header'

function App() {
  const [books, setBooks] = useState(library)

  const isCiFi = (title) => {
    return title === 'Ciencia ficción' ? 'Sci-Fi' : title
  }

  return (
    <>
      <Header />
      <section className='grid grid-cols-5 gap-6'>
        {books.map((book) => {
          return (
            <section
              key={book.book.ISBN}
              className='flex flex-col gap-1 w-auto text-gray-300'
            >
              <header className='flex flex-col gap-1 rounded-lg overflow-hidden bg-slate-600'>
                <img
                  className=' aspect-[3/4] object-fill'
                  src={book.book.cover}
                  alt={book.book.title}
                />
                <section className='flex m-1 text-sm justify-between'>
                  <div className='flex gap-[2px]'>
                    <div className='flex font-semibold bg-slate-900 pr-1 py-0 items-center rounded-md'>
                      <label className='scale-75'>
                        <YearCreatedBook />
                      </label>
                      {book.book.year}
                    </div>
                    <div className='flex font-semibold bg-slate-900 pr-1 py-0 rounded-md items-center'>
                      <label className='scale-75'>
                        <BookPagesInfo />
                      </label>
                      {book.book.pages}
                    </div>
                  </div>
                  <span className='justify-self-end text-base'>
                    {isCiFi(book.book.genre)}
                  </span>
                </section>
              </header>
              <h3 className='text-gray-100 text-left'>{book.book.title}</h3>
            </section>
          )
        })}
      </section>
    </>
  )
}

export default App
