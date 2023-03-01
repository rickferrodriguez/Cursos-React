import {useState} from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const totalVotes = {}

export default function RandomList () {
  const [anecdote, setAnecdote] = useState(0)

  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    return setAnecdote(random)
  }

  const handleVote = () => {
    totalVotes[anecdote] ??= 0

    totalVotes[anecdote] ++
  }

  return (
    <section className="random-card">
      <p>{anecdotes[anecdote]}</p>
      <div className='random-btn-groug'>
        <button 
          className='btn btn-random'
          onClick={handleClick}
          type="button"
        >
          New anecdotes
        </button>
        <button 
          className='btn'
          onClick={handleVote}
          type="button"
        >
          vote
        </button>
      </div>
      <p>Cantidad de votos: {totalVotes[anecdote]}</p>
    </section>
  )
}
