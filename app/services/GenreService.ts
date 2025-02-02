'use server'

import axios from 'axios'
import { GenreType } from '@/app/type/GenreType'

export const fetchGenre = async (): Promise<GenreType | null> => {
  try {
    const response = await axios.get<GenreType>(
      `${process.env.NEXT_PUBLIC_PORT}/genre/1365`,
    )
    return response.data
  } catch (error) {
    console.error('Error fetching movies:', error)
    return null
  }
}
