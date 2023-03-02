import {useState} from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function Button ({fun, children}) {
  return (
  <button onClick={fun} >{children}</button>
  )
}

function RenderText ({children}) {
  return (
  <p>{children}</p>
  )
}

function LoopAnecdotes () {

  const [anecdote, setAnecdote] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    let max = anecdotes.length
    let numeroRandom = Math.floor(Math.random() * max)
    setAnecdote(numeroRandom)
  }

  const handleVote = () => {
    const votesCopy = [...vote]
    votesCopy[anecdote] += 1
    setVote(votesCopy)
    console.log(votesCopy)
  }
  const renderVote = (vote[anecdote] > 0 )
    ? `existe un numero de votos: ${vote[anecdote]}`
    : 'no hay votos'

  const mostVotes = vote.indexOf(Math.max(...vote))

  
  return (
    <div>
      <RenderText className='anecdote-text'>{anecdotes[anecdote]}</RenderText>
      <Button fun={randomAnecdote}>Nex anecdote</Button>
      <Button fun={handleVote}> Vote</Button>
      <RenderText> Votos: {renderVote}</RenderText>
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[mostVotes]}</p>
    </div>
  )
}

function Anecdotas () {
  return (
    <LoopAnecdotes anecdotes={anecdotes} />
  )
}



export default Anecdotas
