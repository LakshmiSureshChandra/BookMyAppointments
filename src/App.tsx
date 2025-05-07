import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />
      </div>
    </BrowserRouter>
  )
}

export default App
