import { useState } from 'react'
import type { FC } from 'react'

interface Booking {
    id: string;
    doctorName: string;
    doctorImage: string;
    qualification: string;
    specialization: string;
    hospital: string;
    location: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    date: string;
    time: string;
    status: 'upcoming' | 'completed';
}
interface RescheduleData {
    date: string;
    time: string;
}

const BookingsList: FC = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
    const [rescheduleData, setRescheduleData] = useState<RescheduleData>({
        date: '',
        time: ''
    });

    const bookings: Booking[] = [
        {
            id: '1',
            doctorName: 'Dr. James Deen Avora',
            doctorImage: '/doctors/doctor1.png',
            qualification: 'MBBS, MD. in Pulmonology',
            specialization: 'General Physician',
            hospital: 'Apollo Super Speciality Hospital',
            location: 'Gachibowli, Hyderabad',
            coordinates: {
                lat: 17.4400,
                lng: 78.3489
            },
            date: 'Mar 06, 2025',
            time: '10:30 AM',
            status: 'upcoming'
        },
        // Add more bookings as needed
    ];

    const filteredBookings = bookings.filter(booking =>
        booking.status === activeTab &&
        (searchQuery === '' ||
            booking.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.hospital.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const openGoogleMaps = (coordinates: { lat: number; lng: number }) => {
        window.open(`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=17`, '_blank');
    };

    const handleReschedule = (booking: Booking) => {
        setSelectedBooking(booking);
        setRescheduleData({
            date: booking.date,
            time: booking.time
        });
        setIsRescheduleModalOpen(true);
    };

    const handleViewDetails = (booking: Booking) => {
        setSelectedBooking(booking);
        setIsDetailsModalOpen(true);
    };

    const handleRescheduleSubmit = () => {
        // Here you would typically make an API call to update the booking
        console.log('Rescheduling booking:', selectedBooking?.id, rescheduleData);
        setIsRescheduleModalOpen(false);
    };

    // Add these modal components before the return statement
    // Update DetailsModal backdrop
    const DetailsModal = () => (
        selectedBooking && (
            <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">Appointment Details</h3>
                        <button onClick={() => setIsDetailsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <img src={selectedBooking.doctorImage} alt={selectedBooking.doctorName} className="w-20 h-20 rounded-full object-cover" />
                            <div>
                                <h4 className="text-lg font-semibold">{selectedBooking.doctorName}</h4>
                                <p className="text-gray-600">{selectedBooking.qualification}</p>
                                <p className="text-gray-500">{selectedBooking.specialization}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500">Hospital</p>
                                <p className="font-medium">{selectedBooking.hospital}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{selectedBooking.location}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Date</p>
                                <p className="font-medium">{selectedBooking.date}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Time</p>
                                <p className="font-medium">{selectedBooking.time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => setIsDetailsModalOpen(false)}
                            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    // Update RescheduleModal backdrop
    const RescheduleModal = () => (
        selectedBooking && (
            <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">Reschedule Appointment</h3>
                        <button onClick={() => setIsRescheduleModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Date</label>
                            <input
                                type="date"
                                value={rescheduleData.date}
                                onChange={(e) => setRescheduleData({ ...rescheduleData, date: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Time</label>
                            <input
                                type="time"
                                value={rescheduleData.time}
                                onChange={(e) => setRescheduleData({ ...rescheduleData, time: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            onClick={() => setIsRescheduleModalOpen(false)}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleRescheduleSubmit}
                            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Confirm Reschedule
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    return (
        <>
        <div className="w-[97%] mx-auto mt-6 mb-8">
            <div className="bg-white rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Your Appointments</h2>

                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search appointments..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={`px-4 py-2 rounded-full ${activeTab === 'upcoming'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        Upcoming Appointments
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-4 py-2 rounded-full ${activeTab === 'completed'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        Completed Appointments
                    </button>
                </div>
                <div className="space-y-4">
                    {filteredBookings.map((booking) => (
                        <div key={booking.id} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <img
                                    src={booking.doctorImage}
                                    alt={booking.doctorName}
                                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
                                />
                                <div className="flex-1 space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-lg font-semibold text-gray-800">{booking.doctorName}</h3>
                                            <p className="text-gray-600">{booking.qualification}</p>
                                            <p className="text-gray-500 text-sm">{booking.specialization}</p>
                                        </div>
                                        <div className="flex items-center justify-center sm:justify-end gap-2 text-sm">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-gray-600 whitespace-nowrap">{booking.date}</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-600">{booking.time}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            <span className="text-center sm:text-left">{booking.hospital}</span>
                                        </div>
                                        <button
                                            onClick={() => openGoogleMaps(booking.coordinates)}
                                            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {booking.location}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col sm:flex-row justify-center sm:justify-end gap-3">
                                {booking.status === 'upcoming' ? (
                                    <>
                                        <button
                                            onClick={() => handleViewDetails(booking)}
                                            className="w-full sm:w-auto px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => handleReschedule(booking)}
                                            className="w-full sm:w-auto px-4 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50"
                                        >
                                            Reschedule
                                        </button>
                                        <button
                                            onClick={() => {/* Handle cancellation */}}
                                            className="w-full sm:w-auto px-4 py-2 text-sm text-red-600 hover:text-red-700 border border-red-200 rounded-lg hover:bg-red-50"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {/* Handle feedback */}}
                                            className="w-full sm:w-auto px-4 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50"
                                        >
                                            Give Feedback
                                        </button>
                                        <button
                                            onClick={() => {/* Handle booking */}}
                                            className="w-full sm:w-auto px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                        >
                                            Book Again
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredBookings.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No appointments found</p>
                    </div>
                )}
            </div>
        </div>
            { isDetailsModalOpen && <DetailsModal /> }
            { isRescheduleModalOpen && <RescheduleModal /> }
            </>
    );
}

export default BookingsList