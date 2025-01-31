"use client"
import { images } from '@/app/constants/MovieMockData';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function MovieSnap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState<number>(6);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerView(6);
      else if (width >= 1024) setItemsPerView(5);
      else if (width >= 768) setItemsPerView(4);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);


  const groupedImages = images.reduce((acc, img, index) => {
    const groupIndex = Math.floor(index / itemsPerView);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(img);
    return acc;
  }, [] as string[][]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-screen relative overflow-hidden hidden md:block">
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 w-[4%] h-full">
        ◀
      </button>
      <div ref={containerRef} className="flex w-full gap-4 px-[4%] overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scroll">
        {groupedImages.map((group, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 snap-center gap-4 w-full">
            {group.map((src, index) => (
              <div key={index} className="relative h-[200px] w-[50vw] max-w-[50vw]">
                <Image priority aria-hidden src={src} alt="movie" fill className="object-contain rounded-lg" />
              </div>
            ))}
            {group.length < itemsPerView ? (
              <div className="relative h-[200px] w-[50vw] max-w-[50vw]">
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 w-[4%] h-full">
        ▶
      </button>
    </section>
  );
}
