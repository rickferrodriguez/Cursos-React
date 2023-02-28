import TwitterCard from './twitterCard.jsx'
import './App.css'

function App() {

  return (
    <section className="section">
      <h3>You might like</h3>
      <TwitterCard 
        userName='midudev' 
        initialIsFollowing = {false}
      >
        Miguel Angel Durán
      </TwitterCard>

      <TwitterCard 
        userName='IbaiLlanos' 
        initialIsFollowing 
      >
        Ibai Llanos
      </TwitterCard>
    </section>
  )
}

export default App
