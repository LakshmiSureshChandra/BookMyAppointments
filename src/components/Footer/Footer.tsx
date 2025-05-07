import type { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
    return (
        <footer className="w-full bg-gray-50 py-12 pb-0 px-6">
            <div className="flex lg:flex-row justify-between gap-8">
                {/* Logo and Newsletter Section */}
                <div className="max-w-md">
                    <div className="mb-4">
                        <Link to="/" className="flex items-center">
                            <span className="text-blue-500">Book My</span>
                            <span className="text-gray-700">Appointments</span>
                        </Link>
                        <p className="text-gray-500 text-sm mt-1">Booking Medical Appointments made easy</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Signup for Latest Offers & Updates</p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Sections */}
                <div className="flex flex-wrap gap-12">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-700 font-medium mb-4">Quick links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-500 hover:text-gray-700 text-sm">About us</Link></li>
                            <li><Link to="/features" className="text-gray-500 hover:text-gray-700 text-sm">Features</Link></li>
                            <li><Link to="/pricing" className="text-gray-500 hover:text-gray-700 text-sm">Pricing</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-gray-700 text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Security */}
                    <div>
                        <h3 className="text-gray-700 font-medium mb-4">Legal & Security</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-500 hover:text-gray-700 text-sm">Terms & Conditions</Link></li>
                            <li><Link to="/security" className="text-gray-500 hover:text-gray-700 text-sm">Security Measures</Link></li>
                            <li><Link to="/compliance" className="text-gray-500 hover:text-gray-700 text-sm">Compliance</Link></li>
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h3 className="text-gray-700 font-medium mb-4">Other links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faqs" className="text-gray-500 hover:text-gray-700 text-sm">FAQs</Link></li>
                            <li><Link to="/report" className="text-gray-500 hover:text-gray-700 text-sm">Report an issue</Link></li>
                            <li><Link to="/careers" className="text-gray-500 hover:text-gray-700 text-sm">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:max-w-[300px]">
                    <img 
                        src="/images/footer.png" 
                        alt="Healthcare professionals" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer