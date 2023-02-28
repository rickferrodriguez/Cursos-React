import {useState} from 'react'
import TwitterCard from './twitterCard.jsx'
import './App.css'

function App() {

  const [follow, setFollow] = useState(false) 
  return (
    <section className="section">
      <h3>You might like</h3>
      <TwitterCard 
        userName='midudev' 
        name='Miguel Angel Durán'
        isFollowing = {follow}
      />
      <TwitterCard 
        userName='IbaiLlanos' 
        name='Ibai Llanos'
        isFollowing
      />
    </section>
  )
}

export default App
