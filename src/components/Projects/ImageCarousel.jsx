import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './ImageCarousel.css'

const variants = {
  enter: (direction) => ({ opacity: 0, x: direction >= 0 ? 36 : -36 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction >= 0 ? -36 : 36 }),
}

export default function ImageCarousel({ images, title }) {
  const [[index, direction], setIndex] = useState([0, 0])

  if (!images || images.length === 0) return null

  const single = images.length === 1

  const go = (delta) => {
    setIndex(([current]) => [(current + delta + images.length) % images.length, delta])
  }

  const jumpTo = (target) => {
    setIndex(([current]) => [target, target > current ? 1 : -1])
  }

  return (
    <>
      <motion.div
        className="carousel-frame"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="carousel-frame__viewport">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`${title} screenshot ${index + 1} of ${images.length}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />
          </AnimatePresence>
        </div>

        {!single && (
          <>
            <button
              type="button"
              className="carousel-frame__arrow carousel-frame__arrow--prev"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="carousel-frame__arrow carousel-frame__arrow--next"
              onClick={() => go(1)}
              aria-label="Next screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </motion.div>

      {!single && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dots__dot ${i === index ? 'carousel-dots__dot--active' : ''}`}
              onClick={() => jumpTo(i)}
              aria-label={`Show screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </>
  )
}
