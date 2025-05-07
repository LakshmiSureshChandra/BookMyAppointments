import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import HospitalList from './components/HospitalList/HospitalList'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar />
          <Banner />
          <Categories />
          <HospitalList />
          <Footer />
        </>
      </div>
    </BrowserRouter>
  )
}

export default App
