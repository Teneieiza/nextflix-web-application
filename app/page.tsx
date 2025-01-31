import HeroInfo from './components/home/hero/HeroInfo'
import HeroBackground from './components/home/hero/HeroBackground'
import MovieSnap from './components/home/movie/MovieSnap'

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <HeroBackground />
        <HeroInfo />
      </section>

      {/* MovieSnap Section */}
      <section className="w-full relative">
        <MovieSnap />
      </section>
    </div>
  )
}
