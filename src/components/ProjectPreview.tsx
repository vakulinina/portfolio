import { useState } from 'react'

interface ProjectCardProps {
  images: string[]
}

export const ProjectPreview = ({ images }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="shadow-md rounded-md p-4 h-[400px] w-full relative border border-white">
      <div className="w-full h-full relative overflow-hidden">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}
    </div>
  )
}
