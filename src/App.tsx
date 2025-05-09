import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HospitalDetails from './pages/HospitalDetails/HospitalDetails'
import DoctorDetails from './pages/DoctorDetails/DoctorDetails'
import Booking from './pages/Booking/Booking'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hospital/:id" element={<HospitalDetails />} />
                    <Route path="/doctor/:id" element={<DoctorDetails />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
