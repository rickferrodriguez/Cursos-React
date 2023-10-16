export function Filters() {
  return (
    <form className='flex gap-3 text-gray-300'>
      <label htmlFor='searchMovie'>Search</label>
      <input
        className='h-6 rounded-sm px-1'
        type='text'
        placeholder='Avengers, Batman, Avatar, ...'
      />

      <section className='flex flex-col gap-1'>
        <span>Filters</span>
        <div className='flex gap-2'>
          <input type='checkbox' name='date' id='date' />
          <label htmlFor='date'>Date</label>
        </div>
        <div className='flex gap-2'>
          <input type='checkbox' name='series' id='series' />
          <label htmlFor='series'>Series</label>
        </div>
      </section>
      <button className='bg-slate-700 px-2 py-1 rounded-md'>Search</button>
    </form>
  )
}
