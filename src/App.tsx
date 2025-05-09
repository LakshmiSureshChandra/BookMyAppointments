import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HospitalDetails from './pages/HospitalDetails/HospitalDetails'
import DoctorDetails from './pages/DoctorDetails/DoctorDetails'
import Booking from './pages/Booking/Booking'
import ProfileSettings from './pages/ProfileSettings/ProfileSettings'
import RecentBookings from './pages/RecentBookings/RecentBookings'
import HealthRecords from './pages/HealthRecords/HealthRecords'
import { ServiceProvider } from './context/ServiceContext';

function App() {
    return (
        <ServiceProvider>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hospital/:id" element={<HospitalDetails />} />
                        <Route path="/doctor/:id" element={<DoctorDetails />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/profile" element={<ProfileSettings />} />
                        <Route path="/bookings" element={<RecentBookings />} />
                        <Route path="/health-records" element={<HealthRecords />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ServiceProvider>
    )
}

export default App
