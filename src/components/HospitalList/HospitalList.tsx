import { useState } from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useService } from '../../context/ServiceContext'

interface Facility {
    id: string;
    name: string;
    logo: string;
    description: string;
    specialties: string[];
    distance: string;
    isTopRated: boolean;
    departmentsCount: number;
}

const HospitalList: FC = () => {
    const { serviceType } = useService()
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const hospitals: Facility[] = [
        {
            id: '1',
            name: 'Apollo Super Speciality Hospital',
            logo: '/logos/apollo.png',
            description: 'Lorem ipsum dolor sit amet, consecurfaf afd adipiscing elit, sed do Lorem ipsum do...',
            specialties: ['Cardiology', 'General Medicine', 'Pulmonologist', 'Gynacologist'],
            distance: '4.2 Kms',
            isTopRated: true,
            departmentsCount: 7
        },{
            id: '2',
            name: 'Fortis Health & Research Centre',
            logo: '/logos/fortis.png',
            description: 'Trusted multi-speciality hospital with advanced medical care and diagnostics.',
            specialties: ['Orthopedics', 'Neurology', 'Dermatology', 'Cardiology'],
            distance: '6.8 Kms',
            isTopRated: true,
            departmentsCount: 9
        },
        {
            id: '3',
            name: 'Medico Life Hospital',
            logo: '/logos/medico.png',
            description: 'Comprehensive healthcare services with a focus on family wellness.',
            specialties: ['General Medicine', 'Pediatrics', 'Dentistry'],
            distance: '3.1 Kms',
            isTopRated: false,
            departmentsCount: 5
        },
        {
            id: '4',
            name: 'Global Care Hospital',
            logo: '/logos/global.png',
            description: '24/7 emergency care and international treatment standards.',
            specialties: ['Emergency', 'Cardiology', 'Urology'],
            distance: '7.5 Kms',
            isTopRated: true,
            departmentsCount: 10
        },
        {
            id: '5',
            name: 'City Heart Centre',
            logo: '/logos/cityheart.png',
            description: 'Specialized in heart and vascular care with experienced cardiologists.',
            specialties: ['Cardiology', 'Pulmonologist'],
            distance: '2.9 Kms',
            isTopRated: true,
            departmentsCount: 4
        },
        {
            id: '6',
            name: 'Green Leaf Hospital',
            logo: '/logos/greenleaf.png',
            description: 'Eco-friendly hospital with a focus on holistic healing.',
            specialties: ['Ayurveda', 'General Medicine', 'Dermatology'],
            distance: '5.2 Kms',
            isTopRated: false,
            departmentsCount: 6
        },
        {
            id: '7',
            name: 'Sunrise Multispeciality Hospital',
            logo: '/logos/sunrise.png',
            description: 'State-of-the-art facility providing quality healthcare services.',
            specialties: ['Neurology', 'Gastroenterology', 'Orthopedics'],
            distance: '8.4 Kms',
            isTopRated: true,
            departmentsCount: 8
        },
        {
            id: '8',
            name: 'Harmony Children’s Hospital',
            logo: '/logos/harmony.png',
            description: 'Dedicated to pediatric care with modern neonatal facilities.',
            specialties: ['Pediatrics', 'General Medicine'],
            distance: '3.7 Kms',
            isTopRated: true,
            departmentsCount: 3
        },
        {
            id: '9',
            name: 'Metro Skin & Hair Clinic',
            logo: '/logos/metro.png',
            description: 'Experts in dermatological and cosmetic treatments.',
            specialties: ['Dermatology', 'Cosmetology'],
            distance: '1.9 Kms',
            isTopRated: false,
            departmentsCount: 2
        },
        {
            id: '10',
            name: 'Silverline Dental Care',
            logo: '/logos/silverline.png',
            description: 'Full-range dental solutions with advanced equipment.',
            specialties: ['Dentistry'],
            distance: '2.3 Kms',
            isTopRated: false,
            departmentsCount: 1
        },
        {
            id: '11',
            name: 'LifePoint Women’s Hospital',
            logo: '/logos/lifepoint.png',
            description: 'Comprehensive healthcare for women at every stage of life.',
            specialties: ['Gynacologist', 'Obstetrics', 'Endocrinology'],
            distance: '4.9 Kms',
            isTopRated: true,
            departmentsCount: 6
        },
        {
            id: '12',
            name: 'Zenith Hospital',
            logo: '/logos/zenith.png',
            description: 'Trusted name in neurology and critical care services.',
            specialties: ['Neurology', 'Intensive Care', 'Psychiatry'],
            distance: '9.1 Kms',
            isTopRated: true,
            departmentsCount: 7
        },
        {
            id: '13',
            name: 'TruHealth Clinic',
            logo: '/logos/truhealth.png',
            description: 'Family-friendly clinic with general and specialist care.',
            specialties: ['General Medicine', 'Pediatrics', 'Orthopedics'],
            distance: '2.6 Kms',
            isTopRated: false,
            departmentsCount: 4
        },
        {
            id: '14',
            name: 'Nova Kidney & Urology Centre',
            logo: '/logos/nova.png',
            description: 'Specialists in kidney disorders and urological care.',
            specialties: ['Nephrology', 'Urology'],
            distance: '5.5 Kms',
            isTopRated: true,
            departmentsCount: 3
        },
        {
            id: '15',
            name: 'PrimeCare Wellness Hospital',
            logo: '/logos/primecare.png',
            description: 'Modern wellness-focused care with personalized treatment.',
            specialties: ['Cardiology', 'Pulmonologist', 'Dermatology'],
            distance: '6.1 Kms',
            isTopRated: false,
            departmentsCount: 6
        },
        {
            id: '16',
            name: 'CurePath Diagnostics & Hospital',
            logo: '/logos/curepath.png',
            description: 'Advanced diagnostic services and outpatient facilities.',
            specialties: ['Pathology', 'Radiology', 'General Medicine'],
            distance: '3.4 Kms',
            isTopRated: true,
            departmentsCount: 5
        },
        {
            id: '17',
            name: 'WellSpring ENT & Allergy Centre',
            logo: '/logos/wellspring.png',
            description: 'Focused on ear, nose, throat, and allergy treatment.',
            specialties: ['ENT', 'Allergy & Immunology'],
            distance: '2.1 Kms',
            isTopRated: false,
            departmentsCount: 2
        },
        {
            id: '18',
            name: 'Bloom IVF & Fertility Clinic',
            logo: '/logos/bloom.png',
            description: 'Specialists in fertility treatments and assisted conception.',
            specialties: ['Fertility', 'Gynacologist'],
            distance: '4.0 Kms',
            isTopRated: true,
            departmentsCount: 3
        }
        
        // ... add more hospitals
    ];

    const labs: Facility[] = [
        {
            id: '1',
            name: 'LifeCare Diagnostics',
            logo: '/logos/lifecare.png',
            description: 'Advanced diagnostic center with state-of-the-art equipment.',
            specialties: ['Blood Tests', 'Imaging', 'Pathology'],
            distance: '2.8 Kms',
            isTopRated: true,
            departmentsCount: 5
        },
        {
            id: '2',
            name: 'MedLab Research Centre',
            logo: '/logos/medlab.png',
            description: 'Comprehensive laboratory services with quick results.',
            specialties: ['Microbiology', 'Biochemistry', 'Molecular Testing'],
            distance: '3.5 Kms',
            isTopRated: true,
            departmentsCount: 4
        },
        // Add more labs as needed
    ];

    const facilities = serviceType === 'hospitals' ? hospitals : labs;
    const totalPages = Math.ceil(facilities.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedFacilities = facilities.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full p-3 lg:p-6">
            <div className="flex flex-col items-center gap-4 lg:gap-6">
                <div className="grid grid-cols-1 gap-4 lg:gap-6 w-full max-w-[400px] lg:max-w-none lg:grid-cols-3">
                    {displayedFacilities.map((facility) => (
                        <div key={facility.id} className="bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-sm border border-gray-100 w-full">
                            <div className="flex gap-2 lg:gap-3">
                                <img src={facility.logo} alt={facility.name} className="w-14 h-14 lg:w-16 lg:h-16 object-contain" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base line-clamp-1">{facility.name}</h3>
                                    <p className="text-gray-500 text-xs lg:text-sm line-clamp-2">{facility.description}</p>
                                </div>
                            </div>
                            
                            <div className="mt-3 lg:mt-4 flex flex-wrap items-center gap-1 lg:gap-1.5">
                                {facility.specialties.slice(0, 3).map((specialty, index) => (
                                    <span key={index} className="px-1.5 lg:px-2 py-0.5 bg-gray-50 rounded-full text-xs text-gray-600 whitespace-nowrap">
                                        {specialty}
                                    </span>
                                ))}
                                {facility.specialties.length > 3 && (
                                    <span className="px-1.5 lg:px-2 py-0.5 bg-gray-50 rounded-full text-xs text-blue-600 whitespace-nowrap">
                                        +{facility.specialties.length - 3} more
                                    </span>
                                )}
                            </div>

                            <div className="mt-3 lg:mt-4 pb-2 flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm">
                                <div className="flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {facility.distance}
                                </div>
                                {facility.isTopRated && (
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Top Rated
                                    </div>
                                )}
                                <div className="flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                    </svg>
                                    {facility.departmentsCount}+ {serviceType === 'hospitals' ? 'Departments' : 'Services'}
                                </div>
                            </div>

                            <Link 
                                to={`/${serviceType === 'hospitals' ? 'hospital' : 'lab'}/${facility.id}`}
                                className="inline-block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs lg:text-sm"
                            >
                                Explore
                            </Link>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center gap-1.5 lg:gap-2 mt-4 lg:mt-6">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-colors text-sm
                                    ${currentPage === page 
                                        ? 'bg-blue-500 text-white' 
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HospitalList