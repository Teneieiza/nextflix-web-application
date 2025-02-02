'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import {
  NavigationDataType,
  navigationData,
} from '@/app/constants/NavigationData'

interface CategorieProps {
  customClassName?: string
}

export default function Categorie({ customClassName = '' }: CategorieProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleCategory = () => setIsOpen((prev) => !prev)

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleCategory()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const filteredNavigation = isMobile
    ? navigationData.filter((item) => item.mobile === false)
    : navigationData

  return (
    <div className="relative" ref={dropdownRef}>
      <span
        role="button"
        tabIndex={0}
        onClick={toggleCategory}
        onKeyDown={handleKeyDown}
        className="cursor-pointer transition duration-300 hover:text-gray-300"
      >
        Categorie ▼
      </span>

      {isOpen && (
        <div
          className={`absolute mt-2 w-60 space-y-2 rounded-lg border bg-white p-4 shadow-lg ${customClassName}`}
        >
          {filteredNavigation.map((item: NavigationDataType, index: number) => (
            <p
              key={index}
              className="cursor-pointer text-black hover:text-red-500"
            >
              {item.message}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
