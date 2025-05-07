import { useState, useEffect } from 'react'
import type { FC } from 'react'

const Banner: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const bannerImages = [
    {
      url: '/banners/banner1.jpg',
      alt: 'Wellness Festival - 25% off on select products'
    },
    {
      url: '/banners/banner2.jpg',
      alt: 'Comprehensive Health Checkup'
    },
    {
      url: '/banners/banner3.jpg',
      alt: 'Special Medical Offers'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full flex flex-col items-center py-3 px-6">
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-500"
            style={{
              opacity: currentIndex === index ? 1 : 0,
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="flex gap-2 mt-4">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Banner