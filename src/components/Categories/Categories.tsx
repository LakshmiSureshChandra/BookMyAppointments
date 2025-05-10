import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useService } from '../../context/ServiceContext'

type PreventScrollHandlers = {
    preventScroll: (e: Event) => void;
    preventScrollKeys: (e: KeyboardEvent) => void;
};

// Extend the window object
declare global {
    interface Window {
        _preventScroll?: PreventScrollHandlers;
    }
}

interface Category {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const Categories: FC = () => {
    const { serviceType } = useService()
    const [selectedCategory, setSelectedCategory] = useState<string>('cardiology');
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY * 2;
            }
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, []);
    const hospitalCategories: Category[] = [
        {
            id: 'cardiology',
            name: 'Cardiology',
            icon: '/icons/specialties/cardiology.png',
            description: 'Heart & Cardiovascular Care'
        },
        {
            id: 'orthopedics',
            name: 'Orthopedics',
            icon: '/icons/specialties/orthopedics.png',
            description: 'Bone & Joint Care'
        },
        {
            id: 'neurology',
            name: 'Neurology',
            icon: '/icons/cat.png',
            description: 'Brain & Nervous System'
        },
        {
            id: 'dermatology',
            name: 'Dermatology',
            icon: '/icons/cat.png',
            description: 'Skin & Hair Care'
        },
        {
            id: 'pediatrics',
            name: 'Pediatrics',
            icon: '/icons/cat.png',
            description: 'Child Healthcare'
        },
        {
            id: 'dentistry',
            name: 'Dentistry',
            icon: '/icons/cat.png',
            description: 'Dental Care'
        },
        {
            id: 'gastroenterology',
            name: 'Gastroenterology',
            icon: '/icons/cat.png',
            description: 'Digestive System Care'
        },
        {
            id: 'urology',
            name: 'Urology',
            icon: '/icons/cat.png',
            description: 'Urinary & Reproductive Health'
        }
    ]
    const labCategories: Category[] = [
        {
            id: 'blood-test',
            name: 'Blood Tests',
            icon: '/icons/labs/blood-test.png',
            description: 'Complete Blood Analysis'
        },
        {
            id: 'imaging',
            name: 'Imaging',
            icon: '/icons/labs/imaging.png',
            description: 'X-Ray, CT Scan, MRI'
        },
        {
            id: 'pathology',
            name: 'Pathology',
            icon: '/icons/labs/pathology.png',
            description: 'Tissue & Sample Analysis'
        },
        {
            id: 'microbiology',
            name: 'Microbiology',
            icon: '/icons/labs/microbiology.png',
            description: 'Bacterial & Viral Tests'
        },
        {
            id: 'biochemistry',
            name: 'Biochemistry',
            icon: '/icons/labs/biochemistry.png',
            description: 'Chemical Analysis'
        },
        {
            id: 'hormone',
            name: 'Hormone Tests',
            icon: '/icons/labs/hormone.png',
            description: 'Endocrine Analysis'
        }
    ];

    const categories = serviceType === 'hospitals' ? hospitalCategories : labCategories;

    return (
        <div className="w-full py-1.5 px-2 lg:py-3 lg:px-6">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-1.5 lg:gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth pb-1"
            >
                {categories.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-1.5 lg:gap-2 p-1.5 lg:p-2 rounded-md lg:rounded-xl transition-all cursor-pointer shrink-0 w-[140px] lg:w-[200px]
                            ${selectedCategory === category.id
                                ? 'bg-[#0066FF] text-white'
                                : 'bg-[#F8F8F8] hover:bg-gray-100'
                            }`}
                    >
                        <div className={`w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-full p-1 lg:p-1.5
                            ${selectedCategory === category.id ? 'bg-white/20' : 'bg-white'}`}>
                            <img
                                src={category.icon}
                                alt={category.name}
                                className={`w-2.5 h-2.5 lg:w-4 lg:h-4 object-contain ${selectedCategory === category.id ? 'brightness-0 invert' : ''}`}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className={`text-[10px] lg:text-xs font-medium truncate ${selectedCategory === category.id ? 'text-white' : 'text-gray-800'}`}>
                                {category.name}
                            </h3>
                            <p className={`text-[8px] lg:text-[10px] truncate ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                                {category.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories