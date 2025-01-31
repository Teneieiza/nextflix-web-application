import HeroAction from './HeroAction'
import HeroCursory from './HeroCursory'

export default function HeroInfo() {
  return (
    <article className="absolute -bottom-0 left-1/2 flex w-[300px] -translate-x-1/2 flex-col gap-8 md:left-10 md:bottom-2 md:w-[400px] md:translate-x-0 lg:w-[500px] xl:left-14">
      <div className="relative z-10 flex w-full max-w-[900px] flex-col items-center text-center md:items-start md:gap-y-6 md:text-left">
        <HeroCursory />
        <HeroAction />
      </div>
    </article>
  )
}
