export function Filters() {
  return (
    <form className='flex align-top gap-3 text-gray-300'>
      <input
        className='h-6 rounded-sm px-1'
        type='text'
        placeholder='Avengers, Batman, Avatar, ...'
      />

      <section className='flex flex-col gap-1'>
        <div className='flex gap-2'>
          <input type='checkbox' name='date' id='date' />
          <label htmlFor='date'>Date</label>
        </div>
        <div className='flex gap-2'>
          <input type='checkbox' name='series' id='series' />
          <label htmlFor='series'>Series</label>
        </div>
      </section>
      <button className='bg-slate-700 h-6 w-auto px-4 rounded-md font-bold'>
        Search
      </button>
    </form>
  )
}
