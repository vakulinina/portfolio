import { useState, useCallback, useRef } from 'react'

interface ProjectCardProps {
  images: string[]
}

const Chevron = ({ direction }: { direction: 'left' | 'right' }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`size-6 ${direction === 'right' ? 'rotate-180' : ''}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  )
}

const SliderButton = ({
  onClick,
  className,
  direction,
}: {
  onClick: () => void
  className?: string
  direction: 'left' | 'right'
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 h-full flex items-center group ${
        direction === 'left' ? 'pl-2 left-0' : 'pr-2 right-0'
      } ${className}`}
    >
      <div
        className={`bg-primary/10 text-white p-2 rounded-md group-hover:bg-primary/60`}
      >
        <Chevron direction={direction} />
      </div>
    </button>
  )
}

export const ProjectPreview = ({ images }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slideRef = useRef<HTMLDivElement>(null)

  // Handle the transition end event
  const handleTransitionEnd = useCallback(() => {
    // Skip transition logic for single images
    if (images.length <= 1) {
      setIsTransitioning(false)
      return
    }

    if (slideRef.current) {
      // If we're at the clone of the last slide (at position 0)
      if (currentImageIndex === -1) {
        slideRef.current.style.transition = 'none'
        setCurrentImageIndex(images.length - 1)
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'transform 500ms ease-in-out'
          }
        }, 10)
      } else if (currentImageIndex === images.length) {
        slideRef.current.style.transition = 'none'
        setCurrentImageIndex(0)
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'transform 500ms ease-in-out'
          }
        }, 10)
      }
    }
    setIsTransitioning(false)
  }, [currentImageIndex, images.length])

  const nextSlide = useCallback(() => {
    if (!isTransitioning && images.length > 1) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => prev + 1)
    }
  }, [isTransitioning, images.length])

  const prevSlide = useCallback(() => {
    if (!isTransitioning && images.length > 1) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => prev - 1)
    }
  }, [isTransitioning, images.length])

  // Create the array of slides with clones for infinite effect
  const getSlides = () => {
    if (images.length === 0) return []

    // For a single image, just return it
    if (images.length === 1) return images

    // For multiple images, add clones at the beginning and end
    const lastImage = images[images.length - 1]
    const firstImage = images[0]

    return [lastImage, ...images, firstImage]
  }

  const slides = getSlides()

  // Calculate the transform position
  const getTransformValue = () => {
    // If there's only one image, don't transform
    if (images.length === 1) return 'translateX(0)'

    // Adjust for the cloned slide at the beginning
    const adjustedIndex = currentImageIndex + 1
    return `translateX(-${(adjustedIndex * 100) / slides.length}%)`
  }

  return (
    <div className="shadow-md rounded-xl h-[300px] sm:h-[375px] md:h-[400px] w-full relative border border-white bg-background hover:md:scale-130 transition-all duration-300 delay-300 overflow-hidden">
      <div className="w-full h-full relative overflow-hidden">
        {slides.length > 0 && (
          <div
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out h-full w-full"
            style={{
              transform: getTransformValue(),
              width: `${slides.length * 100}%`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain rounded-md flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <>
          <SliderButton onClick={prevSlide} direction="left" />
          <SliderButton onClick={nextSlide} direction="right" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex
                    ? 'bg-primary/60'
                    : 'bg-primary/10'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
