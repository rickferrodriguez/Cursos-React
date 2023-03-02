import {useState} from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votesAnecdotes = {0: 0}
function LoopAnecdotes () {

  const [anecdote, setAnecdote] = useState(0)
  const [votes, setvotes] = useState(votesAnecdotes[0])
  console.log(votes)


  const randomAnecdote = () => {
    let max = anecdotes.length
    let numeroRandom = Math.floor(Math.random() * max)
    setAnecdote(numeroRandom)
  }

  const updateVote = () => {
    votesAnecdotes[anecdote] ??= 0
    votesAnecdotes[anecdote] ++
    console.log(votesAnecdotes)
  }
  return (
    <div>
      <p>{anecdotes[anecdote]}</p>
      <button
        onClick={randomAnecdote}
      >
        Next anecdotes
      </button>
      <button
        onClick={updateVote}
      >
        Vote
      </button>
      <p>Votos: {votes}</p>
    </div>
  )
}

function Anecdotas () {
  return (
    <LoopAnecdotes anecdotes={anecdotes} />
  )
}



export default Anecdotas
