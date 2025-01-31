import Image from 'next/image'

export default function CursoryMovie() {
  return (
    <div className="flex flex-col items-center gap-y-4 md:items-start md:gap-y-6">
      <Image
        src="/main/nserieoriginal.svg"
        alt="nserieoriginallogo"
        width={257}
        height={64}
        className="w-[30vw] max-w-[80px] md:max-w-[130px] lg:max-w-[160px] xl:max-w-[180px] 2xl:max-w-[220px]"
        priority
      />
      <Image
        src="/main/showlogo.svg"
        alt="showlogo"
        width={878}
        height={242}
        className="w-[60vw] md:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[878px]"
        priority
      />

      <div className="flex items-center justify-center gap-3 md:hidden">
        <p>TV Mysteries </p>
        <Image
          src="/main/elliipse.svg"
          alt="elliipse"
          width={6}
          height={6}
          priority
        />
        <p>Based on Books</p>
      </div>

      <div className="flex flex-col items-center md:items-start md:gap-y-6">
        <div className="hidden items-center gap-2 md:flex">
          <Image
            src="/main/top10.svg"
            alt="top10"
            width={44}
            height={44}
            className="w-[3vw] max-w-[30px]"
            priority
          />
          <p className="font-bold md:text-2xl xl:text-3xl 2xl:text-[43px]">
            #1 in TV Shows Today
          </p>
        </div>
        <p className="hidden max-w-[90%] text-justify text-sm md:block md:max-w-[600px] md:text-lg xl:text-xl 2xl:max-w-[850px] 2xl:text-4xl">
          Determined to protect a young patient who escaped a mysterious cult, a
          psychiatrist takes the girl in, putting her own family — and life — in
          danger.
        </p>
      </div>
    </div>
  )
}
