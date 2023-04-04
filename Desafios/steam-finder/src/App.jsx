import withResults from './mocks/withResults.json'

function App () {
  const hasGames = withResults?.length > 0
  const mappedGames = withResults?.map(game => ({
    id: game.appId,
    title: game.title,
    image: game.imgUrl,
    url: game.url,
    price: game.price
  }))
  return (
    <div className='w-full py-4 gap-4 flex flex-col p-2'>
      <h1 className='text-2xl font-bold text-center'>STEAM FINDER</h1>
      <form className='flex gap-4 justify-center'>
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
          <ul className='flex flex-col gap-1 list-none bg-sky-950 text-gray-200'>
            {
            mappedGames.map(game => (
              <li
                key={game.id}
                className='border-gray-400 border-t-[1px]  px-2'
              >
                <a href='' className='flex gap-2  py-2'>
                  <img src={game.image} alt='' />
                  <section>
                    <h2 className='text-base'>{game.title}</h2>
                    <p>{game.price}</p>
                  </section>
                </a>
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
