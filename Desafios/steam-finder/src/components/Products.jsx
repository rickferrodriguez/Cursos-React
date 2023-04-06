
export function Products ({ games, showProductDetail }) {
  const hasGames = games?.length > 0
  return (
    hasGames && (
      <ul className='flex flex-col gap-1 list-none bg-sky-950 text-gray-200'>
        {
            games.map((game) => (
              <li
                key={game.id}
                className='border-gray-400 border-t-[1px]  px-2 hover:bg-sky-800'
              >
                <a href='' onClick={showProductDetail} className='flex gap-2  py-2'>
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

  )
}
