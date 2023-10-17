export function Filters() {
  const submitForm = (env) => {
    env.preventDefault()
  }
  return (
    <form className='flex align-top gap-3 text-gray-300' onSubmit={submitForm}>
      <input
        className='h-6 rounded-sm px-1'
        type='text'
        placeholder='Avengers, Batman, Avatar, ...'
      />

      <fieldset className='flex flex-col gap-1'>
        <legend>Filters</legend>
        <div className='flex gap-2'>
          <input type='checkbox' name='date' id='date' />
          <label htmlFor='date'>Order By Date</label>
        </div>
        <div className='flex gap-2'>
          <input type='checkbox' name='series' id='series' />
          <label htmlFor='series'>Series</label>
        </div>
        <div className='flex gap-2'>
          <input type='checkbox' name='movies' id='movies' />
          <label htmlFor='movies'>Movies</label>
        </div>
      </fieldset>
      <button
        type='submit'
        className='bg-slate-700 h-6 w-auto px-4 rounded-md font-bold'
      >
        Search
      </button>
    </form>
  )
}
