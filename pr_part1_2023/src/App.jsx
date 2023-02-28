import TwitterCard from './twitterCard.jsx'
import './App.css'

const users = [
  {
    nombre: 'Miguel Angel Durán',
    userName: 'midudev',
    isFollowing: true
  },
  {
    nombre: 'Ibai Llanos',
    userName: 'IbaiLlanos',
    isFollowing : false
  }
]

function App() {

  return (
    <section className="section">
      <h3>You might like</h3>
      {
        users.map((user) => {
          const {nombre, userName, isFollowing} = user
           return (
            <TwitterCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {nombre}
            </TwitterCard>
           ) 
        })
      }
    </section>
  )
}

export default App
