import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar: FC = () => {
    const [activeTab, setActiveTab] = useState<'hospital' | 'lab'>('hospital')

    return (
        <div className="w-full bg-white flex justify-center">
        <nav className="flex justify-between items-center px-6 py-3 w-full">
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <div className="text-blue-600 font-semibold">
                        <Link to="/" className="flex items-center">
                            Book My
                            <span className="text-gray-700">Appointments</span>
                        </Link>
                    </div>
                    <span className="text-xs text-gray-500">Making Medical Appointments made easy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 w-[280px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Gachibowli, Hyderabad"
                            className="bg-transparent outline-none w-full text-gray-600 placeholder-gray-400"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex items-center ml-4 bg-white rounded-full shadow-sm">
                        <div className="relative flex items-center rounded-full">
                            <button
                                onClick={() => setActiveTab('hospital')}
                                className="flex items-center gap-1 px-4 pr-2 py-2 z-10"
                            >
                                <div className={`flex items-center justify-center ${activeTab === 'hospital' ? 'bg-blue-500 rounded-full p-2' : ''}`}>
                                    <img
                                        src={activeTab === 'hospital' ? '/icons/hospital-white.png' : '/icons/hospital-gray.png'}
                                        alt="Hospital"
                                        className="w-5 h-5"
                                    />
                                </div>
                                {activeTab !== 'hospital' && <span className="text-gray-600">Hospitals</span>}
                            </button>
                            <button
                                onClick={() => setActiveTab('lab')}
                                className="flex items-center gap-1 px-4 pl-0 py-2 z-10"
                            >
                                <div className={`flex items-center justify-center ${activeTab === 'lab' ? 'bg-blue-500 rounded-full p-2' : ''}`}>
                                    <img
                                        src={activeTab === 'lab' ? '/icons/lab-white.png' : '/icons/lab-gray.png'}
                                        alt="Lab"
                                        className="w-5 h-5"
                                    />
                                </div>
                                {activeTab !== 'lab' && <span className="text-gray-600">Labs</span>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/health-records" className="text-[#AEAEAE]">Health Records</Link>
                    <Link to="/help" className="text-[#AEAEAE]">Help & Support</Link>
                    <div className="flex items-center gap-2 bg-gray-400 rounded-full px-1 py-1">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src="/profile-placeholder.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-black font-semibold">Rachana Ranade</span>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar