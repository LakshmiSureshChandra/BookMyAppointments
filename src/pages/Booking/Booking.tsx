import type { FC } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MobileNavbar from '../../components/Navbar/MobileNavbar'
import Footer from '../../components/Footer/Footer'
import BookingForm from '../../components/BookingForm/BookingForm'

const Booking: FC = () => {
    const [activeTab] = useState<'hospital' | 'lab'>('hospital');

    return (
        <div className="min-h-screen flex flex-col">
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="block lg:hidden sticky top-0 z-30 bg-white">
                <MobileNavbar 
                    activeTab={activeTab}
                    setActiveTab={() => {}} 
                />
            </div>
            
            <BookingForm />
            <Footer />
        </div>
    );
}

export default Booking