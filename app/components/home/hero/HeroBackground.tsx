import Image from 'next/image'

export default function HeroBackground() {
  return (
    <article>
      <Image
        src="/main/mainshown.svg"
        alt="mainshownimg"
        fill
        objectFit="cover"
        className="object-cover object-[70%] lg:object-contain"
        priority
      />
      <div className="absolute inset-0 from-black/60 to-transparent md:bg-gradient-to-r" />
      <div className="absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-black/100 to-transparent md:bg-gradient-to-t" />
    </article>
  )
}
