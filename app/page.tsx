import HeroInfo from './components/ShownMovie/HeroInfo'
import HeroBackground from './components/ShownMovie/HeroBackground'

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <section className="absolute h-[65vh] w-full lg:h-[56vw]">
        <HeroBackground />
        <HeroInfo />
      </section>
    </div>
  )
}
