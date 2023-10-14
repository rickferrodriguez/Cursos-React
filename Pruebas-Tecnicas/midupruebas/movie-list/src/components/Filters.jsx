export function Filters() {
  return (
    <form className='flex gap-3 text-gray-300'>
      <label htmlFor='searchMovie'>Search for name</label>
      <input type='text' />
      <button className='bg-slate-700 px-2 py-1 rounded-md'>Search</button>
    </form>
  )
}
