import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';

const Navbar: FC = () => {
    const [activeTab, setActiveTab] = useState<'hospital' | 'lab'>('hospital')

    return (
        <nav className="hidden lg:block px-6 py-3 w-full"> {/* Changed md:block to lg:block */}
            <div className="flex items-center">
                {/* Logo and tagline */}
                <div className="flex flex-col mr-6">
                    <div className="text-blue-600 font-semibold">
                        <Link to="/" className="flex items-center">
                            Book My
                            <span className="text-gray-700">Appointments</span>
                        </Link>
                    </div>
                    <span className="text-xs text-gray-500">Making Medical Appointments made easy</span>
                </div>

                {/* Search box */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 w-[280px] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 100 4z" clipRule="evenodd" />
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

                {/* Toggle buttons */}
                <div className="flex items-center bg-white rounded-full shadow-sm mr-6">
                    <motion.div className="relative flex items-center rounded-full">
                        <button
                            onClick={() => setActiveTab('hospital')}
                            className="flex items-center gap-1 px-4 pr-2 py-2 z-10 h-12"
                        >
                            <motion.div 
                                className={`flex items-center justify-center ${activeTab === 'hospital' ? 'bg-blue-500' : ''}`}
                                initial={false}
                                animate={{
                                    padding: activeTab === 'hospital' ? 8 : 0,
                                    borderRadius: activeTab === 'hospital' ? 9999 : 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <motion.img
                                    src={activeTab === 'hospital' ? '/icons/hospital-white.png' : '/icons/hospital-gray.png'}
                                    alt="Hospital"
                                    className="w-5 h-5"
                                    animate={{ scale: activeTab === 'hospital' ? 1.1 : 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </motion.div>
                            <motion.span 
                                className="text-gray-600"
                                initial={false}
                                animate={{ 
                                    opacity: activeTab !== 'hospital' ? 1 : 0,
                                    width: activeTab !== 'hospital' ? 'auto' : 0
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                Hospitals
                            </motion.span>
                        </button>
                        <button
                            onClick={() => setActiveTab('lab')}
                            className="flex items-center gap-1 px-4 pl-0 py-2 z-10 h-12"
                        >
                            <motion.div 
                                className={`flex items-center justify-center ${activeTab === 'lab' ? 'bg-blue-500' : ''}`}
                                initial={false}
                                animate={{
                                    padding: activeTab === 'lab' ? 8 : 0,
                                    borderRadius: activeTab === 'lab' ? 9999 : 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <motion.img
                                    src={activeTab === 'lab' ? '/icons/lab-white.png' : '/icons/lab-gray.png'}
                                    alt="Lab"
                                    className="w-5 h-5"
                                    animate={{ scale: activeTab === 'lab' ? 1.1 : 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </motion.div>
                            <motion.span 
                                className="text-gray-600"
                                initial={false}
                                animate={{ 
                                    opacity: activeTab !== 'lab' ? 1 : 0,
                                    width: activeTab !== 'lab' ? 'auto' : 0
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                Labs
                            </motion.span>
                        </button>
                    </motion.div>
                </div>

                {/* Navigation links */}
                <div className="flex items-center space-x-6 ml-auto mr-6">
                    <Link to="/health-records" className="text-[#AEAEAE]">Health Records</Link>
                    <Link to="/help" className="text-[#AEAEAE]">Help & Support</Link>
                </div>

                {/* Profile section - pushed to the right */}
                <div className="flex items-center gap-2 bg-[#F3F3F3] rounded-full">
                    <div className="w-8 h-8 rounded-full bg-gray-200 m-1 overflow-hidden">
                        <img src="/profile-placeholder.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-black font-semibold mx-2">Rachana Ranade</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar