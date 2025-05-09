import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HospitalDetails from './pages/HospitalDetails/HospitalDetails'
import DoctorDetails from './pages/DoctorDetails/DoctorDetails'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hospital/:id" element={<HospitalDetails />} />
                    <Route path="/doctor/:id" element={<DoctorDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
