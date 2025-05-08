import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'

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
    const categories: Category[] = [
        {
            id: 'cardiology',
            name: 'Cardiology',
            icon: '/icons/cat.png',
            description: 'Heart & Cardiovascular Care'
        },
        {
            id: 'orthopedics',
            name: 'Orthopedics',
            icon: '/icons/cat.png',
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


    return (
        <div className="w-full py-3 px-6">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                onMouseEnter={() => {
                    const preventScroll = (e: Event) => {
                        if (e instanceof WheelEvent || e instanceof TouchEvent) {
                            e.preventDefault();
                        }
                    };
                
                    const preventScrollKeys = (e: KeyboardEvent) => {
                        const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
                        if (keys.includes(e.keyCode)) {
                            e.preventDefault();
                        }
                    };
                
                    window.addEventListener('wheel', preventScroll, { passive: false });
                    window.addEventListener('touchmove', preventScroll, { passive: false });
                    window.addEventListener('keydown', preventScrollKeys);
                
                    window._preventScroll = { preventScroll, preventScrollKeys };
                }}
                onMouseLeave={() => {
                    const preventScrollStore = window._preventScroll;
                    if (preventScrollStore) {
                        window.removeEventListener('wheel', preventScrollStore.preventScroll);
                        window.removeEventListener('touchmove', preventScrollStore.preventScroll);
                        window.removeEventListener('keydown', preventScrollStore.preventScrollKeys);
                        delete window._preventScroll;
                    }
                }}
            >

                {categories.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 p-2 rounded-xl transition-all cursor-pointer shrink-0 w-[200px]
                            ${selectedCategory === category.id
                                ? 'bg-[#0066FF] text-white'
                                : 'bg-[#F8F8F8] hover:bg-gray-100'
                            }`}
                    >
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full p-1.5
                            ${selectedCategory === category.id ? 'bg-white/20' : 'bg-white'}`}>
                            <img
                                src={category.icon}
                                alt={category.name}
                                className={`w-4 h-4 object-contain ${selectedCategory === category.id ? 'brightness-0 invert' : ''}`}
                            />
                        </div>
                        <div>
                            <h3 className={`text-xs font-medium ${selectedCategory === category.id ? 'text-white' : 'text-gray-800'}`}>
                                {category.name}
                            </h3>
                            <p className={`text-[10px] ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                                {category.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories