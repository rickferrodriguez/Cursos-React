import './App.css'
import { Part1} from './components/Part1.jsx'
import { Part2} from './components/Part2.jsx'
import { Part3} from './components/Part3.jsx'



function App() {

  return (
    <div className="tic-container">
      <Part2 className="divisiones"></Part2>
      <Part1 className="divisiones"/>
      <Part3 className="divisiones"></Part3>
    </div>
  )
}

export default App
