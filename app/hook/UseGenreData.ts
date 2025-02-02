'use client'

import { useEffect, useState } from 'react'
import { fetchGenre } from '../services/GenreService'
import { Category, Film } from '../type/GenreType'

export default function UseGenreData() {
  const [films, setFilms] = useState<string[]>([])

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchGenre()

        if (data) {
          const imageMovie = data.datas.flatMap((category: Category) =>
            category.films.map((film: Film) => film.image),
          )
          setFilms(imageMovie)
        }
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    loadMovies()
  }, [])

  return { films }
}
