import withResults from './mocks/withResults.json'

function App () {
  const hasGames = withResults?.length > 0
  const mappedGames = withResults?.map(game => ({
    id: game.appId,
    title: game.title
  }))
  return (
    <div className='w-full p-4 gap-4 flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>STEAM FINDER</h1>
      <form className='flex gap-4'>
        <input
          className='rounded'
          type='text'
        />
        <button
          className='bg-sky-300 px-4 py-1 rounded font-semibold'
          type='submit'
        >Search
        </button>
      </form>
      <main>
        {
        hasGames && (
          <ul>
            {
            mappedGames.map(game => (
              <li key={game.id}>
                <p>{game.title}</p>
              </li>
            ))
            }
          </ul>
        )
        }
      </main>
    </div>
  )
}

export default App
