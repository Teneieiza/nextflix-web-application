'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import UseGenreData from '@/app/hook/UseGenreData'

export default function MovieSnap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemsPerView, setItemsPerView] = useState<number>(6)

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await axios.get<GenreType>(
  //         `${process.env.NEXT_PUBLIC_PORT}/genre/1365`,
  //       )
  //       const movieData = response.data.datas.flatMap((category: Category) =>
  //         category.films.map((film: Film) => film.image),
  //       )
  //       setFilms(movieData)
  //     } catch (error) {
  //       console.error('Error fetching movies:', error)
  //     }
  //   }

  //   fetchMovies()
  // }, [])

  const { films } = UseGenreData()

  // useEffect(() => {
  //   const loadMovies = async () => {
  //     const movieData = await fetchMovies();
  //     setFilms(movieData);
  //   };

  //   loadMovies();
  // }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width >= 1280) setItemsPerView(6)
      else if (width >= 1024) setItemsPerView(5)
      else if (width >= 768) setItemsPerView(4)
      else setItemsPerView(3)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const groupedImages = films.reduce((acc, img, index) => {
    const groupIndex = Math.floor(index / itemsPerView)
    if (!acc[groupIndex]) acc[groupIndex] = []
    acc[groupIndex].push(img)
    return acc
  }, [] as string[][])

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative hidden w-screen overflow-hidden md:block">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 z-10 h-full w-[4%] -translate-y-1/2 bg-black/50"
      >
        ◀
      </button>
      <div
        ref={containerRef}
        className="hide-scroll flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[4%]"
      >
        {groupedImages.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex w-full shrink-0 snap-center gap-4"
          >
            {group.map((src, index) => (
              <div
                key={index}
                className="relative h-[200px] w-[50vw] max-w-[50vw]"
              >
                <Image
                  priority
                  aria-hidden
                  src={src}
                  alt="movie"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            ))}
            {group.length < itemsPerView ? (
              <div className="relative h-[200px] w-[50vw] max-w-[50vw]"></div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 z-10 h-full w-[4%] -translate-y-1/2 bg-black/50"
      >
        ▶
      </button>
    </section>
  )
}
