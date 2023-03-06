
import Dashboard from './components/Dashboard'
import { fetchData } from './utils/fetchData'

// raw and unhandled API fetch - should've use custom React hook or Redux (preferred choice)


function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  )
}

export default App
