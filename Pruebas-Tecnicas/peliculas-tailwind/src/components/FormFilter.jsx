import { CheckBoxFilter } from './CheckBoxFilter.jsx'

export function FormFilter ({ handleSubmit, handleChange, handleSort, handleOnlyMovies, sort, onlyMovies, search }) {
  return (
    <form className='flex gap-4 justify-center' onSubmit={handleSubmit}>
      <input
        className='p-2 h-[15px] rounded border-transparent'
        onChange={handleChange} value={search}
        type='text' placeholder='Movie Name'
      />
      <section className='flex flex-col border-solid border-gray-50 rounded p-4'>
        <CheckBoxFilter handle={handleSort} value={sort}>Sort A-Z</CheckBoxFilter>
        <CheckBoxFilter handle={handleOnlyMovies} value={onlyMovies}>Movies</CheckBoxFilter>
      </section>
      <button
        className='bg-sky-400 border-none px-4 rounded h-[35px] border-transparent
        hover:bg-sky-700'
        type='submit'
      >Search
      </button>
    </form>
  )
}
